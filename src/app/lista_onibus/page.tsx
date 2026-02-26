"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Vehicle = {
  id: number;
  plate: string;
  capacity: number;
  mainRute: string;
  drivers_id: number;
  driverName: string;
};

const mockVehicles: Vehicle[] = [
  { id: 1, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 2, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 3, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 4, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 5, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 6, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 7, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
  { id: 8, plate: "240409CP", capacity: 60, mainRute: "POÇO REDONDO", drivers_id: 1, driverName: "José Bonifácio" },
];

export default function OnibusCadastradosPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);

  const filtered = vehicles.filter(
    (v) =>
      v.plate.toLowerCase().includes(search.toLowerCase()) ||
      v.mainRute.toLowerCase().includes(search.toLowerCase()) ||
      v.driverName.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleEdit = (id: number) => {
    router.push(`/onibus/editar/${id}`);
  };

  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-links">
          <button onClick={() => router.push("/dashboard")} className="nav-link">DASHBOARD</button>
          <button onClick={() => router.push("/financeiro")} className="nav-link">FINANCEIRO</button>
        </div>
        <div className="nav-right">
          <button className="icon-btn notif-icon-btn" title="Notificações" onClick={() => router.push("/notificacoes")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#01233F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <button className="icon-btn user-icon-btn" title="Usuário" onClick={() => router.push("/perfil")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </nav>

      <main className="main">
        <div className="top-bar">
          <h2 className="page-title">ÔNIBUS CADASTRADOS</h2>
          <div className="search-wrap">
            <svg className="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Procurar ônibus..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="btn-cadastrar" onClick={() => router.push("/onibus/cadastrar")}>
            CADASTRAR ÔNIBUS
          </button>
        </div>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>ROTA PRINCIPAL</th>
                <th>CAPACIDADE</th>
                <th>PLACA</th>
                <th>MOTORISTA PRINCIPAL</th>
                <th>OPERAÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="empty">Nenhum ônibus encontrado.</td>
                </tr>
              ) : (
                filtered.map((v) => (
                  <tr key={v.id}>
                    <td className="td-bold">{v.mainRute}</td>
                    <td className="td-bold">{v.capacity} ALUNOS</td>
                    <td className="td-bold">{v.plate}</td>
                    <td className="td-driver">{v.driverName}</td>
                    <td className="td-ops">
                      <button className="btn-excluir" onClick={() => handleDelete(v.id)}>EXCLUIR</button>
                      <button className="btn-editar" onClick={() => handleEdit(v.id)}>EDITAR</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          min-height: 100vh;
          background: #ffffff;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        /* NAVBAR */
        .navbar {
          width: 100%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          height: 56px;
          border-bottom: 1px solid #e0e0e0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 13px;
          font-weight: 700;
          color: #01233F;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .nav-link:hover { color: #f1bb13; }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: background 0.15s;
          padding: 0;
        }

        .notif-icon-btn { background: none; width: 34px; height: 34px; }
        .notif-icon-btn:hover { background: #f5f5f5; }

        .user-icon-btn { background: #01233F; width: 34px; height: 34px; }
        .user-icon-btn:hover { background: #013560; }

        /* MAIN */
        .main {
          padding: 32px 40px;
        }

        .top-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .page-title {
          font-size: 16px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .search-wrap {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1.5px solid #e0e0e0;
          border-radius: 4px;
          padding: 0 12px;
          height: 38px;
          flex: 1;
          min-width: 200px;
          max-width: 380px;
          gap: 8px;
        }

        .search-icon { flex-shrink: 0; }

        .search-input {
          border: none;
          outline: none;
          font-size: 13px;
          color: #333;
          width: 100%;
          background: transparent;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .search-input::placeholder { color: #aaa; }

        .btn-cadastrar {
          background: #f1bb13;
          border: none;
          border-radius: 4px;
          padding: 0 22px;
          height: 38px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #fff;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .btn-cadastrar:hover { background: #dba900; }

        /* TABLE */
        .table-wrap {
          width: 100%;
          overflow-x: auto;
          border-radius: 4px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table thead tr {
          background: #01233F;
        }

        .table thead th {
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 14px 18px;
          text-align: left;
        }

        .table tbody tr {
          border-bottom: 1px solid #e8e8e8;
          background: #fff;
        }

        .table tbody tr:hover {
          background: #fafafa;
        }

        .table tbody td {
          padding: 14px 18px;
          font-size: 13px;
          color: #333;
        }

        .td-bold {
          font-weight: 800;
          color: #1a1a1a;
          text-transform: uppercase;
          font-size: 12px;
        }

        .td-driver {
          font-weight: 500;
          color: #444;
        }

        .td-ops {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .btn-excluir {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 800;
          color: #c0392b;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          transition: opacity 0.15s;
        }

        .btn-excluir:hover { opacity: 0.7; }

        .btn-editar {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 800;
          color: #333;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          transition: opacity 0.15s;
        }

        .btn-editar:hover { opacity: 0.6; }

        .empty {
          text-align: center;
          color: #aaa;
          font-size: 14px;
          padding: 32px !important;
        }

        @media (max-width: 700px) {
          .main { padding: 20px 16px; }
          .top-bar { flex-direction: column; align-items: flex-start; }
          .search-wrap { max-width: 100%; width: 100%; }
        }
      `}</style>
    </div>
  );
}