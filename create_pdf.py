import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, landscape
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

pdf_path = r"d:\Rajasthan Royals\SupeRR_Selector_Player_Rankings_Report.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=landscape(letter),
    leftMargin=36,
    rightMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=colors.HexColor('#002B49')
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=16,
    textColor=colors.HexColor('#C8102E')
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=14,
    leading=18,
    textColor=colors.HexColor('#002B49'),
    spaceBefore=8,
    spaceAfter=6
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor('#222222')
)

cell_style = ParagraphStyle(
    'TableCell',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    textColor=colors.HexColor('#111111')
)

cell_bold = ParagraphStyle(
    'TableCellBold',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=11,
    textColor=colors.HexColor('#002B49')
)

cell_header = ParagraphStyle(
    'TableHeader',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=11,
    textColor=colors.white,
    alignment=1
)

story = []

# Title & Header
story.append(Paragraph("Rajasthan Royals - SupeRR Selector Season 2", title_style))
story.append(Paragraph("Player Performance Under Pressure Analysis | Official Report", subtitle_style))
story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor('#002B49'), spaceBefore=2, spaceAfter=8))

intro_text = """
<b>Executive Overview:</b> Empirical performance analysis for the designated batters and bowlers under high-pressure match situations across 200,999 deliveries and 883 matches (IPL and official T20 records, 2022-2026). 
Pressure is defined objectively via dynamic Win-Probability Leverage (LI &gt;= 1.25) and match crisis conditions (required run rate &gt;= 9.5 in late overs, death overs 16-20, and early collapse rebuilds). 
The data presents pure technical execution metrics: run volume, strike rate, dot-ball resistance, boundary frequency, match-finishing not-outs, death-over wickets, partnership breakers, and match-winning hauls.
"""
story.append(Paragraph(intro_text, body_style))
story.append(Spacer(1, 8))

# ---------------- BATTERS TABLE (EXACT USER ORDER) ----------------
story.append(Paragraph("Top 10 Batters Under Pressure", section_heading))

