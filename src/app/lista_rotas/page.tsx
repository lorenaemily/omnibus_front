"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRoutes } from "@/hooks/useRoutes";

function BusIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="14" rx="2"/><path d="M2 9h20"/><circle cx="7" cy="20" r="2" fill={color} stroke={color}/><circle cx="17" cy="20" r="2" fill={color} stroke={color}/><path d="M5 18h14"/>
    </svg>
  );
}

function RouteIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}

function DriverIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

const css = `
  .rt-page { min-height: 100vh; background: #f9f9f9; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; display: flex; }

  /* SIDEBAR */
  .rt-sidebar { width: 220px; background: #01233F; display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; }
  .rt-sidebar-logo { padding: 24px 24px 20px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 10px; }
  .rt-logo-icon { width: 34px; height: 34px; background: #f1bb13; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .rt-logo-text { font-size: 17px; font-weight: 700; color: #fff; letter-spacing: -0.3px; }
  .rt-logo-sub { font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 1px; text-transform: uppercase; font-weight: 400; margin-top: 1px; }
  .rt-sidebar-nav { flex: 1; padding: 20px 12px; display: flex; flex-direction: column; gap: 2px; }
  .rt-nav-label { font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.3); letter-spacing: 1.2px; text-transform: uppercase; padding: 0 12px; margin: 14px 0 6px; }
  .rt-nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.55); cursor: pointer; border: none; background: none; width: 100%; text-align: left; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; transition: all 0.15s; }
  .rt-nav-item:hover { background: rgba(255,255,255,0.07); color: #fff; }
  .rt-nav-item.active { background: #f1bb13; color: #01233F; font-weight: 600; }
  .rt-sidebar-footer { padding: 16px 12px; border-top: 1px solid rgba(255,255,255,0.08); }
  .rt-user-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; cursor: pointer; border: none; background: none; width: 100%; text-align: left; transition: background 0.15s; }
  .rt-user-row:hover { background: rgba(255,255,255,0.07); }
  .rt-avatar { width: 32px; height: 32px; background: #f1bb13; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #01233F; flex-shrink: 0; }
  .rt-user-name { font-size: 13px; font-weight: 600; color: #fff; }
  .rt-user-role { font-size: 11px; color: rgba(255,255,255,0.4); }

  /* CONTENT */
  .rt-content-wrap { margin-left: 220px; flex: 1; display: flex; flex-direction: column; min-height: 100vh; }

  /* TOPBAR */
  .rt-navbar { background: #fff; border-bottom: 1px solid #e2e6ea; padding: 0 36px; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
  .rt-topbar-title { font-size: 16px; font-weight: 600; color: #01233F; }
  .rt-topbar-sub { font-size: 12px; color: #6b7a8d; margin-top: 1px; font-weight: 400; }
  .rt-nav-right { display: flex; align-items: center; gap: 10px; }
  .rt-icon-btn { width: 38px; height: 38px; border-radius: 8px; border: 1px solid #e2e6ea; background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #01233F; transition: all 0.15s; position: relative; }
  .rt-icon-btn:hover { background: #f0f2f5; }
  .rt-notif-dot { position: absolute; top: 7px; right: 7px; width: 7px; height: 7px; background: #ef4444; border-radius: 50%; border: 1.5px solid #fff; }

  /* MAIN */
  .rt-main { padding: 32px 40px; }
  .rt-content { width: 100%; }

  /* TOP BAR */
  .rt-top-bar { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; flex-wrap: wrap; width: 100%; }
  .rt-title { font-size: 16px; font-weight: 900; color: #1a1a1a; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; margin: 0; }
  .rt-search-wrap { display: flex; align-items: center; background: #fff; border: 1.5px solid #e0e0e0; border-radius: 4px; padding: 0 12px; height: 38px; flex: 1; min-width: 180px; gap: 8px; }
  .rt-search-input { border: none; outline: none; font-size: 13px; color: #333; width: 100%; background: transparent; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }
  .rt-search-input::placeholder { color: #aaa; }
  .rt-btn-cadastrar { background: #f1bb13; border: none; border-radius: 4px; padding: 0 22px; height: 38px; font-size: 13px; font-weight: 900; letter-spacing: 1.5px; color: #fff; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: background 0.15s; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }
  .rt-btn-cadastrar:hover { background: #dba900; }

  /* TABELA */
  .rt-table-wrap { width: 100%; overflow-x: auto; border-radius: 4px; }
  .rt-table { width: 100%; border-collapse: collapse; }
  .rt-table thead tr { background: #01233F; }
  .rt-table thead th { color: #fff; font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 14px 18px; text-align: left; }
  .rt-table tbody tr { border-bottom: 1px solid #e8e8e8; background: #fff; }
  .rt-table tbody tr:hover { background: #fafafa; }
  .rt-table tbody td { padding: 14px 18px; font-size: 13px; color: #333; }
  .rt-td-bold { font-weight: 800; color: #1a1a1a; text-transform: uppercase; font-size: 12px; }
  .rt-td-time { font-weight: 600; color: #444; font-size: 13px; }
  .rt-td-ops { display: flex; align-items: center; gap: 14px; }
  .rt-btn-mapa { background: none; border: none; cursor: pointer; font-size: 12px; font-weight: 800; color: #0066cc; letter-spacing: 0.5px; text-transform: uppercase; padding: 0; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; transition: opacity 0.15s; }
  .rt-btn-mapa:hover { opacity: 0.7; }
  .rt-btn-excluir { background: none; border: none; cursor: pointer; font-size: 12px; font-weight: 800; color: #c0392b; letter-spacing: 0.5px; text-transform: uppercase; padding: 0; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; transition: opacity 0.15s; }
  .rt-btn-excluir:hover { opacity: 0.7; }
  .rt-btn-editar { background: none; border: none; cursor: pointer; font-size: 12px; font-weight: 800; color: #333; letter-spacing: 0.5px; text-transform: uppercase; padding: 0; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; transition: opacity 0.15s; }
  .rt-btn-editar:hover { opacity: 0.6; }
  .rt-feedback { text-align: center; font-size: 14px; padding: 48px 0; color: #aaa; }
  .rt-feedback.error { color: #c0392b; }

  @media (max-width: 900px) {
    .rt-sidebar { display: none; }
    .rt-content-wrap { margin-left: 0; }
    .rt-main { padding: 20px 16px; }
    .rt-top-bar { flex-direction: column; align-items: flex-start; }
    .rt-search-wrap { width: 100%; }
  }
`;

