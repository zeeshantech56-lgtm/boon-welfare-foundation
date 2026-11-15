import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, MapPin, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfSummitBannerModalProps {
  summitUrl?: string;
}

export function ProfSummitBannerModal({
  summitUrl = "https://prof-summit-2026.vercel.app",
}: ProfSummitBannerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key and restore focus
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Move focus into the modal close button
      window.setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      // Restore focus to trigger button
      triggerRef.current?.focus();
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus trap inside the modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  return (
    <>
      {/* Sticky Announcement Banner */}
      {bannerVisible && (
        <aside
          role="complementary"
          aria-label="Upcoming conference announcement"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            background: "linear-gradient(90deg, #1f0438 0%, #2d0852 50%, #1f0438 100%)",
            color: "#ffffff",
            borderBottom: "2px solid #ffeb3b",
            padding: "9px 16px",
            fontSize: "13px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src="/images/prof-summit-logo.png"
                alt="Prof Summit Logo"
                style={{ height: 22, width: "auto", objectFit: "contain" }}
              />
              <span
                style={{
                  background: "#ffeb3b",
                  color: "#1f0438",
                  fontWeight: 900,
                  fontSize: "10px",
                  padding: "3px 8px",
                  borderRadius: 2,
                  letterSpacing: "0.1em",
                }}
              >
                UPCOMING
              </span>
              <span>
                <strong>PROF SUMMIT ’26</strong> · 20 Dec 2026, Indore · <em>Character to Career</em>
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
              <button
                ref={triggerRef}
                onClick={() => setIsOpen(true)}
                style={{
                  background: "#ffeb3b",
                  color: "#1f0438",
                  border: 0,
                  padding: "5px 14px",
                  borderRadius: 2,
                  fontWeight: 800,
                  fontSize: "12px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                View Details & Speakers <ArrowRight size={13} />
              </button>
              <button
                onClick={() => setBannerVisible(false)}
                aria-label="Dismiss banner"
                style={{
                  background: "transparent",
                  border: 0,
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  padding: "4px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Accessible Modal Popup */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="summit-modal-title"
          onClick={() => setIsOpen(false)} // Outside click closes
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(10, 0, 20, 0.8)",
            backdropFilter: "blur(4px)",
            display: "grid",
            placeItems: "center",
            padding: "16px",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()} // Prevent inside click from closing
            style={{
              background: "#1f0438",
              color: "#ffffff",
              border: "2px solid #ffeb3b",
              borderRadius: "6px",
              maxWidth: "580px",
              width: "100%",
              padding: "clamp(24px, 5vw, 36px)",
              position: "relative",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 235, 59, 0.15)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              aria-label="Close dialog"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(255,255,255,0.1)",
                border: 0,
                color: "#ffeb3b",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#ffeb3b", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", marginBottom: 12 }}>
              <Sparkles size={14} />
              <span>THE BOON WELFARE FOUNDATION PRESENTS</span>
            </div>

            {/* Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 8px 0" }}>
              <img
                src="/images/prof-summit-logo.png"
                alt="Prof Summit Logo"
                style={{ height: 44, width: "auto", objectFit: "contain" }}
              />
              <h2
                id="summit-modal-title"
                style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "clamp(26px, 4.5vw, 36px)",
                  lineHeight: 1.1,
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                PROF SUMMIT ’26
              </h2>
            </div>
            <p style={{ color: "#ffeb3b", fontSize: "15px", fontWeight: 700, margin: "0 0 16px 0" }}>
              A Complete Guidance from Character to Career
            </p>

            <p style={{ fontSize: "13px", lineHeight: 1.6, opacity: 0.85, margin: "0 0 20px 0" }}>
              Indore’s premier annual conference for Class 10+ students, college graduates, and young professionals. Connect your professional ambitions with timeless values.
            </p>

            {/* Event Highlights */}
            <div style={{ display: "grid", gap: 10, background: "rgba(255,255,255,0.05)", padding: 14, borderRadius: 4, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "13px" }}>
                <Calendar size={16} color="#ffeb3b" />
                <span><strong>20 December 2026</strong> · Reporting 10:30 AM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "13px" }}>
                <MapPin size={16} color="#ffeb3b" />
                <span>Star Hall, Manik Bagh Road, Indore, MP</span>
              </div>
            </div>

            {/* Speakers Brief */}
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", fontWeight: 800, display: "block", marginBottom: 10 }}>
                KEYNOTE SPEAKERS & SESSIONS
              </span>
              <div style={{ display: "grid", gap: 10 }}>
                <div style={{ padding: 12, borderLeft: "3px solid #ffeb3b", background: "rgba(0,0,0,0.25)" }}>
                  <strong style={{ display: "block", color: "#ffeb3b", fontSize: "14px" }}>
                    Session 01: Career Navigator
                  </strong>
                  <span style={{ fontSize: "12px", opacity: 0.9 }}>
                    Mohammad Raza Mulla · Co-Founder & COO, CoSapiens Consulting
                  </span>
                </div>
                <div style={{ padding: 12, borderLeft: "3px solid #ffeb3b", background: "rgba(0,0,0,0.25)" }}>
                  <strong style={{ display: "block", color: "#ffeb3b", fontSize: "14px" }}>
                    Session 02: Prophetic Blueprint
                  </strong>
                  <span style={{ fontSize: "12px", opacity: 0.9 }}>
                    Dr. Mufti Khalid Ayyub Sahab · Islamic Scholar
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              <Button
                asChild
                style={{
                  background: "#ffeb3b",
                  color: "#1f0438",
                  fontWeight: 900,
                  fontSize: "14px",
                  height: 50,
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: "0 6px 18px rgba(255, 235, 59, 0.25)",
                }}
              >
                <a href={`${summitUrl}/#register`} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", textDecoration: "none" }}>
                  Register For Free Seat <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </a>
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  background: "transparent",
                  border: 0,
                  color: "rgba(255,255,255,0.65)",
                  fontWeight: 600,
                  fontSize: "12px",
                  padding: "6px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                Close dialog
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
