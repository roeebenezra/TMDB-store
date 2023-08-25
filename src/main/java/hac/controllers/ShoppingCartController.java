package hac.controllers;

import hac.beans.Product;
import hac.beans.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * Controller for the shopping cart.
 * This controller is responsible for handling requests for the shopping cart.
 */
@RestController
@RequestMapping("/shopping-cart")
public class ShoppingCartController {

    /**
     * The shopping cart.
     * This is a session-scoped bean, so it will be unique for each user.
     */
    @Autowired
    private ShoppingCart shopCart;

    /**
     * Gets the shopping cart.
     * @return The shopping cart.
     */
    @GetMapping("")
    public ArrayList<Product> getCart() {
        return shopCart.getShoppingCart(); // Return the shopping cart.
    }

    /**
     * Gets the shopping cart size.
     * @return The shopping cart size.
     */
    @GetMapping("/size")
    public int getCartSize() {
        return shopCart.getShoppingCart().size(); // Return the shopping cart size.
    }

    /**
     * Adds a product to the shopping cart.
     * @param product The product to add.
     * @return The product that was added.
     */
    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return shopCart.addProduct(product);
    }

    /**
     * Removes a product from the shopping cart.
     * @param productId The product id to remove.
     * @return The shopping cart.
     */
    @DeleteMapping("/remove/{id}")
    public ArrayList<Product> removeProduct(@PathVariable("id") String productId) {
        shopCart.removeProduct(productId);
        return shopCart.getShoppingCart();
    }

    /**
     * Clears the shopping cart.
     * @return The shopping cart.
     */
    @DeleteMapping("/clear")
    public ArrayList<Product> clearCart() {
        shopCart.clearCart();
        return shopCart.getShoppingCart();
    }
}
