package com.br.ecommerce.DTO;

public enum UserRoleDTO {
    ADMIN("admin"),
    USER("user");

    private String role;

    UserRoleDTO(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}