batters_data = [
    [
        Paragraph("Rank", cell_header),
        Paragraph("Player Name", cell_header),
        Paragraph("Hand", cell_header),
        Paragraph("Pressure<br/>Balls", cell_header),
        Paragraph("Pressure<br/>Runs", cell_header),
        Paragraph("Pressure<br/>SR", cell_header),
        Paragraph("Dot %<br/>(Minimizing Dots)", cell_header),
        Paragraph("Boundary %<br/>(4s & 6s)", cell_header),
        Paragraph("Chase Finishes<br/>(Not Out in Wins)", cell_header),
        Paragraph("Balls / Dismissal<br/>(Wicket Preservation)", cell_header),
    ],
    # 1. Tim David
    [
        Paragraph("1", cell_bold),
        Paragraph("Tim David", cell_bold),
        Paragraph("RHB", cell_style),
        Paragraph("828", cell_style),
        Paragraph("1,503", cell_bold),
        Paragraph("181.52", cell_bold),
        Paragraph("30.4%", cell_style),
        Paragraph("25.7%", cell_style),
        Paragraph("15", cell_bold),
        Paragraph("16.9", cell_style),
    ],
    # 2. Tilak Verma
    [
        Paragraph("2", cell_bold),
        Paragraph("Namboori Tilak Varma", cell_bold),
        Paragraph("LHB", cell_style),
        Paragraph("1,465", cell_style),
        Paragraph("2,190", cell_bold),
        Paragraph("149.49", cell_style),
        Paragraph("30.4%", cell_style),
        Paragraph("18.8%", cell_style),
        Paragraph("21 (Most in IPL)", cell_bold),
        Paragraph("27.1", cell_bold),
    ],
    # 3. Kohli
    [
        Paragraph("3", cell_bold),
        Paragraph("Virat Kohli", cell_bold),
        Paragraph("RHB", cell_style),
        Paragraph("896", cell_style),
        Paragraph("1,413", cell_bold),
        Paragraph("157.70", cell_style),
        Paragraph("27.7%", cell_bold),
        Paragraph("21.5%", cell_style),
        Paragraph("9", cell_style),
        Paragraph("27.2 (Wicket Anchor)", cell_bold),
    ],
    # 4. Patidar
    [
        Paragraph("4", cell_bold),
        Paragraph("Rajat Patidar", cell_bold),
        Paragraph("RHB", cell_style),
        Paragraph("461", cell_style),
        Paragraph("739", cell_bold),
        Paragraph("160.30", cell_style),
        Paragraph("32.5%", cell_style),
        Paragraph("22.3%", cell_style),
        Paragraph("1", cell_style),
        Paragraph("17.1", cell_style),
    ],
    # 5. Klassen
    [
        Paragraph("5", cell_bold),
        Paragraph("Heinrich Klaasen", cell_bold),
        Paragraph("RHB", cell_style),
        Paragraph("864", cell_style),
        Paragraph("1,500", cell_bold),
        Paragraph("173.61", cell_style),
        Paragraph("25.3% (Elite)", cell_bold),
        Paragraph("23.0%", cell_style),
        Paragraph("5", cell_style),
        Paragraph("20.6", cell_style),
    ],
    # 6. Stubbs
    [
        Paragraph("6", cell_bold),
        Paragraph("Tristan Stubbs", cell_bold),
        Paragraph("RHB", cell_style),
        Paragraph("709", cell_style),
        Paragraph("1,168", cell_bold),
        Paragraph("164.74", cell_style),
        Paragraph("24.1% (Lowest)", cell_bold),
        Paragraph("21.2%", cell_style),
        Paragraph("10", cell_style),
        Paragraph("23.6", cell_style),
    ],
    # 7. Sooryavanshi
    [
        Paragraph("7", cell_bold),
        Paragraph("Vaibhav Sooryavanshi", cell_bold),
        Paragraph("LHB", cell_style),
        Paragraph("232", cell_style),
        Paragraph("530", cell_bold),
        Paragraph("228.45", cell_bold),
        Paragraph("35.8%", cell_style),
        Paragraph("38.8% (Highest)", cell_bold),
        Paragraph("0", cell_style),
        Paragraph("29.0", cell_bold),
    ],
    # 8. Pooran
    [
        Paragraph("8", cell_bold),
        Paragraph("Nicholas Pooran", cell_bold),
        Paragraph("LHB", cell_style),
        Paragraph("1,010", cell_style),
        Paragraph("1,672", cell_bold),
        Paragraph("165.54", cell_style),
        Paragraph("33.9%", cell_style),
        Paragraph("23.5%", cell_style),
        Paragraph("12", cell_style),
        Paragraph("21.0", cell_style),
    ],
    # 9. Miller
    [
        Paragraph("9", cell_bold),
        Paragraph("David Miller", cell_bold),
        Paragraph("LHB", cell_style),
        Paragraph("901", cell_style),
        Paragraph("1,421", cell_bold),
        Paragraph("157.71", cell_style),
        Paragraph("28.3%", cell_style),
        Paragraph("20.3%", cell_style),
        Paragraph("15", cell_bold),
        Paragraph("21.5", cell_style),
    ],
    # 10. Suryakumar Yadav
    [
        Paragraph("10", cell_bold),
        Paragraph("Suryakumar Yadav", cell_bold),
        Paragraph("RHB", cell_style),
        Paragraph("1,301", cell_style),
        Paragraph("2,289", cell_bold),
        Paragraph("175.94", cell_style),
        Paragraph("31.4%", cell_style),
        Paragraph("26.7%", cell_style),
        Paragraph("12", cell_style),
        Paragraph("21.7", cell_style),
    ],
]

col_widths_bat = [32, 120, 42, 60, 60, 60, 75, 75, 85, 95]
table_bat = Table(batters_data, colWidths=col_widths_bat, repeatRows=1)
table_bat.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#002B49')),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#D0D7DE')),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')]),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
]))

