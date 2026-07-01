/* ============================================
   ECE CAREER HUB — DATA (v2.0)
   Real company career URLs + Real project ideas
   from ECE & VLSI Final Year Projects Chart
   ============================================ */

// ---- 20 CAREER DOMAIN CATEGORIES ----
const ECE_CATEGORIES = [
  { id: 'embedded-systems',      name: 'Embedded Systems',      icon: '🔬', gradient: 'linear-gradient(135deg,#ff6b9d,#c850c0)', desc: 'MCU, RTOS, bare-metal, drivers' },
  { id: 'vlsi',                  name: 'VLSI',                  icon: '💎', gradient: 'linear-gradient(135deg,#c850c0,#4158d0)', desc: 'Chip design, layout, verification' },
  { id: 'semiconductor',         name: 'Semiconductor',         icon: '⚡', gradient: 'linear-gradient(135deg,#4158d0,#0093e9)', desc: 'Fab, process, devices' },
  { id: 'pcb-design',            name: 'PCB Design',            icon: '🖥️', gradient: 'linear-gradient(135deg,#0093e9,#80d0c7)', desc: 'Schematic, layout, manufacturing' },
  { id: 'iot',                   name: 'IoT',                   icon: '🌐', gradient: 'linear-gradient(135deg,#00c9a7,#92fe9d)', desc: 'Connected devices, protocols' },
  { id: 'robotics',              name: 'Robotics',              icon: '🤖', gradient: 'linear-gradient(135deg,#f7971e,#ffd200)', desc: 'Automation, control, perception' },
  { id: 'automation',            name: 'Automation',            icon: '⚙️', gradient: 'linear-gradient(135deg,#f953c6,#b91d73)', desc: 'PLC, SCADA, industrial control' },
  { id: 'electronics-mfg',       name: 'Electronics Mfg',       icon: '🏭', gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', desc: 'SMT, quality, assembly' },
  { id: 'automotive',            name: 'Automotive Electronics',icon: '🚗', gradient: 'linear-gradient(135deg,#fa709a,#fee140)', desc: 'AUTOSAR, CAN, functional safety' },
  { id: 'fpga',                  name: 'FPGA',                  icon: '🧩', gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', desc: 'HDL, synthesis, prototyping' },
  { id: 'embedded-linux',        name: 'Embedded Linux',        icon: '🐧', gradient: 'linear-gradient(135deg,#ffd89b,#19547b)', desc: 'Yocto, BSP, device drivers' },
  { id: 'firmware',              name: 'Firmware Development',  icon: '💾', gradient: 'linear-gradient(135deg,#96fbc4,#f9f586)', desc: 'Boot, drivers, OTA updates' },
  { id: 'hardware-design',       name: 'Hardware Design',       icon: '🔧', gradient: 'linear-gradient(135deg,#89f7fe,#66a6ff)', desc: 'Analog, digital, mixed-signal' },
  { id: 'testing-validation',    name: 'Testing & Validation',  icon: '🧪', gradient: 'linear-gradient(135deg,#fddb92,#d1fdff)', desc: 'DVT, EVT, compliance' },
  { id: 'signal-processing',     name: 'Signal Processing',     icon: '📡', gradient: 'linear-gradient(135deg,#d299c2,#fef9d7)', desc: 'DSP, filters, FFT' },
  { id: 'wireless-comm',         name: 'Wireless Communication',icon: '📶', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', desc: 'RF, 5G, Bluetooth, WiFi' },
  { id: 'ai-hardware',           name: 'AI Hardware',           icon: '🧠', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', desc: 'NPU, edge AI, ML chips' },
  { id: 'ev-electronics',        name: 'EV Electronics',        icon: '🔋', gradient: 'linear-gradient(135deg,#43e97b,#0f9b58)', desc: 'BMS, power electronics, charging' },
  { id: 'medical-electronics',   name: 'Medical Electronics',   icon: '🏥', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', desc: 'Biosensors, imaging, wearables' },
  { id: 'defence-electronics',   name: 'Defence Electronics',   icon: '🛡️', gradient: 'linear-gradient(135deg,#4481eb,#04befe)', desc: 'Radar, avionics, military grade' }
];

// ---- REAL COMPANY DATA (career page URLs) ----
const COMPANY_DATA = {

  'embedded-systems': [
    { id:'emb-c1', name:'NXP Semiconductors',   url:'https://www.nxp.com/company/about-nxp/careers:CAREERS', desc:'MCU, i.MX, S32 automotive' },
    { id:'emb-c2', name:'STMicroelectronics',   url:'https://careers.st.com',                                 desc:'STM32, STM8, power ICs' },
    { id:'emb-c3', name:'Texas Instruments',     url:'https://careers.ti.com',                                 desc:'MSP430, Sitara, LaunchPad' },
    { id:'emb-c4', name:'Renesas Electronics',   url:'https://careers2.renesas.com',                           desc:'RX, RA, RH850, V850 MCUs' },
    { id:'emb-c5', name:'Microchip Technology',  url:'https://careers.microchip.com',                          desc:'PIC, AVR, SAM, dsPIC' },
    { id:'emb-c6', name:'Espressif Systems',     url:'https://www.espressif.com/en/join-us',                   desc:'ESP32, ESP8266, ESP-IDF' },
    { id:'emb-c7', name:'Nordic Semiconductor',  url:'https://www.nordicsemi.com/About-us/Careers',            desc:'nRF52, nRF53, Zephyr RTOS' },
    { id:'emb-c8', name:'Silicon Labs',          url:'https://jobs.silabs.com',                                desc:'EFR32, EFM32, wireless SoCs' }
  ],

  'vlsi': [
    { id:'vlsi-c1', name:'NVIDIA',     url:'https://careers.nvidia.com',                                     desc:'GPU, CUDA, AI chips — Mar–Apr (N.Ex.T) + Year-round' },
    { id:'vlsi-c2', name:'Qualcomm',   url:'https://careers.qualcomm.com',                                   desc:'Snapdragon, 5G modem — Apr–Jul' },
    { id:'vlsi-c3', name:'AMD',        url:'https://careers.amd.com',                                        desc:'EPYC, Radeon, FPGA — Aug–Nov' },
    { id:'vlsi-c4', name:'Intel',      url:'https://jobs.intel.com',                                         desc:'Core, Xeon, Arc GPU — Aug–Oct' },
    { id:'vlsi-c5', name:'Synopsys',   url:'https://careers.synopsys.com',                                   desc:'EDA tools, DesignWare IP — Jul–Oct' },
    { id:'vlsi-c6', name:'Cadence',    url:'https://www.cadence.com/en_US/home/company/careers.html',        desc:'Virtuoso, Innovus, Sigrity — Jul–Oct' },
    { id:'vlsi-c7', name:'Marvell',    url:'https://www.marvell.com/company/careers.html',                   desc:'Ethernet, storage, HPC SoCs — Aug–Nov' },
    { id:'vlsi-c8', name:'MediaTek',   url:'https://careers.mediatek.com',                                   desc:'Dimensity, HELIO, 5G SoCs — Aug–Oct' }
  ],

  'semiconductor': [
    { id:'semi-c1', name:'Micron Technology',       url:'https://careers.micron.com',                        desc:'DRAM, NAND, 3D XPoint memory' },
    { id:'semi-c2', name:'Applied Materials',        url:'https://careers.appliedmaterials.com',              desc:'CVD, PVD, ALD fab equipment' },
    { id:'semi-c3', name:'Lam Research',             url:'https://careers.lamresearch.com',                   desc:'Etch, deposition, clean systems' },
    { id:'semi-c4', name:'KLA Corporation',          url:'https://careers.kla.com',                           desc:'Process control, inspection tools' },
    { id:'semi-c5', name:'Samsung Semiconductor',    url:'https://semiconductor.samsung.com/us/careers/',     desc:'Foundry, memory, logic — Aug–Nov' },
    { id:'semi-c6', name:'Infineon Technologies',    url:'https://www.infineon.com/cms/en/careers/',          desc:'Power, security, automotive ICs' },
    { id:'semi-c7', name:'Broadcom',                 url:'https://www.broadcom.com/company/careers',          desc:'Networking, storage, wireless ICs' },
    { id:'semi-c8', name:'Western Digital',          url:'https://jobs.westerndigital.com',                   desc:'NAND flash, HDD, storage ICs — Aug–Oct' }
  ],

  'pcb-design': [
    { id:'pcb-c1', name:'Altium',           url:'https://www.altium.com/careers',                 desc:'Altium Designer, Nexus platform' },
    { id:'pcb-c2', name:'Cadence (Allegro)',url:'https://www.cadence.com/en_US/home/company/careers.html', desc:'OrCAD, Allegro PCB Suite' },
    { id:'pcb-c3', name:'Siemens EDA',      url:'https://jobs.siemens.com',                       desc:'Xpedition, PADS, Hyperlynx' },
    { id:'pcb-c4', name:'Zuken',            url:'https://www.zuken.com/en/company/careers/',      desc:'CR-8000, E3.series, CADSTAR' },
    { id:'pcb-c5', name:'Ansys',            url:'https://www.ansys.com/en-in/about-ansys/careers',desc:'Signal/power integrity, thermal' },
    { id:'pcb-c6', name:'JLCPCB',           url:'https://jlcpcb.com/careers',                     desc:'PCB fabrication & assembly' },
    { id:'pcb-c7', name:'PCBWay',           url:'https://www.pcbway.com/company.html',             desc:'Prototyping & production PCBs' },
    { id:'pcb-c8', name:'Eurocircuits',     url:'https://www.eurocircuits.com/about/jobs/',        desc:'European PCB manufacturing' }
  ],

  'iot': [
    { id:'iot-c1', name:'Qualcomm',           url:'https://careers.qualcomm.com',                  desc:'IoT SoCs, WiFi, BT chipsets' },
    { id:'iot-c2', name:'NXP Semiconductors', url:'https://www.nxp.com/company/about-nxp/careers:CAREERS', desc:'i.MX RT, LPC, EdgeVerse' },
    { id:'iot-c3', name:'Silicon Labs',        url:'https://jobs.silabs.com',                       desc:'EFR32, Thread, Zigbee, Matter' },
    { id:'iot-c4', name:'Nordic Semiconductor',url:'https://www.nordicsemi.com/About-us/Careers',   desc:'nRF91 LTE-M, nRF52 BLE' },
    { id:'iot-c5', name:'Amazon (AWS IoT)',    url:'https://www.amazon.jobs',                        desc:'AWS IoT Core, FreeRTOS, Greengrass' },
    { id:'iot-c6', name:'Microsoft (Azure)',   url:'https://careers.microsoft.com',                  desc:'Azure IoT Hub, Edge, Sphere' },
    { id:'iot-c7', name:'Espressif Systems',   url:'https://www.espressif.com/en/join-us',           desc:'ESP32, ESP-IDF, Matter SDK' },
    { id:'iot-c8', name:'MediaTek',            url:'https://careers.mediatek.com',                   desc:'MT7688, NB-IoT, smart home ICs' }
  ],

  'robotics': [
    { id:'rob-c1', name:'Boston Dynamics',    url:'https://bostondynamics.com/careers/',         desc:'Spot, Atlas, Stretch robots' },
    { id:'rob-c2', name:'ABB Robotics',       url:'https://careers.abb.com',                    desc:'Industrial & collaborative robots' },
    { id:'rob-c3', name:'KUKA',               url:'https://www.kuka.com/en-de/company/career',  desc:'Automotive & welding robots' },
    { id:'rob-c4', name:'Universal Robots',   url:'https://www.universal-robots.com/careers/',  desc:'Cobot arms, UR3, UR5, UR10' },
    { id:'rob-c5', name:'Fanuc',              url:'https://www.fanuc.eu/en/career',              desc:'CNC, servo, industrial robots' },
    { id:'rob-c6', name:'iRobot',             url:'https://www.irobot.com/en_US/careers',        desc:'Roomba, autonomous home robots' },
    { id:'rob-c7', name:'NVIDIA Robotics',    url:'https://careers.nvidia.com',                  desc:'Isaac Sim, Jetson, ROS2 AI' },
    { id:'rob-c8', name:'Agility Robotics',   url:'https://www.agilityrobotics.com/careers',    desc:'Digit bipedal robot, logistics' }
  ],

  'automation': [
    { id:'auto-c1', name:'Siemens',              url:'https://jobs.siemens.com',                       desc:'SIMATIC PLC, TIA Portal, drives' },
    { id:'auto-c2', name:'ABB',                  url:'https://careers.abb.com',                        desc:'IRC5, OmniCore, AC500 PLC' },
    { id:'auto-c3', name:'Rockwell Automation',  url:'https://careers.rockwellautomation.com',         desc:'Allen-Bradley, FactoryTalk, SCADA' },
    { id:'auto-c4', name:'Honeywell',            url:'https://careers.honeywell.com',                  desc:'DCS, Experion, safety systems' },
    { id:'auto-c5', name:'Schneider Electric',   url:'https://careers.se.com',                         desc:'EcoStruxure, Modicon PLC' },
    { id:'auto-c6', name:'Emerson',              url:'https://www.emerson.com/en-in/careers',           desc:'DeltaV DCS, Fisher valves' },
    { id:'auto-c7', name:'Yokogawa',             url:'https://www.yokogawa.com/in/careers/',            desc:'CENTUM VP, ProSafe-RS, DCS' },
    { id:'auto-c8', name:'Beckhoff Automation',  url:'https://www.beckhoff.com/en-en/company/career/',  desc:'PC-based control, EtherCAT, TwinCAT' }
  ],

  'electronics-mfg': [
    { id:'mfg-c1', name:'Foxconn',              url:'https://jobs.foxconn.com',                         desc:'Contract manufacturing, iPhone assembly' },
    { id:'mfg-c2', name:'Jabil',                url:'https://careers.jabil.com',                        desc:'PCB assembly, supply chain solutions' },
    { id:'mfg-c3', name:'Flex Ltd (Flextronics)',url:'https://flex.com/careers',                        desc:'EMS, design & manufacturing' },
    { id:'mfg-c4', name:'Celestica',            url:'https://www.celestica.com/careers',                desc:'Data center, aerospace electronics mfg' },
    { id:'mfg-c5', name:'Sanmina',              url:'https://www.sanmina.com/careers/',                  desc:'PCBs, backplanes, box builds' },
    { id:'mfg-c6', name:'Benchmark Electronics',url:'https://www.bench.com/careers',                    desc:'Defense, medical, industrial EMS' },
    { id:'mfg-c7', name:'Plexus Corp',          url:'https://www.plexus.com/en-us/careers',             desc:'Regulated industries electronics' },
    { id:'mfg-c8', name:'Pegatron',             url:'https://www.pegatroncorp.com/careers/',            desc:'Consumer electronics OEM/ODM' }
  ],

  'automotive': [
    { id:'autom-c1', name:'Bosch',         url:'https://www.bosch.com/careers/',                desc:'ECU, ADAS, chassis, powertrain' },
    { id:'autom-c2', name:'Continental',   url:'https://www.continental.com/en/careers/',       desc:'Autonomous driving, HMI, tyres' },
    { id:'autom-c3', name:'Aptiv',         url:'https://careers.aptiv.com',                     desc:'E/E architecture, ADAS, CAN/LIN' },
    { id:'autom-c4', name:'Valeo',         url:'https://careers.valeo.com',                     desc:'LIDAR, cameras, thermal systems' },
    { id:'autom-c5', name:'Denso',         url:'https://careers.denso.com',                     desc:'Engine control, thermal, info systems' },
    { id:'autom-c6', name:'ZF Friedrichshafen',url:'https://www.zf.com/mobile/en/careers/',    desc:'Transmission, safety, ADAS systems' },
    { id:'autom-c7', name:'Visteon',       url:'https://www.visteon.com/careers/',              desc:'Digital cockpit, cluster, SmartCore' },
    { id:'autom-c8', name:'Harman (Samsung)',url:'https://careers.harman.com',                  desc:'Audio, connected car, cloud services' }
  ],

  'fpga': [
    { id:'fpga-c1', name:'AMD (Xilinx)',          url:'https://careers.amd.com',                  desc:'Virtex, Kintex, Zynq, Versal, Vitis' },
    { id:'fpga-c2', name:'Intel (Altera)',         url:'https://jobs.intel.com',                   desc:'Stratix, Arria, Cyclone, Quartus' },
    { id:'fpga-c3', name:'Microchip (Microsemi)',  url:'https://careers.microchip.com',            desc:'PolarFire, SmartFusion, Libero SoC' },
    { id:'fpga-c4', name:'Lattice Semiconductor',  url:'https://www.latticesemi.com/en/About/Careers', desc:'ECP5, CrossLink, sensAI' },
    { id:'fpga-c5', name:'Efinix',                 url:'https://www.efinixinc.com/company-careers.html', desc:'Trion, Titanium, RISC-V soft cores' },
    { id:'fpga-c6', name:'QuickLogic',             url:'https://www.quicklogic.com/about/careers/', desc:'ArcticLink, EOS, open-source FPGA' },
    { id:'fpga-c7', name:'Achronix',               url:'https://www.achronix.com/company/careers', desc:'Speedster7t, VectorPath AI cards' },
    { id:'fpga-c8', name:'Gowin Semiconductor',    url:'https://www.gowinsemi.com/en/company/recruitment/', desc:'LittleBee, Arora FPGA families' }
  ],

  'embedded-linux': [
    { id:'eml-c1', name:'Wind River Systems',  url:'https://www.windriver.com/careers',           desc:'VxWorks, Wind River Linux, Edge' },
    { id:'eml-c2', name:'Siemens (Mentor)',    url:'https://jobs.siemens.com',                    desc:'Nucleus RTOS, Sourcery CodeBench' },
    { id:'eml-c3', name:'Green Hills Software',url:'https://www.ghs.com/company/careers.html',   desc:'INTEGRITY RTOS, MULTI IDE' },
    { id:'eml-c4', name:'Toradex',             url:'https://www.toradex.com/about/career',        desc:'Colibri, Apalis modules, Torizon OS' },
    { id:'eml-c5', name:'Variscite',           url:'https://www.variscite.com/about/careers/',    desc:'i.MX SoM, Yocto, Android BSPs' },
    { id:'eml-c6', name:'Bootlin',             url:'https://bootlin.com/jobs/',                   desc:'Linux kernel, Yocto training & dev' },
    { id:'eml-c7', name:'Timesys (Lynx)',      url:'https://www.lynx.com/about/careers',          desc:'LynxOS RTOS, Timesys Factory' },
    { id:'eml-c8', name:'Collabora',           url:'https://www.collabora.com/careers.html',      desc:'Upstream Linux, Wayland, GStreamer' }
  ],

  'firmware': [
    { id:'firm-c1', name:'STMicroelectronics', url:'https://careers.st.com',                              desc:'STM32, HAL, LL, Cube ecosystem' },
    { id:'firm-c2', name:'Microchip Technology',url:'https://careers.microchip.com',                      desc:'PIC, AVR, Harmony v3 framework' },
    { id:'firm-c3', name:'Silicon Labs',        url:'https://jobs.silabs.com',                             desc:'EFR32, Gecko SDK, Simplicity Studio' },
    { id:'firm-c4', name:'Nordic Semiconductor',url:'https://www.nordicsemi.com/About-us/Careers',        desc:'nRF Connect SDK, Zephyr RTOS' },
    { id:'firm-c5', name:'NXP Semiconductors',  url:'https://www.nxp.com/company/about-nxp/careers:CAREERS', desc:'MCUXpresso, NXP SDK, FRDM' },
    { id:'firm-c6', name:'Renesas Electronics', url:'https://careers2.renesas.com',                       desc:'RA, RX, FSP, e2 studio' },
    { id:'firm-c7', name:'Arm',                 url:'https://careers.arm.com',                            desc:'Cortex-M, CMSIS, Mbed OS' },
    { id:'firm-c8', name:'Espressif Systems',   url:'https://www.espressif.com/en/join-us',               desc:'ESP-IDF, ESP-AT, FreeRTOS' }
  ],

  'hardware-design': [
    { id:'hw-c1', name:'Analog Devices (ADI)',  url:'https://careers.analog.com',                         desc:'Precision ADCs, DACs, RF ICs' },
    { id:'hw-c2', name:'Texas Instruments',     url:'https://careers.ti.com',                             desc:'Op-amps, power ICs, data converters' },
    { id:'hw-c3', name:'ON Semiconductor',      url:'https://www.onsemi.com/site/careers',                desc:'Power MOSFETs, motor drivers, IPMs' },
    { id:'hw-c4', name:'Maxim (now ADI)',        url:'https://careers.analog.com',                         desc:'PMIC, battery management, sensors' },
    { id:'hw-c5', name:'Vishay Intertechnology',url:'https://www.vishay.com/company/careers/',            desc:'Resistors, capacitors, diodes, MOSFETs' },
    { id:'hw-c6', name:'Murata Manufacturing',  url:'https://careers.murata.com',                         desc:'Capacitors, inductors, RF components' },
    { id:'hw-c7', name:'TE Connectivity',       url:'https://careers.te.com',                             desc:'Connectors, sensors, antennas' },
    { id:'hw-c8', name:'Molex',                 url:'https://www.molex.com/en-us/company/careers',        desc:'Connectors, cable assemblies, PCB' }
  ],

  'testing-validation': [
    { id:'tv-c1', name:'National Instruments (NI)',url:'https://jobs.ni.com',                       desc:'LabVIEW, TestStand, PXI systems' },
    { id:'tv-c2', name:'Keysight Technologies',    url:'https://jobs.keysight.com',                  desc:'Oscilloscopes, VNAs, spectrum analyzers' },
    { id:'tv-c3', name:'Teradyne',                 url:'https://www.teradyne.com/careers/',          desc:'ATE, semiconductor test, IG' },
    { id:'tv-c4', name:'Advantest',                url:'https://www.advantest.com/en/careers',       desc:'T2000, SoC, memory test systems' },
    { id:'tv-c5', name:'Rohde & Schwarz',          url:'https://www.rohde-schwarz.com/careers',      desc:'RF test, EMC, automotive testing' },
    { id:'tv-c6', name:'Tektronix',                url:'https://www.tek.com/en/careers',             desc:'Oscilloscopes, signal analyzers, AWGs' },
    { id:'tv-c7', name:'Spirent Communications',   url:'https://www.spirent.com/about/careers',      desc:'5G, automotive, cybersecurity testing' },
    { id:'tv-c8', name:'Anritsu',                  url:'https://www.anritsu.com/en-in/company/careers', desc:'RF & microwave measurement solutions' }
  ],

  'signal-processing': [
    { id:'sp-c1', name:'Qualcomm',       url:'https://careers.qualcomm.com',                      desc:'Hexagon DSP, audio, image signal processing' },
    { id:'sp-c2', name:'Intel',          url:'https://jobs.intel.com',                            desc:'oneAPI, OpenVINO, signal analytics' },
    { id:'sp-c3', name:'Texas Instruments',url:'https://careers.ti.com',                          desc:'TMS320 DSP, C6000, DaVinci' },
    { id:'sp-c4', name:'MathWorks',      url:'https://www.mathworks.com/company/jobs/',           desc:'MATLAB, Simulink, Signal Processing Toolbox' },
    { id:'sp-c5', name:'Analog Devices', url:'https://careers.analog.com',                        desc:'SHARC DSP, SigmaStudio, RF ICs' },
    { id:'sp-c6', name:'NVIDIA',         url:'https://careers.nvidia.com',                        desc:'cuDSP, cuFFT, GPU signal processing' },
    { id:'sp-c7', name:'AMD (Xilinx)',   url:'https://careers.amd.com',                           desc:'Vitis DSP libs, HLS, FPGA DSP' },
    { id:'sp-c8', name:'Arm',            url:'https://careers.arm.com',                           desc:'Cortex-M DSP extensions, CMSIS-DSP' }
  ],

  'wireless-comm': [
    { id:'wc-c1', name:'Qualcomm',          url:'https://careers.qualcomm.com',                   desc:'Snapdragon 5G modem, WiFi 7, BT' },
    { id:'wc-c2', name:'MediaTek',          url:'https://careers.mediatek.com',                   desc:'Dimensity 5G, WiFi 6E, BT 5.3' },
    { id:'wc-c3', name:'Ericsson',          url:'https://jobs.ericsson.com',                       desc:'5G RAN, baseband, network infra' },
    { id:'wc-c4', name:'Nokia',             url:'https://careers.nokia.com',                       desc:'AirScale, RAN, Bell Labs R&D' },
    { id:'wc-c5', name:'Samsung Networks',  url:'https://www.samsung.com/global/ir/careers/',     desc:'5G NR, Open RAN, vRAN solutions' },
    { id:'wc-c6', name:'Marvell',           url:'https://www.marvell.com/company/careers.html',   desc:'802.11, Bluetooth, 5G baseband' },
    { id:'wc-c7', name:'Broadcom',          url:'https://www.broadcom.com/company/careers',        desc:'BCM WiFi 7, BT, Zigbee, Z-Wave' },
    { id:'wc-c8', name:'Apple',             url:'https://jobs.apple.com',                          desc:'Custom radio, UWB, WiFi, BT silicon' }
  ],

  'ai-hardware': [
    { id:'ai-c1', name:'NVIDIA',            url:'https://careers.nvidia.com',                     desc:'H100, A100, Jetson, Drive orin NPU' },
    { id:'ai-c2', name:'Google (DeepMind)', url:'https://careers.google.com',                     desc:'TPUv4, Coral Edge TPU, LLM chips' },
    { id:'ai-c3', name:'Apple',             url:'https://jobs.apple.com',                          desc:'Apple Silicon M-series, Neural Engine' },
    { id:'ai-c4', name:'Cerebras Systems',  url:'https://www.cerebras.net/careers/',              desc:'Wafer-Scale Engine, CS-2 AI system' },
    { id:'ai-c5', name:'Graphcore',         url:'https://www.graphcore.ai/jobs',                  desc:'IPU, Bow, C2000 AI accelerators' },
    { id:'ai-c6', name:'Groq',              url:'https://groq.com/careers/',                       desc:'LPU, tensor streaming processor' },
    { id:'ai-c7', name:'SambaNova Systems', url:'https://sambanova.ai/careers/',                   desc:'Reconfigurable Dataflow Unit (RDU)' },
    { id:'ai-c8', name:'Tenstorrent',       url:'https://tenstorrent.com/jobs/',                  desc:'Grayskull, Wormhole, RISC-V AI' }
  ],

  'ev-electronics': [
    { id:'ev-c1', name:'Tesla',          url:'https://www.tesla.com/careers',                     desc:'Battery, power electronics, BMS, Full Self-Driving' },
    { id:'ev-c2', name:'BYD',            url:'https://www.byd.com/en/careers.html',               desc:'Blade Battery, EV powertrain, IGBT' },
    { id:'ev-c3', name:'Rivian',         url:'https://rivian.com/careers',                         desc:'EV trucks, BMS, charging infra' },
    { id:'ev-c4', name:'Lucid Motors',   url:'https://www.lucidmotors.com/careers',               desc:'Ultra-efficient powertrain, inverter' },
    { id:'ev-c5', name:'BorgWarner',     url:'https://www.borgwarner.com/careers',                desc:'eMotor, power electronics, charging' },
    { id:'ev-c6', name:'Aptiv',          url:'https://careers.aptiv.com',                          desc:'EV architecture, HV wiring, charging' },
    { id:'ev-c7', name:'Ola Electric',   url:'https://olaelectric.com/careers',                   desc:'EV scooter, BMS, cell tech — India' },
    { id:'ev-c8', name:'Ather Energy',   url:'https://www.atherenergy.com/careers',               desc:'Smart EV, BMS, charging infra — India' }
  ],

  'medical-electronics': [
    { id:'med-c1', name:'Medtronic',              url:'https://jobs.medtronic.com',                desc:'Pacemakers, neuromodulation, insulin pumps' },
    { id:'med-c2', name:'GE HealthCare',          url:'https://jobs.gehealthcare.com',             desc:'MRI, CT, ultrasound, patient monitoring' },
    { id:'med-c3', name:'Siemens Healthineers',   url:'https://www.siemens-healthineers.com/careers', desc:'Atellica, Biograph, PET-CT imaging' },
    { id:'med-c4', name:'Philips Healthcare',     url:'https://www.philips.com/a-w/about/careers.html', desc:'Patient monitoring, MRI, ultrasound' },
    { id:'med-c5', name:'Abbott Laboratories',    url:'https://www.jobs.abbott',                   desc:'FreeStyle CGM, implantables, diagnostics' },
    { id:'med-c6', name:'Boston Scientific',      url:'https://www.bostonscientific.com/en-US/careers.html', desc:'Electrophysiology, neuromodulation, stents' },
    { id:'med-c7', name:'Edwards Lifesciences',   url:'https://careers.edwards.com',               desc:'Heart valves, hemodynamic monitoring' },
    { id:'med-c8', name:'Becton Dickinson (BD)',  url:'https://jobs.bd.com',                        desc:'Diagnostics, infusion, biosensors' }
  ],

  'defence-electronics': [
    { id:'def-c1', name:'Lockheed Martin',    url:'https://www.lockheedmartin.com/en-us/careers.html', desc:'F-35, missile defense, AESA radar' },
    { id:'def-c2', name:'Raytheon (RTX)',     url:'https://jobs.rtx.com',                              desc:'Patriot, AIM-120, electronic warfare' },
    { id:'def-c3', name:'BAE Systems',        url:'https://jobs.baesystems.com',                       desc:'Electronic warfare, SIGINT, UAV' },
    { id:'def-c4', name:'L3Harris Technologies',url:'https://careers.l3harris.com',                   desc:'Tactical radios, night vision, ELINT' },
    { id:'def-c5', name:'General Dynamics',   url:'https://careers.gd.com',                            desc:'Combat systems, C4ISR, avionics' },
    { id:'def-c6', name:'Northrop Grumman',   url:'https://www.northropgrumman.com/careers/',          desc:'B-21, GBSD, space electronics' },
    { id:'def-c7', name:'DRDO (India)',        url:'https://www.drdo.gov.in/recruitment',               desc:'Defence R&D, radar, missiles, electronics' },
    { id:'def-c8', name:'BEL (India)',         url:'https://bel-india.in/careers',                     desc:'Radar, EW, communication, avionics — India PSU' }
  ]
};

// ---- 14 PROJECT DOMAINS (from the ECE & VLSI Projects Chart) ----
const PROJECT_DOMAINS = [
  { id:'embedded',      name:'Embedded Systems',       icon:'🔬', color:'#ff6b9d' },
  { id:'tinyml',        name:'TinyML',                 icon:'🧠', color:'#00c9a7' },
  { id:'vlsi-main',     name:'VLSI',                   icon:'💎', color:'#4158d0' },
  { id:'digital-rtl',  name:'Digital Design (RTL)',    icon:'⚙️', color:'#c850c0' },
  { id:'asic-flow',    name:'RTL to GDS (ASIC Flow)',  icon:'🏗️', color:'#4158d0' },
  { id:'verification', name:'Verification (SV/UVM)',   icon:'✅', color:'#0093e9' },
  { id:'analog-ic',    name:'Analog IC Design',        icon:'📐', color:'#00c9a7' },
  { id:'fpga-proj',    name:'FPGA Design',             icon:'🧩', color:'#f7971e' },
  { id:'comm-systems', name:'Communication Systems',   icon:'📡', color:'#f953c6' },
  { id:'dsp',          name:'DSP',                     icon:'🌊', color:'#43e97b' },
  { id:'power-elec',   name:'Power Electronics',       icon:'⚡', color:'#fa709a' },
  { id:'robotics-proj',name:'Robotics',                icon:'🤖', color:'#a18cd1' },
  { id:'iot-proj',     name:'IoT',                     icon:'🌐', color:'#ffd89b' },
  { id:'control',      name:'Control Systems',         icon:'🎛️', color:'#96fbc4' },
  { id:'physical-des', name:'Physical Design',         icon:'🗺️', color:'#89f7fe' },
  { id:'rf-micro',     name:'RF & Microwave',          icon:'📻', color:'#667eea' }
];

// ---- ALL ECE & VLSI PROJECTS (from chart image — 4 domains × 4 levels × 4 projects) ----
const LEVEL_ORDER = ['Basic', 'Intermediate', 'Advanced', 'Industry Level'];

const ALL_ECE_PROJECTS = [

  // ======== EMBEDDED SYSTEMS ========
  { id:'emb-b1', domain:'embedded', level:'Basic',          title:'LED Controller',             tools:'Arduino, C, AVR Studio',       desc:'GPIO control with PWM dimming, pattern generation and interrupt-driven LED sequencing on 8-bit MCU.' },
  { id:'emb-b2', domain:'embedded', level:'Basic',          title:'Smart Door Lock',            tools:'Arduino, ESP8266, Servo',       desc:'RFID/keypad-based door lock with wireless unlock via mobile app and intrusion buzzer alert.' },
  { id:'emb-b3', domain:'embedded', level:'Basic',          title:'UART Communication',         tools:'STM32, UART, Python',           desc:'Full-duplex serial communication between two MCUs with error detection and ring buffer implementation.' },
  { id:'emb-b4', domain:'embedded', level:'Basic',          title:'Sensor Interface',           tools:'Arduino, I2C, SPI, ADC',        desc:'Read and display data from temperature, humidity, and pressure sensors using I2C/SPI protocols.' },
  { id:'emb-i1', domain:'embedded', level:'Intermediate',   title:'CAN Protocol Interface',     tools:'STM32, MCP2515, CAN Bus',       desc:'CAN bus node transmitting/receiving vehicle data frames with error handling and bus arbitration.' },
  { id:'emb-i2', domain:'embedded', level:'Intermediate',   title:'RTOS Scheduler',             tools:'FreeRTOS, STM32, CMSIS',        desc:'Multi-task firmware with preemptive scheduling, semaphores, mutexes, and inter-task messaging.' },
  { id:'emb-i3', domain:'embedded', level:'Intermediate',   title:'SPI Controller',             tools:'STM32, SPI, DMA, C',            desc:'Custom SPI master/slave driver with DMA transfer, chip-select management and loopback test.' },
  { id:'emb-i4', domain:'embedded', level:'Intermediate',   title:'SD Card Logger',             tools:'STM32, FatFS, SPI, SDIO',       desc:'Data logging system writing sensor samples to SD card using FatFS with circular buffer and timestamps.' },
  { id:'emb-a1', domain:'embedded', level:'Advanced',       title:'Automotive ECU',             tools:'STM32, AUTOSAR, CAN, LIN',      desc:'Automotive-grade ECU implementing AUTOSAR stack layers, CAN diagnostics and UDS services.' },
  { id:'emb-a2', domain:'embedded', level:'Advanced',       title:'USB Device Stack',           tools:'STM32, USB CDC, HID, MSC',      desc:'USB 2.0 full-speed device implementing CDC (virtual COM), HID, and mass storage class drivers.' },
  { id:'emb-a3', domain:'embedded', level:'Advanced',       title:'Sensor Fusion',              tools:'nRF52, MPU9250, Kalman, C++',   desc:'9-DOF IMU sensor fusion using Kalman filter for accurate attitude estimation (roll, pitch, yaw).' },
  { id:'emb-a4', domain:'embedded', level:'Advanced',       title:'FreeRTOS Application',       tools:'FreeRTOS, STM32H7, LWIP',       desc:'Complete IoT gateway running FreeRTOS with TCP/IP stack, MQTT client, and OTA update support.' },
  { id:'emb-il1',domain:'embedded', level:'Industry Level', title:'Secure Automotive Gateway',  tools:'NXP S32G, HSM, AUTOSAR',        desc:'V2X-ready automotive gateway with hardware security module, secure boot and TLS encrypted CAN FD.' },
  { id:'emb-il2',domain:'embedded', level:'Industry Level', title:'OTA Firmware Platform',      tools:'FreeRTOS, MCUboot, MQTT, AWS',  desc:'Over-the-air firmware update platform with A/B partition scheme, digital signature verification.' },
  { id:'emb-il3',domain:'embedded', level:'Industry Level', title:'Industrial Controller',      tools:'CODESYS, EtherCAT, IEC 61131-3',desc:'Industrial PLC-class controller implementing IEC 61131-3 languages with real-time EtherCAT fieldbus.' },
  { id:'emb-il4',domain:'embedded', level:'Industry Level', title:'AI Edge Device',             tools:'Cortex-M55, TFLite Micro, CMSIS-NN', desc:'Edge AI inference device running TensorFlow Lite Micro on Cortex-M55 with Ethos-U55 NPU.' },

  // ======== TINYML ========
  { id:'tinyml-1', domain:'tinyml', level:'Intermediate', title:'Traffic control system (ambulance and vip)', tools:'Arduino, Edge Impulse, Camera', desc:'Smart traffic light control prioritizing emergency vehicles (ambulances) and VIP convoys using on-device vision AI.' },
  { id:'tinyml-2', domain:'tinyml', level:'Advanced', title:'AI Dangerous Machine Zone Predictor', tools:'TensorFlow Lite, ESP32, Sensors', desc:'Wearable or machine-mounted ML model that predicts and halts operation if a human enters a dangerous industrial zone.' },
  { id:'tinyml-3', domain:'tinyml', level:'Industry Level', title:'CoughGuard — AI Cough Wearable', tools:'Cortex-M4, Audio DSP, Edge Impulse', desc:'Wearable audio classification device that continuously listens for and logs coughing patterns for remote medical diagnostics.' },

  // ======== DIGITAL DESIGN (RTL) ========
  { id:'rtl-b1', domain:'digital-rtl', level:'Basic',         title:'ALU Design',               tools:'Verilog, ModelSim, Vivado',     desc:'4-bit and 8-bit ALU supporting ADD, SUB, AND, OR, XOR, shift operations with status flags.' },
  { id:'rtl-b2', domain:'digital-rtl', level:'Basic',         title:'Traffic Light Controller', tools:'Verilog, FPGA, FSM',            desc:'Moore/Mealy FSM-based traffic light controller with pedestrian crossing and emergency override.' },
  { id:'rtl-b3', domain:'digital-rtl', level:'Basic',         title:'Digital Clock',            tools:'Verilog, 7-Segment, BCD',       desc:'BCD counter-based digital clock with hours/minutes/seconds, set mode, and alarm output.' },
  { id:'rtl-b4', domain:'digital-rtl', level:'Basic',         title:'Sequence Detector',        tools:'Verilog, ModelSim, FSM',        desc:'Overlapping and non-overlapping sequence detector (e.g. 1011) using Moore/Mealy FSM design.' },
  { id:'rtl-i1', domain:'digital-rtl', level:'Intermediate',  title:'RISC Processor',           tools:'Verilog, Vivado, ModelSim',     desc:'4-stage pipelined RISC processor with 16 instructions, register file, and hazard detection unit.' },
  { id:'rtl-i2', domain:'digital-rtl', level:'Intermediate',  title:'UART Controller',          tools:'SystemVerilog, UVM, Vivado',    desc:'Parameterized UART TX/RX controller with baud rate generator, FIFO buffers and parity checking.' },
  { id:'rtl-i3', domain:'digital-rtl', level:'Intermediate',  title:'SPI Controller (RTL)',     tools:'Verilog, ModelSim, FPGA',       desc:'RTL SPI master/slave supporting all four CPOL/CPHA modes with configurable data width.' },
  { id:'rtl-i4', domain:'digital-rtl', level:'Intermediate',  title:'Cache Controller',         tools:'Verilog, Vivado, SystemVerilog',desc:'Direct-mapped and 2-way set-associative cache controller with LRU policy and hit/miss tracking.' },
  { id:'rtl-a1', domain:'digital-rtl', level:'Advanced',      title:'DDR Controller',           tools:'Verilog, Virtex-7, AXI, PHY',   desc:'DDR4 SDRAM controller with AXI4 slave interface, auto-refresh, power-down, and timing compliance.' },
  { id:'rtl-a2', domain:'digital-rtl', level:'Advanced',      title:'AMBA Bus Design',          tools:'SystemVerilog, AXI4, APB, AHB', desc:'Full AMBA AXI4 interconnect with multiple masters/slaves, QoS arbitration, and burst transfers.' },
  { id:'rtl-a3', domain:'digital-rtl', level:'Advanced',      title:'VGA Controller',           tools:'Verilog, Artix-7, DAC, BRAM',   desc:'640×480 VGA display controller with framebuffer, text/graphic modes, and color palette lookup.' },
  { id:'rtl-a4', domain:'digital-rtl', level:'Advanced',      title:'Low Power RTL',            tools:'Verilog, DC, UPF, Power Gating',desc:'RTL design with clock gating, power domains, multi-voltage, and UPF-based power intent.' },
  { id:'rtl-il1',domain:'digital-rtl', level:'Industry Level',title:'Out-of-Order CPU',         tools:'Verilog, Tomasulo, ROB, Vivado', desc:'Out-of-order superscalar processor with Tomasulo algorithm, reorder buffer, and branch predictor.' },
  { id:'rtl-il2',domain:'digital-rtl', level:'Industry Level',title:'NoC Design',               tools:'SystemVerilog, Mesh NoC, VCs',  desc:'2D mesh Network-on-Chip with wormhole routing, virtual channels, and XY routing algorithm.' },
  { id:'rtl-il3',domain:'digital-rtl', level:'Industry Level',title:'AI Accelerator RTL',       tools:'Verilog, Systolic Array, HLS',  desc:'16×16 systolic array for matrix multiply with INT8 quantization targeting deep learning inference.' },
  { id:'rtl-il4',domain:'digital-rtl', level:'Industry Level',title:'DDR Memory Controller',    tools:'Verilog, UPF, JTAG, DFT',      desc:'Production-grade DDR4/5 memory controller with DFT scan insertion, power management and BIST.' },

  // ======== RTL TO GDS (ASIC FLOW) ========
  { id:'asic-b1', domain:'asic-flow', level:'Basic',         title:'CMOS Inverter Layout',     tools:'Cadence Virtuoso, sky130 PDK', desc:'Full-custom CMOS inverter with DRC/LVS-clean layout in sky130 180nm PDK with parasitics extraction.' },
  { id:'asic-b2', domain:'asic-flow', level:'Basic',         title:'Full Adder Layout',        tools:'Cadence Virtuoso, Magic',      desc:'Transistor-level full adder layout with stick diagram methodology and post-layout simulation.' },
  { id:'asic-b3', domain:'asic-flow', level:'Basic',         title:'NAND Gate Design',         tools:'GPDK 45nm, Virtuoso, Calibre', desc:'Standard-cell NAND gate design, characterization, and liberty file generation for synthesis.' },
  { id:'asic-b4', domain:'asic-flow', level:'Basic',         title:'Basic STA',                tools:'OpenSTA, Synopsys PT, TCL',    desc:'Setup/hold slack analysis, clock tree timing, path grouping, and timing report interpretation.' },
  { id:'asic-i1', domain:'asic-flow', level:'Intermediate',  title:'FSM Processor Design',     tools:'Synopsys DC, Yosys, OpenLane', desc:'Synthesize FSM-based processor RTL through logic synthesis with area/timing/power optimization.' },
  { id:'asic-i2', domain:'asic-flow', level:'Intermediate',  title:'SRAM Design',              tools:'Cadence Virtuoso, Spectre, sky130', desc:'6T SRAM bitcell with sense amplifier, row decoder, and characterization (SNM, read/write margin).' },
  { id:'asic-i3', domain:'asic-flow', level:'Intermediate',  title:'Gate-Level Simulation',    tools:'VCS, ModelSim, Verilog GLS',   desc:'Post-synthesis gate-level simulation with SDF back-annotation to verify timing-accurate behavior.' },
  { id:'asic-i4', domain:'asic-flow', level:'Intermediate',  title:'Synthesis Using Yosys',    tools:'Yosys, OpenLane, Nextpnr, sky130', desc:'RTL synthesis with Yosys targeting sky130 PDK, generating optimized netlists with area reporting.' },
  { id:'asic-a1', domain:'asic-flow', level:'Advanced',      title:'RISC-V Core (ASIC)',       tools:'OpenLane, sky130, GDS, Yosys', desc:'Complete RV32I core taken through RTL-to-GDS with floorplan, P&R, DRC/LVS sign-off via OpenLane.' },
  { id:'asic-a2', domain:'asic-flow', level:'Advanced',      title:'CDC Verification',         tools:'SpyGlass CDC, Synopsys Formality', desc:'Clock Domain Crossing analysis, async FIFO design, synchronizer insertion and formal CDC signoff.' },
  { id:'asic-a3', domain:'asic-flow', level:'Advanced',      title:'Multi-Clock Domain SoC',   tools:'Synopsys DC, PT, Formality',   desc:'SoC with multiple clock domains, CPF/UPF power intent, multi-mode multi-corner analysis.' },
  { id:'asic-a4', domain:'asic-flow', level:'Advanced',      title:'Advanced Functional Coverage',tools:'Synopsys VCS, urg, dve',   desc:'Functional coverage model with covergroups, crosses, and coverage-driven verification closure.' },
  { id:'asic-il1',domain:'asic-flow', level:'Industry Level',title:'Complete RISC-V SoC',      tools:'OpenLane, sky130, efabless',   desc:'Full SoC tapeout-ready design via efabless/Google MPW shuttle: CPU + SRAM + peripherals in GDS.' },
  { id:'asic-il2',domain:'asic-flow', level:'Industry Level',title:'SoC Integration',          tools:'Synopsys ICC2, DC, PT, StarRC',desc:'SoC physical integration: hierarchical floorplan, power grid, ECO, and full-chip sign-off flow.' },
  { id:'asic-il3',domain:'asic-flow', level:'Industry Level',title:'Tapeout Ready Design',     tools:'Cadence Innovus, Genus, Tempus',desc:'Production tapeout flow: synthesis, P&R, CTS, routing, sign-off (STA/DRC/LVS/ERC) and GDSII.' },
  { id:'asic-il4',domain:'asic-flow', level:'Industry Level',title:'UPF Low Power SoC',        tools:'Synopsys Formality, UPF, VCS', desc:'Multi-supply low-power SoC with UPF 3.0: power domains, retention FFs, isolation, and PSO verification.' },

  // ======== VERIFICATION (SV/UVM) ========
  { id:'ver-b1', domain:'verification', level:'Basic',         title:'Verilog Testbench',        tools:'Verilog, ModelSim, GTKWave',    desc:'Self-checking testbench for combinational and sequential designs with pass/fail checking logic.' },
  { id:'ver-b2', domain:'verification', level:'Basic',         title:'Counter Verification',     tools:'SystemVerilog, QuestaSim',      desc:'Directed and random testbench for up/down counter with assertion-based overflow and underflow check.' },
  { id:'ver-b3', domain:'verification', level:'Basic',         title:'FIFO Verification',        tools:'SystemVerilog, ModelSim, SVA',  desc:'Sync/async FIFO verification with empty/full flag assertions, data integrity, and depth sweep tests.' },
  { id:'ver-b4', domain:'verification', level:'Basic',         title:'Assertion Basics',         tools:'SVA, Verilog, ModelSim',        desc:'Immediate and concurrent SVA assertions for protocol checking: sequence, property, cover, assume.' },
  { id:'ver-i1', domain:'verification', level:'Intermediate',  title:'Functional Coverage',      tools:'SystemVerilog, VCS, urg',       desc:'Covergroup, coverpoint, and cross-coverage implementation with coverage-driven random simulation.' },
  { id:'ver-i2', domain:'verification', level:'Intermediate',  title:'UVM Environment Setup',    tools:'UVM 1.2, QuestaSim, Synopsys', desc:'Complete UVM testbench environment: Agent, Driver, Monitor, Scoreboard, Sequencer, and Env class.' },
  { id:'ver-i3', domain:'verification', level:'Intermediate',  title:'UVM Environment',          tools:'UVM, VCS, SystemVerilog',       desc:'Full UVM verification environment for UART DUT with constrained-random sequences and scoreboards.' },
  { id:'ver-i4', domain:'verification', level:'Intermediate',  title:'Random Verification',      tools:'SystemVerilog CRV, QuestaSim', desc:'Constrained random verification with inheritance, rand/randc, solve-before, and constraint solver.' },
  { id:'ver-a1', domain:'verification', level:'Advanced',      title:'Protocol Verification',    tools:'UVM, AXI VIP, SystemVerilog',  desc:'AXI4/APB protocol verification using VIP integration, out-of-order response, and error injection.' },
  { id:'ver-a2', domain:'verification', level:'Advanced',      title:'Formal Verification',      tools:'JasperGold, Cadence Jasper',    desc:'Property Checking (JasperGold) to prove deadlock-freedom, liveness, and protocol compliance formally.' },
  { id:'ver-a3', domain:'verification', level:'Advanced',      title:'UVM Agent Design',         tools:'UVM, SystemVerilog, Synopsys', desc:'Parameterized reusable UVM agent with active/passive modes, config objects, and factory overrides.' },
  { id:'ver-a4', domain:'verification', level:'Advanced',      title:'Advanced Coverage',        tools:'VCS, urg, Python (coverage)',   desc:'Hierarchical coverage merge, exclusion management, and coverage closure methodology at block level.' },
  { id:'ver-il1',domain:'verification', level:'Industry Level',title:'Full UVM Environment',     tools:'UVM, VCS, Synopsys VIP',       desc:'Chip-level UVM environment with multiple agents, virtual sequences, register model (RAL), and scoreboard.' },
  { id:'ver-il2',domain:'verification', level:'Industry Level',title:'Assertion Driven Verification',tools:'SVA, JasperGold, VCS',    desc:'Spec-to-assertion mapping with temporal property checks, assume/restrict, and coverage-driven ABV.' },
  { id:'ver-il3',domain:'verification', level:'Industry Level',title:'Signoff Verification',     tools:'Synopsys VC SpyGlass, Formality',desc:'Complete verification signoff: code coverage, functional coverage, formal, and regression CI flow.' },
  { id:'ver-il4',domain:'verification', level:'Industry Level',title:'Formal + UVM Flow',        tools:'JasperGold + VCS, UVM, SVA',  desc:'Hybrid verification: formal unreachability proofs integrated with UVM simulation for full coverage.' },

  // ======== ANALOG IC DESIGN ========
  { id:'ana-b1', domain:'analog-ic', level:'Basic',         title:'CMOS Inverter',            tools:'Cadence Virtuoso, Spectre, 180nm',desc:'CMOS inverter DC/transient analysis, VTC curve, noise margin, and propagation delay optimization.' },
  { id:'ana-b2', domain:'analog-ic', level:'Basic',         title:'Differential Pair',        tools:'Cadence Virtuoso, Spectre',       desc:'NMOS differential pair with tail current source, common-mode rejection, and differential gain.' },
  { id:'ana-b3', domain:'analog-ic', level:'Basic',         title:'Current Mirror',           tools:'Cadence Virtuoso, Spectre, GPDK', desc:'Basic, cascode, and Wilson current mirror design with mismatch analysis and output resistance.' },
  { id:'ana-b4', domain:'analog-ic', level:'Basic',         title:'Op-Amp Basics',            tools:'Cadence Virtuoso, Spectre',       desc:'Two-stage CMOS op-amp design with frequency compensation, unity-gain bandwidth, and phase margin.' },
  { id:'ana-i1', domain:'analog-ic', level:'Intermediate',  title:'Comparator Design',        tools:'Cadence Virtuoso, Spectre',       desc:'StrongARM latch comparator with hysteresis design, input offset, and propagation delay characterization.' },
  { id:'ana-i2', domain:'analog-ic', level:'Intermediate',  title:'ADC Building Blocks',      tools:'Cadence Virtuoso, Spectre',       desc:'Sample-and-hold circuit, DAC sub-blocks for SAR ADC: bootstrapped switch, binary-weighted cap array.' },
  { id:'ana-i3', domain:'analog-ic', level:'Intermediate',  title:'Bandgap Reference',        tools:'Cadence Virtuoso, Spectre',       desc:'CMOS bandgap reference using substrate PNP, TC < 10 ppm/°C from −40 to 125°C with 4-bit trim.' },
  { id:'ana-i4', domain:'analog-ic', level:'Intermediate',  title:'Op-Amp Design',            tools:'Cadence Virtuoso, Spectre, 65nm', desc:'Folded cascode op-amp with CMFB for fully differential topology, PSRR/CMRR optimization, and Bode.' },
  { id:'ana-a1', domain:'analog-ic', level:'Advanced',      title:'PLL Design',               tools:'Cadence Virtuoso, Spectre',       desc:'Charge-pump PLL with VCO, phase detector, loop filter design, lock time, jitter and PN characterization.' },
  { id:'ana-a2', domain:'analog-ic', level:'Advanced',      title:'SAR ADC',                  tools:'Cadence Virtuoso, Spectre',       desc:'12-bit 1MSPS Successive Approximation Register ADC with binary-weighted DAC and dynamic latch comparator.' },
  { id:'ana-a3', domain:'analog-ic', level:'Advanced',      title:'DAC Design',               tools:'Cadence Virtuoso, Spectre',       desc:'Current-steering 10-bit DAC with mismatch calibration, INL/DNL < 0.5 LSB, and glitch energy analysis.' },
  { id:'ana-a4', domain:'analog-ic', level:'Advanced',      title:'LDO Regulator',            tools:'Cadence Virtuoso, Spectre',       desc:'Low-dropout regulator with PMOS pass device, error amp, load transient, PSR, and stability analysis.' },
  { id:'ana-il1',domain:'analog-ic', level:'Industry Level',title:'Delta-Sigma ADC',          tools:'Cadence Virtuoso, Spectre, MATLAB',desc:'Second-order delta-sigma modulator with decimation filter, OSR=256, SNDR > 90 dB design and verification.' },
  { id:'ana-il2',domain:'analog-ic', level:'Industry Level',title:'Fractional-N PLL',         tools:'Cadence Virtuoso, Spectre',       desc:'Fractional-N synthesizer with Sigma-Delta modulator, spreading, spur analysis, and phase noise mask.' },
  { id:'ana-il3',domain:'analog-ic', level:'Industry Level',title:'PMIC Design',              tools:'Cadence Virtuoso, Spectre, UPF',  desc:'Multi-channel PMIC with buck converters, LDOs, sequencing, OCP/OVP protection, and thermal shutdown.' },
  { id:'ana-il4',domain:'analog-ic', level:'Industry Level',title:'Analog Layout Project',    tools:'Cadence Virtuoso, Calibre DRC/LVS',desc:'Full-custom analog layout with common-centroid, shielding, guard rings, DRC/LVS/PEX clean sign-off.' },

  // ======== FPGA DESIGN ========
  { id:'fpg-b1', domain:'fpga-proj', level:'Basic',         title:'LED Blinker',              tools:'Verilog, Vivado, Basys3',       desc:'Frequency divider-based LED blinker with configurable blink rate via DIP switches or UART.' },
  { id:'fpg-b2', domain:'fpga-proj', level:'Basic',         title:'UART on FPGA',             tools:'Verilog, Vivado, Basys3',       desc:'FPGA UART transceiver with loopback test, baud rate generator, and FIFO buffering on Artix-7.' },
  { id:'fpg-b3', domain:'fpga-proj', level:'Basic',         title:'PWM Generator',            tools:'Verilog, Artix-7, DAC',         desc:'Configurable multi-channel PWM generator with duty cycle control via AXI-Lite register interface.' },
  { id:'fpg-b4', domain:'fpga-proj', level:'Basic',         title:'Seven Segment Display',    tools:'Verilog, Basys3, BCD',          desc:'Multiplexed 4-digit 7-segment display driver showing hex/decimal values from FPGA registers.' },
  { id:'fpg-i1', domain:'fpga-proj', level:'Intermediate',  title:'VGA Controller',           tools:'Verilog, Nexys4, DAC, 640×480', desc:'FPGA VGA controller rendering text, sprites, and moving objects at 640×480 60 Hz resolution.' },
  { id:'fpg-i2', domain:'fpga-proj', level:'Intermediate',  title:'OLED Controller',          tools:'Verilog, SPI, SSD1306, FPGA',   desc:'SSD1306 OLED display controller over SPI with font renderer and bitmap display engine on FPGA.' },
  { id:'fpg-i3', domain:'fpga-proj', level:'Intermediate',  title:'Image Display',            tools:'Verilog, BRAM, HDMI, Zynq',     desc:'FPGA image framebuffer reading BMP from SD card and displaying over HDMI via DVI encoder.' },
  { id:'fpg-i4', domain:'fpga-proj', level:'Intermediate',  title:'FPGA DSP Block',           tools:'Verilog, DSP48, Vivado HLS',    desc:'FIR/IIR filter implementation exploiting Xilinx DSP48E2 slices with Vivado HLS C++ synthesis.' },
  { id:'fpg-a1', domain:'fpga-proj', level:'Advanced',      title:'Ethernet MAC',             tools:'Verilog, Zynq, RGMII, AXI',    desc:'Gigabit Ethernet MAC on FPGA with RGMII PHY interface, AXI-stream data path, and CRC generation.' },
  { id:'fpg-a2', domain:'fpga-proj', level:'Advanced',      title:'SDR Platform',             tools:'Verilog, Zynq, AD9361, GNU Radio',desc:'Software-defined radio FPGA platform with AD9361 RF frontend and GNU Radio host integration.' },
  { id:'fpg-a3', domain:'fpga-proj', level:'Advanced',      title:'Video Processing',         tools:'Verilog, Zynq, OV5640, HDMI',   desc:'Real-time video pipeline on FPGA: camera capture → image processing (sobel, LUT) → HDMI output.' },
  { id:'fpg-a4', domain:'fpga-proj', level:'Advanced',      title:'DSP Accelerator',          tools:'Vivado HLS, Verilog, AXI-DMA',  desc:'Custom FFT/FIR hardware accelerator with AXI-DMA, tightly coupled with Zynq ARM processor.' },
  { id:'fpg-il1',domain:'fpga-proj', level:'Industry Level',title:'PCIe Controller',          tools:'Verilog, Virtex-7, PCIe IP Core',desc:'PCIe Gen3 x4 endpoint on FPGA with DMA engine, MSI-X interrupts, and Linux PCIe driver.' },
  { id:'fpg-il2',domain:'fpga-proj', level:'Industry Level',title:'High Speed DSP Accelerator',tools:'Vitis HLS, Vitis AI, ZCU104',  desc:'AI inference accelerator achieving 10 TOPS on Zynq UltraScale+ using Vitis AI quantized models.' },
  { id:'fpg-il3',domain:'fpga-proj', level:'Industry Level',title:'HLS Design',               tools:'Vitis HLS, Vivado, AXI4',       desc:'Algorithm-to-hardware using HLS: data-parallel FFT, matrix multiply with pipeline/dataflow pragmas.' },
  { id:'fpg-il4',domain:'fpga-proj', level:'Industry Level',title:'4K Video Processor',       tools:'Verilog, VU9P, HDMI 2.0, SDI',  desc:'4K60 real-time video processing pipeline on Virtex UltraScale+: ISP, de-noise, color grade, HDMI 2.0.' },

  // ======== COMMUNICATION SYSTEMS ========
  { id:'com-b1', domain:'comm-systems', level:'Basic',         title:'ASK Modulator',          tools:'MATLAB, GNU Radio, RTL-SDR',    desc:'Amplitude Shift Keying modulator/demodulator simulation with BER vs SNR curve analysis in MATLAB.' },
  { id:'com-b2', domain:'comm-systems', level:'Basic',         title:'FSK Modulator',          tools:'MATLAB, Simulink, Python',      desc:'Frequency Shift Keying implementation with coherent/non-coherent detection and AWGN channel model.' },
  { id:'com-b3', domain:'comm-systems', level:'Basic',         title:'Simple Transmitter',     tools:'MATLAB, GNU Radio, HackRF',     desc:'Baseband transmitter chain: source encoder → modulator → pulse shaping filter → channel simulation.' },
  { id:'com-b4', domain:'comm-systems', level:'Basic',         title:'Simple Receiver',        tools:'MATLAB, GNU Radio, RTL-SDR',    desc:'Receiver chain: matched filter → synchronization → demodulation → BER measurement over AWGN/Rayleigh.' },
  { id:'com-i1', domain:'comm-systems', level:'Intermediate',  title:'OFDM Basics',            tools:'MATLAB, Python, SciPy',         desc:'OFDM system with 64-subcarrier IFFT/FFT, cyclic prefix, pilot insertion and LS channel estimation.' },
  { id:'com-i2', domain:'comm-systems', level:'Intermediate',  title:'PSK Modulation',         tools:'MATLAB, GNU Radio',             desc:'BPSK/QPSK/8PSK simulation with Gray coding, differential encoding, and IQ constellation diagrams.' },
  { id:'com-i3', domain:'comm-systems', level:'Intermediate',  title:'Channel Coding',         tools:'MATLAB, Python',                desc:'Convolutional codes, Turbo codes, and LDPC implementation with Viterbi/BCJR decoding algorithms.' },
  { id:'com-i4', domain:'comm-systems', level:'Intermediate',  title:'Matched Filter',         tools:'MATLAB, Python NumPy',          desc:'Matched filter design for ISI mitigation, raised-cosine pulse shaping, and eye diagram analysis.' },
  { id:'com-a1', domain:'comm-systems', level:'Advanced',      title:'MIMO System',            tools:'MATLAB, Python, Wireless TB',   desc:'2×2/4×4 MIMO with Alamouti STBC, SVD beamforming, V-BLAST detection and capacity analysis.' },
  { id:'com-a2', domain:'comm-systems', level:'Advanced',      title:'Turbo Coding',           tools:'MATLAB, C++, Python',           desc:'Turbo encoder/decoder with MAP algorithm, extrinsic information, and iterative decoding convergence.' },
  { id:'com-a3', domain:'comm-systems', level:'Advanced',      title:'SDR Communication',      tools:'GNU Radio, USRP, Python',       desc:'Real-world SDR link with USRP hardware: OFDM over-the-air transmission with Doppler correction.' },
  { id:'com-a4', domain:'comm-systems', level:'Advanced',      title:'Adaptive Equalizer',     tools:'MATLAB, LMS/RLS algorithms',    desc:'Adaptive LMS/RLS channel equalizer for multipath fading channels with decision feedback structure.' },
  { id:'com-il1',domain:'comm-systems', level:'Industry Level',title:'5G Baseband System',     tools:'MATLAB 5G Toolbox, C++, FPGA',  desc:'5G NR physical layer: NR-PDSCH, rate matching, LDPC encoding, DMRS, and link-level simulation.' },
  { id:'com-il2',domain:'comm-systems', level:'Industry Level',title:'MIMO-OFDM Transceiver',  tools:'MATLAB, GNU Radio, USRP',       desc:'Complete MIMO-OFDM transceiver with channel estimation, spatial multiplexing and real-time hardware.' },
  { id:'com-il3',domain:'comm-systems', level:'Industry Level',title:'RF Front-End Integration',tools:'ADS, MATLAB, GNU Radio, HackRF',desc:'System-level RF chain: PA nonlinearity, DPD, IQ imbalance correction, and receiver sensitivity.' },
  { id:'com-il4',domain:'comm-systems', level:'Industry Level',title:'SDR System',             tools:'GNU Radio, USRP N210, ZMQ',     desc:'Full SDR platform with real-time OFDM, cognitive radio spectrum sensing, and dynamic spectrum access.' },

  // ======== DSP ========
  { id:'dsp-b1', domain:'dsp', level:'Basic',         title:'FIR Filter',               tools:'MATLAB, Python SciPy, C',      desc:'Direct-form FIR low/high/bandpass filter design using windowing methods with frequency response analysis.' },
  { id:'dsp-b2', domain:'dsp', level:'Basic',         title:'FFT Basics',               tools:'MATLAB, Python NumPy, C',      desc:'Implement Cooley-Tukey FFT, compare vs DFT, analyze leakage, windowing, and spectrogram visualization.' },
  { id:'dsp-b3', domain:'dsp', level:'Basic',         title:'Signal Generator',         tools:'MATLAB, Python, LabVIEW',      desc:'Sine/square/sawtooth waveform generator with frequency sweep, amplitude modulation, and harmonics.' },
  { id:'dsp-b4', domain:'dsp', level:'Basic',         title:'Audio Filter',             tools:'MATLAB, Python, Audacity',     desc:'Real-time audio FIR/IIR filter: equalizer bands, noise removal, and biquad filter cascade design.' },
  { id:'dsp-i1', domain:'dsp', level:'Intermediate',  title:'Audio Processing',         tools:'Python, PortAudio, Librosa',   desc:'Real-time audio processing: pitch detection, vocal remover, time-stretch, reverb and echo effects.' },
  { id:'dsp-i2', domain:'dsp', level:'Intermediate',  title:'Image Filtering',          tools:'Python OpenCV, SciPy',         desc:'2D spatial filters: Gaussian, Sobel, Laplacian, Canny edge detection with frequency domain filtering.' },
  { id:'dsp-i3', domain:'dsp', level:'Intermediate',  title:'Adaptive Filter',          tools:'MATLAB, Python, LMS/RLS',      desc:'LMS adaptive filter for noise cancellation: echo suppression, beamforming, and system identification.' },
  { id:'dsp-i4', domain:'dsp', level:'Intermediate',  title:'Noise Cancellation',       tools:'Python, pyAudio, Wiener filter',desc:'Real-time ANC (Active Noise Cancellation) system with feedforward LMS and dual-microphone setup.' },
  { id:'dsp-a1', domain:'dsp', level:'Advanced',      title:'Speech Processing',        tools:'Python, Kaldi, WebRTC, MATLAB', desc:'Speech enhancement pipeline: VAD, spectral subtraction, Wiener filtering, and PESQ/STOI evaluation.' },
  { id:'dsp-a2', domain:'dsp', level:'Advanced',      title:'AI DSP Accelerator',       tools:'TFLite, CMSIS-DSP, Cortex-M55',desc:'On-device ML inference for audio classification on Arm Cortex-M55 with Ethos-U55 neural co-processor.' },
  { id:'dsp-a3', domain:'dsp', level:'Advanced',      title:'Image Compression',        tools:'Python, C++, OpenCV, JPEG2000',desc:'Wavelet-based image compression: DWT, quantization, entropy coding vs JPEG, and PSNR/SSIM metrics.' },
  { id:'dsp-a4', domain:'dsp', level:'Advanced',      title:'Edge AI DSP',              tools:'MATLAB, TFLite Micro, EdgeTPU',  desc:'Keyword spotting on edge: MFCCs → CNN inference on TFLite Micro with < 50 ms latency on MCU.' },
  { id:'dsp-il1',domain:'dsp', level:'Industry Level',title:'Real-Time Audio Codec',   tools:'C, DSP TMS320, AES67',          desc:'Professional audio codec on TI DSP: AES67 network audio, sample-accurate sync, and < 1 ms latency.' },
  { id:'dsp-il2',domain:'dsp', level:'Industry Level',title:'AI Inference DSP',         tools:'Hexagon DSP, Qualcomm SNPE',   desc:'Production AI inference on Qualcomm Hexagon DSP using SNPE framework with INT8 quantized models.' },
  { id:'dsp-il3',domain:'dsp', level:'Industry Level',title:'Video Compression Engine', tools:'C++, HEVC, HW accelerator',    desc:'HEVC/H.265 real-time encoder on hardware with motion estimation, intra prediction, and rate control.' },
  { id:'dsp-il4',domain:'dsp', level:'Industry Level',title:'Speech To Text Engine',    tools:'Python, Whisper, TFLite, RTOS', desc:'On-device ASR system with CTC decoder, language model rescoring, and streaming inference on edge SoC.' },

  // ======== POWER ELECTRONICS ========
  { id:'pow-b1', domain:'power-elec', level:'Basic',         title:'Buck Converter',          tools:'LTspice, MATLAB, Arduino',     desc:'Synchronous buck converter simulation and hardware with PWM control, inductor/capacitor design, CCM.' },
  { id:'pow-b2', domain:'power-elec', level:'Basic',         title:'Rectifier Circuit',       tools:'LTspice, MATLAB, Hardware',    desc:'Half-wave, full-wave, and bridge rectifier with capacitor filter, ripple analysis, and regulation.' },
  { id:'pow-b3', domain:'power-elec', level:'Basic',         title:'DC Motor Driver',         tools:'Arduino, L298N, PWM, C',       desc:'H-bridge DC motor driver with PWM speed control, direction switching, current sensing, and protection.' },
  { id:'pow-b4', domain:'power-elec', level:'Basic',         title:'Boost Converter',         tools:'LTspice, STM32, GaN FET',      desc:'Boost converter with closed-loop PID voltage regulation, CCM/DCM analysis, and efficiency measurement.' },
  { id:'pow-i1', domain:'power-elec', level:'Intermediate',  title:'Full Bridge Converter',   tools:'MATLAB Simulink, STM32',       desc:'Phase-shifted full-bridge DC-DC converter with ZVS operation, transformer design, and control loop.' },
  { id:'pow-i2', domain:'power-elec', level:'Intermediate',  title:'Inverter Control',        tools:'MATLAB, STM32, SVPWM',         desc:'Single-phase/three-phase inverter with SPWM and SVPWM modulation, THD analysis, and LC filter design.' },
  { id:'pow-i3', domain:'power-elec', level:'Intermediate',  title:'MPPT Controller',         tools:'Arduino, Simulink, PV panel',  desc:'Maximum Power Point Tracking for PV panel using P&O and Incremental Conductance algorithms on MCU.' },
  { id:'pow-i4', domain:'power-elec', level:'Intermediate',  title:'PFC Circuit',             tools:'MATLAB, Simulink, STM32',      desc:'Boost PFC converter achieving PF > 0.99 with average current mode control and harmonic reduction.' },
  { id:'pow-a1', domain:'power-elec', level:'Advanced',      title:'EV Charger Controller',   tools:'STM32, GaN, IEC 61851, CAN',   desc:'On-board EV charger with AC-DC PFC stage, isolated DC-DC, CCS/CHAdeMO communication protocol.' },
  { id:'pow-a2', domain:'power-elec', level:'Advanced',      title:'Solar MPPT System',       tools:'STM32, MPPT, LiPo BMS, CAN',   desc:'Grid-tied solar inverter with MPPT, anti-islanding protection, LVRT capability, and IEC 62109 safety.' },
  { id:'pow-a3', domain:'power-elec', level:'Advanced',      title:'Three-Phase Inverter',    tools:'STM32, IGBT, SVPWM, MATLAB',   desc:'3-phase grid-tie inverter with vector control, dq-axis current regulators, and islanding detection.' },
  { id:'pow-a4', domain:'power-elec', level:'Advanced',      title:'Grid Converter',          tools:'MATLAB, Simulink, TI DSP',     desc:'Bidirectional grid-connected converter with droop control for microgrid energy management.' },
  { id:'pow-il1',domain:'power-elec', level:'Industry Level',title:'EV Powertrain Controller',tools:'STM32G4, SiC MOSFET, FOC',    desc:'SiC-based 3-phase traction inverter with Field-Oriented Control, functional safety ISO 26262 ASIL-D.' },
  { id:'pow-il2',domain:'power-elec', level:'Industry Level',title:'Battery Management System',tools:'STM32, BQ76940, CAN, LTE',   desc:'Multi-cell BMS with coulomb counting, SoC/SoH estimation, cell balancing, and cloud telemetry.' },
  { id:'pow-il3',domain:'power-elec', level:'Industry Level',title:'Digital UPS',             tools:'STM32, Simulink, DSP',         desc:'Online double-conversion UPS with DSP control, seamless transfer, battery management, and SNMP.' },
  { id:'pow-il4',domain:'power-elec', level:'Industry Level',title:'Smart Grid Converter',    tools:'TI DSP, Simulink, IEC 61968',  desc:'Grid-edge power converter with V2G, demand response, smart metering, and IEC 61968 SCADA integration.' },

  // ======== ROBOTICS ========
  { id:'rob-b1', domain:'robotics-proj', level:'Basic',         title:'Line Follower Robot',  tools:'Arduino, IR Sensor, L298N',    desc:'PID-controlled line follower using 5-sensor array with adaptive speed on curves and intersection handling.' },
  { id:'rob-b2', domain:'robotics-proj', level:'Basic',         title:'Obstacle Avoider',     tools:'Arduino, HC-SR04, Servo',      desc:'Autonomous obstacle avoidance robot with servo-mounted ultrasonic sensor and wall-following behavior.' },
  { id:'rob-b3', domain:'robotics-proj', level:'Basic',         title:'Servo Robot Control',  tools:'Arduino, Servo, PS2 Controller',desc:'Multi-servo robotic arm with joystick control, position memory playback, and IK solver basics.' },
  { id:'rob-b4', domain:'robotics-proj', level:'Basic',         title:'Bluetooth Robot',      tools:'Arduino, HC-05, Android App',   desc:'Bluetooth-controlled robot car with Android app, PWM speed control, and sensor feedback display.' },
  { id:'rob-i1', domain:'robotics-proj', level:'Intermediate',  title:'Autonomous Robot',     tools:'ROS2, Raspberry Pi, SLAM',      desc:'ROS2-based autonomous mobile robot with laser SLAM, autonomous navigation using Nav2 stack.' },
  { id:'rob-i2', domain:'robotics-proj', level:'Intermediate',  title:'Color Detection Robot',tools:'OpenCV, Raspberry Pi, HSV',     desc:'Vision-guided robot using OpenCV HSV color segmentation to sort objects on a conveyor system.' },
  { id:'rob-i3', domain:'robotics-proj', level:'Intermediate',  title:'Robotic Arm',          tools:'ROS, MoveIt, STM32, Servos',    desc:'6-DOF robotic arm with MoveIt path planning, IK solving, and trajectory execution with ROS.' },
  { id:'rob-i4', domain:'robotics-proj', level:'Intermediate',  title:'Indoor Navigation',    tools:'ROS2, LiDAR, AMCL, Nav2',       desc:'Indoor robot localization and navigation using particle filter AMCL and global/local planners.' },
  { id:'rob-a1', domain:'robotics-proj', level:'Advanced',      title:'ROS Robot',            tools:'ROS2, Gazebo, Nav2, SLAM Toolbox',desc:'Full ROS2 robot stack: URDF, Gazebo simulation, SLAM, Nav2 autonomous navigation, lifecycle nodes.' },
  { id:'rob-a2', domain:'robotics-proj', level:'Advanced',      title:'SLAM Robot',           tools:'ROS2, RTAB-Map, LiDAR, RGBD',  desc:'3D SLAM using RTAB-Map with LiDAR + RGBD camera fusion, loop closure, and 3D map generation.' },
  { id:'rob-a3', domain:'robotics-proj', level:'Advanced',      title:'Gesture Robot',        tools:'MediaPipe, OpenCV, ROS, Jetson',desc:'Hand gesture-controlled robot using MediaPipe Hand Landmark model with real-time ROS command mapping.' },
  { id:'rob-a4', domain:'robotics-proj', level:'Advanced',      title:'Object Tracking Robot',tools:'YOLOv8, Jetson Nano, ROS2',     desc:'Real-time object tracking robot using YOLOv8 detection with visual servoing and pursuit PID control.' },
  { id:'rob-il1',domain:'robotics-proj', level:'Industry Level',title:'Autonomous Drone',     tools:'PX4, ROS2, VIO, OAK-D',        desc:'Autonomous UAV with PX4 flight stack, visual-inertial odometry, obstacle avoidance, and mission planning.' },
  { id:'rob-il2',domain:'robotics-proj', level:'Industry Level',title:'AGV Vehicle',          tools:'ROS2, Nav2, AMR, Fleet Manager', desc:'Autonomous Guided Vehicle for warehouse with fleet management, dynamic replanning, and QR navigation.' },
  { id:'rob-il3',domain:'robotics-proj', level:'Industry Level',title:'ROS Navigation Stack', tools:'ROS2, Nav2, Costmaps, BT',      desc:'Production Nav2 stack with behavior trees, multi-layer costmaps, recovery behaviors, and lifecycle.' },
  { id:'rob-il4',domain:'robotics-proj', level:'Industry Level',title:'Warehouse Robot',       tools:'ROS2, MoveIt2, Gazebo, Fleet',  desc:'Pick-and-place warehouse robot with 3D perception, grasp planning, fleet coordination, and WMS integration.' },

  // ======== IoT ========
  { id:'iot-b1', domain:'iot-proj', level:'Basic',         title:'ESP32 Weather Monitor',   tools:'ESP32, BME280, ThingSpeak',    desc:'WiFi weather station sending temperature/humidity/pressure to ThingSpeak cloud with Blynk dashboard.' },
  { id:'iot-b2', domain:'iot-proj', level:'Basic',         title:'RFID Attendance',         tools:'ESP8266, MFRC522, Firebase',   desc:'RFID-based attendance system with real-time logging to Firebase and web dashboard display.' },
  { id:'iot-b3', domain:'iot-proj', level:'Basic',         title:'Smart Light Control',     tools:'ESP8266, MQTT, Alexa, Relay',   desc:'Smart home light controller with MQTT, Alexa voice control, and schedule-based automation.' },
  { id:'iot-b4', domain:'iot-proj', level:'Basic',         title:'WiFi Sensor Node',        tools:'ESP32, DHT22, MQTT, Node-RED', desc:'MQTT-connected sensor node with Node-RED dashboard, alerts, and InfluxDB time-series storage.' },
  { id:'iot-i1', domain:'iot-proj', level:'Intermediate',  title:'Smart Agriculture System',tools:'ESP32, Soil Moisture, LoRa',   desc:'Precision irrigation: multi-zone soil moisture, weather API integration, and solenoid valve automation.' },
  { id:'iot-i2', domain:'iot-proj', level:'Intermediate',  title:'BLE Monitoring',          tools:'nRF52, Zephyr, BLE 5.0',       desc:'BLE sensor node with GATT server, advertisement with payload, and iOS/Android companion app.' },
  { id:'iot-i3', domain:'iot-proj', level:'Intermediate',  title:'LoRa System',             tools:'SX1278, Arduino, TTN, MQTT',    desc:'LoRaWAN end-node with The Things Network, downlink commands, and encrypted sensor data uplinks.' },
  { id:'iot-i4', domain:'iot-proj', level:'Intermediate',  title:'Cloud Dashboard',          tools:'Node-RED, InfluxDB, Grafana',   desc:'Industrial IoT dashboard: MQTT broker, time-series DB, Grafana visualization, and alerting rules.' },
  { id:'iot-a1', domain:'iot-proj', level:'Advanced',      title:'Edge AI Camera',           tools:'ESP32-CAM, TFLite, MQTT',       desc:'Edge AI camera running person detection TFLite model on ESP32-S3 with local inference and cloud alert.' },
  { id:'iot-a2', domain:'iot-proj', level:'Advanced',      title:'Smart Surveillance',       tools:'Jetson Nano, YOLOv8, RTSP',    desc:'AI surveillance system with face recognition, intrusion detection, RTSP streaming, and cloud logging.' },
  { id:'iot-a3', domain:'iot-proj', level:'Advanced',      title:'Industrial IoT Gateway',   tools:'Raspberry Pi, OPC-UA, MQTT',   desc:'IIoT gateway bridging Modbus/OPC-UA industrial devices to cloud via MQTT with edge analytics.' },
  { id:'iot-a4', domain:'iot-proj', level:'Advanced',      title:'AI Automation',            tools:'ESP32, TFLite Micro, RTOS',    desc:'Smart factory IoT node running on-device anomaly detection for predictive maintenance alerts.' },
  { id:'iot-il1',domain:'iot-proj', level:'Industry Level',title:'Smart City Platform',      tools:'AWS IoT, Kafka, Spark, K8s',    desc:'Smart city IoT platform: 100K device management, stream analytics, digital twin, and SLA dashboards.' },
  { id:'iot-il2',domain:'iot-proj', level:'Industry Level',title:'Industrial IoT Cloud',     tools:'Azure IoT Hub, OPC-UA, Twins',  desc:'Azure-based IIoT solution with device provisioning, OPC-UA telemetry, ADT digital twin, and ML anomaly.' },
  { id:'iot-il3',domain:'iot-proj', level:'Industry Level',title:'NB-IoT System',            tools:'Quectel BC66, NB-IoT, CoAP',   desc:'NB-IoT asset tracker: GNSS, sensor payload, PSM/eDRX power save, CoAP to cloud over operator network.' },
  { id:'iot-il4',domain:'iot-proj', level:'Industry Level',title:'Digital Twin',             tools:'Azure ADT, Unity, InfluxDB',   desc:'Industrial digital twin synchronizing physical plant sensor data with 3D Unity model in real time.' },

  // ======== CONTROL SYSTEMS ========
  { id:'ctl-b1', domain:'control', level:'Basic',         title:'PID Controller',           tools:'MATLAB, Arduino, Python',      desc:'PID controller design and tuning for DC motor speed control using Ziegler-Nichols method on hardware.' },
  { id:'ctl-b2', domain:'control', level:'Basic',         title:'Water Level Controller',   tools:'Arduino, Float Sensor, PID',   desc:'Closed-loop water tank level control with ultrasonic sensing, pump relay, and PID level regulation.' },
  { id:'ctl-b3', domain:'control', level:'Basic',         title:'Motor Speed Control',      tools:'STM32, FOC, Encoder, PWM',     desc:'Closed-loop DC motor speed control with encoder feedback, PI controller, and anti-windup protection.' },
  { id:'ctl-b4', domain:'control', level:'Basic',         title:'Cruise Control',           tools:'MATLAB Simulink, PID, Model',  desc:'Automotive cruise control simulation: vehicle dynamics model, PI controller, disturbance rejection.' },
  { id:'ctl-i1', domain:'control', level:'Intermediate',  title:'State Space Control',      tools:'MATLAB, Python Control Lib',   desc:'Full state feedback controller design using pole placement and LQR for double integrator system.' },
  { id:'ctl-i2', domain:'control', level:'Intermediate',  title:'Stability Analysis',       tools:'MATLAB, Bode/Nyquist, Python',  desc:'Frequency domain stability analysis: Bode plot, Nyquist criterion, gain/phase margins, root locus.' },
  { id:'ctl-i3', domain:'control', level:'Intermediate',  title:'PID Tuning',               tools:'MATLAB Simulink, Auto-tuner',  desc:'Systematic PID auto-tuning using relay feedback, frequency response estimation, and loop shaping.' },
  { id:'ctl-i4', domain:'control', level:'Intermediate',  title:'Inverted Pendulum',        tools:'MATLAB, Arduino, LQR, OpenCV', desc:'Real inverted pendulum stabilization with LQR state feedback, optical encoder, and DC motor actuator.' },
  { id:'ctl-a1', domain:'control', level:'Advanced',      title:'Kalman Filter',            tools:'MATLAB, Python, NumPy',        desc:'Extended Kalman Filter for INS/GPS fusion: state estimation, covariance propagation, and ZUPT.' },
  { id:'ctl-a2', domain:'control', level:'Advanced',      title:'LQR Controller',           tools:'MATLAB, Python, Simulink',     desc:'LQR optimal control design for quadrotor attitude: Riccati equation, simulation, and hardware testing.' },
  { id:'ctl-a3', domain:'control', level:'Advanced',      title:'Non-Linear Control',       tools:'MATLAB, Sliding Mode, Lyapunov',desc:'Sliding mode controller for nonlinear robotic arm with Lyapunov stability proof and chattering reduction.' },
  { id:'ctl-a4', domain:'control', level:'Advanced',      title:'Adaptive Control',         tools:'MATLAB, MRAC, Simulink',       desc:'Model Reference Adaptive Control (MRAC) with MIT rule for time-varying plant parameter estimation.' },
  { id:'ctl-il1',domain:'control', level:'Industry Level',title:'Model Predictive Platform',tools:'MATLAB MPC Toolbox, Python',   desc:'MPC controller for chemical reactor with constraints, real-time QP solver, and economic objective.' },
  { id:'ctl-il2',domain:'control', level:'Industry Level',title:'Autonomous Vehicle Control',tools:'ROS2, PID, MPC, Stanley',    desc:'Lateral/longitudinal control for AV: Stanley controller for steering, MPC for velocity planning, ROS2.' },
  { id:'ctl-il3',domain:'control', level:'Industry Level',title:'Sensorless Motor Control',  tools:'STM32, BEMF, EKF, FOC',      desc:'Sensorless FOC using Extended Kalman Filter for PMSM rotor position estimation at all speeds.' },
  { id:'ctl-il4',domain:'control', level:'Industry Level',title:'Adaptive Drive System',     tools:'MATLAB, Simulink, AUTOSAR',   desc:'AUTOSAR-compliant adaptive cruise control with FMEA, ISO 26262 ASIL-B functional safety analysis.' },

  // ======== PHYSICAL DESIGN ========
  { id:'pd-b1', domain:'physical-des', level:'Basic',         title:'Floorplanning Basics',  tools:'Cadence Innovus, OpenROAD',     desc:'Design floorplanning: aspect ratio, IO ring placement, macro placement, and area estimation in Innovus.' },
  { id:'pd-b2', domain:'physical-des', level:'Basic',         title:'Placement Basics',      tools:'OpenROAD, Cadence Innovus',     desc:'Standard cell placement: global placement, legalization, and timing-driven placement objectives.' },
  { id:'pd-b3', domain:'physical-des', level:'Basic',         title:'Routing Basics',        tools:'OpenROAD, Cadence Innovus',     desc:'Global and detail routing: track assignment, via optimization, DRC-clean routing completion.' },
  { id:'pd-b4', domain:'physical-des', level:'Basic',         title:'Timing Analysis',       tools:'OpenSTA, Synopsys PT',          desc:'Static timing analysis: setup/hold paths, clock skew, input/output delay constraints and SDC writing.' },
  { id:'pd-i1', domain:'physical-des', level:'Intermediate',  title:'CTS Analysis',          tools:'Cadence Innovus, CCOpt',        desc:'Clock tree synthesis: H-tree, balanced clock tree, insertion delay, skew optimization with CCOpt.' },
  { id:'pd-i2', domain:'physical-des', level:'Intermediate',  title:'Power Analysis',        tools:'Cadence Voltus, MATLAB',        desc:'Dynamic/static power analysis: vectorless and VCD-based toggle rate, IR-drop map, and EM check.' },
  { id:'pd-i3', domain:'physical-des', level:'Intermediate',  title:'STA (Physical)',        tools:'Synopsys PrimeTime, SDC',       desc:'Post-route STA with real RC parasitics (StarRC), multi-corner multi-mode MCMM timing closure.' },
  { id:'pd-i4', domain:'physical-des', level:'Intermediate',  title:'Congestion Analysis',   tools:'Cadence Innovus, OpenROAD',     desc:'Routing congestion analysis: GRC overflow maps, congestion-driven placement, and layer assignment.' },
  { id:'pd-a1', domain:'physical-des', level:'Advanced',      title:'Advanced Routing',      tools:'Cadence Innovus, Calibre',      desc:'Advanced routing techniques: via pillar, pattern routing, redundant vias, and antenna fixing.' },
  { id:'pd-a2', domain:'physical-des', level:'Advanced',      title:'IR Drop Analysis',      tools:'Cadence Voltus, RedHawk',       desc:'Full-chip dynamic IR drop with CPM, PDN design: power mesh, decap insertion, and EM/IR sign-off.' },
  { id:'pd-a3', domain:'physical-des', level:'Advanced',      title:'Antenna Fixing',        tools:'Calibre AntennaCheck, Innovus', desc:'Antenna effect analysis and fixing: jumper insertion, metal layer diode strategy, and sign-off.' },
  { id:'pd-a4', domain:'physical-des', level:'Advanced',      title:'Power Optimization',    tools:'Synopsys DC, Cadence Innovus',  desc:'Leakage/dynamic power reduction: multi-Vt cell swap, clock gating, power domain partitioning.' },
  { id:'pd-il1',domain:'physical-des', level:'Industry Level',title:'Full Chip Implementation',tools:'Cadence Innovus, Genus, PT',  desc:'End-to-end SoC PnR: hierarchical floorplan, power grid, CTS, ECO routing, sign-off, and GDSII export.' },
  { id:'pd-il2',domain:'physical-des', level:'Industry Level',title:'Timing Signoff',        tools:'Synopsys PrimeTime, POCV',      desc:'Timing signoff with POCV, AOCV, hold-fix, common path pessimism removal, and MCMM closure.' },
  { id:'pd-il3',domain:'physical-des', level:'Industry Level',title:'ECO Closure',           tools:'Synopsys Formality, ECO, PT',   desc:'Post-tapeout functional/timing ECO: spare cell insertion, metal-only ECO, and formal equivalence check.' },
  { id:'pd-il4',domain:'physical-des', level:'Industry Level',title:'Tapeout Signoff Flow',  tools:'Calibre DRC/LVS, Klayout, PT',  desc:'Complete tapeout signoff: DRC, LVS, ERC, density, antenna, STA, power — GDS2 submission package.' },

  // ======== RF & MICROWAVE ========
  { id:'rf-b1', domain:'rf-micro', level:'Basic',         title:'Patch Antenna',            tools:'HFSS, CST Studio, ADS',        desc:'Rectangular microstrip patch antenna design at 2.4 GHz: patch dimensions, ground plane, return loss.' },
  { id:'rf-b2', domain:'rf-micro', level:'Basic',         title:'RF Amplifier',             tools:'ADS, Cadence RF, HFSS',        desc:'Single-stage RF amplifier with S-parameter matching network, gain, stability circles, and NF.' },
  { id:'rf-b3', domain:'rf-micro', level:'Basic',         title:'Transmission Line',        tools:'ADS, MATLAB, Qucs',            desc:'Microstrip/coplanar waveguide design: impedance matching, quarter-wave transformer, stub tuning.' },
  { id:'rf-b4', domain:'rf-micro', level:'Basic',         title:'Mixer Basics',             tools:'ADS, Cadence Spectre RF',      desc:'Single-balanced and double-balanced mixer design: conversion gain, IIP3, LO leakage, and IF port.' },
  { id:'rf-i1', domain:'rf-micro', level:'Intermediate',  title:'VCO Design',               tools:'Cadence Virtuoso, Spectre RF', desc:'LC voltage-controlled oscillator in CMOS: tank design, Barkhausen criterion, tuning range, phase noise.' },
  { id:'rf-i2', domain:'rf-micro', level:'Intermediate',  title:'RF Mixer Design',          tools:'Cadence Spectre RF, ADS',      desc:'Active Gilbert cell mixer design: transconductor, switching quad, IF output, noise, and linearity.' },
  { id:'rf-i3', domain:'rf-micro', level:'Intermediate',  title:'LNA Design',               tools:'Cadence Virtuoso, Spectre RF', desc:'Inductive source-degenerated LNA at 2.4 GHz: NF < 1.5 dB, S21 > 15 dB, input match, stability.' },
  { id:'rf-i4', domain:'rf-micro', level:'Intermediate',  title:'S-Parameter Simulation',   tools:'ADS, HFSS, VNA (hardware)',    desc:'S-parameter simulation and measurement: 2-port network, Smith chart, de-embedding, and calibration.' },
  { id:'rf-a1', domain:'rf-micro', level:'Advanced',      title:'Power Amplifier',          tools:'ADS, Cadence, GaN HEMT',       desc:'Class-AB GaN PA at 28 GHz: load-pull optimization, PAE > 40%, DPD linearization for 5G NR.' },
  { id:'rf-a2', domain:'rf-micro', level:'Advanced',      title:'SAW Filter',               tools:'COMSOL, ADS, FEM simulation',  desc:'SAW bandpass filter design at 1.9 GHz: electrode pitch, IDT design, insertion loss, and stopband.' },
  { id:'rf-a3', domain:'rf-micro', level:'Advanced',      title:'RF Front-End',             tools:'ADS, Cadence, HFSS',           desc:'Complete RF front-end: LNA + mixer + VCO + PA with co-design, isolation, EVM, and blocking specs.' },
  { id:'rf-a4', domain:'rf-micro', level:'Advanced',      title:'Oscillator Design',        tools:'Cadence Spectre RF, ADS',      desc:'Crystal oscillator and ring oscillator design: frequency stability, PSRR, startup, and jitter analysis.' },
  { id:'rf-il1',domain:'rf-micro', level:'Industry Level',title:'Phased Array Antenna',     tools:'HFSS, ADS, Matlab Phased Array TB',desc:'64-element 5G mm-Wave phased array: beamforming, beam steering, calibration, and EIRP analysis.' },
  { id:'rf-il2',domain:'rf-micro', level:'Industry Level',title:'mmWave Front-End',         tools:'Cadence RF, ADS, 28nm FinFET', desc:'28 GHz 5G NR front-end IC: PA, LNA, VCO, mixer, PLL in 28nm CMOS — full transceiver chiplet.' },
  { id:'rf-il3',domain:'rf-micro', level:'Industry Level',title:'RFIC Layout',              tools:'Cadence Virtuoso, Calibre',    desc:'RF IC full-custom layout: symmetric inductors, RF-DRC, EM simulation of passives, EMC floor plan.' },
  { id:'rf-il4',domain:'rf-micro', level:'Industry Level',title:'5G Transceiver',           tools:'Cadence, ADS, SystemVue, NR',  desc:'5G NR FR2 transceiver architecture: ADC/DAC resolution, EVM budget, phase noise mask, link budget.' }
];
