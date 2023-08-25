package hac.controllers;

import hac.beans.ShoppingCart;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

/**
 * This class is used to configure beans for the application.
 * Beans are objects that are managed by the Spring framework.
 * The @Bean annotation tells Spring that the method should be used to create a bean.
 * The @SessionScope annotation tells Spring that the bean should be created once per session.
 * The ShoppingCart bean is used to store the items that the user has added to their shopping cart.
 */
@Configuration
public class BeanConfiguration {

    /**
     * This method creates a new ShoppingCart bean when the application starts.
     * @return a new ShoppingCart
     */
    @Bean
    @SessionScope
    public ShoppingCart shopCart() {
        return new ShoppingCart();
    }
}