story.append(table_bat)
story.append(PageBreak())

# ---------------- BOWLERS TABLE (EXACT USER ORDER) ----------------
story.append(Paragraph("Rajasthan Royals - SupeRR Selector Season 2", title_style))
story.append(Paragraph("Player Performance Under Pressure Analysis | Official Report", subtitle_style))
story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor('#002B49'), spaceBefore=2, spaceAfter=8))
story.append(Paragraph("Top 10 Bowlers Under Pressure", section_heading))

bowlers_data = [
    [
        Paragraph("Rank", cell_header),
        Paragraph("Player Name", cell_header),
        Paragraph("Bowling Style", cell_header),
        Paragraph("Pressure<br/>Balls", cell_header),
        Paragraph("Pressure<br/>Econ", cell_header),
        Paragraph("Dot %<br/>(Field Execution)", cell_header),
        Paragraph("Total Pressure<br/>Wickets", cell_header),
        Paragraph("Death Wkts<br/>(Overs 16-20)", cell_header),
        Paragraph("Partnership Breakers<br/>(30+ Run Stands)", cell_header),
        Paragraph("Match-Winning Hauls<br/>(2+ Wkts in Team Win)", cell_header),
    ],
    # 1. Hazlewood
    [
        Paragraph("1", cell_bold),
        Paragraph("Josh Hazlewood", cell_bold),
        Paragraph("Right-arm fast-medium", cell_style),
        Paragraph("847", cell_style),
        Paragraph("8.17", cell_style),
        Paragraph("43.4% (Highest)", cell_bold),
        Paragraph("62", cell_style),
        Paragraph("30", cell_style),
        Paragraph("8", cell_style),
        Paragraph("14", cell_bold),
    ],
    # 2. Bumrah
    [
        Paragraph("2", cell_bold),
        Paragraph("Jasprit Bumrah", cell_bold),
        Paragraph("Right-arm Fast", cell_style),
        Paragraph("957", cell_style),
        Paragraph("7.00 (Elite)", cell_bold),
        Paragraph("42.5%", cell_bold),
        Paragraph("52", cell_style),
        Paragraph("35", cell_style),
        Paragraph("13", cell_style),
        Paragraph("12", cell_bold),
    ],
    # 3. Arshdeep
    [
        Paragraph("3", cell_bold),
        Paragraph("Arshdeep Singh", cell_bold),
        Paragraph("Left-arm medium-fast", cell_style),
        Paragraph("1,585", cell_style),
        Paragraph("8.81", cell_style),
        Paragraph("36.8%", cell_style),
        Paragraph("109 (Most in IPL)", cell_bold),
        Paragraph("75 (Most in IPL)", cell_bold),
        Paragraph("33 (Most in IPL)", cell_bold),
        Paragraph("18", cell_bold),
    ],
    # 4. Rashid
    [
        Paragraph("4", cell_bold),
        Paragraph("Rashid Khan", cell_bold),
        Paragraph("Right-arm Leg-Break", cell_style),
        Paragraph("1,386", cell_style),
        Paragraph("7.46", cell_bold),
        Paragraph("36.0%", cell_style),
        Paragraph("86", cell_bold),
        Paragraph("51", cell_bold),
        Paragraph("22", cell_bold),
        Paragraph("19 (Most in IPL)", cell_bold),
    ],
    # 5. Bhuvneshwar
    [
        Paragraph("5", cell_bold),
        Paragraph("Bhuvneshwar Kumar", cell_bold),
        Paragraph("Right-arm medium", cell_style),
        Paragraph("1,144", cell_style),
        Paragraph("8.56", cell_style),
        Paragraph("36.0%", cell_style),
        Paragraph("61", cell_style),
        Paragraph("42", cell_bold),
        Paragraph("17", cell_style),
        Paragraph("9", cell_style),
    ],
    # 6. Chahal
    [
        Paragraph("6", cell_bold),
        Paragraph("Yuzvendra Chahal", cell_bold),
        Paragraph("Right-arm Leg-Break", cell_style),
        Paragraph("1,230", cell_style),
        Paragraph("8.77", cell_style),
        Paragraph("29.9%", cell_style),
        Paragraph("76", cell_bold),
        Paragraph("34", cell_style),
        Paragraph("23", cell_bold),
        Paragraph("14", cell_bold),
    ],
    # 7. Pathirana
    [
        Paragraph("7", cell_bold),
        Paragraph("Matheesha Pathirana", cell_bold),
        Paragraph("Right-arm Fast (Sling)", cell_style),
        Paragraph("693", cell_style),
        Paragraph("7.70", cell_bold),
        Paragraph("37.4%", cell_style),
        Paragraph("57", cell_style),
        Paragraph("44 (In 693 balls)", cell_bold),
        Paragraph("15", cell_style),
        Paragraph("8", cell_style),
    ],
    # 8. Hasaranga
    [
        Paragraph("8", cell_bold),
        Paragraph("Wanindu Hasaranga", cell_bold),
        Paragraph("Right-arm Leg-Break", cell_style),
        Paragraph("895", cell_style),
        Paragraph("8.27", cell_style),
        Paragraph("36.1%", cell_style),
        Paragraph("73", cell_bold),
        Paragraph("27", cell_style),
        Paragraph("23", cell_bold),
        Paragraph("14", cell_bold),
    ],
    # 9. Holder
    [
        Paragraph("9", cell_bold),
        Paragraph("Jason Holder", cell_bold),
        Paragraph("Right-arm medium-fast", cell_style),
        Paragraph("1,077", cell_style),
        Paragraph("8.59", cell_style),
        Paragraph("33.8%", cell_style),
        Paragraph("70", cell_bold),
        Paragraph("43", cell_bold),
        Paragraph("19", cell_style),
        Paragraph("11", cell_bold),
    ],
    # 10. Krunal Pandya
    [
        Paragraph("10", cell_bold),
        Paragraph("Krunal Pandya", cell_bold),
        Paragraph("Slow left-arm orthodox", cell_style),
        Paragraph("581", cell_style),
        Paragraph("7.39", cell_bold),
        Paragraph("32.7%", cell_style),
        Paragraph("28", cell_style),
        Paragraph("5", cell_style),
        Paragraph("9", cell_style),
        Paragraph("7", cell_style),
    ],
]

