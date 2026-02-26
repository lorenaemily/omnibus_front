"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

const planos = [
  {
    id: "basico",
    nome: "PLANO BÁSICO",
    descricao: "Plano focado em pequenas escolas ou secretarias com poucas rotas",
    capacidade: "Capacidade de até 5 veículos",
    preco: "R$ 199,00",
  },
  {
    id: "profissional",
    nome: "PLANO PROFISSIONAL",
    descricao: "Plano focado em secretarias de pequeno a médio porte.",
    capacidade: "Capacidade de até 15 veículos",
    preco: "R$ 399,00",
  },
  {
    id: "profissional-plus",
    nome: "PLANO PROFISSIONAL",
    descricao: "Plano focado em secretarias de grande porte.",
    capacidade: "Capacidade de até 40 veículos",
    preco: "R$ 699,00",
  },
  {
    id: "internacional",
    nome: "PLANO INTERNACIONAL",
    descricao: "Exclusivo para grandes cidades ou contratos estaduais",
    capacidade: "Capacidade de frota ilimitada",
    preco: "R$ 1200,00",
  },
];

export default function OmnibusPlanos() {
  const router = useRouter();
  const [selecionado, setSelecionado] = useState("basico");

  return (
    <main
      className={montserrat.className}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 60% 40%, #0d1b3e 0%, #060d1f 60%, #030810 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 32px",
        gap: "40px",
      }}
    >
      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {planos.map((plano) => {
          const ativo = selecionado === plano.id;
          return (
            <div
              key={plano.id}
              onClick={() => setSelecionado(plano.id)}
              style={{
                width: "300px",
                minHeight: "520px",
                background: ativo ? "#d6eaff" : "#fff",
                border: ativo ? "2px solid #4a90d9" : "2px solid #ddd",
                borderRadius: "14px",
                padding: "48px 32px 56px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                transition: "all 0.2s",
                boxShadow: ativo
                  ? "0 4px 20px rgba(74,144,217,0.3)"
                  : "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              {/* Radio */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: ativo ? "2px solid #4a90d9" : "2px solid #aaa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {ativo && (
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#4a90d9",
                    }}
                  />
                )}
              </div>

              {/* Nome */}
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: ativo ? "#1a2b6d" : "#222",
                  margin: 0,
                  textDecoration: "underline",
                  letterSpacing: "0.02em",
                  lineHeight: 1.3,
                }}
              >
                {plano.nome}
              </h2>

              {/* Descrição */}
              <p
                style={{
                  fontSize: "15px",
                  color: ativo ? "#1a2b6d" : "#444",
                  margin: 0,
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                {plano.descricao}
              </p>

              {/* Capacidade */}
              <p
                style={{
                  fontSize: "15px",
                  color: ativo ? "#1a5fa8" : "#555",
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {plano.capacidade}
              </p>

              {/* Preço */}
              <div style={{ marginTop: "16px" }}>
                <p
                  style={{
                    fontSize: "38px",
                    fontWeight: 800,
                    color: ativo ? "#1a2b6d" : "#222",
                    margin: "0 0 6px 0",
                    lineHeight: 1,
                  }}
                >
                  {plano.preco}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: ativo ? "#1a5fa8" : "#777",
                    margin: 0,
                    letterSpacing: "0.08em",
                  }}
                >
                  POR MÊS
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botão Avançar */}
      <div
        style={{
          width: "100%",
          maxWidth: "1296px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={() => router.push("/dashboard")}
          style={{
            background: "#f5a623",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "18px 56px",
            cursor: "pointer",
            transition: "background 0.2s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#e09510")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#f5a623")
          }
        >
          AVANÇAR
        </button>
      </div>
    </main>
  );
}