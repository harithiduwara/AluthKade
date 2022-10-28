package com.example.AluthKade.Service;

import com.example.AluthKade.Entity.Item;
import com.example.AluthKade.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long Id) {
        itemRepository.deleteById(Id);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItem(Long id) {
        return itemRepository.findById(id);
    }
}
