package com.proyecto.SPA.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="personas")
public class Persona{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="nombres", nullable=false)
	private String nombres;
	@Column(name="apellidos", nullable=false)
	private String apellidos;
	@Column(name="documento", nullable=false)
	private String documento;
	@Column(name="fechanacimiento", nullable=false)
	private Date fechanacimiento;
	@Column(name="email", nullable=false)
	private String email;
	@Column(name="telefono", nullable=false)
	private long telefono;
	@Column(name="usuario", nullable=false)
	private String usuario;
	@Column(name="password", nullable=false)
	private String password;
	
	@ManyToOne(cascade = CascadeType.MERGE, optional = false, fetch = FetchType.LAZY)
	@JoinColumn(name = "id_ciudad")
	private Ciudad ciudad;
	
	@ManyToOne(cascade = CascadeType.MERGE, optional = false, fetch = FetchType.LAZY)
	@JoinColumn(name = "id_tipo_documento")
	private Tipo_documento tipo_documento;
	
	public Persona() {
		
	}
	
	public Persona(String nombres, String apellidos, String documento, Date fechanacimiento, String email, long telefono, String usuario, String password, Ciudad ciudad, Tipo_documento tipo_documento) {
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.documento = documento;
		this.fechanacimiento = fechanacimiento;
		this.email = email;
		this.telefono = telefono;
		this.usuario = usuario;
		this.password = password;
		this.ciudad = ciudad;
		this.tipo_documento = tipo_documento;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public Date getFechanacimiento() {
		return fechanacimiento;
	}

	public void setFechanacimiento(Date fechanacimiento) {
		this.fechanacimiento = fechanacimiento;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getTelefono() {
		return telefono;
	}

	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Ciudad getCiudad() {
		return ciudad;
	}

	public void setCiudad(Ciudad ciudad) {
		this.ciudad = ciudad;
	}

	public Tipo_documento getTipo_documento() {
		return tipo_documento;
	}

	public void setTipo_documento(Tipo_documento tipo_documento) {
		this.tipo_documento = tipo_documento;
	}
	

}
