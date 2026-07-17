import os

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth

INK = HexColor("#06101F")
PANEL = HexColor("#0A1628")
WHITE = HexColor("#FFFFFF")
SAFFRON = HexColor("#FFCC00")
BLUE = HexColor("#2563EB")
VIOLET = HexColor("#7C3AED")
DIM = HexColor("#CBD5E1")

W, H = A4

def wrap(text, font, size, max_width):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if stringWidth(test, font, size) <= max_width:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def gen_cv(path, lang):
    is_fr = lang == "fr"
    c = canvas.Canvas(path, pagesize=A4)

    c.setFillColor(INK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    sidebar_w = 62 * mm
    c.setFillColor(PANEL)
    c.rect(0, 0, sidebar_w, H, fill=1, stroke=0)

    c.setFillColor(BLUE)
    c.circle(sidebar_w / 2, H - 34 * mm, 16 * mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(sidebar_w / 2, H - 34 * mm - 7, "M")

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 13)
    c.drawCentredString(sidebar_w / 2, H - 56 * mm, "Mogana.dev")
    c.setFillColor(SAFFRON)
    c.setFont("Helvetica", 9)
    role = "Ing\u00e9nieur Produit" if is_fr else "Full Stack Product"
    role2 = "Full Stack" if is_fr else "Engineer"
    c.drawCentredString(sidebar_w / 2, H - 62 * mm, role)
    c.drawCentredString(sidebar_w / 2, H - 67 * mm, role2)

    y = H - 82 * mm
    c.setFillColor(SAFFRON)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(8 * mm, y, "CONTACT")
    y -= 6 * mm
    c.setFillColor(DIM)
    c.setFont("Helvetica", 8.5)
    for line in ["hello@mogana.dev", "+33 7 58 97 35 99", "Maurice" if is_fr else "Mauritius",
                 "Disponible \u00e0 l'international" if is_fr else "Available Internationally"]:
        c.drawString(8 * mm, y, line)
        y -= 5 * mm

    y -= 6 * mm
    c.setFillColor(SAFFRON)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(8 * mm, y, "LANGUES" if is_fr else "LANGUAGES")
    y -= 6 * mm
    c.setFillColor(DIM)
    c.setFont("Helvetica", 8.5)
    en_label = "Anglais \u2014 Professionnel" if is_fr else "English \u2014 Professional"
    fr_label = "Fran\u00e7ais \u2014 Professionnel" if is_fr else "French \u2014 Professional"
    for line in [en_label, fr_label]:
        c.drawString(8 * mm, y, line)
        y -= 5 * mm

    y -= 6 * mm
    c.setFillColor(SAFFRON)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(8 * mm, y, "COMP\u00c9TENCES CL\u00c9S" if is_fr else "CORE SKILLS")
    y -= 6 * mm
    skill_groups = (
        [("Frontend", "React, Next.js, TypeScript, Tailwind"),
         ("Backend", "Node.js, API REST, Supabase, PostgreSQL"),
         ("SaaS", "RBAC, Tableaux de bord, Reporting"),
         ("IA", "Int\u00e9gration OpenAI et Claude"),
         ("Business", "Logistique, Op\u00e9rations, ERP, CRM")]
        if is_fr else
        [("Frontend", "React, Next.js, TypeScript, Tailwind"),
         ("Backend", "Node.js, REST APIs, Supabase, PostgreSQL"),
         ("SaaS", "RBAC, Dashboards, Reporting"),
         ("AI", "OpenAI and Claude API integration"),
         ("Business", "Logistics, Operations, ERP, CRM")]
    )
    for title, items in skill_groups:
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(8 * mm, y, title)
        y -= 4.5 * mm
        c.setFillColor(DIM)
        c.setFont("Helvetica", 7.5)
        for line in wrap(items, "Helvetica", 7.5, sidebar_w - 16 * mm):
            c.drawString(8 * mm, y, line)
            y -= 4 * mm
        y -= 2 * mm

    main_x = sidebar_w + 12 * mm
    main_w = W - main_x - 20 * mm
    y = H - 20 * mm

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(main_x, y, "R\u00c9SUM\u00c9 PROFESSIONNEL" if is_fr else "PROFESSIONAL SUMMARY")
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.2)
    c.line(main_x, y - 2 * mm, main_x + main_w, y - 2 * mm)
    y -= 8 * mm

    summary = (
        "Ing\u00e9nieur produit full stack alliant exp\u00e9rience en op\u00e9rations d'entreprise et ing\u00e9nierie logicielle moderne. "
        "Livre des SaaS d'entreprise, des plateformes ERP/comptabilit\u00e9, des marketplaces, des syst\u00e8mes e-commerce et des outils "
        "d'automatisation de bout en bout. Bilingue anglais/fran\u00e7ais, \u00e0 l'aise avec des \u00e9quipes internationales et ouvert \u00e0 la relocalisation."
        if is_fr else
        "Full stack product engineer combining business operations experience with modern software engineering. Delivers "
        "enterprise SaaS, ERP/accounting platforms, marketplaces, e-commerce systems and business automation tools end to end \u2014 "
        "from database design through to production deployment. Fluent in English and French, comfortable working with "
        "international teams and open to relocation."
    )
    c.setFillColor(DIM)
    c.setFont("Helvetica", 9)
    for line in wrap(summary, "Helvetica", 9, main_w):
        c.drawString(main_x, y, line)
        y -= 4.6 * mm

    y -= 8 * mm
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(main_x, y, "EXP\u00c9RIENCE" if is_fr else "EXPERIENCE")
    c.line(main_x, y - 2 * mm, main_x + main_w, y - 2 * mm)
    y -= 9 * mm

    experience = (
        [("Chapitre R\u00e9cent", "Ing\u00e9nierie Produit Full Stack",
          "Conception et construction de logiciels de production de bout en bout \u2014 SaaS d'entreprise, plateformes "
          "comptabilit\u00e9/ERP, marketplaces, e-commerce et outils d'automatisation."),
         ("Chapitre Ant\u00e9rieur", "Logistique et Op\u00e9rations d'Entreprise",
          "Plus de dix ans en planification de flotte, op\u00e9rations d'entrep\u00f4t, distribution et am\u00e9lioration des processus."),
         ("Chapitre Initial", "H\u00f4tellerie et Relation Client",
          "Travail de front office, r\u00e9ception et relation client qui a forg\u00e9 un instinct durable pour la communication "
          "client et le travail sous pression.")]
        if is_fr else
        [("Most Recent", "Full Stack Product Engineering",
          "Designing and building production software end to end \u2014 enterprise SaaS, accounting/ERP platforms, "
          "marketplaces, e-commerce and business automation tools."),
         ("Prior Chapter", "Logistics & Business Operations",
          "10+ years in fleet planning, warehouse operations, distribution and process improvement."),
         ("Earlier Chapter", "Hospitality & Guest Relations",
          "Front office, reception and guest relations work that shaped a lasting instinct for client communication "
          "and working calmly under pressure.")]
    )
    for period, title, desc in experience:
        c.setFillColor(SAFFRON)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(main_x, y, period.upper())
        y -= 5 * mm
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 9.5)
        c.drawString(main_x, y, title)
        y -= 5 * mm
        c.setFillColor(DIM)
        c.setFont("Helvetica", 8.5)
        for line in wrap(desc, "Helvetica", 8.5, main_w):
            c.drawString(main_x, y, line)
            y -= 4.4 * mm
        y -= 5 * mm

    y -= 4 * mm
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(main_x, y, "FORMATION ET CERTIFICATIONS" if is_fr else "EDUCATION & CERTIFICATIONS")
    c.line(main_x, y - 2 * mm, main_x + main_w, y - 2 * mm)
    y -= 9 * mm

    education = (
        [("Dipl\u00f4me", "HND en Gestion H\u00f4teli\u00e8re"),
         ("Formation", "Gestion de la Logistique et Chaine d'Approvisionnement"),
         ("Certificat", "Cambridge School Certificate / HSC"),
         ("Certification", "Google Digital Marketing & E-commerce"),
         ("Pratique", "Int\u00e9gration IA & Automatisation"),
         ("Pratique", "D\u00e9veloppement Full Stack Moderne")]
        if is_fr else
        [("Diploma", "HND Hospitality Management"),
         ("Education", "Logistics & Supply Chain Management"),
         ("Certificate", "Cambridge School Certificate / HSC"),
         ("Certification", "Google Digital Marketing & E-commerce"),
         ("Practice", "AI Integration & Automation"),
         ("Practice", "Modern Full Stack Development")]
    )
    col_w = main_w / 2 - 4 * mm
    start_y = y
    for i, (etype, title) in enumerate(education):
        col = i % 2
        row = i // 2
        ex = main_x + col * (col_w + 8 * mm)
        ey = start_y - row * 15 * mm
        c.setFillColor(SAFFRON)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawString(ex, ey, etype.upper())
        c.setFillColor(WHITE)
        c.setFont("Helvetica", 8.5)
        for j, line in enumerate(wrap(title, "Helvetica", 8.5, col_w)):
            c.drawString(ex, ey - 4.2 * mm - j * 4 * mm, line)

    c.setFillColor(DIM)
    c.setFont("Helvetica-Oblique", 7)
    note = ("Ceci est un CV de d\u00e9monstration g\u00e9n\u00e9r\u00e9 pour la mise en page. \u00c0 remplacer par le contenu final au m\u00eame emplacement."
            if is_fr else
            "This is a placeholder CV generated for layout purposes. Replace with final content at the same file path.")
    c.drawString(main_x, 12 * mm, note)

    c.showPage()
    c.save()


