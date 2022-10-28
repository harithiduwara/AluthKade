package com.example.AluthKade.Controller;

import com.example.AluthKade.Entity.Item;
import com.example.AluthKade.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/item")
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping("/add")
    public Item addItem(@RequestBody Item item, HttpServletRequest httpServletRequest){
        return itemService.addItem(item);
    }

    @GetMapping("/{id}")
    public Optional<Item> getItem(@PathVariable Long Id){
        return itemService.getItem(Id);
    }

    @GetMapping
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteItem(@PathVariable Long Id){
        itemService.deleteItem(Id);
    }
}
