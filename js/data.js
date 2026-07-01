/* ============================================
   ECE CAREER HUB - DATA
   All categories, projects, and static data
   ============================================ */

const ECE_CATEGORIES = [
  {
    id: 'embedded-systems',
    name: 'Embedded Systems',
    icon: '🔬',
    color: 'var(--color-embedded)',
    gradient: 'linear-gradient(135deg, #ff6b9d, #c850c0)',
    desc: 'MCU, RTOS, bare-metal programming',
    linkCount: 8
  },
  {
    id: 'vlsi',
    name: 'VLSI',
    icon: '💎',
    color: 'var(--color-vlsi)',
    gradient: 'linear-gradient(135deg, #c850c0, #4158d0)',
    desc: 'Chip design, layout, verification',
    linkCount: 8
  },
  {
    id: 'semiconductor',
    name: 'Semiconductor',
    icon: '⚡',
    color: 'var(--color-semiconductor)',
    gradient: 'linear-gradient(135deg, #4158d0, #0093e9)',
    desc: 'Fab, process, devices',
    linkCount: 8
  },
  {
    id: 'pcb-design',
    name: 'PCB Design',
    icon: '🖥️',
    color: 'var(--color-pcb)',
    gradient: 'linear-gradient(135deg, #0093e9, #80d0c7)',
    desc: 'Schematic, layout, manufacturing',
    linkCount: 8
  },
  {
    id: 'iot',
    name: 'IoT',
    icon: '🌐',
    color: 'var(--color-iot)',
    gradient: 'linear-gradient(135deg, #00c9a7, #92fe9d)',
    desc: 'Connected devices, protocols',
    linkCount: 8
  },
  {
    id: 'robotics',
    name: 'Robotics',
    icon: '🤖',
    color: 'var(--color-robotics)',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    desc: 'Automation, control, perception',
    linkCount: 8
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: '⚙️',
    color: 'var(--color-automation)',
    gradient: 'linear-gradient(135deg, #f953c6, #b91d73)',
    desc: 'PLC, SCADA, industrial control',
    linkCount: 8
  },
  {
    id: 'electronics-mfg',
    name: 'Electronics Mfg',
    icon: '🏭',
    color: 'var(--color-mfg)',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    desc: 'SMT, quality, assembly',
    linkCount: 8
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: '🚗',
    color: 'var(--color-auto)',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    desc: 'AUTOSAR, CAN, functional safety',
    linkCount: 8
  },
  {
    id: 'fpga',
    name: 'FPGA',
    icon: '🧩',
    color: 'var(--color-fpga)',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    desc: 'HDL, synthesis, prototyping',
    linkCount: 8
  },
  {
    id: 'embedded-linux',
    name: 'Embedded Linux',
    icon: '🐧',
    color: 'var(--color-linux)',
    gradient: 'linear-gradient(135deg, #ffd89b, #19547b)',
    desc: 'Yocto, BSP, device drivers',
    linkCount: 8
  },
  {
    id: 'firmware',
    name: 'Firmware Dev',
    icon: '💾',
    color: 'var(--color-firmware)',
    gradient: 'linear-gradient(135deg, #96fbc4, #f9f586)',
    desc: 'Boot, drivers, OTA updates',
    linkCount: 8
  },
  {
    id: 'hardware-design',
    name: 'Hardware Design',
    icon: '🔧',
    color: 'var(--color-hardware)',
    gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    desc: 'Analog, digital, mixed-signal',
    linkCount: 8
  },
  {
    id: 'testing-validation',
    name: 'Testing & Val.',
    icon: '🧪',
    color: 'var(--color-testing)',
    gradient: 'linear-gradient(135deg, #fddb92, #d1fdff)',
    desc: 'DVT, EVT, compliance',
    linkCount: 8
  },
  {
    id: 'signal-processing',
    name: 'Signal Processing',
    icon: '📡',
    color: 'var(--color-signal)',
    gradient: 'linear-gradient(135deg, #d299c2, #fef9d7)',
    desc: 'DSP, filters, FFT',
    linkCount: 8
  },
  {
    id: 'wireless-comm',
    name: 'Wireless Comm',
    icon: '📶',
    color: 'var(--color-wireless)',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    desc: 'RF, 5G, Bluetooth, WiFi',
    linkCount: 8
  },
  {
    id: 'ai-hardware',
    name: 'AI Hardware',
    icon: '🧠',
    color: 'var(--color-ai)',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    desc: 'NPU, edge AI, ML chips',
    linkCount: 8
  },
  {
    id: 'ev-electronics',
    name: 'EV Electronics',
    icon: '🔋',
    color: 'var(--color-ev)',
    gradient: 'linear-gradient(135deg, #43e97b, #0f9b58)',
    desc: 'BMS, power electronics, charging',
    linkCount: 8
  },
  {
    id: 'medical-electronics',
    name: 'Medical Electronics',
    icon: '🏥',
    color: 'var(--color-medical)',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    desc: 'Biosensors, imaging, wearables',
    linkCount: 8
  },
  {
    id: 'defence-electronics',
    name: 'Defence Electronics',
    icon: '🛡️',
    color: 'var(--color-defence)',
    gradient: 'linear-gradient(135deg, #4481eb, #04befe)',
    desc: 'Radar, avionics, military grade',
    linkCount: 8
  }
];

