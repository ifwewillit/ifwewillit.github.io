import { Button } from "../components/Button";

export function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow" style={{ textAlign: "center", padding: "var(--space-24) var(--space-8)" }}>
        <h1>404</h1>
        <p className="lede" style={{ margin: "var(--space-4) 0 var(--space-8)", color: "var(--text-muted)" }}>
          That page doesn't exist. Systems fail; good ones fail visibly.
        </p>
        <Button href="/">Back home</Button>
      </div>
    </section>
  );
}
