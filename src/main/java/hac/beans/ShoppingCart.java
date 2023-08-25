package hac.beans;

import org.springframework.stereotype.Component;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;

/**
 * This class is a bean that represents a shopping cart.
 * It is a session scoped bean, so it will be created once per session.
 */
@Component
public class ShoppingCart implements Serializable {

    /**
     * The list of products in the shopping cart.
     */
    private ArrayList<Product> products;

    /**
     * This is a lock for the shopping cart.
     */
    final Object lock = new Object();

    /**
     * This is a serial version UID for this class.
     */
    @Serial
    private final static long serialVersionUID = 123L;

    /**
     * Constructor for the shopping cart.
     */
    public ShoppingCart() {
        this.products = new ArrayList<Product>();
    }

    /**
     * This method adds a product to the shopping cart.
     *
     * @param product The product to add to the shopping cart.
     * @return The product that was added to the shopping cart.
     */
    public Product addProduct(Product product) {
        synchronized (lock) {
            // If the product is already in the shopping cart, increment the count.
            Product find = products.stream()
                    .filter(prod -> prod.getId().equals(product.getId()))
                    .findAny()
                    .orElse(null);
            return find != null ? find.setCount() : products.add(product) ? product : null;
        }
    }

    /**
     * This method sets the list of products in the shopping cart.
     *
     * @param products The list of products to set in the shopping cart.
     */
    public void setProducts(ArrayList<Product> products) {
        synchronized (lock) {
            this.products = products;
        }
    }

    /**
     * This method removes a product from the shopping cart.
     *
     * @param productId The product id to remove from the shopping cart.
     */
    public void removeProduct(String productId) {
        synchronized (lock) {
            products.stream()
                    .filter(prod -> prod.getId().equals(productId))
                    .findAny().ifPresent(find -> this.products.remove(find));
        }
    }

    /**
     * This method gets the list of products in the shopping cart.
     *
     * @return The list of products in the shopping cart.
     */
    public ArrayList<Product> getShoppingCart() {
        synchronized (lock) {
            return products;
        }
    }

    /**
     * This method clears the shopping cart.
     */
    public void clearCart() {
        synchronized (lock) {
            products.clear();
        }
    }
}
