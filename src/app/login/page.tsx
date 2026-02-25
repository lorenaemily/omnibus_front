"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="container">

      {/* ── LADO ESQUERDO: apenas imagem ── */}
      <div className="left-panel">
        {/*
          Coloque sua imagem aqui.
          Descomente e troque o src:

          <Image
            src="/login-background.jpg"
            alt="Omnibus"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        */}
      </div>

      {/* ── LADO DIREITO: formulário ── */}
      <div className="right-panel">
        <div className="right-inner">

          {/* LOGIN título FORA da caixa, com linha amarela só embaixo da palavra */}
          <div className="title-block">
            <h1 className="title">LOGIN</h1>
            <div className="title-underline" />
          </div>

          {/* Caixa com sombra contendo os campos */}
          <div className="form-card">
            <form onSubmit={handleSubmit} noValidate>

              {/* Campo E-MAIL */}
              <div className="field">
                <label className="label">
                  E-MAIL <span className="dot">•</span>
                </label>
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Campo SENHA */}
              <div className="field">
                <label className="label">SENHA</label>
                <input
                  type="password"
                  className="input"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              {/* Link esqueceu senha */}
              <a href="#" className="forgot">
                Esqueceu sua senha?
              </a>

              {/* Botão ENTRAR */}
              <button type="submit" className="btn">
                ENTRAR
              </button>

            </form>
          </div>

        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ── Layout principal ──────────────────── */
        .container {
          display: flex;
          height: 100vh;
          width: 100%;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          overflow: hidden;
        }

        /* ── Lado esquerdo: espaço para imagem ── */
        .left-panel {
          flex: 1;
          position: relative;
          background: #0d2459;
          /* A imagem que você inserir via <Image fill> vai cobrir todo este espaço */
        }

        /* ── Lado direito: fundo branco ────────── */
        .right-panel {
          flex: 1;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 32px;
        }

        .right-inner {
          width: 100%;
          max-width: 340px;
        }

        /* ── Título LOGIN fora da caixa ────────── */
        .title-block {
          margin-bottom: 24px;
          display: inline-block;
        }

        .title {
          font-size: 30px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: 5px;
          text-transform: uppercase;
          line-height: 1;
        }

        /* Linha amarela apenas sob a palavra LOGIN */
        .title-underline {
          margin-top: 6px;
          height: 3px;
          width: 100%;
          background: #f1bb13;
          border-radius: 2px;
        }

        /* ── Caixa com sombra ──────────────────── */
        .form-card {
          background: #ffffff;
          border-radius: 6px;
          padding: 28px 24px 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
        }

        /* ── Campos ───────────────────────────── */
        .field {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .label {
          font-size: 11px;
          font-weight: 700;
          color: #333;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .dot {
          color: #e53935;
          font-size: 15px;
        }

        .input {
          width: 100%;
          height: 38px;
          border: 1.5px solid #d5d5d5;
          border-radius: 4px;
          padding: 0 10px;
          font-size: 14px;
          color: #222;
          background: #fff;
          outline: none;
          transition: border-color 0.2s;
        }

        .input:focus {
          border-color: #f1bb13;
        }

        /* ── Esqueceu senha ───────────────────── */
        .forgot {
          display: block;
          font-size: 12px;
          color: #777;
          text-decoration: none;
          margin-bottom: 20px;
          margin-top: -4px;
        }

        .forgot:hover {
          color: #333;
          text-decoration: underline;
        }

        /* ── Botão ENTRAR: amarelo, texto BRANCO ─ */
        .btn {
          width: 100%;
          height: 44px;
          background: #f1bb13;
          border: none;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #ffffff;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
        }

        .btn:hover {
          background: #dba900;
          transform: translateY(-1px);
        }

        .btn:active {
          transform: translateY(0);
          background: #c79800;
        }

        /* ── Responsividade ───────────────────── */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
            overflow: auto;
          }

          .left-panel {
            height: 220px;
            flex: none;
          }

          .right-panel {
            flex: 1;
            padding: 40px 24px;
          }
        }

        @media (max-width: 400px) {
          .right-panel {
            padding: 32px 16px;
          }

          .title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}