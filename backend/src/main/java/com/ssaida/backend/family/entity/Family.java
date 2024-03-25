package com.ssaida.backend.family.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.drawing.entity.Drawing;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@ToString(of = {"id","email","pw","refreshToken"})
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Family extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String email;
	private String pw;
	private String refreshToken;

	@OneToMany(mappedBy = "family", fetch = FetchType.LAZY)
	private List<Member> members = new ArrayList<>();

	@Builder
	public Family(int id, String email, String pw) {
		this.id = id;
		this.email = email;
		this.pw = pw;
	}

	public void updateRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
}
