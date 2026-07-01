"use client";

import Link from "next/link";
import { useState } from "react";
import { demoUser } from "@/data/seed";
import { User } from "@/types";

export default function AuthPage() {
  const [user, setUser] = useState<User | null>(null);

  function demoLogin() {
    const nextUser: User = {
      id: demoUser.id,
      name: demoUser.name,
      email: demoUser.email,
      role: demoUser.role
    };
    localStorage.setItem("sahmx_access_token", "demo.jwt.token");
    setUser(nextUser);
  }

  function logout() {
    localStorage.removeItem("sahmx_access_token");
    setUser(null);
  }

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <div className="auth-box glass" style={{ padding: 24, maxWidth: 760, margin: "auto" }}>
        <span className="pill">JWT Auth + RBAC + Demo Mode</span>
        <h1>تسجيل الدخول إلى SAHMX OS</h1>
        <p className="lead">واجهة جاهزة للربط مع FastAPI. في وضع demo يتم حفظ token تجريبي محليًا.</p>
        <div className="form-grid">
          <div className="field"><label>البريد</label><input defaultValue={demoUser.email} /></div>
          <div className="field"><label>كلمة المرور</label><input type="password" defaultValue={demoUser.password} /></div>
          <div className="field"><label>الدور</label><select><option>Owner</option><option>Admin</option><option>Analyst</option><option>Viewer</option></select></div>
          <div className="field"><label>الشركة</label><input defaultValue="SAHM X Labs" /></div>
        </div>
        <div className="toolbar">
          <button className="btn" onClick={demoLogin}>Demo login</button>
          <button className="btn secondary" onClick={logout}>Logout</button>
          <Link className="btn secondary" href="/dashboard/overview">الدخول للداشبورد</Link>
        </div>
        {user && <p className="muted">تم تسجيل الدخول كـ {user.name} — {user.role}</p>}
      </div>
    </main>
  );
}