export default function RotasCadastradasPage() {
  const router = useRouter();
  const { routes, loading, error, deleteRoute } = useRoutes();
  const [search, setSearch] = useState("");

  const filtered = routes.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.start_point.toLowerCase().includes(search.toLowerCase()) ||
      r.end_point.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta rota?")) return;
    try {
      await deleteRoute(id);
    } catch {
      alert("Erro ao excluir rota. Tente novamente.");
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/editRota?id=${id}`);
  };

  const handleViewMap = (id: number) => {
    router.push(`/visualizar_rota?id=${id}`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="rt-page">

        {/* SIDEBAR */}
        <aside className="rt-sidebar">
          <div className="rt-sidebar-logo">
            <div className="rt-logo-icon"><BusIcon size={18} color="#01233F" /></div>
            <div><div className="rt-logo-text">Omnibus</div><div className="rt-logo-sub">Gestão Escolar</div></div>
          </div>
          <nav className="rt-sidebar-nav">
            <span className="rt-nav-label">Principal</span>
            <button className="rt-nav-item" onClick={() => router.push("/dashboard")}><DashIcon /> Dashboard</button>
            <button className="rt-nav-item" onClick={() => router.push("/visualizar_gastos")}><FinanceIcon /> Financeiro</button>
            <span className="rt-nav-label">Cadastros</span>
            <button className="rt-nav-item" onClick={() => router.push("/lista_onibus")}><BusIcon size={17} /> Ônibus</button>
            <button className="rt-nav-item active"><RouteIcon size={17} /> Rotas</button>
            <button className="rt-nav-item" onClick={() => router.push("/lista_motoristas")}><DriverIcon size={17} /> Motoristas</button>
          </nav>
          <div className="rt-sidebar-footer">
            <button className="rt-user-row" onClick={() => router.push("/infor_instituicao")}>
              <div className="rt-avatar">A</div>
              <div><div className="rt-user-name">Admin</div><div className="rt-user-role">Gestor</div></div>
            </button>
          </div>
        </aside>

        <div className="rt-content-wrap">
          {/* NAVBAR */}
          <header className="rt-navbar">
            <div>
              <div className="rt-topbar-title">Rotas</div>
              <div className="rt-topbar-sub">Rotas cadastradas no sistema</div>
            </div>
            <div className="rt-nav-right">
              <button className="rt-icon-btn" onClick={() => router.push("/notifications")}>
                <BellIcon /><span className="rt-notif-dot" />
              </button>
              <button className="rt-icon-btn" onClick={() => router.push("/infor_instituicao")}>
                <UserIcon />
              </button>
            </div>
          </header>

          {/* MAIN */}
          <main className="rt-main">
            <div className="rt-content">
              <div className="rt-top-bar">
                <h2 className="rt-title">ROTAS CADASTRADAS</h2>
                <div className="rt-search-wrap">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    className="rt-search-input"
                    placeholder="Procurar rota..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button className="rt-btn-cadastrar" onClick={() => router.push("/cadastro_rota")}>CADASTRAR ROTAS</button>
                <button className="rt-btn-cadastrar" onClick={() => router.push("/lista_escolas")}>GERENCIAR ESCOLAS</button>
              </div>

              <div className="rt-table-wrap">
                <table className="rt-table">
                  <thead>
                    <tr>
                      <th>NOME DA ROTA</th>
                      <th>PARADA INICIAL</th>
                      <th>ÚLTIMA PARADA</th>
                      <th>HORÁRIO DE SAÍDA</th>
                      <th>AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={5} className="rt-feedback">Carregando rotas...</td></tr>
                    ) : error ? (
                      <tr><td colSpan={5} className="rt-feedback error">{error}</td></tr>
                    ) : filtered.length === 0 ? (
                      <tr><td colSpan={5} className="rt-feedback">Nenhuma rota encontrada.</td></tr>
                    ) : (
                      filtered.map((r) => (
                        <tr key={r.id}>
                          <td className="rt-td-bold">{r.name}</td>
                          <td className="rt-td-bold">{r.start_point}</td>
                          <td className="rt-td-bold">{r.end_point}</td>
                          <td className="rt-td-time">{r.departure_time}</td>
                          <td className="rt-td-ops">
                            <button className="rt-btn-mapa" onClick={() => handleViewMap(r.id)}>MAPA</button>
                            <button className="rt-btn-excluir" onClick={() => handleDelete(r.id)}>EXCLUIR</button>
                            <button className="rt-btn-editar" onClick={() => handleEdit(r.id)}>EDITAR</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}