// Generate placeholder link cards for each category
function generateLinkCards(categoryId, count = 8) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${categoryId}-link-${i + 1}`,
    categoryId,
    title: `Company Link ${i + 1}`,
    url: '',
    description: 'Paste your URL here',
    bookmarked: false,
    lastOpened: null
  }));
}

const CATEGORY_LINKS = {};
ECE_CATEGORIES.forEach(cat => {
  CATEGORY_LINKS[cat.id] = generateLinkCards(cat.id, 8);
});

// ---- EMBEDDED PROJECTS ----
const EMBEDDED_PROJECTS = [
  {
    id: 'emb-1',
    title: 'Smart Energy Monitoring System',
    difficulty: 'Intermediate',
    cost: '₹2,500 – ₹4,000',
    problem: 'Households lack real-time visibility into power consumption across individual appliances, leading to energy wastage and high electricity bills.',
    solution: 'An ESP32-based IoT system with current/voltage sensors (PZEM-004T) that monitors energy usage per outlet, displays data on a TFT LCD, and sends alerts via MQTT when thresholds exceed.',
    components: ['ESP32 DevKit', 'PZEM-004T Energy Meter', '1.8" TFT LCD', 'ACS712 Current Sensor', '5V Relay Module', 'DS3231 RTC'],
    software: ['Arduino IDE', 'MQTT (Mosquitto)', 'Node-RED', 'InfluxDB', 'Grafana'],
    ai: 'LSTM neural network on a cloud backend predicts next-day energy usage based on historical patterns and provides smart scheduling suggestions.',
    applications: ['Smart homes', 'Industrial energy audit', 'Solar panel monitoring', 'EV charging management'],
    category: 'embedded'
  },
  {
    id: 'emb-2',
    title: 'RTOS-Based Multi-Sensor Data Logger',
    difficulty: 'Advanced',
    cost: '₹3,000 – ₹6,000',
    problem: 'Industrial environments require simultaneous acquisition from multiple sensors with strict timing guarantees and safe data storage.',
    solution: 'STM32F4 running FreeRTOS with separate tasks for each sensor (BME280, MPU6050, DS18B20), mutex-protected SD card logging, and UART telemetry dashboard.',
    components: ['STM32F407 Discovery', 'BME280 (Temp/Humidity/Pressure)', 'MPU-6050 IMU', 'DS18B20 Temp Sensor', 'MicroSD Module', 'OLED 128x64'],
    software: ['STM32CubeIDE', 'FreeRTOS', 'HAL Library', 'Python (PC Dashboard)'],
    ai: 'Anomaly detection using Isolation Forest model on collected sensor data to flag abnormal readings in real-time.',
    applications: ['Weather stations', 'Industrial monitoring', 'Aviation black box', 'Agricultural sensors'],
    category: 'embedded'
  },
  {
    id: 'emb-3',
    title: 'Smart Door Lock with Face Recognition',
    difficulty: 'Advanced',
    cost: '₹5,000 – ₹9,000',
    problem: 'Traditional locks are easily compromised. A contactless, intelligent access control solution is needed for homes and offices.',
    solution: 'Raspberry Pi + OpenCV runs face recognition via Pi Camera. Arduino controls the servo-based deadbolt. Unauthorized attempts trigger buzzer and GSM alert.',
    components: ['Raspberry Pi 4', 'Arduino Nano', 'Pi Camera V2', 'SG90 Servo', 'SIM800L GSM Module', '4x4 Matrix Keypad'],
    software: ['Python', 'OpenCV', 'face_recognition library', 'SQLite', 'Raspberry Pi OS'],
    ai: 'CNN-based face recognition with 97%+ accuracy using LBPH algorithm for real-time identification even in low-light conditions.',
    applications: ['Home security', 'Office access control', 'Attendance system', 'Safe vault'],
    category: 'embedded'
  },
  {
    id: 'emb-4',
    title: 'Autonomous Line-Following Robot with Obstacle Avoidance',
    difficulty: 'Beginner',
    cost: '₹1,200 – ₹2,500',
    problem: 'Manual material handling in warehouses is time-consuming and error-prone. Automated guided vehicles offer efficiency.',
    solution: 'Arduino Uno robot with 5-channel IR sensor array follows black tape lines. HC-SR04 ultrasonic sensor detects and avoids obstacles using PID control for smooth navigation.',
    components: ['Arduino Uno', '5-Channel IR Sensor', 'HC-SR04 Ultrasonic', 'L298N Motor Driver', 'DC Gear Motors x2', 'LiPo Battery'],
    software: ['Arduino IDE', 'Processing IDE (visualizer)'],
    ai: 'Q-learning reinforcement algorithm enables the robot to optimize path selection after multiple runs through a maze.',
    applications: ['Warehouse automation', 'Hospital delivery bots', 'Educational robotics', 'Agricultural bots'],
    category: 'embedded'
  },
  {
    id: 'emb-5',
    title: 'Air Quality Monitoring Station',
    difficulty: 'Intermediate',
    cost: '₹2,000 – ₹3,500',
    problem: 'Indoor and outdoor air pollution is a silent health hazard. Real-time AQI monitoring with alerts is critically needed.',
    solution: 'ESP8266 NodeMCU reads PM2.5 (PMS7003), CO2 (MH-Z19B), TVOC, and temperature/humidity. Data pushed to ThingSpeak cloud with mobile alerts when AQI exceeds safe limits.',
    components: ['ESP8266 NodeMCU', 'PMS7003 PM2.5 Sensor', 'MH-Z19B CO2 Sensor', 'SGP30 TVOC Sensor', 'DHT22', 'WS2812B LED Ring'],
    software: ['Arduino IDE', 'ThingSpeak', 'IFTTT', 'Blynk'],
    ai: 'Gradient Boosting model trained on AQI datasets predicts pollution spikes 2 hours in advance based on weather and traffic patterns.',
    applications: ['Smart cities', 'Factory safety', 'Schools & hospitals', 'Personal health monitoring'],
    category: 'embedded'
  },
  {
    id: 'emb-6',
    title: 'CAN Bus Vehicle Diagnostics System',
    difficulty: 'Advanced',
    cost: '₹4,000 – ₹7,000',
    problem: 'Mechanics rely on expensive OBD-II scanners. A DIY embedded system for real-time vehicle data logging is economical and educational.',
    solution: 'STM32 with MCP2515 CAN controller reads OBD-II PIDs from vehicle ECU. Data displayed on a 3.5" TFT and logged to SD card. Alerts for engine faults via buzzer.',
    components: ['STM32F103', 'MCP2515 CAN Module', 'OBD-II Connector', '3.5" TFT Display', 'MicroSD Module', 'NEO-6M GPS'],
    software: ['STM32CubeIDE', 'Python (PC analysis)', 'MATLAB'],
    ai: 'SVM classifier trained on OBD-II fault codes predicts potential component failure 50-100 hours in advance.',
    applications: ['Fleet management', 'Vehicle tracking', 'Predictive maintenance', 'Race car telemetry'],
    category: 'embedded'
  },
  {
    id: 'emb-7',
    title: 'Smart Agriculture Irrigation Controller',
    difficulty: 'Intermediate',
    cost: '₹3,000 – ₹5,500',
    problem: 'Water scarcity and manual irrigation lead to crop loss. An intelligent, automated irrigation system can optimize water usage by up to 40%.',
    solution: 'ESP32 reads soil moisture sensors across multiple zones, checks weather API, and controls solenoid valves accordingly. Solar-powered with GSM SMS alerts.',
    components: ['ESP32', 'Capacitive Soil Moisture Sensors x4', 'SIM900A GSM', '12V Solenoid Valves', 'DHT22', '10W Solar Panel + TP4056'],
    software: ['Arduino IDE', 'OpenWeatherMap API', 'Blynk', 'MQTT'],
    ai: 'Evapotranspiration model combined with ML regression predicts optimal irrigation schedule based on crop type, soil, and forecasted weather.',
    applications: ['Precision agriculture', 'Greenhouse management', 'Drip irrigation', 'Drought-prone regions'],
    category: 'embedded'
  },
  {
    id: 'emb-8',
    title: 'Wearable Health Monitor (ECG + SpO2 + Temperature)',
    difficulty: 'Advanced',
    cost: '₹4,500 – ₹8,000',
    problem: 'Continuous health monitoring in hospital patients requires expensive equipment. A wearable BLE device offers mobility and cost reduction.',
    solution: 'nRF52840 BLE SoC reads MAX30102 (SpO2/HR), AD8232 (ECG), and MLX90614 (IR temp). Data streamed via BLE to mobile app with anomaly alerts.',
    components: ['nRF52840 DK', 'MAX30102 SpO2 Sensor', 'AD8232 ECG Module', 'MLX90614 IR Temp', 'LiPo 400mAh', 'Custom flex PCB'],
    software: ['Zephyr RTOS', 'Nordic SDK', 'Android Studio (companion app)', 'Python (data analysis)'],
    ai: 'LSTM-based arrhythmia detection model runs on-device using TensorFlow Lite Micro, achieving <50ms inference latency.',
    applications: ['Patient monitoring', 'Sports performance', 'Elderly care', 'Telemedicine'],
    category: 'embedded'
  },
  {
    id: 'emb-9',
    title: 'Digital Oscilloscope with FFT Analyzer',
    difficulty: 'Intermediate',
    cost: '₹2,000 – ₹4,000',
    problem: 'Bench oscilloscopes cost ₹20,000+. A portable, embedded DSO can serve educational purposes and basic debugging needs.',
    solution: 'STM32 with high-speed ADC samples signals at 1MSPS, displays waveform on 320x240 LCD with time/voltage scaling, triggers, and FFT spectrum analysis.',
    components: ['STM32F303', 'Op-Amp Input Stage', '320x240 ILI9341 TFT', 'Rotary Encoder', 'Analog Input Conditioning Circuit'],
    software: ['STM32CubeIDE', 'CMSIS-DSP Library', 'Python (calibration)'],
    ai: 'Signal classification model identifies common waveform types (sine, square, triangle, noise) and measures THD automatically.',
    applications: ['Electronics labs', 'Field debugging', 'Education', 'Audio electronics'],
    category: 'embedded'
  },
  {
    id: 'emb-10',
    title: 'Industrial Motor Speed Controller (FOC)',
    difficulty: 'Advanced',
    cost: '₹6,000 – ₹12,000',
    problem: 'VFDs (Variable Frequency Drives) are expensive and proprietary. An open-source BLDC/PMSM controller with Field-Oriented Control is needed.',
    solution: 'STM32G4 implements FOC algorithm with 20kHz PWM, current sensing (INA240), encoder feedback, CAN interface, and over-current/over-temp protection.',
    components: ['STM32G474', 'IPM (Integrated Power Module)', 'INA240 Current Sense Amp', 'AMT102 Encoder', 'LEM CASR Hall Sensor', 'GaN Gate Driver'],
    software: ['STM32CubeIDE', 'MATLAB Simulink', 'SimpleFOC Library'],
    ai: 'Reinforcement learning-based auto-tuning of PID gains adapts to different motor loads in real-time.',
    applications: ['CNC machines', 'Drones', 'EV motors', 'Industrial pumps'],
    category: 'embedded'
  },
  {
    id: 'emb-11',
    title: 'Smart Parking System with ANPR',
    difficulty: 'Advanced',
    cost: '₹7,000 – ₹14,000',
    problem: 'Manual parking management wastes time and has high human error rates. Automated number plate recognition enables frictionless entry/exit.',
    solution: 'Raspberry Pi with Pi Camera captures vehicle plates at entry/exit. OpenALPR processes plates; barrier servo opens automatically. ESP32 manages slot sensors and LED display.',
    components: ['Raspberry Pi 4 4GB', 'Pi Camera HQ', 'ESP32', 'IR Proximity Sensors', 'Servo Motor', '32x8 LED Matrix'],
    software: ['Python', 'OpenALPR', 'SQLite', 'Flask', 'Android App (Kotlin)'],
    ai: 'YOLO-based number plate detection with 95%+ accuracy in various lighting conditions, integrated with OCR for character recognition.',
    applications: ['Commercial complexes', 'Airports', 'Hospitals', 'Residential gated communities'],
    category: 'embedded'
  },
  {
    id: 'emb-12',
    title: 'Underwater ROV with Depth Control',
    difficulty: 'Advanced',
    cost: '₹10,000 – ₹20,000',
    problem: 'Underwater inspection of pipelines, ship hulls, and submerged structures is dangerous and costly with human divers.',
    solution: 'Custom ROV with 4 brushless thrusters (T100 from BlueRobotics), Raspberry Pi + Arduino for control, depth-hold using MS5837 pressure sensor, live FHD video via tether.',
    components: ['Raspberry Pi 3B+', 'Arduino Mega', 'T100 Thrusters x4', 'MS5837 Depth Sensor', 'IMU MPU9250', 'IP68 Camera Module'],
    software: ['ArduSub', 'QGroundControl', 'Python OpenCV'],
    ai: 'Neural network trained to detect corrosion, biofouling, and cracks from live video feed with real-time bounding box annotation.',
    applications: ['Pipeline inspection', 'Marine research', 'Search & rescue', 'Defense surveillance'],
    category: 'embedded'
  },
  {
    id: 'emb-13',
    title: 'Wireless Battery Management System (BMS)',
    difficulty: 'Advanced',
    cost: '₹5,000 – ₹9,000',
    problem: 'Li-ion battery packs in e-bikes and EVs require precise cell balancing and protection. Wireless monitoring adds convenience.',
    solution: 'Custom 4S BMS with STM32 monitors cell voltages (BQ76940), temperature, and state-of-charge. Active balancing with LTC3300. BLE advertising telemetry to phone.',
    components: ['STM32L476', 'BQ76940 Battery Monitor IC', 'LTC3300 Active Balancer', 'ACS723 Current Sensor', 'NRF52 BLE Module', 'Thermal Sensors'],
    software: ['STM32CubeIDE', 'Python BLE Client', 'MATLAB (SOC algorithm)'],
    ai: 'Kalman Filter + ML-based State of Health estimation predicts remaining battery life with 98% accuracy.',
    applications: ['E-bikes', 'Solar storage', 'Power tools', 'UPS systems'],
    category: 'embedded'
  },
  {
    id: 'emb-14',
    title: 'Smart Library Book Tracking (RFID + IoT)',
    difficulty: 'Beginner',
    cost: '₹1,500 – ₹3,000',
    problem: 'Manual book tracking in libraries is inefficient. RFID automates check-in/check-out and enables real-time inventory.',
    solution: 'ESP32 with RC522 RFID reader scans book tags. Data synced to Firebase. LCD shows borrower info. Door buzzer if book exits without check-out. Web admin panel for librarians.',
    components: ['ESP32', 'MFRC522 RFID Reader', 'RFID Tags (13.56MHz)', '16x2 LCD I2C', 'Buzzer', 'Push Buttons'],
    software: ['Arduino IDE', 'Firebase Realtime DB', 'HTML/CSS/JS (Web Panel)'],
    ai: 'Recommendation engine based on borrowing history suggests books to students using collaborative filtering.',
    applications: ['College libraries', 'School libraries', 'Asset tracking', 'Hospital equipment tracking'],
    category: 'embedded'
  },
  {
    id: 'emb-15',
    title: 'Seismic Activity Monitor & Earthquake Early Warning',
    difficulty: 'Intermediate',
    cost: '₹3,500 – ₹6,000',
    problem: 'Earthquake early warning systems save lives but are expensive national infrastructure. A low-cost node for dense sensor networks can improve coverage.',
    solution: 'STM32 + ADXL345 tri-axis accelerometer detects P-waves. Processes seismic data locally. If magnitude threshold exceeded, broadcasts alert via LoRa mesh network.',
    components: ['STM32F103', 'ADXL345 Accelerometer', 'SX1278 LoRa Module', 'GPS NEO-6M', 'Solar Cell + Battery', 'Weatherproof Enclosure'],
    software: ['Arduino IDE', 'STM32CubeIDE', 'Python (analysis)'],
    ai: 'Frequency domain CNN classifies seismic events vs. noise (trucks, construction) with 94% accuracy reducing false alarms.',
    applications: ['Disaster management', 'Building monitoring', 'Mining safety', 'Volcano monitoring'],
    category: 'embedded'
  },
  {
    id: 'emb-16',
    title: 'Smart Greenhouse Automation (Complete Solution)',
    difficulty: 'Intermediate',
    cost: '₹4,000 – ₹7,500',
    problem: 'Plant growth is sensitive to micro-climate conditions. Manual monitoring misses critical windows, causing crop loss.',
    solution: 'ESP32 mesh network monitors temperature, humidity, soil moisture, CO2, and light intensity across a greenhouse. Automated vents, fans, irrigation, and grow lights via relay control.',
    components: ['ESP32 x4 (mesh network)', 'SHT31 Sensors', 'BH1750 Light Sensor', 'MH-Z19 CO2', 'Relay Modules x8', 'Peristaltic Pumps'],
    software: ['MicroPython', 'MQTT', 'Node-RED', 'InfluxDB + Grafana'],
    ai: 'Plant disease detection via camera image analysis using MobileNetV2 fine-tuned on plant disease dataset (Plant Village).',
    applications: ['Commercial greenhouses', 'Urban farming', 'Research facilities', 'Vertical farms'],
    category: 'embedded'
  },
  {
    id: 'emb-17',
    title: 'LoRa-Based Smart Metering Network',
    difficulty: 'Advanced',
    cost: '₹8,000 – ₹15,000',
    problem: 'Remote water/electricity meters in rural areas are hard to read manually. LoRaWAN enables long-range IoT connectivity without cellular costs.',
    solution: 'Multiple LoRa End Nodes (ATSAMR34) read meters and transmit encrypted data to a LoRaWAN gateway. TTN network server routes data to a billing backend.',
    components: ['ATSAMR34 LoRa SoC', 'SX1301 LoRaWAN Gateway', 'Pulse counter + Hall sensors', 'Solar + LiPo', 'Enclosure IP65'],
    software: ['The Things Network', 'MQTT', 'Node.js Backend', 'MySQL'],
    ai: 'Time-series anomaly detection flags unusual consumption patterns that may indicate meter tampering or leakage.',
    applications: ['Rural electrification', 'Water utilities', 'Gas metering', 'Smart villages'],
    category: 'embedded'
  },
  {
    id: 'emb-18',
    title: 'Electronic Braille Display for Visually Impaired',
    difficulty: 'Advanced',
    cost: '₹6,000 – ₹12,000',
    problem: 'Braille books are bulky and expensive. A refreshable electronic braille display can render any digital text affordably.',
    solution: 'Custom piezoelectric actuator array (6 pins per cell, 4 cells) controlled by PIC32. Text received via Bluetooth from phone/PC. Content refreshes with character step buttons.',
    components: ['PIC32MX', 'Piezoelectric Actuators', 'ULN2803 Driver Arrays', 'HC-05 Bluetooth', 'Custom PCB', 'ABS Enclosure'],
    software: ['MPLAB X IDE', 'XC32 Compiler', 'Android App (TTS)'],
    ai: 'On-device TTS (text-to-speech) using lightweight WaveNet-lite model converts any text to audio simultaneously with braille output.',
    applications: ['Visually impaired education', 'Libraries', 'Government offices', 'Digital accessibility'],
    category: 'embedded'
  },
  {
    id: 'emb-19',
    title: 'Modular Synthesizer – Embedded Audio Engine',
    difficulty: 'Advanced',
    cost: '₹5,000 – ₹10,000',
    problem: 'Eurorack modular synthesizers cost ₹50,000+. An open-source embedded digital/analog hybrid synthesizer is accessible for music technologists.',
    solution: 'STM32H7 generates audio at 48kHz/24-bit using DAC + I2S. Implements VCO (wavetable), VCF (Moog ladder), VCA, ADSR envelope. CV/Gate I/O with MCP4922 DAC.',
    components: ['STM32H743', 'PCM5102A I2S DAC', 'MCP4922 CV DAC', 'TL072 Op-Amps', 'Potentiometers x12', 'Eurorack PSU'],
    software: ['STM32CubeIDE', 'CMSIS-DSP', 'Python (patch editor)'],
    ai: 'Neural audio synthesis network generates novel timbres from latent space exploration using RAVE (Realtime Audio Variational autoEncoder).',
    applications: ['Music production', 'Sound design', 'Live performance', 'Audio research'],
    category: 'embedded'
  },
  {
    id: 'emb-20',
    title: 'Exoskeleton Rehabilitation Glove (Stroke Patients)',
    difficulty: 'Advanced',
    cost: '₹12,000 – ₹25,000',
    problem: 'Stroke patients need repetitive hand rehabilitation therapy. Robotic exoskeleton gloves provide consistent, controlled therapy without constant therapist supervision.',
    solution: 'Servo-actuated finger exoskeleton controlled by STM32. EMG sensors (MyoWare) detect patient muscle intent. Adaptive compliance control provides assistance-as-needed therapy.',
    components: ['STM32F7', 'MG92B Mini Servos x5', 'MyoWare EMG Sensor x2', 'AS5048 Magnetic Encoder', 'IMU MPU6050', 'Li-Po 7.4V'],
    software: ['STM32CubeIDE', 'FreeRTOS', 'MATLAB Simulink', 'Python (data logging)'],
    ai: 'SVM + LSTM hybrid model decodes EMG signals to predict intended finger movements with 92% accuracy, enabling thought-controlled rehabilitation.',
    applications: ['Stroke rehabilitation', 'Hand injury recovery', 'CP therapy', 'Elderly motor function'],
    category: 'embedded'
  }
];

// ---- VLSI PROJECTS ----
const VLSI_PROJECTS = [
  {
    id: 'vlsi-1',
    title: '4-bit RISC Processor Core in Verilog',
    difficulty: 'Intermediate',
    cost: 'Software only (free EDA tools)',
    problem: 'Understanding computer architecture requires hands-on implementation. A minimal RISC processor clarifies instruction set design, data paths, and control logic.',
    solution: '4-bit processor with 8 instructions (ADD, SUB, AND, OR, LOAD, STORE, JMP, NOP), register file, ALU, PC, and instruction memory. Simulated in ModelSim and synthesized for FPGA.',
    components: ['FPGA (Basys3)', 'VGA Monitor', 'USB-UART Bridge'],
    software: ['Vivado', 'ModelSim', 'GTKWave', 'Verilog HDL'],
    ai: 'Neural network-assisted functional verification generates corner-case test vectors beyond random simulation.',
    applications: ['CPU design learning', 'ISA research', 'ASIC tapeout education', 'Computer architecture courses'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-2',
    title: '32-bit ALU Design with Full Verification Testbench',
    difficulty: 'Beginner',
    cost: 'Software only',
    problem: 'ALU verification is a fundamental VLSI skill. A comprehensive testbench covering all operations and edge cases is essential for ASIC sign-off.',
    solution: 'SystemVerilog 32-bit ALU supporting 16 operations (arithmetic, logical, shift, compare). UVM-compliant testbench with functional coverage, assertions, and constrained random simulation.',
    components: [],
    software: ['ModelSim', 'QuestaSim', 'SystemVerilog', 'UVM', 'Python (coverage report)'],
    ai: 'ML-guided test generation (coverage-directed generation) using Q-learning maximizes functional coverage 30% faster than pure random.',
    applications: ['ASIC verification', 'Processor design', 'Custom compute accelerators', 'VLSI coursework'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-3',
    title: 'AES-128 Hardware Accelerator (ASIC-ready)',
    difficulty: 'Advanced',
    cost: '₹0 (tools) + ₹2L for ASIC tapeout (optional)',
    problem: 'Software AES encryption is too slow for high-throughput applications. Hardware accelerators achieve Gbps throughput with milliwatt power.',
    solution: 'Pipelined AES-128 encrypt/decrypt core in Verilog with 10-stage pipeline. 128-bit datapath, 1 cipher/clock cycle throughput. Synthesized on sky130 PDK via OpenLane.',
    components: ['FPGA (Artix-7) for prototyping'],
    software: ['Vivado', 'OpenLane', 'sky130 PDK', 'Verilog', 'Python (golden reference)'],
    ai: 'Power analysis using ML regression model estimates leakage power per cell during synthesis for early power budgeting.',
    applications: ['Secure communication ICs', 'Payment chips', 'TLS accelerators', 'Automotive HSMs'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-4',
    title: 'SRAM 6T Cell Design & Analysis (28nm)',
    difficulty: 'Advanced',
    cost: 'PDK access required',
    problem: 'Cache memory design requires deep understanding of 6T SRAM stability (SNM), write margin, and read disturb at different PVT corners.',
    solution: '6T SRAM bitcell designed in Cadence Virtuoso (28nm CMOS). Full characterization: DC SNM butterfly curves, read/write timing, process variation Monte Carlo (1000 runs).',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre', 'MATLAB (SNM analysis)', 'Calibre (DRC/LVS)'],
    ai: 'Gaussian Process regression ML model predicts SRAM yield across PVT corners from limited SPICE simulation data.',
    applications: ['CPU caches', 'Register files', 'Neural network weight storage', 'Mobile SoC'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-5',
    title: 'UART-to-SPI Bridge IP Core',
    difficulty: 'Beginner',
    cost: 'Software only',
    problem: 'Interfacing legacy UART systems with modern SPI peripherals requires a reliable protocol conversion bridge that can be implemented as a synthesizable IP.',
    solution: 'Synthesizable Verilog IP core that receives UART frames and converts to SPI transactions (CPOL/CPHA configurable). Parameterized baud rate and SPI clock. APB slave interface for configuration.',
    components: ['FPGA (Artix-7)', 'USB-UART Cable'],
    software: ['Vivado', 'Verilog', 'ModelSim', 'Logic analyzer software'],
    ai: 'Formal verification using JasperGold proves zero deadlock and correct protocol translation for all legal input sequences.',
    applications: ['SoC integration', 'Protocol bridge chips', 'Test equipment', 'Embedded systems'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-6',
    title: 'High-Speed DDR4 PHY Model (Behavioral)',
    difficulty: 'Advanced',
    cost: 'Software only',
    problem: 'DDR4 PHY design requires accurate behavioral modeling for system-level simulation before committing to expensive silicon.',
    solution: 'SystemVerilog DDR4 PHY behavioral model covering DQ/DQS training, ZQ calibration, power-down modes, and burst lengths. Co-simulated with open-source memory controller.',
    components: [],
    software: ['QuestaSim', 'SystemVerilog', 'Python (memory traffic generator)'],
    ai: 'Reinforcement learning agent automatically tunes DDR4 training parameters (Vref, DQ delay) to maximize timing margin.',
    applications: ['Server memory subsystems', 'AI training hardware', 'Network processors', 'Mobile SoCs'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-7',
    title: 'Low-Power Ring Oscillator PLL Design',
    difficulty: 'Advanced',
    cost: 'PDK required',
    problem: 'Clock generation circuits are fundamental to every digital IC. Designing a PLL from scratch covers analog and digital VLSI concepts comprehensively.',
    solution: '3-stage ring oscillator VCO, charge-pump PLL with programmable divide ratio (N=8-256), lock detector, spread-spectrum modulation for EMI reduction. Designed in 180nm CMOS.',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre', 'Python (loop filter design)', 'Calibre'],
    ai: 'Bayesian optimization automatically finds optimal charge pump current and loop filter values to minimize jitter within 5 minutes.',
    applications: ['Microprocessors', 'RF transceivers', 'SERDES', 'Clock generators'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-8',
    title: 'Systolic Array for Matrix Multiplication (TPU-lite)',
    difficulty: 'Advanced',
    cost: 'Software only',
    problem: 'Deep learning inference requires massive matrix multiply operations. Systolic array architecture achieves maximum data reuse with minimal memory bandwidth.',
    solution: '8x8 systolic array in Verilog with 8-bit weights and 16-bit activations. Supports weight-stationary and output-stationary dataflows. 120 GOPS at 500MHz on Zynq UltraScale+.',
    components: ['Xilinx Zynq UltraScale+ (ZCU104)'],
    software: ['Vivado', 'Verilog', 'Python (TFLite integration)', 'Xilinx Vitis AI'],
    ai: 'The systolic array itself is the AI hardware. Demonstrates inference of ResNet-8 (CIFAR-10) at 500fps.',
    applications: ['Edge AI inference', 'NPU research', 'Computer vision accelerators', 'Autonomous systems'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-9',
    title: 'Flash ADC Design (6-bit, 500MSPS)',
    difficulty: 'Advanced',
    cost: 'PDK required',
    problem: 'High-speed ADCs for wireless receivers require sub-nanosecond conversion. Flash ADC topology achieves maximum speed at the cost of area.',
    solution: '6-bit flash ADC with 63 comparators (StrongARM latches), resistor ladder reference, and thermometer-to-binary encoder. Designed in 65nm CMOS targeting 500MSPS.',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre', 'Verilog (encoder model)'],
    ai: 'ML-based offset calibration technique compensates comparator offsets using measured histogram data, improving ENOB by 0.8 bits.',
    applications: ['5G receivers', 'Software-defined radio', 'Radar', 'Optical communications'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-10',
    title: 'RISC-V RV32I Core Implementation',
    difficulty: 'Advanced',
    cost: 'Software only',
    problem: 'RISC-V is the open-source ISA of the future. Implementing a compliant RV32I core builds foundational processor design expertise.',
    solution: '5-stage pipeline RV32I core: IF, ID, EX, MEM, WB. Hazard detection, data forwarding, branch prediction (1-bit). Boots FreeRTOS. Synthesized on FPGA and passes RISC-V ISA test suite.',
    components: ['FPGA (Digilent Nexys4 DDR)'],
    software: ['Vivado', 'Verilog', 'GCC RISC-V toolchain', 'GTKWave'],
    ai: 'Branch predictor uses perceptron-based ML algorithm improving prediction accuracy to 94% on SPEC benchmarks.',
    applications: ['Open-source CPU design', 'Embedded RISC-V SoC', 'Security research (RISC-V extensions)', 'Academic research'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-11',
    title: 'Bandgap Voltage Reference (1.2V, CMOS 180nm)',
    difficulty: 'Intermediate',
    cost: 'PDK required',
    problem: 'Stable voltage references are critical for ADCs, DACs, and regulators. A CMOS bandgap reference achieving <10ppm/°C TC is a key analog VLSI skill.',
    solution: 'Curvature-compensated bandgap reference using BJT (substrate PNP) in 180nm CMOS. TC < 8ppm/°C from -40 to 125°C. Output trimming via 4-bit DAC.',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre', 'MATLAB (TC analysis)'],
    ai: 'Neural network post-silicon trimming algorithm identifies optimal bit code for each die to compensate process variation.',
    applications: ['ADC/DAC references', 'PMIC', 'LDO regulators', 'Sensor ICs'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-12',
    title: 'OFDM Baseband Processor (802.11a)',
    difficulty: 'Advanced',
    cost: 'Software only',
    problem: 'WiFi baseband processing is computationally intensive. A hardware OFDM processor demonstrates real-world DSP-VLSI co-design.',
    solution: 'Verilog OFDM processor for 802.11a: 64-point FFT, channel estimation (LS), QPSK/16QAM/64QAM modulation, Viterbi decoder (rate 1/2, 2/3, 3/4), AGC.',
    components: ['Xilinx Zynq-7000 (ZC702)'],
    software: ['Vivado', 'Verilog', 'MATLAB (verification)', 'Xilinx HLS'],
    ai: 'Deep learning-based channel estimator (DnCNN) replaces LS estimation, improving SNR by 3dB in multipath environments.',
    applications: ['WiFi chips', '5G baseband', 'DVB-T receivers', 'Cognitive radio'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-13',
    title: 'Open-Lane ASIC Tapeout (sky130 PDK)',
    difficulty: 'Advanced',
    cost: '₹0 (MPW shuttle: free via efabless)',
    problem: 'ASIC tapeout is considered prohibitively expensive for students. The Google-sponsored sky130 shuttle enables free chip fabrication.',
    solution: 'Design any digital IP (e.g., 8-bit CPU, FIR filter, PUF) and take it through complete RTL-to-GDS flow: synthesis → P&R → DRC/LVS → tapeout via OpenLane automation.',
    components: ['Die area: 1mm x 1mm', 'Packaging: QFN-64'],
    software: ['OpenLane', 'sky130 PDK', 'KLayout', 'Magic', 'Yosys', 'OpenROAD'],
    ai: 'ML-based floorplanning using reinforcement learning (DREAMPlace) reduces wirelength by 15% vs. simulated annealing.',
    applications: ['Custom IC fabrication', 'Research prototype', 'ASIC education', 'Open-source chip ecosystem'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-14',
    title: 'Physical Unclonable Function (PUF) for IoT Security',
    difficulty: 'Intermediate',
    cost: 'Software only',
    problem: 'IoT devices need unique, unclonable cryptographic identities. PUFs exploit manufacturing variations to generate device fingerprints.',
    solution: 'Ring Oscillator PUF (128-bit) and Arbiter PUF in Verilog. Measured on Xilinx Artix-7. Uniqueness >48%, reliability >99% across voltage/temperature. Challenge-Response Pair database.',
    components: ['Xilinx Artix-7 (Basys3)'],
    software: ['Vivado', 'Verilog', 'Python (CRP analysis, ML CRP prediction)'],
    ai: 'XOR Arbiter PUF with 64-bit challenge modeled by logistic regression — demonstrates ML vulnerability of weak PUFs and motivates strong PUF design.',
    applications: ['IoT device authentication', 'Anti-counterfeiting', 'Hardware root of trust', 'Secure boot'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-15',
    title: 'Low Dropout Regulator (LDO) Full Custom Design',
    difficulty: 'Advanced',
    cost: 'PDK required',
    problem: 'Every SoC needs clean, stable power rails. Custom LDO design is a core analog VLSI competency requiring stability analysis and layout matching.',
    solution: 'CMOS LDO with PMOS pass device, error amplifier (folded cascode), bandgap reference, soft-start, and load regulation < 0.5%. Layout with common-centroid matching for low noise.',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre', 'Python (Bode plot)', 'Calibre DRC/LVS'],
    ai: 'Automated compensation network sizing using genetic algorithm optimizes phase margin and transient response simultaneously.',
    applications: ['Mobile SoC power management', 'RF circuits', 'Sensor ICs', 'Wearable electronics'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-16',
    title: 'NOR Flash Memory Array Design',
    difficulty: 'Advanced',
    cost: 'PDK required',
    problem: 'Non-volatile memory design is fundamental to storage ICs. Understanding NOR flash erase/program/read operations at transistor level is essential.',
    solution: '4KB NOR flash array (128 rows x 256 columns) with SONOS cells. Charge pump for high-voltage (12V) erase. Sense amplifier, row/column decoders, controller FSM.',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre', 'Verilog (FSM controller)'],
    ai: 'Wear-leveling algorithm using reinforcement learning extends flash endurance by 40% compared to static wear leveling.',
    applications: ['Code storage in MCUs', 'BIOS chips', 'Embedded NOR flash', 'Automotive ECUs'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-17',
    title: 'Convolutional Neural Network Hardware Accelerator',
    difficulty: 'Advanced',
    cost: 'Software only / FPGA',
    problem: 'Real-time CNN inference on edge devices is constrained by power and latency. Custom VLSI accelerators bridge this gap.',
    solution: 'Verilog CNN accelerator with configurable MAC array (16x16), on-chip weight cache (BRAM), activation functions (ReLU, Sigmoid) in LUT, INT8 quantization for low power.',
    components: ['Xilinx Zynq UltraScale+ ZCU102'],
    software: ['Vivado', 'Verilog/SystemVerilog', 'Xilinx Vitis AI', 'Python/TensorFlow Lite'],
    ai: 'The hardware itself accelerates quantized CNN inference. Achieves 15 TOPS/W efficiency on face detection benchmark.',
    applications: ['Edge AI cameras', 'Autonomous vehicles', 'Industrial inspection', 'Smart IoT'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-18',
    title: 'Static Timing Analysis (STA) Flow Implementation',
    difficulty: 'Intermediate',
    cost: 'Software only',
    problem: 'Timing closure is a critical VLSI backend challenge. Building an STA tool from scratch deepens understanding of setup/hold analysis, path grouping, and constraint propagation.',
    solution: 'Python-based STA tool parsing Liberty (.lib) and Verilog netlist. Topological sort for timing propagation, setup/hold slack computation, clock domain crossing detection, and timing report generation.',
    components: [],
    software: ['Python', 'NetworkX', 'NumPy', 'OpenSTA (for validation)'],
    ai: 'ML timing model (GNN on circuit graph) predicts critical path slack with 98% correlation to SPICE, 1000x faster than transistor-level simulation.',
    applications: ['EDA tool development', 'Backend VLSI jobs', 'Design closure', 'Physical design automation'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-19',
    title: 'RF Low Noise Amplifier Design (2.4GHz, 65nm)',
    difficulty: 'Advanced',
    cost: 'PDK required',
    problem: 'Receiver front-ends require ultra-low noise amplification. LNA design at 2.4GHz (WiFi/BT band) is a key RF VLSI skill.',
    solution: 'Inductive source-degenerated cascode LNA in 65nm CMOS. Noise figure < 1.5dB, gain > 20dB, IIP3 > -5dBm, power < 5mW. S-parameter characterization and noise optimization.',
    components: [],
    software: ['Cadence Virtuoso', 'Spectre RF', 'ADS (validation)', 'Python (S-param plots)'],
    ai: 'Surrogate model-based optimization (Kriging) finds optimal transistor sizing and inductor geometry to meet all specs in 10 iterations.',
    applications: ['WiFi/BT chips', 'GPS receivers', '5G NR front-ends', 'Software-defined radio ICs'],
    category: 'vlsi'
  },
  {
    id: 'vlsi-20',
    title: 'DFT (Design For Testability) – Scan Chain Implementation',
    difficulty: 'Intermediate',
    cost: 'Software only',
    problem: 'Post-silicon testing requires 99.9%+ fault coverage. Scan chain insertion is mandatory for high-volume manufacturing test.',
    solution: 'RTL design modified with scan flip-flops. Synopsys TetraMAX generates ATPG patterns achieving 99.5% stuck-at fault coverage. BIST controller for autonomous testing without ATE.',
    components: ['FPGA (for BIST validation)'],
    software: ['Synopsys DC', 'TetraMAX ATPG', 'VCS', 'Python (fault simulation)'],
    ai: 'Deep learning-based pattern compaction reduces test time by 40% while maintaining fault coverage using pattern selection neural network.',
    applications: ['ASIC manufacturing test', 'SoC validation', 'Yield improvement', 'Automotive IC qualification'],
    category: 'vlsi'
  }
];

const ALL_PROJECTS = [...EMBEDDED_PROJECTS, ...VLSI_PROJECTS];
