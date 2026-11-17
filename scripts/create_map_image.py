from PIL import Image, ImageDraw, ImageFont
import os

# Canvas size: 1920 x 1080 (Full HD enterprise SaaS UI)
W, H = 1920, 1080
img = Image.new('RGB', (W, H), '#f8fafc')
draw = ImageDraw.Draw(img)

# Load fonts
def get_font(path, size, default_size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

font_bold_28 = get_font('C:/Windows/Fonts/segoeuib.ttf', 28, 28)
font_bold_24 = get_font('C:/Windows/Fonts/segoeuib.ttf', 24, 24)
font_bold_20 = get_font('C:/Windows/Fonts/segoeuib.ttf', 20, 20)
font_bold_16 = get_font('C:/Windows/Fonts/segoeuib.ttf', 16, 16)
font_bold_14 = get_font('C:/Windows/Fonts/segoeuib.ttf', 14, 14)
font_bold_13 = get_font('C:/Windows/Fonts/segoeuib.ttf', 13, 13)
font_bold_12 = get_font('C:/Windows/Fonts/segoeuib.ttf', 12, 12)
font_bold_11 = get_font('C:/Windows/Fonts/segoeuib.ttf', 11, 11)

font_regular_16 = get_font('C:/Windows/Fonts/segoeui.ttf', 16, 16)
font_regular_14 = get_font('C:/Windows/Fonts/segoeui.ttf', 14, 14)
font_regular_13 = get_font('C:/Windows/Fonts/segoeui.ttf', 13, 13)
font_regular_12 = get_font('C:/Windows/Fonts/segoeui.ttf', 12, 12)
font_regular_11 = get_font('C:/Windows/Fonts/segoeui.ttf', 11, 11)

# ----------------- 1. SIDEBAR (x: 0 to 300) -----------------
sidebar_w = 300
draw.rectangle([(0, 0), (sidebar_w, H)], fill='#031b20')

# Logo: 4-square icon
ix, iy = 28, 28
draw.rounded_rectangle([(ix, iy), (ix + 36, iy + 36)], radius=8, fill='#0d9488')
draw.rectangle([(ix + 6, iy + 6), (ix + 16, iy + 16)], fill='#ecfdf5')
draw.rectangle([(ix + 20, iy + 6), (ix + 30, iy + 16)], fill='#ecfdf5')
draw.rectangle([(ix + 6, iy + 20), (ix + 16, iy + 30)], fill='#ecfdf5')
draw.rectangle([(ix + 20, iy + 20), (ix + 30, iy + 30)], fill='#f59e0b')

draw.text((ix + 46, iy + 4), 'Plotline', fill='#ffffff', font=font_bold_24)
draw.rounded_rectangle([(ix + 144, iy + 8), (ix + 180, iy + 28)], radius=4, fill='#134e4a')
draw.text((ix + 150, iy + 10), 'ERP', fill='#5eead4', font=font_bold_12)

# Developer Entity Switcher (Realistic Company, NOT "TEST Realty")
cy = 85
draw.rounded_rectangle([(20, cy), (sidebar_w - 20, cy + 62)], radius=10, fill='#05282f', outline='#0f4955', width=1)
draw.text((34, cy + 10), 'DEVELOPER ENTITY', fill='#2dd4bf', font=font_bold_11)
draw.text((34, cy + 30), 'Royal Palm Infra Developers', fill='#ffffff', font=font_bold_14)

# Sidebar Menu Items
menu_items = [
    ('Dashboard', False),
    ('Colony Layout Map', True),  # Active
    ('Units & Master Inventory', False),
    ('Pre-Sales & Lead CRM', False),
    ('Milestone Demand Letters', False),
    ('Accounts & Cheque Vault', False),
    ('Khasra Land Ledgers', False),
    ('Contractors & Site Works', False),
    ('RERA & Audit Reports', False),
    ('Settings & Permissions', False),
]

my = 170
for name, is_active in menu_items:
    if is_active:
        draw.rounded_rectangle([(16, my), (sidebar_w - 16, my + 44)], radius=8, fill='#0f766e')
        draw.rectangle([(16, my + 6), (20, my + 38)], fill='#2dd4bf')
        draw.text((38, my + 12), name, fill='#ffffff', font=font_bold_14)
        draw.ellipse([(sidebar_w - 38, my + 18), (sidebar_w - 30, my + 26)], fill='#4ade80')
    else:
        draw.text((38, my + 12), name, fill='#94a3b8', font=font_regular_14)
    my += 52

# Sidebar user footer (Realistic User, NOT "Claude Owner")
draw.line([(20, H - 75), (sidebar_w - 20, H - 75)], fill='#0b3b45', width=1)
draw.ellipse([(24, H - 62), (64, H - 22)], fill='#0f766e')
draw.text((32, H - 50), 'RS', fill='#ffffff', font=font_bold_16)
draw.text((74, H - 56), 'Rajesh Sharma', fill='#ffffff', font=font_bold_14)
draw.text((74, H - 36), 'Managing Director', fill='#2dd4bf', font=font_regular_12)

# ----------------- 2. TOP HEADER BAR (x: 300 to 1920, y: 0 to 75) -----------------
draw.rectangle([(sidebar_w, 0), (W, 75)], fill='#ffffff')
draw.line([(sidebar_w, 75), (W, 75)], fill='#e2e8f0', width=1)

# Search Bar
draw.rounded_rectangle([(sidebar_w + 30, 16), (sidebar_w + 480, 58)], radius=8, fill='#f8fafc', outline='#cbd5e1', width=1)
draw.text((sidebar_w + 50, 26), 'Search plots, customers, bookings... (Ctrl + K)', fill='#94a3b8', font=font_regular_14)

# Project Selector (Realistic Project, NOT "TEST Green Valley Enclave")
draw.rounded_rectangle([(sidebar_w + 520, 16), (sidebar_w + 940, 58)], radius=8, fill='#f8fafc', outline='#cbd5e1', width=1)
draw.text((sidebar_w + 535, 26), 'Project: Royal Palm Enclave (Phase 1 & 2)', fill='#0f172a', font=font_bold_14)
draw.text((sidebar_w + 910, 28), '▼', fill='#64748b', font=font_regular_11)

# Right sync indicator
draw.rounded_rectangle([(W - 270, 18), (W - 30, 56)], radius=20, fill='#ecfdf5', outline='#a7f3d0', width=1)
draw.ellipse([(W - 255, 33), (W - 245, 43)], fill='#10b981')
draw.text((W - 235, 26), 'Cloud Sync Active (14ms)', fill='#065f46', font=font_bold_13)

# ----------------- 3. SUB HEADER BAR (y: 75 to 145) -----------------
draw.rectangle([(sidebar_w, 75), (W, 145)], fill='#ffffff')
draw.line([(sidebar_w, 145), (W, 145)], fill='#e2e8f0', width=1)

draw.text((sidebar_w + 30, 85), 'Projects  >  Royal Palm Enclave  >  Interactive Colony Plot Map', fill='#64748b', font=font_regular_12)
draw.text((sidebar_w + 30, 106), 'Sector A & B Master Layout Map', fill='#0f172a', font=font_bold_20)
draw.text((sidebar_w + 370, 110), '64 Total Units  •  100% RERA Registered  •  Zero Double-Bookings', fill='#64748b', font=font_regular_13)

# Action buttons on right
draw.rounded_rectangle([(W - 330, 94), (W - 170, 134)], radius=8, fill='#ffffff', outline='#cbd5e1', width=1)
draw.text((W - 310, 104), 'Edit CAD Layout', fill='#334155', font=font_bold_13)

draw.rounded_rectangle([(W - 155, 94), (W - 30, 134)], radius=8, fill='#042026')
draw.text((W - 138, 104), '+ Hold Plot', fill='#ffffff', font=font_bold_13)

# ----------------- 4. MAP CANVAS AREA (x: 320 to 1450, y: 165 to 1050) -----------------
canvas_x1, canvas_y1 = sidebar_w + 20, 165
canvas_x2, canvas_y2 = 1450, H - 25

draw.rounded_rectangle([(canvas_x1, canvas_y1), (canvas_x2, canvas_y2)], radius=14, fill='#f8fafc', outline='#cbd5e1', width=1)

# Subtle grid pattern
for gx in range(canvas_x1 + 40, canvas_x2, 40):
    draw.line([(gx, canvas_y1 + 10), (gx, canvas_y2 - 10)], fill='#f1f5f9', width=1)
for gy in range(canvas_y1 + 40, canvas_y2, 40):
    draw.line([(canvas_x1 + 10, gy), (canvas_x2 - 10, gy)], fill='#f1f5f9', width=1)

# Floating Zoom Controls
zx = canvas_x1 + 20
draw.rounded_rectangle([(zx, canvas_y1 + 20), (zx + 42, canvas_y1 + 145)], radius=8, fill='#ffffff', outline='#cbd5e1', width=1)
draw.text((zx + 14, canvas_y1 + 28), '+', fill='#334155', font=font_bold_20)
draw.line([(zx + 8, canvas_y1 + 60), (zx + 34, canvas_y1 + 60)], fill='#e2e8f0')
draw.text((zx + 16, canvas_y1 + 68), '−', fill='#334155', font=font_bold_20)
draw.line([(zx + 8, canvas_y1 + 100), (zx + 34, canvas_y1 + 100)], fill='#e2e8f0')
draw.text((zx + 13, canvas_y1 + 110), '⛶', fill='#334155', font=font_bold_16)

# ----------------- REALISTIC COLONY LAYOUT PLOTS & ROADS -----------------

# 40 FT MAIN SECTOR ROAD (Horizontal Road at y: 410 to 475)
road_y1, road_y2 = 410, 475
draw.rectangle([(canvas_x1 + 80, road_y1), (canvas_x2 - 40, road_y2)], fill='#334155')
# Road Center Dashed Line
for rx in range(canvas_x1 + 90, canvas_x2 - 50, 40):
    draw.line([(rx, road_y1 + 32), (rx + 24, road_y1 + 32)], fill='#f8fafc', width=2)
draw.text((canvas_x1 + 120, road_y1 + 10), '40 FT MAIN SECTOR AVENUE (GRAND ENTRANCE ROAD)', fill='#94a3b8', font=font_bold_12)

# 30 FT CROSS INTERNAL ROAD (Vertical Road at x: 800 to 860)
draw.rectangle([(810, canvas_y1 + 40), (865, canvas_y2 - 40)], fill='#334155')
for ry in range(canvas_y1 + 50, canvas_y2 - 50, 40):
    draw.line([(837, ry), (837, ry + 24)], fill='#f8fafc', width=2)
draw.text((820, road_y1 + 38), '30 FT', fill='#f8fafc', font=font_bold_12)

# CENTRAL BOTANICAL PARK (Landscape green area at top left)
draw.rounded_rectangle([(canvas_x1 + 80, canvas_y1 + 35), (800, canvas_y1 + 175)], radius=10, fill='#dcfce7', outline='#86efac', width=2)
draw.text((canvas_x1 + 110, canvas_y1 + 55), '🌳 CENTRAL BOTANICAL LANDSCAPE PARK', fill='#166534', font=font_bold_16)
draw.text((canvas_x1 + 110, canvas_y1 + 82), 'Total Area: 18,500 sq.ft  •  Jogging Track  •  Kids Play Zone  •  Gazebo', fill='#15803d', font=font_regular_13)
draw.rounded_rectangle([(canvas_x1 + 110, canvas_y1 + 118), (canvas_x1 + 330, canvas_y1 + 148)], radius=6, fill='#bbf7d0')
draw.text((canvas_x1 + 125, canvas_y1 + 125), '★ Prime Park Facing Zone (10% PLC)', fill='#14532d', font=font_bold_12)

# CLUBHOUSE & SPORTS ARENA (Bottom Right)
draw.rounded_rectangle([(875, canvas_y2 - 180), (canvas_x2 - 50, canvas_y2 - 40)], radius=10, fill='#fef3c7', outline='#fde68a', width=2)
draw.text((905, canvas_y2 - 155), '🏛 CLUBHOUSE & COMMUNITY SPORTS COMPLEX', fill='#92400e', font=font_bold_16)
draw.text((905, canvas_y2 - 128), 'Swimming Pool  •  Badminton Court  •  Indoor Gymnasium  •  Banquet Hall', fill='#b45309', font=font_regular_13)

# PLOT DRAWING FUNCTION
def draw_plot(x, y, w, h, p_num, status, dim_str, rate_str, is_selected=False):
    if status == 'available':
        bg = '#ecfdf5'
        border = '#10b981'
        badge_bg = '#10b981'
        badge_txt = '#ffffff'
        status_txt = 'Available'
    elif status == 'reserved':
        bg = '#fffbeb'
        border = '#f59e0b'
        badge_bg = '#f59e0b'
        badge_txt = '#ffffff'
        status_txt = 'Reserved'
    elif status == 'booked':
        bg = '#eff6ff'
        border = '#3b82f6'
        badge_bg = '#3b82f6'
        badge_txt = '#ffffff'
        status_txt = 'Booked'
    elif status == 'sold':
        bg = '#faf5ff'
        border = '#8b5cf6'
        badge_bg = '#8b5cf6'
        badge_txt = '#ffffff'
        status_txt = 'Sold'
    else:
        bg = '#f1f5f9'
        border = '#94a3b8'
        badge_bg = '#64748b'
        badge_txt = '#ffffff'
        status_txt = 'Blocked'
        
    if is_selected:
        draw.rounded_rectangle([(x - 4, y - 4), (x + w + 4, y + h + 4)], radius=8, outline='#0d9488', width=3)
        draw.rounded_rectangle([(x, y), (x + w, y + h)], radius=6, fill='#f0fdfa', outline='#0f766e', width=2)
    else:
        draw.rounded_rectangle([(x, y), (x + w, y + h)], radius=6, fill=bg, outline=border, width=1)
        
    draw.text((x + 8, y + 6), p_num, fill='#0f172a', font=font_bold_13)
    
    draw.rounded_rectangle([(x + w - 58, y + 5), (x + w - 6, y + 21)], radius=3, fill=badge_bg)
    draw.text((x + w - 54, y + 7), status_txt, fill=badge_txt, font=font_bold_11)
    
    draw.text((x + 8, y + 28), dim_str, fill='#475569', font=font_regular_11)
    draw.text((x + 8, y + 44), rate_str, fill='#047857' if status == 'available' else '#334155', font=font_bold_11)

# ROW 1 (SECTOR A - Facing Park)
px = canvas_x1 + 80
plots_row1 = [
    ('A-101', 'available', '30 x 50 ft', '₹ 2,800/sqft'),
    ('A-102', 'booked',    '30 x 50 ft', '₹ 2,800/sqft'),
    ('A-103', 'available', '30 x 60 ft', '₹ 3,100/sqft'),
    ('A-104', 'available', '30 x 60 ft', '₹ 3,100/sqft'), # SELECTED!
    ('A-105', 'reserved',  '30 x 60 ft', '₹ 3,100/sqft'),
]
for p in plots_row1:
    is_sel = (p[0] == 'A-104')
    draw_plot(px, 195, 134, 68, p[0], p[1], p[2], p[3], is_selected=is_sel)
    px += 144

# ROW 2 (SECTOR A - Upper Road Facing)
px = canvas_x1 + 80
plots_row2 = [
    ('A-106', 'available', '30 x 50 ft', '₹ 2,800/sqft'),
    ('A-107', 'sold',     '30 x 50 ft', '₹ 2,800/sqft'),
    ('A-108', 'booked',   '30 x 60 ft', '₹ 3,100/sqft'),
    ('A-109', 'available','30 x 60 ft', '₹ 3,100/sqft'),
    ('A-110', 'available','30 x 60 ft', '₹ 3,100/sqft'),
]
for p in plots_row2:
    draw_plot(px, 315, 134, 68, p[0], p[1], p[2], p[3])
    px += 144

# ROW 3 (SECTOR B - Below Main Road)
px = canvas_x1 + 80
plots_row3 = [
    ('B-201', 'reserved',  '25 x 50 ft', '₹ 2,600/sqft'),
    ('B-202', 'available', '25 x 50 ft', '₹ 2,600/sqft'),
    ('B-203', 'booked',    '30 x 50 ft', '₹ 2,750/sqft'),
    ('B-204', 'available', '30 x 50 ft', '₹ 2,750/sqft'),
    ('B-205', 'sold',     '35 x 60 ft', '₹ 3,000/sqft'),
]
for p in plots_row3:
    draw_plot(px, 495, 134, 68, p[0], p[1], p[2], p[3])
    px += 144

# ROW 4 (SECTOR B - Lower Residential)
px = canvas_x1 + 80
plots_row4 = [
    ('B-206', 'available', '25 x 50 ft', '₹ 2,600/sqft'),
    ('B-207', 'available', '25 x 50 ft', '₹ 2,600/sqft'),
    ('B-208', 'booked',    '30 x 50 ft', '₹ 2,750/sqft'),
    ('B-209', 'booked',    '30 x 50 ft', '₹ 2,750/sqft'),
    ('B-210', 'available', '35 x 60 ft', '₹ 3,000/sqft'),
]
for p in plots_row4:
    draw_plot(px, 600, 134, 68, p[0], p[1], p[2], p[3])
    px += 144

# RIGHT SIDE PLOTS (East Sector C)
px = 880
plots_east1 = [
    ('C-301', 'booked',    '40 x 60 ft', '₹ 3,250/sqft'),
    ('C-302', 'available', '40 x 60 ft', '₹ 3,250/sqft'),
    ('C-303', 'available', '40 x 60 ft', '₹ 3,250/sqft'),
    ('C-304', 'sold',     '50 x 70 ft', '₹ 3,500/sqft'),
]
for p in plots_east1:
    draw_plot(px, 195, 135, 68, p[0], p[1], p[2], p[3])
    px += 142

px = 880
plots_east2 = [
    ('C-305', 'available', '40 x 60 ft', '₹ 3,250/sqft'),
    ('C-306', 'reserved',  '40 x 60 ft', '₹ 3,250/sqft'),
    ('C-307', 'booked',    '40 x 60 ft', '₹ 3,250/sqft'),
    ('C-308', 'available', '50 x 70 ft', '₹ 3,500/sqft'),
]
for p in plots_east2:
    draw_plot(px, 315, 135, 68, p[0], p[1], p[2], p[3])
    px += 142

# ----------------- REALISTIC SELECTED PLOT TOOLTIP (A-104) -----------------
tt_x, tt_y = 520, 270
tt_w, tt_h = 360, 205

draw.rounded_rectangle([(tt_x + 3, tt_y + 3), (tt_x + tt_w + 3, tt_y + tt_h + 3)], radius=12, fill='#94a3b8')
draw.rounded_rectangle([(tt_x, tt_y), (tt_x + tt_w, tt_y + tt_h)], radius=12, fill='#ffffff', outline='#0d9488', width=2)

draw.text((tt_x + 18, tt_y + 14), 'Plot A-104', fill='#0f172a', font=font_bold_20)
draw.rounded_rectangle([(tt_x + 130, tt_y + 16), (tt_x + 225, tt_y + 36)], radius=4, fill='#ecfdf5', outline='#a7f3d0')
draw.text((tt_x + 138, tt_y + 19), '● Available', fill='#059669', font=font_bold_12)

draw.text((tt_x + 18, tt_y + 44), 'Sector A  •  Main Front Park Facing (PLC)', fill='#0d9488', font=font_bold_13)

draw.line([(tt_x + 18, tt_y + 68), (tt_x + tt_w - 18, tt_y + 68)], fill='#f1f5f9', width=1)
draw.text((tt_x + 18, tt_y + 76), 'Dimensions: 30 x 60 ft', fill='#475569', font=font_regular_13)
draw.text((tt_x + 180, tt_y + 76), 'Area: 1,800 sq.ft (200 sq.yd)', fill='#0f172a', font=font_bold_13)

draw.text((tt_x + 18, tt_y + 102), 'Base Rate: ₹ 3,100/sq.ft', fill='#475569', font=font_regular_13)
draw.text((tt_x + 180, tt_y + 102), 'Total: ₹ 55,80,000', fill='#0f766e', font=font_bold_14)

draw.line([(tt_x + 18, tt_y + 130), (tt_x + tt_w - 18, tt_y + 130)], fill='#f1f5f9', width=1)
draw.rounded_rectangle([(tt_x + 18, tt_y + 142), (tt_x + tt_w - 18, tt_y + 186)], radius=6, fill='#042026')
draw.text((tt_x + 65, tt_y + 154), '🔒 Click to Place Atomic Token Lock', fill='#ffffff', font=font_bold_13)

# ----------------- 5. RIGHT LEGEND & LIVE STATUS PANEL (x: 1475 to 1890) -----------------
leg_x1 = 1475
leg_y1 = 165
leg_x2 = W - 30
leg_y2 = 680

draw.rounded_rectangle([(leg_x1, leg_y1), (leg_x2, leg_y2)], radius=14, fill='#ffffff', outline='#cbd5e1', width=1)

draw.text((leg_x1 + 24, leg_y1 + 22), 'Township Master Inventory', fill='#0f172a', font=font_bold_16)
draw.text((leg_x1 + 24, leg_y1 + 46), 'Sector A, B & C (64 Total Units)', fill='#64748b', font=font_regular_13)
draw.line([(leg_x1 + 20, leg_y1 + 72), (leg_x2 - 20, leg_y1 + 72)], fill='#f1f5f9', width=1)

status_rows = [
    ('Available Plots', '32 Units', '#10b981', '#ecfdf5', '50.0%'),
    ('Reserved (Token)', '6 Units',  '#f59e0b', '#fffbeb', '9.4%'),
    ('Booked (Installments)', '20 Units', '#3b82f6', '#eff6ff', '31.2%'),
    ('Sold & Registered', '4 Units',  '#8b5cf6', '#faf5ff', '6.2%'),
    ('Blocked / Future Phase', '2 Units',  '#64748b', '#f1f5f9', '3.1%'),
]

ly = leg_y1 + 88
for title, count, color, bg, pct in status_rows:
    draw.rounded_rectangle([(leg_x1 + 20, ly), (leg_x2 - 20, ly + 46)], radius=8, fill=bg, outline=color, width=1)
    draw.ellipse([(leg_x1 + 36, ly + 17), (leg_x1 + 48, ly + 29)], fill=color)
    draw.text((leg_x1 + 58, ly + 14), title, fill='#0f172a', font=font_bold_13)
    draw.text((leg_x2 - 110, ly + 14), count, fill='#0f172a', font=font_bold_13)
    draw.text((leg_x2 - 50, ly + 15), pct, fill='#64748b', font=font_regular_12)
    ly += 56

# Live Atomic Lock Security Card
draw.rounded_rectangle([(leg_x1 + 20, ly + 10), (leg_x2 - 20, leg_y2 - 20)], radius=10, fill='#031b20')
draw.text((leg_x1 + 36, ly + 24), '🔒 ATOMIC TRANSACTION LOCK ACTIVE', fill='#5eead4', font=font_bold_12)
draw.text((leg_x1 + 36, ly + 46), 'Database lock guarantees 0% double-bookings.\nNo two agents can reserve the same plot simultaneously.', fill='#cbd5e1', font=font_regular_12)
draw.text((leg_x1 + 36, ly + 90), 'Cloud Latency: 14ms  •  RERA Escrow Ready', fill='#2dd4bf', font=font_bold_12)

# Quick Stat Card below Legend (y: 700 to 1050)
draw.rounded_rectangle([(leg_x1, 700), (leg_x2, H - 25)], radius=14, fill='#ffffff', outline='#cbd5e1', width=1)
draw.text((leg_x1 + 24, 720), 'AutoCAD Vector Integration', fill='#0f172a', font=font_bold_16)
draw.text((leg_x1 + 24, 744), 'Free Onboarding Service for Colonizers', fill='#64748b', font=font_regular_13)

perks = [
    '✓ Upload .DWG, .DXF or PDF Town-Planning Map',
    '✓ Automated plot polygon boundary detection',
    '✓ Dynamic price index & PLC calculation engine',
    '✓ Mobile companion for on-site sales executives',
]
py = 780
for perk in perks:
    draw.text((leg_x1 + 24, py), perk, fill='#334155', font=font_bold_13)
    py += 34

draw.rounded_rectangle([(leg_x1 + 20, py + 10), (leg_x2 - 20, py + 55)], radius=8, fill='#0d9488')
draw.text((leg_x1 + 65, py + 22), 'Upload Your Colony Map →', fill='#ffffff', font=font_bold_14)

# Save high-res master
out_path = 'D:/Pipeline-Real-State-ERP/website/public/screenshots/real-plot-map-enterprise.png'
img.save(out_path, quality=95)
print('Successfully generated enterprise colony map image at:', out_path)
