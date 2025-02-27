package br.com.ecommerce.ecommerce.repository;

import br.com.ecommerce.ecommerce.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