def gen_motivation_letter(path, lang):
    is_fr = lang == "fr"
    c = canvas.Canvas(path, pagesize=A4)
    c.setFillColor(INK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    margin = 22 * mm
    y = H - 30 * mm

    c.setFillColor(BLUE)
    c.circle(margin + 5 * mm, y, 5 * mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(margin + 5 * mm, y - 3.5, "M")

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(margin + 14 * mm, y - 2, "Mogana.dev")
    c.setFillColor(SAFFRON)
    c.setFont("Helvetica", 9)
    c.drawString(margin + 14 * mm, y - 10, "hello@mogana.dev  \u2022  +33 7 58 97 35 99")

    y -= 26 * mm
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.line(margin, y, W - margin, y)
    y -= 12 * mm

    title = "Lettre de Motivation" if is_fr else "Motivation Letter"
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(margin, y, title)
    y -= 12 * mm

    body_fr = [
        "Madame, Monsieur,",
        "",
        "Ing\u00e9nieur produit full stack, je combine une exp\u00e9rience concr\u00e8te en op\u00e9rations d'entreprise "
        "(logistique, h\u00f4tellerie) avec une expertise moderne en d\u00e9veloppement logiciel \u2014 SaaS d'entreprise, "
        "plateformes ERP et comptabilit\u00e9, marketplaces et syst\u00e8mes e-commerce.",
        "",
        "Ce profil hybride m'a appris \u00e0 concevoir des logiciels qui tiennent face \u00e0 un usage r\u00e9el, pas "
        "seulement face \u00e0 une d\u00e9mo \u2014 un instinct rare chez les ing\u00e9nieurs qui n'ont connu que le d\u00e9veloppement.",
        "",
        "Bilingue anglais/fran\u00e7ais, disponible \u00e0 distance ou avec relocalisation, je suis ouvert aux postes "
        "\u00e0 temps plein, aux missions contractuelles et aux collaborations par projet \u00e0 l'international.",
        "",
        "Je serais heureux d'\u00e9changer sur la fa\u00e7on dont ce profil pourrait contribuer \u00e0 votre \u00e9quipe.",
        "",
        "Cordialement,",
        "Mogana.dev",
    ]
    body_en = [
        "Dear Hiring Manager,",
        "",
        "As a full stack product engineer, I combine hands-on business operations experience (logistics, "
        "hospitality) with modern software development expertise \u2014 enterprise SaaS, ERP and accounting "
        "platforms, marketplaces and e-commerce systems.",
        "",
        "That hybrid background has taught me to build software that holds up under real use, not just a "
        "clean demo \u2014 an instinct that's rare among engineers with a purely technical background.",
        "",
        "Fluent in English and French, available remotely or with relocation, I'm open to full-time roles, "
        "contract engagements and project-based collaboration internationally.",
        "",
        "I'd welcome the chance to discuss how this background could contribute to your team.",
        "",
        "Best regards,",
        "Mogana.dev",
    ]
    body = body_fr if is_fr else body_en

    c.setFont("Helvetica", 10)
    for para in body:
        if para == "":
            y -= 5 * mm
            continue
        c.setFillColor(HexColor("#E2E8F0"))
        for line in wrap(para, "Helvetica", 10, W - 2 * margin):
            c.drawString(margin, y, line)
            y -= 5.5 * mm

    y = 16 * mm
    c.setFillColor(DIM)
    c.setFont("Helvetica-Oblique", 7)
    note = ("Ceci est une lettre de motivation de d\u00e9monstration. \u00c0 remplacer par le contenu final au m\u00eame emplacement."
            if is_fr else
            "This is a placeholder motivation letter. Replace with final content at the same file path.")
    c.drawString(margin, y, note)

    c.showPage()
    c.save()


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

gen_cv(os.path.join(ROOT, "public/documents/cv/mogana-dev-cv-en.pdf"), "en")
gen_cv(os.path.join(ROOT, "public/documents/cv/mogana-dev-cv-fr.pdf"), "fr")
gen_motivation_letter(os.path.join(ROOT, "public/documents/motivation-letters/mogana-dev-motivation-letter-en.pdf"), "en")
gen_motivation_letter(os.path.join(ROOT, "public/documents/motivation-letters/mogana-dev-lettre-motivation-fr.pdf"), "fr")
print("done")