col_widths_bowl = [32, 115, 95, 55, 55, 65, 65, 65, 80, 77]
table_bowl = Table(bowlers_data, colWidths=col_widths_bowl, repeatRows=1)
table_bowl.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#002B49')),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#D0D7DE')),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')]),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
]))

story.append(table_bowl)
story.append(Spacer(1, 10))

footer_text = """
<b>Key Metric Definitions:</b><br/>
• <b>Chase Finishes:</b> Occasions where the batter remained not out at the crease when the target was successfully reached in a 2nd innings chase.<br/>
• <b>Balls / Dismissal:</b> Total pressure deliveries divided by dismissals; measures resistance to throwing wickets away under high leverage.<br/>
• <b>Dot % (Execution):</b> Percentage of deliveries yielding zero runs; primary indicator of bowler hitting field settings and defensive lengths.<br/>
• <b>Death Wkts (Overs 16-20):</b> Wickets taken in overs 16 to 20 when batters are in aggressive boundary-scoring mode.<br/>
• <b>Partnership Breakers:</b> Crucial wickets taken when the batting partnership had accumulated 30+ runs, ending dangerous momentum.<br/>
• <b>Match-Winning Hauls:</b> Matches where the bowler took 2 or more pressure wickets and their team successfully secured victory.
"""
story.append(Paragraph(footer_text, body_style))

doc.build(story)
print(f"Successfully generated PDF report at: {pdf_path}")
