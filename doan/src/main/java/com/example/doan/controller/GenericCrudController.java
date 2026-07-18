package com.example.doan.controller;

import com.example.doan.model.TableDefinition;
import com.example.doan.service.GenericTableService;
import com.example.doan.service.TableConfig;
import jakarta.servlet.http.HttpSession;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;

@Controller
@RequestMapping("/{route}")
public class GenericCrudController {
    private final TableConfig tableConfig;
    private final GenericTableService tableService;

    private final Set<String> employeeRoutes = Set.of(
            "lich-chay",
            "ghe",
            "loai-ve",
            "khach-hang",
            "dat-ve",
            "chi-tiet-ghe-dat",
            "thanh-toan",
            "huy-ve",
            "sua-ve",
            "yeu-cau-huy-ve"
    );

    public GenericCrudController(TableConfig tableConfig, GenericTableService tableService) {
        this.tableConfig = tableConfig;
        this.tableService = tableService;
    }

    private void addTableViewAttributes(Model model, TableDefinition table, List<Map<String, Object>> rows) {
        Map<String, String> columnLabels = new LinkedHashMap<>();
        for (String col : table.getColumns()) {
            columnLabels.put(col, table.getColumnLabel(col));
        }

        List<Map<String, Object>> displayItems = new ArrayList<>();
        for (Map<String, Object> row : rows) {
            Map<String, Object> displayRow = new LinkedHashMap<>(row);
            for (String col : table.getColumns()) {
                displayRow.put(col, table.formatValue(col, row.get(col)));
            }
            // Giữ lại mã gốc để link sửa/xóa không bị ảnh hưởng bởi định dạng hiển thị.
            displayRow.put("__id", row.get(table.getIdColumn()));
            displayItems.add(displayRow);
        }

        model.addAttribute("table", table);
        model.addAttribute("columnLabels", columnLabels);
        model.addAttribute("items", displayItems);
    }

    private void addFormAttributes(Model model, TableDefinition table) {
        Map<String, String> columnLabels = new LinkedHashMap<>();
        for (String col : table.getColumns()) {
            columnLabels.put(col, table.getColumnLabel(col));
        }
        model.addAttribute("table", table);
        model.addAttribute("columnLabels", columnLabels);
    }

    private boolean isAdmin(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "ADMIN".equalsIgnoreCase(role.toString());
    }

    private boolean isEmployee(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "NHANVIEN".equalsIgnoreCase(role.toString());
    }

    private boolean canAccess(String route, HttpSession session) {
        if (isAdmin(session)) {
            return true;
        }

        return isEmployee(session) && employeeRoutes.contains(route);
    }

    private String denyRedirect(HttpSession session) {
        Object role = session.getAttribute("role");

        if (role == null) {
            return "redirect:/login";
        }

        if ("NHANVIEN".equalsIgnoreCase(role.toString())) {
            return "redirect:/nhan-vien-dashboard";
        }

        return "redirect:/mua-ve";
    }

    private String renderList(String route, Model model, HttpSession session) {
        if (!canAccess(route, session)) {
            return denyRedirect(session);
        }

        try {
            TableDefinition table = tableConfig.getByRoute(route);

            addTableViewAttributes(model, table, tableService.findAll(table));
            model.addAttribute("username", session.getAttribute("username"));

            return "list";
        } catch (DataAccessException | IllegalArgumentException ex) {
            model.addAttribute("error", "Không tải được dữ liệu: " + ex.getMessage());
            model.addAttribute("items", Collections.emptyList());
            model.addAttribute("username", session.getAttribute("username"));

            return "list";
        }
    }

    @GetMapping
    public String list(@PathVariable String route, Model model, HttpSession session) {
        return renderList(route, model, session);
    }

    /*
     * Cho phép link cũ /admin/yeu-cau-huy-ve vẫn chạy được.
     * Nếu trong index.html đang dùng /admin/yeu-cau-huy-ve thì không cần đổi.
     */
    @GetMapping("/yeu-cau-huy-ve")
    public String adminYeuCauHuyVe(@PathVariable String route,
                                   Model model,
                                   HttpSession session) {
        if (!"admin".equalsIgnoreCase(route)) {
            return renderList(route, model, session);
        }

        return renderList("yeu-cau-huy-ve", model, session);
    }

    @GetMapping("/them")
    public String add(@PathVariable String route, Model model, HttpSession session) {
        if (!canAccess(route, session)) {
            return denyRedirect(session);
        }

        TableDefinition table = tableConfig.getByRoute(route);

        addFormAttributes(model, table);
        model.addAttribute("item", new LinkedHashMap<String, Object>());
        model.addAttribute("username", session.getAttribute("username"));

        return "form";
    }

    @GetMapping("/sua/{id}")
    public String edit(@PathVariable String route,
                       @PathVariable String id,
                       Model model,
                       HttpSession session) {
        if (!canAccess(route, session)) {
            return denyRedirect(session);
        }

        TableDefinition table = tableConfig.getByRoute(route);

        addFormAttributes(model, table);
        model.addAttribute("item", tableService.findById(table, id));
        model.addAttribute("username", session.getAttribute("username"));

        return "form";
    }

    @PostMapping("/luu")
    public String save(@PathVariable String route,
                       @RequestParam Map<String, String> data,
                       RedirectAttributes redirectAttributes,
                       HttpSession session) {
        if (!canAccess(route, session)) {
            return denyRedirect(session);
        }

        TableDefinition table = tableConfig.getByRoute(route);

        try {
            tableService.save(table, data);
            redirectAttributes.addFlashAttribute("success", "Lưu dữ liệu thành công");
        } catch (DataAccessException | IllegalArgumentException ex) {
            redirectAttributes.addFlashAttribute("error", "Không lưu được dữ liệu: " + ex.getMessage());
        }

        return "redirect:/" + route;
    }

    @GetMapping("/xoa/{id}")
    public String delete(@PathVariable String route,
                         @PathVariable String id,
                         RedirectAttributes redirectAttributes,
                         HttpSession session) {
        if (!canAccess(route, session)) {
            return denyRedirect(session);
        }

        TableDefinition table = tableConfig.getByRoute(route);

        try {
            tableService.delete(table, id);
            redirectAttributes.addFlashAttribute("success", "Xóa dữ liệu thành công");
        } catch (DataAccessException ex) {
            redirectAttributes.addFlashAttribute("error", "Không xóa được vì dữ liệu đang được bảng khác sử dụng.");
        }

        return "redirect:/" + route;
    }
}