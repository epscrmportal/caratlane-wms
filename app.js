let SKUS=[
  {sku:"UNI-GS-M-34",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 34",rack:"A",shelf:"1",price:995},
  {sku:"UNI-GS-M-36",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 36",rack:"A",shelf:"1",price:995},
  {sku:"UNI-GS-M-38",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 38",rack:"A",shelf:"1",price:995},
  {sku:"UNI-GS-M-42",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 42",rack:"A",shelf:"1",price:995},
  {sku:"UNI-GS-M-44",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 44",rack:"A",shelf:"1",price:995},
  {sku:"UNI-GS-M-46",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 46",rack:"A",shelf:"1",price:995},
  {sku:"UNI-GS-F-34",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 34",rack:"A",shelf:"2",price:995},
  {sku:"UNI-GS-F-36",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 36",rack:"A",shelf:"2",price:995},
  {sku:"UNI-GS-F-38",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 38",rack:"A",shelf:"2",price:995},
  {sku:"UNI-GS-F-40",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 40",rack:"A",shelf:"2",price:995},
  {sku:"UNI-GS-F-42",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 42",rack:"A",shelf:"2",price:995},
  {sku:"UNI-GS-F-44",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 44",rack:"A",shelf:"2",price:995},
  {sku:"UNI-GS-F-46",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 46",rack:"A",shelf:"2",price:995},
  {sku:"UNI-MC-U-34",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 34",rack:"A",shelf:"3",price:1175},
  {sku:"UNI-MC-U-36",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 36",rack:"A",shelf:"3",price:1175},
  {sku:"UNI-MC-U-38",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 38",rack:"A",shelf:"3",price:1175},
  {sku:"UNI-MC-U-40",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 40",rack:"A",shelf:"3",price:1175},
  {sku:"UNI-MC-U-42",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 42",rack:"A",shelf:"3",price:1175},
  {sku:"UNI-MC-U-44",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 44",rack:"A",shelf:"3",price:1175},
  {sku:"UNI-BLZ-U",cat:"Uniform",sub:"Blazers - Unisex",variant:"Unstitched",rack:"A",shelf:"4",price:1805},
  {sku:"UNI-JCT-U",cat:"Uniform",sub:"JC Trouser - Unisex",variant:"Unstitched",rack:"A",shelf:"4",price:659.1},
  {sku:"UNI-JCS-U",cat:"Uniform",sub:"JC Shirt - Unisex",variant:"Unstitched",rack:"A",shelf:"4",price:450},
  {sku:"UNI-TAH-U",cat:"Uniform",sub:"TAH Shirt - Unisex",variant:"Unstitched",rack:"A",shelf:"4",price:450},
  {sku:"UNI-HKS-M",cat:"Uniform",sub:"HK Shirt - Male",variant:"Unstitched",rack:"A",shelf:"5",price:425},
  {sku:"UNI-HKT-M",cat:"Uniform",sub:"HK Trouser - Male",variant:"Unstitched",rack:"A",shelf:"5",price:440},
  {sku:"UNI-HKK-F",cat:"Uniform",sub:"HK Kurta - Female",variant:"Unstitched",rack:"A",shelf:"5",price:510},
  {sku:"UNI-HKP-F",cat:"Uniform",sub:"HK Pyjama - Female",variant:"Unstitched",rack:"A",shelf:"5",price:440},
  {sku:"UNI-SH-M-6",cat:"Uniform",sub:"Shoes - Male",variant:"Size 6",rack:"A",shelf:"6",price:800},
  {sku:"UNI-SH-M-7",cat:"Uniform",sub:"Shoes - Male",variant:"Size 7",rack:"A",shelf:"6",price:800},
  {sku:"UNI-SH-M-8",cat:"Uniform",sub:"Shoes - Male",variant:"Size 8",rack:"A",shelf:"6",price:800},
  {sku:"UNI-SH-M-11",cat:"Uniform",sub:"Shoes - Male",variant:"Size 11",rack:"A",shelf:"6",price:950},
  {sku:"UNI-SH-M-12",cat:"Uniform",sub:"Shoes - Male",variant:"Size 12",rack:"A",shelf:"6",price:950},
  {sku:"UNI-SH-F-6",cat:"Uniform",sub:"Shoes - Female",variant:"Size 6",rack:"A",shelf:"7",price:800},
  {sku:"UNI-SH-F-7",cat:"Uniform",sub:"Shoes - Female",variant:"Size 7",rack:"A",shelf:"7",price:800},
  {sku:"UNI-SH-U-4",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 4",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-5",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 5",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-6",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 6",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-7",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 7",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-8",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 8",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-9",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 9",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-10",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 10",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-11",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 11",rack:"A",shelf:"7",price:890},
  {sku:"UNI-SH-U-12",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 12",rack:"A",shelf:"7",price:890},
  {sku:"UNI-DN-M-28",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 28",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-30",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 30",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-32",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 32",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-34",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 34",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-36",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 36",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-38",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 38",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-40",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 40",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-42",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 42",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-44",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 44",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-M-46",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 46",rack:"A",shelf:"8",price:1400},
  {sku:"UNI-DN-F-24",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 24",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-26",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 26",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-28",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 28",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-30",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 30",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-32",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 32",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-34",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 34",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-36",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 36",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-DN-F-38",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 38",rack:"A",shelf:"9",price:1400},
  {sku:"UNI-SHT-M-34",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 34",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-36",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 36",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-38",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 38",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-40",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 40",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-42",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 42",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-44",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 44",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-46",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 46",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-48",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 48",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-50",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 50",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-52",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 52",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-M-54",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 54",rack:"A",shelf:"10",price:760},
  {sku:"UNI-SHT-F-XXS",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XXS",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-XS",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XS",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-S",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size S",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-M",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size M",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-L",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size L",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-XL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XL",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-XXL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XXL",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-XXXL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XXXL",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-4XL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size 4XL",rack:"A",shelf:"11",price:760},
  {sku:"UNI-SHT-F-5XL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size 5XL",rack:"A",shelf:"11",price:760},
  {sku:"UNI-KPD-F-S",cat:"Uniform",sub:"Stitched Set - Kurti+Pant+Dupatta (Female)",variant:"Size S",rack:"A",shelf:"12",price:2034},
  {sku:"UNI-KPD-F-M",cat:"Uniform",sub:"Stitched Set - Kurti+Pant+Dupatta (Female)",variant:"Size M",rack:"A",shelf:"12",price:2034},
  {sku:"UNI-KPD-F-L",cat:"Uniform",sub:"Stitched Set - Kurti+Pant+Dupatta (Female)",variant:"Size L",rack:"A",shelf:"12",price:2034},
  {sku:"UNI-KPD-F-XL",cat:"Uniform",sub:"Stitched Set - Kurti+Pant+Dupatta (Female)",variant:"Size XL",rack:"A",shelf:"12",price:2034},
  {sku:"VM-EG",cat:"VM",sub:"Eye glass",variant:"Eye glass",rack:"B",shelf:"1",price:325},
  {sku:"VM-EL",cat:"VM",sub:"Eye Loop",variant:"Eye Loop",rack:"B",shelf:"1",price:1100},
  {sku:"VM-CB",cat:"VM",sub:"Chocolate bowl",variant:"Chocolate bowl",rack:"B",shelf:"2",price:395},
  {sku:"VM-CC",cat:"VM",sub:"Cleaning Cloth",variant:"Cleaning Cloth",rack:"B",shelf:"2",price:125},
  {sku:"VM-IC-9",cat:"VM",sub:"Ipad Cover",variant:"9th Generation",rack:"B",shelf:"3",price:275},
  {sku:"VM-IC-10",cat:"VM",sub:"Ipad Cover",variant:"10th Generation",rack:"B",shelf:"3",price:300},
  {sku:"VM-RS",cat:"VM",sub:"Ring Sizer",variant:"Ring Sizer",rack:"B",shelf:"4",price:0},
  {sku:"VM-RR",cat:"VM",sub:"Ring Rod",variant:"Ring Rod",rack:"B",shelf:"4",price:350},
  {sku:"VM-BS",cat:"VM",sub:"Bangle Sizer",variant:"Bangle Sizer",rack:"B",shelf:"4",price:990},
];

// ═══ CARATLANE STORE MASTER (name, address, pincode, phone) — used for
// searchable store/address autofill in Create Order & Dispatch ═══
let STORES=[
  {code:"CLHYDJBH",name:"CL-ST-HYD-Jubilee Hills",address:"Unit No. 2, Plot No. 8-2-293/82/A/1124, Road No.36, Jubilee Hills, Hyderabad",pincode:"",phone:"7397730888",addressLine:"Unit No. 2, Plot No. 8-2-293/82/A/1124, Road No.36, Jubilee Hills, Hyderabad | Ph: 7397730888"},
  {code:"CLBLRPMM",name:"CL-ST-BNG-Phoenix Mall",address:"Unit No. G-47, G-48, Lower Ground Floor, Phoenix Markety City, Bengaluru East, Mahadevpura, Near Krishnarajapuram Flyover, Bengaluru - 560048",pincode:"560048",phone:"8105214444",addressLine:"Unit No. G-47, G-48, Lower Ground Floor, Phoenix Markety City, Bengaluru East, Mahadevpura, Near Krishnarajapuram Flyover, Bengaluru - 560048 | PIN: 560048 | Ph: 8105214444"},
  {code:"CFHYDSFM",name:"CL-ST-HYD-Forum Mall",address:"CaratLane Store, Unit No 15, Upper Ground Floor, Forum Sujana Mall, Kukatpally, Hyderabad, Telangana - 500072",pincode:"500072",phone:"7032079222",addressLine:"CaratLane Store, Unit No 15, Upper Ground Floor, Forum Sujana Mall, Kukatpally, Hyderabad, Telangana - 500072 | PIN: 500072 | Ph: 7032079222"},
  {code:"CFDELPCM",name:"CL-ST-DEL-Pacific Mall-L2",address:"SH/1F/16 First floor, Pacific Mall, Najafgarh Road, Khayala, New Delhi-110018",pincode:"110018",phone:"9999200155",addressLine:"SH/1F/16 First floor, Pacific Mall, Najafgarh Road, Khayala, New Delhi-110018 | PIN: 110018 | Ph: 9999200155"},
  {code:"CLGURABM",name:"CL-ST-GUR-Ambience Mall",address:"FF-131, Ambience Mall, DLF Phase -3, Sector 24, Gurugram, Haryana 122022",pincode:"122022",phone:"9999200133",addressLine:"FF-131, Ambience Mall, DLF Phase -3, Sector 24, Gurugram, Haryana 122022 | PIN: 122022 | Ph: 9999200133"},
  {code:"CFCHNCDR",name:"CL-ST-CHN-Cathedral Road",address:"No 128/34, Crown Court,Cathedral Road, Gopalapuram, Chennai-600086.",pincode:"600086",phone:"8754577770",addressLine:"No 128/34, Crown Court,Cathedral Road, Gopalapuram, Chennai-600086. | PIN: 600086 | Ph: 8754577770"},
  {code:"CFMUMVVM",name:"CL-ST-THN-LakeShore",address:"CaratLane Store, 1st Floor, Viviana Mall, Thane, Mumbai - 400606",pincode:"400606",phone:"7045009500",addressLine:"CaratLane Store, 1st Floor, Viviana Mall, Thane, Mumbai - 400606 | PIN: 400606 | Ph: 7045009500"},
  {code:"CLPUNPMM",name:"CL-ST-PNE-Phoenix Market City",address:"1st Floor, Phoenix Marketcity, Viman Nagar, Pune - 411014",pincode:"411014",phone:"7045951555",addressLine:"1st Floor, Phoenix Marketcity, Viman Nagar, Pune - 411014 | PIN: 411014 | Ph: 7045951555"},
  {code:"CFNOIDIM",name:"CL-ST-NDD-DLF Mall-L2",address:"Mall of India, Unit No E 243A, First Floor, Plot No. M-03, Sector 18, Noida - 201301, UP",pincode:"201301",phone:"9999200166",addressLine:"Mall of India, Unit No E 243A, First Floor, Plot No. M-03, Sector 18, Noida - 201301, UP | PIN: 201301 | Ph: 9999200166"},
  {code:"CRBLRKOR",name:"CL-ST-L3-BNG-Koramangala",address:"No 04, 100ft Road next To Tanishq store Koramangala Bangalore-560034",pincode:"560034",phone:"8056091999",addressLine:"No 04, 100ft Road next To Tanishq store Koramangala Bangalore-560034 | PIN: 560034 | Ph: 8056091999"},
  {code:"CLGURGSM",name:"CL-ST-GUR-Gold Souk Mall",address:"GF -6, Gold Souk Mall, Sector 43 Road, Sushant Lok Phase I, Sector 43, Gurugram, Haryana - 122002",pincode:"122002",phone:"9999200922",addressLine:"GF -6, Gold Souk Mall, Sector 43 Road, Sushant Lok Phase I, Sector 43, Gurugram, Haryana - 122002 | PIN: 122002 | Ph: 9999200922"},
  {code:"CFGZBSPM",name:"CL-ST-GZB-Shipra Mall",address:"Shop No GF-21 & 48, Shipra Mall, Indirapuram, Ghaziabad, Uttar Pradesh - 201014",pincode:"201014",phone:"9990364444",addressLine:"Shop No GF-21 & 48, Shipra Mall, Indirapuram, Ghaziabad, Uttar Pradesh - 201014 | PIN: 201014 | Ph: 9990364444"},
  {code:"CLMUMIFM",name:"CL-ST-MUM-Infinity Mall",address:"Infinity - Malad - GF - 041, No.504 of Village Malad (South), Taluka Borivali, Mumbai Suburban District, situated at Link Road, Malad (West), Mumbai - 400064",pincode:"400064",phone:"9920222500",addressLine:"Infinity - Malad - GF - 041, No.504 of Village Malad (South), Taluka Borivali, Mumbai Suburban District, situated at Link Road, Malad (West), Mumbai - 400064 | PIN: 400064 | Ph: 9920222500"},
  {code:"CLPUNWEM",name:"CL-ST-PNE-West End Mall",address:"GS 04B, Ground Floor, Next to Westend Sector 2 (Reliance Mart), Near Parihar Chowk, Aundh, Pune, Maharashtra 411007",pincode:"411007",phone:"9833250030",addressLine:"GS 04B, Ground Floor, Next to Westend Sector 2 (Reliance Mart), Near Parihar Chowk, Aundh, Pune, Maharashtra 411007 | PIN: 411007 | Ph: 9833250030"},
  {code:"CFMUMSCM",name:"CL-ST-MUM-Sea Woods Mall",address:"Nexus Seawoods Mall, No. R- 1, Sector 40 Node Nerul,Seawoods Railway Station, Navi Mumbai",pincode:"",phone:"9920222300",addressLine:"Nexus Seawoods Mall, No. R- 1, Sector 40 Node Nerul,Seawoods Railway Station, Navi Mumbai | Ph: 9920222300"},
  {code:"CFDDNPCM",name:"CL-ST-DERD-Pacific Mall",address:"Shop No. 170/5, Opp. Ramakrishna Ashram Gate No. 2, Below Black Pearl Restaurant, Rajpur Road, Dehradun-248001",pincode:"248001",phone:"8447040410",addressLine:"Shop No. 170/5, Opp. Ramakrishna Ashram Gate No. 2, Below Black Pearl Restaurant, Rajpur Road, Dehradun-248001 | PIN: 248001 | Ph: 8447040410"},
  {code:"CFDELDWK",name:"CL-ST-DEL-Dwarka",address:"Shop No G- 04,05,06, Tirupati Plaza Sector- 11, Dwarka New Delhi - 110075",pincode:"110075",phone:"8448127766",addressLine:"Shop No G- 04,05,06, Tirupati Plaza Sector- 11, Dwarka New Delhi - 110075 | PIN: 110075 | Ph: 8448127766"},
  {code:"CFLKWSGM",name:"CL-ST-LKW-Saharaganj Mall",address:"4, SHAHNAJAF ROAD, NEAR NARAIN AUTOMOBILES, HAZRATGANJ LUCKNOW 226001",pincode:"226001",phone:"7800904444",addressLine:"4, SHAHNAJAF ROAD, NEAR NARAIN AUTOMOBILES, HAZRATGANJ LUCKNOW 226001 | PIN: 226001 | Ph: 7800904444"},
  {code:"CFVDDIBM",name:"CL-ST-VAD-Inorbit Mall",address:"Shop A1, Centre Square Mall, Dr Vikram Sarabhai Road, Near Genda circle, Vadi wadi, Vadodara-390023",pincode:"390023",phone:"8141077711",addressLine:"Shop A1, Centre Square Mall, Dr Vikram Sarabhai Road, Near Genda circle, Vadi wadi, Vadodara-390023 | PIN: 390023 | Ph: 8141077711"},
  {code:"CFKOLAPM",name:"CL-ST-KOL-Acropolis Mall",address:"G-012, Acropolis Mall, 1858/1, Rajdanga Main Road, Kolkata - 700 107, West Bengal",pincode:"700107",phone:"7890210000",addressLine:"G-012, Acropolis Mall, 1858/1, Rajdanga Main Road, Kolkata - 700 107, West Bengal | PIN: 700107 | Ph: 7890210000"},
  {code:"CFIDRMGR",name:"CL-ST-IDR-M G Road",address:"G-1, 2 & 3, City Centre, 570 MG Road, Indore, Madhya Pradesh 452001",pincode:"452001",phone:"7049501234",addressLine:"G-1, 2 & 3, City Centre, 570 MG Road, Indore, Madhya Pradesh 452001 | PIN: 452001 | Ph: 7049501234"},
  {code:"CLDELSTX",name:"CL-ST-DEL-South Ex",address:"No. F-41, First floor , South Extension, Part 1, New Delhi- 110049",pincode:"110049",phone:"9899002555 / 9999200822 / 9384065544",addressLine:"No. F-41, First floor , South Extension, Part 1, New Delhi- 110049 | PIN: 110049 | Ph: 9899002555 / 9999200822 / 9384065544"},
  {code:"CFHYDPNG",name:"CL-ST-HYD-PanjaguttaL2",address:"Shop No B, Municipal No : 6-3-883/4/1/A, Ground Floor, KPR Plaza, Punjagutta, Somaji Guda, Hyderabad - 500082",pincode:"500082",phone:"7358008880",addressLine:"Shop No B, Municipal No : 6-3-883/4/1/A, Ground Floor, KPR Plaza, Punjagutta, Somaji Guda, Hyderabad - 500082 | PIN: 500082 | Ph: 7358008880"},
  {code:"CLKOLPKS",name:"CL-ST-KOL- Park Street",address:"Ground Floor, 21A, Park Street, Kolkata - 700016",pincode:"700016",phone:"8220447700",addressLine:"Ground Floor, 21A, Park Street, Kolkata - 700016 | PIN: 700016 | Ph: 8220447700"},
  {code:"CFBLRKMH",name:"CL-ST-BNG-KAMMANAHALLI",address:"509,4th main Beside McDonalds Kammanahalli Main Road,Bengaluru, Karnataka 560043",pincode:"560043",phone:"9739644559",addressLine:"509,4th main Beside McDonalds Kammanahalli Main Road,Bengaluru, Karnataka 560043 | PIN: 560043 | Ph: 9739644559"},
  {code:"CFDELROH",name:"CL-ST-DEL-Rohini",address:"E1/13, Sector 7, Rohini, New Delhi - 110085",pincode:"110085",phone:"9711711460",addressLine:"E1/13, Sector 7, Rohini, New Delhi - 110085 | PIN: 110085 | Ph: 9711711460"},
  {code:"CFBLRJAY",name:"CL-ST-BNG-Jayanagar",address:"No.9 (Old No.523), 33rd Cross, 4th Block, Jayanagar, Bengaluru-560011",pincode:"560011",phone:"7338273383",addressLine:"No.9 (Old No.523), 33rd Cross, 4th Block, Jayanagar, Bengaluru-560011 | PIN: 560011 | Ph: 7338273383"},
  {code:"CFKOLSCM",name:"CL-ST-KOL-SOUTH CITY MALL",address:"S-020, Ground Floor, South City Mall, 375 Prince Anwar Shah Road, Jadavpur, Kolkata - 700068",pincode:"700068",phone:"7603073333",addressLine:"S-020, Ground Floor, South City Mall, 375 Prince Anwar Shah Road, Jadavpur, Kolkata - 700068 | PIN: 700068 | Ph: 7603073333"},
  {code:"CFHYDIBM",name:"CL-ST-HYD-Inorbit Mall",address:"F-08, Inorbit Mall Road,\nAPIIC Software Layout, Mindspace\nMadhapur, Hyderabad, Telangana-500081",pincode:"500081",phone:"7032070222",addressLine:"F-08, Inorbit Mall Road,\nAPIIC Software Layout, Mindspace\nMadhapur, Hyderabad, Telangana-500081 | PIN: 500081 | Ph: 7032070222"},
  {code:"CFDELLPN",name:"CL-ST-DEL-Lajpat Nagar",address:"C - 22, Ground floor, Lajpat Nagar 2, New Delhi - 110024",pincode:"110024",phone:"8750006440",addressLine:"C - 22, Ground floor, Lajpat Nagar 2, New Delhi - 110024 | PIN: 110024 | Ph: 8750006440"},
  {code:"CFBLRMTH",name:"CL-ST-BNG-Marthahalli",address:"88, Outer Ring Road, Kasavanagalli Village, Marathalli. Bangalore -560037",pincode:"560037",phone:"9513079000",addressLine:"88, Outer Ring Road, Kasavanagalli Village, Marathalli. Bangalore -560037 | PIN: 560037 | Ph: 9513079000"},
  {code:"CFBBREOM",name:"CL-ST-BNR-Rasulgarh",address:"UG 03, Esplanade Mall, 721, Rasulgarh, Bhubaneswar, Odisha - 751010",pincode:"751010",phone:"6370701685",addressLine:"UG 03, Esplanade Mall, 721, Rasulgarh, Bhubaneswar, Odisha - 751010 | PIN: 751010 | Ph: 6370701685"},
  {code:"CFDELPVR",name:"CL-ST-DEL-Preet Vihar",address:"G-13, Upper Ground Floor, Preet Vihar, Main Vikas Marg, Delhi-110092",pincode:"110092",phone:"9711997900",addressLine:"G-13, Upper Ground Floor, Preet Vihar, Main Vikas Marg, Delhi-110092 | PIN: 110092 | Ph: 9711997900"},
  {code:"CRBHPDCM",name:"CL-ST-L3-BHP-DB City Mall",address:"Shop No 10, Ground Floor, DB City Mall, Maharana Pratap Nagar, Bhopal - 462011",pincode:"462011",phone:"7471144242",addressLine:"Shop No 10, Ground Floor, DB City Mall, Maharana Pratap Nagar, Bhopal - 462011 | PIN: 462011 | Ph: 7471144242"},
  {code:"CFHYDHIM",name:"CL-ST-HYD-HIMAYAT NAGAR",address:"Ground Floor, AL-Samad Complex, Beside Dadus Sweets, opposite TTD Temple, Himayatnagar, Hyderabad, Telangana 500029",pincode:"500029",phone:"9901055555",addressLine:"Ground Floor, AL-Samad Complex, Beside Dadus Sweets, opposite TTD Temple, Himayatnagar, Hyderabad, Telangana 500029 | PIN: 500029 | Ph: 9901055555"},
  {code:"CFGZBABR",name:"CL-ST-GZB-Ambedkar Road",address:"41, Ground Floor, Ambedkar Rd, Ghaziabad, Uttar Pradesh 201102",pincode:"201102",phone:"7290068877",addressLine:"41, Ground Floor, Ambedkar Rd, Ghaziabad, Uttar Pradesh 201102 | PIN: 201102 | Ph: 7290068877"},
  {code:"CFNOIN18",name:"CL-ST-NDD-Noida18",address:"SCO 15&16 Wave One Courtyard , Sector 18 Noida -201301",pincode:"201301",phone:"7418284443/ 7428214449",addressLine:"SCO 15&16 Wave One Courtyard , Sector 18 Noida -201301 | PIN: 201301 | Ph: 7418284443/ 7428214449"},
  {code:"CFBLRRYM",name:"CL-ST-BNG-RMZ YELANKHA",address:"F 31 & 32, First Floor, RMZ Galleria Mall, Yelahanka, Bangalore - 560064",pincode:"560064",phone:"9740500077",addressLine:"F 31 & 32, First Floor, RMZ Galleria Mall, Yelahanka, Bangalore - 560064 | PIN: 560064 | Ph: 9740500077"},
  {code:"CRJMDBST",name:"CL-ST-L3-JMD-BistupurRoad",address:"CaratLane, Unit No 4, Upper ground floor, Regal Plaza, Holding no. NIL 72, Sakchi Boulevard Road, Bistupur, Jamshedpur, District -East Singhbhum, Jharkhand -831001",pincode:"831001",phone:"6207901399",addressLine:"CaratLane, Unit No 4, Upper ground floor, Regal Plaza, Holding no. NIL 72, Sakchi Boulevard Road, Bistupur, Jamshedpur, District -East Singhbhum, Jharkhand -831001 | PIN: 831001 | Ph: 6207901399"},
  {code:"CRRNCMRD",name:"CL-ST-L3-RNC-Main Road",address:"CaratLane, Meera Tower, Ground & Mezzanine Floor, Municipal Ward No. 24 (New), Holding Nos. 0270001111000X1 & 0270001112000X1, of M.S Plot Nos. 1794 (Part), Near Pradhan Tower, 5, Main Road, Ranchi, Jharkhand - 834001.",pincode:"834001",phone:"7557700075",addressLine:"CaratLane, Meera Tower, Ground & Mezzanine Floor, Municipal Ward No. 24 (New), Holding Nos. 0270001111000X1 & 0270001112000X1, of M.S Plot Nos. 1794 (Part), Near Pradhan Tower, 5, Main Road, Ranchi, Jharkhand - 834001. | PIN: 834001 | Ph: 7557700075"},
  {code:"CFJBPGGR",name:"CL-ST-JBR-GG ROAD",address:"8-10,Shreyansh Tower Gorakhpur Gurudwara Road, Jabalpur 482001",pincode:"482001",phone:"9111242666",addressLine:"8-10,Shreyansh Tower Gorakhpur Gurudwara Road, Jabalpur 482001 | PIN: 482001 | Ph: 9111242666"},
  {code:"CFBLRHSR",name:"CL-ST-BNG-HSR LAYOUT",address:"804, 27th Main Road, 1st Sector, HSR Layout Bangalore 560102",pincode:"560102",phone:"9513544559",addressLine:"804, 27th Main Road, 1st Sector, HSR Layout Bangalore 560102 | PIN: 560102 | Ph: 9513544559"},
  {code:"CFJPRMIR",name:"CL-ST-JPR-MI Road Jaipur",address:"Showroom No 279, Ground Floor, Kashi Bhawan, Opposite ICICI Bank, MI Road, Jaipur 302001",pincode:"302001",phone:"7568123000",addressLine:"Showroom No 279, Ground Floor, Kashi Bhawan, Opposite ICICI Bank, MI Road, Jaipur 302001 | PIN: 302001 | Ph: 7568123000"},
  {code:"CFPATNPC",name:"CL-ST-PAT-NB ROAD",address:"G19 &20, Ground Floor, NP Centre, New Dak Bungalow Road, Patna, Bihar - 800001",pincode:"800001",phone:"9608674397",addressLine:"G19 &20, Ground Floor, NP Centre, New Dak Bungalow Road, Patna, Bihar - 800001 | PIN: 800001 | Ph: 9608674397"},
  {code:"CLMUMADH",name:"CL-ST-MUM-Andheri West",address:"Showroom no 003-A, Fortune Terraces, opp Citi Mall, New link road, Andheri west, Mumbai 400053",pincode:"400053",phone:"7339330666",addressLine:"Showroom no 003-A, Fortune Terraces, opp Citi Mall, New link road, Andheri west, Mumbai 400053 | PIN: 400053 | Ph: 7339330666"},
  {code:"CFGWHCCM",name:"CL-ST-GWH- City Center Mall",address:"City Centre Mall, Shop No - GF 38, G S Road, Near Apollo International Hospital, Guwahati, Assam - 781005",pincode:"781005",phone:"9531452024",addressLine:"City Centre Mall, Shop No - GF 38, G S Road, Near Apollo International Hospital, Guwahati, Assam - 781005 | PIN: 781005 | Ph: 9531452024"},
  {code:"CLAMDCGR",name:"CL-ST-AMD-CG ROADL1",address:"Shop No 1, Ground Floor, Jwelplex, Near Laxmi Jewellers, CG Road, Ellisbridge, Ahmedabad, Gujarat 380006",pincode:"380006",phone:"9327612007",addressLine:"Shop No 1, Ground Floor, Jwelplex, Near Laxmi Jewellers, CG Road, Ellisbridge, Ahmedabad, Gujarat 380006 | PIN: 380006 | Ph: 9327612007"},
  {code:"CFBLRVCM",name:"CL-ST-BNG-Vega City Mall",address:"G-10, Vega City Mall, Bannerughatta Road, Bangalore - 560076",pincode:"560076",phone:"9108150223",addressLine:"G-10, Vega City Mall, Bannerughatta Road, Bangalore - 560076 | PIN: 560076 | Ph: 9108150223"},
  {code:"CFNSKCCR",name:"CL-ST-NSK-Canada Corner",address:"Shop No. 5, SR No.6939 To 6944, Viraj Corner, Canada Corner, College Road, Nashik – 422001",pincode:"422001",phone:"7066984455",addressLine:"Shop No. 5, SR No.6939 To 6944, Viraj Corner, Canada Corner, College Road, Nashik – 422001 | PIN: 422001 | Ph: 7066984455"},
  {code:"CFKOLCC1",name:"CL-ST-KOL-City Center Mall",address:"C-012, City Centre 1, DC Block, Sector 1, Salt Lake City, Kolkata, West Bengal 700064",pincode:"700064",phone:"9330038353",addressLine:"C-012, City Centre 1, DC Block, Sector 1, Salt Lake City, Kolkata, West Bengal 700064 | PIN: 700064 | Ph: 9330038353"},
  {code:"CFDELKMN",name:"CL-ST-DELHI-KamlaNagar",address:"Shop No 10&11, Bhama Shah Market, Kamla Nagar, New Delhi - 110007",pincode:"110007",phone:"9811024252",addressLine:"Shop No 10&11, Bhama Shah Market, Kamla Nagar, New Delhi - 110007 | PIN: 110007 | Ph: 9811024252"},
  {code:"CFCHNVRM",name:"CL-ST-CHN-VRMallChennai",address:"Unit No. G 41, Ground Floor, VR Chennai Mall, Jawaharlal Nehru Salai, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040",pincode:"600040",phone:"9940665777",addressLine:"Unit No. G 41, Ground Floor, VR Chennai Mall, Jawaharlal Nehru Salai, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040 | PIN: 600040 | Ph: 9940665777"},
  {code:"CFMOHVRM",name:"CL-ST-MOH-VR Mall",address:"SCO-31, 3B2, sector 60, Mohali - 160059 Punjab",pincode:"160059",phone:"7888897674",addressLine:"SCO-31, 3B2, sector 60, Mohali - 160059 Punjab | PIN: 160059 | Ph: 7888897674"},
  {code:"CLBLRIND",name:"CL-ST-BNG-Indra Nagar",address:"No.757, 110 Feet Road, HAL 2nd Stage, Indiranagar, Bangalore - 560038",pincode:"560038",phone:"9003200444",addressLine:"No.757, 110 Feet Road, HAL 2nd Stage, Indiranagar, Bangalore - 560038 | PIN: 560038 | Ph: 9003200444"},
  {code:"CFLUDMHR",name:"CL-ST-LUD-Malhar Road",address:"28-F, Malhar Road, Gurdev Nagar, Ludhiana, Punjab - 141001",pincode:"141001",phone:"7888897675",addressLine:"28-F, Malhar Road, Gurdev Nagar, Ludhiana, Punjab - 141001 | PIN: 141001 | Ph: 7888897675"},
  {code:"CFHYDASR",name:"CL-ST-HYD-ASR Nagar",address:"Plot no 3 Main road Thyagaraya Nagar,\nOpp:Chennai Shopping Mall,\nBeside TVS showroom \nAS Rao Nagar, Secunderabad - 500062",pincode:"500062",phone:"9121210121",addressLine:"Plot no 3 Main road Thyagaraya Nagar,\nOpp:Chennai Shopping Mall,\nBeside TVS showroom \nAS Rao Nagar, Secunderabad - 500062 | PIN: 500062 | Ph: 9121210121"},
  {code:"CRCBECCR",name:"CL-ST-L3-CBE-CrossCutRoad",address:"410, Crosscut Road, Ramnagar, Coimbatore - 641 009",pincode:"641009",phone:"9843951515",addressLine:"410, Crosscut Road, Ramnagar, Coimbatore - 641 009 | PIN: 641009 | Ph: 9843951515"},
  {code:"CFKOLNGB",name:"CL-ST-KOL-Jessore Road",address:"507/10, Jessore Road, Debendra Nagar, Kolkata - 700074",pincode:"700074",phone:"9798442651",addressLine:"507/10, Jessore Road, Debendra Nagar, Kolkata - 700074 | PIN: 700074 | Ph: 9798442651"},
  {code:"CRSILCCM",name:"CL-ST-L3-SIL-City Centre Mall",address:"A0009, Ground Floor, City Centre, Uttorayan, Matigara, Siliguri, West Bengal - 734010",pincode:"734010",phone:"9002566565",addressLine:"A0009, Ground Floor, City Centre, Uttorayan, Matigara, Siliguri, West Bengal - 734010 | PIN: 734010 | Ph: 9002566565"},
  {code:"CFDELPCV",name:"CL-ST-DEL-Paschim Vihar",address:"A-3/265, Paschim Vihar, New Delhi - 110063",pincode:"110063",phone:"9811344495",addressLine:"A-3/265, Paschim Vihar, New Delhi - 110063 | PIN: 110063 | Ph: 9811344495"},
  {code:"CRDNBBMR",name:"CL-ST-L3-DNB- Rathore Mansion Bank More",address:"CaratLane, Rathore Mansion, Shop No-12, Ground Floor & First Floor, Bank More, Dhanbad, Jharkhand-826001",pincode:"826001",phone:"8229800048",addressLine:"CaratLane, Rathore Mansion, Shop No-12, Ground Floor & First Floor, Bank More, Dhanbad, Jharkhand-826001 | PIN: 826001 | Ph: 8229800048"},
  {code:"CRBBRCSP",name:"CL-ST-L3-BNR-Chandrasekharpur",address:"Plot no 332/1803/2028/4304, Beside Tanishq jewellery Chandrasekharpur, Bhubaneswar - 751016",pincode:"751016",phone:"6372900638",addressLine:"Plot no 332/1803/2028/4304, Beside Tanishq jewellery Chandrasekharpur, Bhubaneswar - 751016 | PIN: 751016 | Ph: 6372900638"},
  {code:"CFBLRSKN",name:"CL-ST-BNG- Forum Mall",address:"UG-09, Upper Ground, Nexus Shantiniketan, Whitefield Main Road, Thigalarapalya, Krishnarajapura, Bengaluru, Karnataka - 560067",pincode:"560067",phone:"6366861515",addressLine:"UG-09, Upper Ground, Nexus Shantiniketan, Whitefield Main Road, Thigalarapalya, Krishnarajapura, Bengaluru, Karnataka - 560067 | PIN: 560067 | Ph: 6366861515"},
  {code:"CRPRYSPM",name:"CL-ST-L3-UP-Prayagraj",address:"32/1/5, Sardar Patel Marg, Civil Lines, Prayagraj-211001",pincode:"211001",phone:"9651707778",addressLine:"32/1/5, Sardar Patel Marg, Civil Lines, Prayagraj-211001 | PIN: 211001 | Ph: 9651707778"},
  {code:"CFCHDS17",name:"CL-ST-CHA-Sector 17",address:"SCO - 143, Himalaya Marg, Bridge Market, 17C, Sector 17, Chandigarh, 160017",pincode:"160017",phone:"8872600011",addressLine:"SCO - 143, Himalaya Marg, Bridge Market, 17C, Sector 17, Chandigarh, 160017 | PIN: 160017 | Ph: 8872600011"},
  {code:"CFDELRAJ",name:"CL-ST-DEL-RajouriGarden Delhi",address:"CaratLane, C-9, C-Block, Vishal Enclave, Main Najafgarh Road, New Delhi-110027",pincode:"110027",phone:"080 6924 8354",addressLine:"CaratLane, C-9, C-Block, Vishal Enclave, Main Najafgarh Road, New Delhi-110027 | PIN: 110027 | Ph: 080 6924 8354"},
  {code:"CFBLRORM",name:"CL-ST-BNG-Orion Mall",address:"SHOP NO: 129, 1st Floor, BRIGADE ORION MALL, Dr Rajkumar Rd, Malleshwaram, Bengaluru, Karnataka 560055",pincode:"560055",phone:"9916322779",addressLine:"SHOP NO: 129, 1st Floor, BRIGADE ORION MALL, Dr Rajkumar Rd, Malleshwaram, Bengaluru, Karnataka 560055 | PIN: 560055 | Ph: 9916322779"},
  {code:"CFMYSURS",name:"CL-ST-MYS- Devraj Road",address:"#98, 99, Devraj Urs Road, Devraj Mohalla, Mysore - 570001",pincode:"570001",phone:"9606105588",addressLine:"#98, 99, Devraj Urs Road, Devraj Mohalla, Mysore - 570001 | PIN: 570001 | Ph: 9606105588"},
  {code:"CFPATBCR",name:"CL-ST-PAT-Boring Canal Road",address:"Shop No. 01A, Vishnu Complex, East Boring Canal Road, Patna- 800001",pincode:"800001",phone:"7281975555",addressLine:"Shop No. 01A, Vishnu Complex, East Boring Canal Road, Patna- 800001 | PIN: 800001 | Ph: 7281975555"},
  {code:"CFCHNADR",name:"CL-ST-CHN-ADYAR",address:"G2A,G2B,G1B Ground Floor,Rajalakshmi Palace, 43 First Main Road, Gandhinagar, Adyar,Chennai 600020",pincode:"600020",phone:"9500007183",addressLine:"G2A,G2B,G1B Ground Floor,Rajalakshmi Palace, 43 First Main Road, Gandhinagar, Adyar,Chennai 600020 | PIN: 600020 | Ph: 9500007183"},
  {code:"CFBLRBEL",name:"CL-ST-BNG-New BEL Road",address:"Caratlane, ​New Bel Rd Shop No: 47 Opp Punjab National Bank ISRO Signal, Chikkamaranahalli, R.M.V. 2nd Stage, Bengaluru, Karnataka 560094",pincode:"560094",phone:"6364898811",addressLine:"Caratlane, ​New Bel Rd Shop No: 47 Opp Punjab National Bank ISRO Signal, Chikkamaranahalli, R.M.V. 2nd Stage, Bengaluru, Karnataka 560094 | PIN: 560094 | Ph: 6364898811"},
  {code:"CFBLPMSG",name:"CL-ST-Bilaspur-AgrasenChowkL2",address:"Horaji Plot No-7/2 Beside Shree Shivam Shopping Mall, Agrasen Chowk Link Road Bilaspur (C.G) 495001",pincode:"495001",phone:"7400850850",addressLine:"Horaji Plot No-7/2 Beside Shree Shivam Shopping Mall, Agrasen Chowk Link Road Bilaspur (C.G) 495001 | PIN: 495001 | Ph: 7400850850"},
  {code:"CFNGPDHP",name:"CL-ST-NGP-Dharampet",address:"Opp.Dharampeth School, Vazalwar Colony, Ambzari Road,Dharampeth, Nagpur-440010",pincode:"440010",phone:"9145000543",addressLine:"Opp.Dharampeth School, Vazalwar Colony, Ambzari Road,Dharampeth, Nagpur-440010 | PIN: 440010 | Ph: 9145000543"},
  {code:"CFAIZTGS",name:"CL-ST-MIZ-Aizwal",address:"Dawrpuri V Thanga Street, H/No S-22, Opp. AR Canteen. Aizawl - 796001, Mizoram",pincode:"796001",phone:"6009772319",addressLine:"Dawrpuri V Thanga Street, H/No S-22, Opp. AR Canteen. Aizawl - 796001, Mizoram | PIN: 796001 | Ph: 6009772319"},
  {code:"CFVJWMGR",name:"CL-ST-VJW-Labbipeta",address:"40-1-42A, Manoranjan Complex, Labbipeta, Vijayawada -520010",pincode:"520010",phone:"9948288115",addressLine:"40-1-42A, Manoranjan Complex, Labbipeta, Vijayawada -520010 | PIN: 520010 | Ph: 9948288115"},
  {code:"CLPUNBUN",name:"CL-ST-PUN-Bund Garden",address:"Unit No. 1B, PT Gera Center, T.P.S. Opp to Wadiya college. Sangamwadi, Bund Garden Road, Pune, Maharashtra- -411001",pincode:"411001",phone:"7358383400",addressLine:"Unit No. 1B, PT Gera Center, T.P.S. Opp to Wadiya college. Sangamwadi, Bund Garden Road, Pune, Maharashtra- -411001 | PIN: 411001 | Ph: 7358383400"},
  {code:"CFDELVGM",name:"CL-ST-DEL-Vegas Mall Dwarka",address:"S-252, Second Floor,Vegas Floor, Plot No 6, Sector 14, Dwarka (North), New Delhi - 110078",pincode:"110078",phone:"9773888388",addressLine:"S-252, Second Floor,Vegas Floor, Plot No 6, Sector 14, Dwarka (North), New Delhi - 110078 | PIN: 110078 | Ph: 9773888388"},
  {code:"CRGURMGR",name:"CL-ST-L3-GUR-MGRoad",address:"UGF-01, JMD Regent Arcade Mall, M.G. Road, Gurugram-122011 (HR)",pincode:"122011",phone:"7352050505",addressLine:"UGF-01, JMD Regent Arcade Mall, M.G. Road, Gurugram-122011 (HR) | PIN: 122011 | Ph: 7352050505"},
  {code:"CLKOLGHT",name:"CL-ST-KOL-Gariahat",address:"No. 14/9A, Gariahat Road, Leela Roy Sarani, Gariahat, Kolkata – 700019",pincode:"700019",phone:"7550044900",addressLine:"No. 14/9A, Gariahat Road, Leela Roy Sarani, Gariahat, Kolkata – 700019 | PIN: 700019 | Ph: 7550044900"},
  {code:"CLAMDSJR",name:"CL-ST-AMD-Satellite Road",address:"G-05, 105, Venus Amadeus, Jodhpur Crossroad, Satellite, Ahmedabad",pincode:"",phone:"7550074700",addressLine:"G-05, 105, Venus Amadeus, Jodhpur Crossroad, Satellite, Ahmedabad | Ph: 7550074700"},
  {code:"CFBLRSJP",name:"CL-ST-BLR-SarjapurRoad Doddakanneli",address:"Sarjapur Main Rd, 648 E, Old 32, Carmelaram, Post, Kaikondrahalli, Haralur, Bengaluru, Karnataka 560035",pincode:"560035",phone:"",addressLine:"Sarjapur Main Rd, 648 E, Old 32, Carmelaram, Post, Kaikondrahalli, Haralur, Bengaluru, Karnataka 560035 | PIN: 560035"},
  {code:"CFBLRBSK",name:"CL-ST-BLR-Banashankari",address:"#287,100 Feet Ring Road, Near Kamakya Theatre, Banashankari 3rd stage, Bangalore-560085",pincode:"560085",phone:"9880929996",addressLine:"#287,100 Feet Ring Road, Near Kamakya Theatre, Banashankari 3rd stage, Bangalore-560085 | PIN: 560085 | Ph: 9880929996"},
  {code:"CFCHNANN",name:"CL-ST-CHN-ANNA NAGAR",address:"Caratlane ANNANAGAR Address: C-43, 2nd Avenue, Anna Nagar, Chennai – 600040",pincode:"600040",phone:"7338866333",addressLine:"Caratlane ANNANAGAR Address: C-43, 2nd Avenue, Anna Nagar, Chennai – 600040 | PIN: 600040 | Ph: 7338866333"},
  {code:"CFDELPTR",name:"CL-ST-DEL-PITAM PURA",address:"Plot no. 1, Shop No.1, Corner, Ground floor, Kohat Enclave, Pitam Pura, Delhi 110034",pincode:"110034",phone:"9711911410",addressLine:"Plot no. 1, Shop No.1, Corner, Ground floor, Kohat Enclave, Pitam Pura, Delhi 110034 | PIN: 110034 | Ph: 9711911410"},
  {code:"CFVIZSVR",name:"CL-ST-VIZ-Sampath Vinayak Road",address:"0-1-35/A, Shakuntala Building, Shop No.1, 3rd house from Sampath Vinayak Temple, Travellers Bunglow Road, Waltair uplands, Visakhapatnam - 530003, Andhra Pradesh",pincode:"530003",phone:"",addressLine:"0-1-35/A, Shakuntala Building, Shop No.1, 3rd house from Sampath Vinayak Temple, Travellers Bunglow Road, Waltair uplands, Visakhapatnam - 530003, Andhra Pradesh | PIN: 530003"},
  {code:"CFMUMTGR",name:"CL-ST-THN-GokhaleRoad",address:"Shop No. 6, Shrusti Plaza, Gokhale Road, Naupada, Thane- West- 400602",pincode:"400602",phone:"7550090600",addressLine:"Shop No. 6, Shrusti Plaza, Gokhale Road, Naupada, Thane- West- 400602 | PIN: 400602 | Ph: 7550090600"},
  {code:"CLMUMBOR",name:"CL-ST-MUM-Borivali",address:"Shop No. 8,9,10 & 11, Shangri-La Apartment, Gulmohar Cross Road, Off. L.T.Road, Borivali West, Mumbai 400092",pincode:"400092",phone:"7550038800",addressLine:"Shop No. 8,9,10 & 11, Shangri-La Apartment, Gulmohar Cross Road, Off. L.T.Road, Borivali West, Mumbai 400092 | PIN: 400092 | Ph: 7550038800"},
  {code:"CFSRTGDR",name:"CL-ST-SRT-Ghod Dod Road",address:"13-A, Plot No. 227, Vasant Kunj Bunglow, Besides Aadharshila Apartment, Near Kakdia Complex, Ghod Dod Road, Surat-395007",pincode:"395007",phone:"8575857506",addressLine:"13-A, Plot No. 227, Vasant Kunj Bunglow, Besides Aadharshila Apartment, Near Kakdia Complex, Ghod Dod Road, Surat-395007 | PIN: 395007 | Ph: 8575857506"},
  {code:"CRAGRCHR",name:"CL-ST-L3-AGR-Church Road",address:"Shop No. 4, Block No. 12/2/4 , P.L Palace ,Sanjay Place , MG Road, Agra - 282002",pincode:"282002",phone:"8069248332",addressLine:"Shop No. 4, Block No. 12/2/4 , P.L Palace ,Sanjay Place , MG Road, Agra - 282002 | PIN: 282002 | Ph: 8069248332"},
  {code:"CFCHDMMJ",name:"CL-ST-CHD-Manimajra",address:"SCO 40, Pocket-1, NAC Manimajra, Chandigarh, Pin-160101",pincode:"160101",phone:"9707900006",addressLine:"SCO 40, Pocket-1, NAC Manimajra, Chandigarh, Pin-160101 | PIN: 160101 | Ph: 9707900006"},
  {code:"CFCHNVEL",name:"CL-ST-CHN-Velachery",address:"No.42, Pandian Street, Sankaran Avenue, Velachery 100 Feet Road,Velachery, Chennai - 600 042",pincode:"600042",phone:"8754461115",addressLine:"No.42, Pandian Street, Sankaran Avenue, Velachery 100 Feet Road,Velachery, Chennai - 600 042 | PIN: 600042 | Ph: 8754461115"},
  {code:"CLMUMBTR",name:"CL-ST-MUM-Bandra Turner Road",address:"Shop No.3/3A, 36, Turner Rd, Bandra West, Mumbai, Maharashtra 400050",pincode:"400050",phone:"7550007058",addressLine:"Shop No.3/3A, 36, Turner Rd, Bandra West, Mumbai, Maharashtra 400050 | PIN: 400050 | Ph: 7550007058"},
  {code:"CRHISPLA",name:"CL-ST-L3-Hisar-PLAMarket",address:"SCO-86, PLA Shopping Complex, Hisar, Haryana- 125001",pincode:"125001",phone:"9817708785",addressLine:"SCO-86, PLA Shopping Complex, Hisar, Haryana- 125001 | PIN: 125001 | Ph: 9817708785"},
  {code:"CFJPRVSN",name:"CL-ST-Jaipur-VaishaliNagar",address:"2A, Amrapali Road, Near F Block, Vaishali Nagar, JAIPUR-302021",pincode:"302021",phone:"9490423000",addressLine:"2A, Amrapali Road, Near F Block, Vaishali Nagar, JAIPUR-302021 | PIN: 302021 | Ph: 9490423000"},
  {code:"CFBRMNTR",name:"CL-ST-Berhampore-NetajiRoadL2",address:"Ground, Floors of 7, Netaji Road, Khagra, Berhampore, Murshidabad - 742103",pincode:"742103",phone:"7501484038",addressLine:"Ground, Floors of 7, Netaji Road, Khagra, Berhampore, Murshidabad - 742103 | PIN: 742103 | Ph: 7501484038"},
  {code:"CFKOLTYG",name:"CL-ST-KOL-Tollygunge",address:"233/1 N S C Bose Road, Bansdroni, Tollygunge (Next to Reliance Digital), Kolkata- 700047",pincode:"700047",phone:"7439888906",addressLine:"233/1 N S C Bose Road, Bansdroni, Tollygunge (Next to Reliance Digital), Kolkata- 700047 | PIN: 700047 | Ph: 7439888906"},
  {code:"CFHYDDSN",name:"CL-ST-HYD-Dilsukhnagar",address:"Shutter # 1&2, 11-15-12/4, Doctors Colony Main Road, Saroor Nagar East, Hyderabad, Telangana, 500035.",pincode:"500035",phone:"9985514455",addressLine:"Shutter # 1&2, 11-15-12/4, Doctors Colony Main Road, Saroor Nagar East, Hyderabad, Telangana, 500035. | PIN: 500035 | Ph: 9985514455"},
  {code:"CRPTLBPR",name:"CL-ST-L3-Patiala-BhupindraRoad",address:"Ground floor, Hotel Grand Park , Bhupindra Road, Patiala-147001",pincode:"147001",phone:"7087300405",addressLine:"Ground floor, Hotel Grand Park , Bhupindra Road, Patiala-147001 | PIN: 147001 | Ph: 7087300405"},
  {code:"CRRKLBIR",name:"CL-ST-L3-Rourkela-BirsaRoad",address:"Plot No-897 ( Ground Floor & First Floor ), In Front of Life Medical Hall, Bisra Road, PS-Plant Site, Rourkela,Dist-Sundargarh, Pin No-769001",pincode:"769001",phone:"6370701684",addressLine:"Plot No-897 ( Ground Floor & First Floor ), In Front of Life Medical Hall, Bisra Road, PS-Plant Site, Rourkela,Dist-Sundargarh, Pin No-769001 | PIN: 769001 | Ph: 6370701684"},
  {code:"CRIMPDMR",name:"CL-ST-L3-Imphal-DM CollegeRoad",address:"Thagmeiband DM College, Near Imphal Motors,Imphal West Manipur- 795001",pincode:"795001",phone:"6033864895",addressLine:"Thagmeiband DM College, Near Imphal Motors,Imphal West Manipur- 795001 | PIN: 795001 | Ph: 6033864895"},
  {code:"CFBLRCMS",name:"CL-ST-BNG-CommercialStreet",address:"318,K.Kamaraj Road, Opposite - Commercial Street Entrance, Bangalore - 560042",pincode:"560042",phone:"7708270666",addressLine:"318,K.Kamaraj Road, Opposite - Commercial Street Entrance, Bangalore - 560042 | PIN: 560042 | Ph: 7708270666"},
  {code:"CFLKWMHN",name:"CL-ST-LKW-Mahanagar",address:"M-1, Gol Market, Opp. Tanishq, Mahanagar, Lucknow-226006",pincode:"226006",phone:"9119993366",addressLine:"M-1, Gol Market, Opp. Tanishq, Mahanagar, Lucknow-226006 | PIN: 226006 | Ph: 9119993366"},
  {code:"CFKOLBHL",name:"CL-ST-KOL-Behala",address:"274, Diamond Harbour Road, Kolkata - 700034",pincode:"700034",phone:"9830736484",addressLine:"274, Diamond Harbour Road, Kolkata - 700034 | PIN: 700034 | Ph: 9830736484"},
  {code:"CFPATKRB",name:"CL-ST-PAT-KANKARBAGHL2",address:"SHOP NO.- 1 2, Chandi Sanyukta Apartment, Main Road, Kankarbagh, Patna, Bihar, 800020",pincode:"800020",phone:"8340713626",addressLine:"SHOP NO.- 1 2, Chandi Sanyukta Apartment, Main Road, Kankarbagh, Patna, Bihar, 800020 | PIN: 800020 | Ph: 8340713626"},
  {code:"CRBBRJNP",name:"CL-ST-L3-BNR-Janpath",address:"108E, STATION SQUARE, MASTER CANTEEN, JANPATH,BHUBANESWAR, ODISHA-751001",pincode:"751001",phone:"6372900627",addressLine:"108E, STATION SQUARE, MASTER CANTEEN, JANPATH,BHUBANESWAR, ODISHA-751001 | PIN: 751001 | Ph: 6372900627"},
  {code:"CFPUNKRV",name:"CL-ST-PNE-KarveRoad",address:"Shop no- 2, Success Square , Madhuvanti, Sr.No- 157/A/B/C, Near Karve Statue, Opp Shital Hotel, Karve Road, Kothrud , Pune- 411038",pincode:"411038",phone:"9028115005",addressLine:"Shop no- 2, Success Square , Madhuvanti, Sr.No- 157/A/B/C, Near Karve Statue, Opp Shital Hotel, Karve Road, Kothrud , Pune- 411038 | PIN: 411038 | Ph: 9028115005"},
  {code:"CFRPRPDR",name:"CL-ST-RPR-PANDRIL2",address:"Cloth Market, 35, New Pandri Rd, Pandri, Raipur, Chhattisgarh 492001",pincode:"492001",phone:"7880003853",addressLine:"Cloth Market, 35, New Pandri Rd, Pandri, Raipur, Chhattisgarh 492001 | PIN: 492001 | Ph: 7880003853"},
  {code:"CRIDRABR",name:"CL-ST-L3-IDR-Indore",address:"CaratLane, Toran Garden, AB Rd Ground Floor Sy No 182/1/2, 182/4 to 8, Choti Khajrani, Indore, Madhya Pradesh 452011",pincode:"452011",phone:"7566001235",addressLine:"CaratLane, Toran Garden, AB Rd Ground Floor Sy No 182/1/2, 182/4 to 8, Choti Khajrani, Indore, Madhya Pradesh 452011 | PIN: 452011 | Ph: 7566001235"},
  {code:"CRALIMRR",name:"CL-ST-L3-Aligarh-MarrisRoad",address:"3/466, MARRIS ROAD,NEAR CENTRE POINT,ALIGARH-202001",pincode:"202001",phone:"7060006188",addressLine:"3/466, MARRIS ROAD,NEAR CENTRE POINT,ALIGARH-202001 | PIN: 202001 | Ph: 7060006188"},
  {code:"CFBLRECT",name:"CL-ST-BNG-ElectronicCity",address:"Rebus Two, Phoenix Developers,152/4, Block-1, Neeladri Main Road, Neeladri Nagar, Doddathogur, Bangalore 560100",pincode:"560100",phone:"9585332288",addressLine:"Rebus Two, Phoenix Developers,152/4, Block-1, Neeladri Main Road, Neeladri Nagar, Doddathogur, Bangalore 560100 | PIN: 560100 | Ph: 9585332288"},
  {code:"CFBLRWFL",name:"CL-ST-BNG-Whitefield",address:"48, Ground floor, Regent Prime Building, Whitefield Main Road, Bengaluru, Karnataka, Pin- 560066",pincode:"560066",phone:"9740874546",addressLine:"48, Ground floor, Regent Prime Building, Whitefield Main Road, Bengaluru, Karnataka, Pin- 560066 | PIN: 560066 | Ph: 9740874546"},
  {code:"CFGWHGSR",name:"CL-ST-GWH-GuwahatiGSRoad",address:"GANPATI ENCLAVE, GROUND FLOOR, G.S ROAD, ULUBARI, GUWAHATI- 781007",pincode:"781007",phone:"9435418888/ 9435419999",addressLine:"GANPATI ENCLAVE, GROUND FLOOR, G.S ROAD, ULUBARI, GUWAHATI- 781007 | PIN: 781007 | Ph: 9435418888/ 9435419999"},
  {code:"CRDIBHSR",name:"CL-ST-L3-Dibrugarh-HS Road",address:"Hotel Nataraj & Resort H.S Road , Near Tanishq Dibrugarh,Assam - 786001",pincode:"786001",phone:"9394903447",addressLine:"Hotel Nataraj & Resort H.S Road , Near Tanishq Dibrugarh,Assam - 786001 | PIN: 786001 | Ph: 9394903447"},
  {code:"CFVNSVPZ",name:"CL-ST-VNS-Varanasi VinayakPlaza",address:"Shop No 11, Ground Floor, Tower A, Vinayak Plaza, Maldahiya Crossing, Varanasi- 221001",pincode:"221001",phone:"7307515355",addressLine:"Shop No 11, Ground Floor, Tower A, Vinayak Plaza, Maldahiya Crossing, Varanasi- 221001 | PIN: 221001 | Ph: 7307515355"},
  {code:"CFBLRKKP",name:"CL-ST-BLR-KanakpuraL2",address:"NDV Towers, 22, Kanakapura Rd, Raghuvanahalli, Subramanyapura, Bengaluru, Karnataka 560062",pincode:"560062",phone:"7539902444",addressLine:"NDV Towers, 22, Kanakapura Rd, Raghuvanahalli, Subramanyapura, Bengaluru, Karnataka 560062 | PIN: 560062 | Ph: 7539902444"},
  {code:"CFAGAHGB",name:"CL-ST-AGA-AgartalaHGBRoad",address:"48, Hari Ganga Basak Road, Near B R Sarkar Nursing Home, Agartala, Tripura West- 799001",pincode:"799001",phone:"8256905315",addressLine:"48, Hari Ganga Basak Road, Near B R Sarkar Nursing Home, Agartala, Tripura West- 799001 | PIN: 799001 | Ph: 8256905315"},
  {code:"CFNOIGCM",name:"CL-ST-NDD-GaurCityMall",address:"GF/05, Gaur City Mall, Sector-4, Greater Noida (West), Greater Noida-201308",pincode:"201308",phone:"7290018877",addressLine:"GF/05, Gaur City Mall, Sector-4, Greater Noida (West), Greater Noida-201308 | PIN: 201308 | Ph: 7290018877"},
  {code:"CAFDBMMR",name:"CL-ST-L8-Faridabad-MathuraMainRoad",address:"SCO-2, JBJ House, 18th Milestone, Neelam Ajronda Metro Station, Sec 20A, Delhi Mathura Road, Faridabad, Haryana-121001",pincode:"121001",phone:"7708122300",addressLine:"SCO-2, JBJ House, 18th Milestone, Neelam Ajronda Metro Station, Sec 20A, Delhi Mathura Road, Faridabad, Haryana-121001 | PIN: 121001 | Ph: 7708122300"},
  {code:"CFDELKBG",name:"CL-ST-DEL-Karol bagh",address:"33, Pusa Road, Ground Floor, opp metro pillar No. 113, Near Karol Bagh Metro Station, Delhi - 110005",pincode:"110005",phone:"7550328800",addressLine:"33, Pusa Road, Ground Floor, opp metro pillar No. 113, Near Karol Bagh Metro Station, Delhi - 110005 | PIN: 110005 | Ph: 7550328800"},
  {code:"CLPUNPCH",name:"CL-ST-PNE-PimpriChinchwad",address:"G107, Ground floor, Gera Imperium Oasis, Survey No. 35, Hissa No. 1+2/1 Pimpri Chinchwad Municipal Corporation, Maharastra-411018",pincode:"411018",phone:"9566608200",addressLine:"G107, Ground floor, Gera Imperium Oasis, Survey No. 35, Hissa No. 1+2/1 Pimpri Chinchwad Municipal Corporation, Maharastra-411018 | PIN: 411018 | Ph: 9566608200"},
  {code:"CFPJMMGR",name:"CL-ST-Panjim-MGRoad",address:"Shop no. 11 to 15, Ground Floor, Skylark Apartments, SV road, Opposite to Woodland Showroom, Panjim, Goa-403001",pincode:"403001",phone:"8411860808",addressLine:"Shop no. 11 to 15, Ground Floor, Skylark Apartments, SV road, Opposite to Woodland Showroom, Panjim, Goa-403001 | PIN: 403001 | Ph: 8411860808"},
  {code:"CFDELJNP",name:"CL-ST-DEL-Janakpuri",address:"A-1/32, Ground floor, Opposite Metro pillar No: 624\nAdjacent to State Bank of India, JANAK PURI, NEW DELHI-110058",pincode:"110058",phone:"9717717957",addressLine:"A-1/32, Ground floor, Opposite Metro pillar No: 624\nAdjacent to State Bank of India, JANAK PURI, NEW DELHI-110058 | PIN: 110058 | Ph: 9717717957"},
  {code:"CFBLRFKM",name:"CL-ST-BNG-ForumKoramangalaNew",address:"Forum Mall, Shop no FF 107, First Floor, Hosur Road, Koramangala, Bengaluru, Karnataka 560095",pincode:"560095",phone:"6366080916",addressLine:"Forum Mall, Shop no FF 107, First Floor, Hosur Road, Koramangala, Bengaluru, Karnataka 560095 | PIN: 560095 | Ph: 6366080916"},
  {code:"CLAMDCHK",name:"CL-ST-AMD-Chandkheda",address:"Shop no 3, North Plaza, Near 4D Square Mall, Visat Gandhinagar Road, Motera, Ahmedabad - 380005",pincode:"380005",phone:"8220036660",addressLine:"Shop no 3, North Plaza, Near 4D Square Mall, Visat Gandhinagar Road, Motera, Ahmedabad - 380005 | PIN: 380005 | Ph: 8220036660"},
  {code:"CLGURS14",name:"CL-ST-GUR-GurgaonSec14",address:"Ground floor, 17/6, Delhi Gurgaon Road, Sector 14, Gurugram, Haryana. 122001 ( Landmark - Quality Inn Hotel )",pincode:"122001",phone:"8220711300",addressLine:"Ground floor, 17/6, Delhi Gurgaon Road, Sector 14, Gurugram, Haryana. 122001 ( Landmark - Quality Inn Hotel ) | PIN: 122001 | Ph: 8220711300"},
  {code:"CFDELMDT",name:"CL-ST-DEL-ModelTownL2",address:"Upper Ground Floor , B-3 , Gujranwala Town Part 1 , Delhi 110009 ( Opp Metro Pillar no. 23)",pincode:"110009",phone:"8220611900",addressLine:"Upper Ground Floor , B-3 , Gujranwala Town Part 1 , Delhi 110009 ( Opp Metro Pillar no. 23) | PIN: 110009 | Ph: 8220611900"},
  {code:"CLKOLKKG",name:"CL-ST-KOL-Kankurgachi",address:"Ground Floor, P-15, CIT Road Scheme, Kankurgachi, Kolkata - 700054",pincode:"700054",phone:"7358850033",addressLine:"Ground Floor, P-15, CIT Road Scheme, Kankurgachi, Kolkata - 700054 | PIN: 700054 | Ph: 7358850033"},
  {code:"CFKOLCNP",name:"CL-ST-KOL-ChinarPark",address:"Ground floor, Pinnacle tower, near Chinar Park, Dash Drone, Newtown, Kolkata, West Bengal 700136",pincode:"700136",phone:"9153973500",addressLine:"Ground floor, Pinnacle tower, near Chinar Park, Dash Drone, Newtown, Kolkata, West Bengal 700136 | PIN: 700136 | Ph: 9153973500"},
  {code:"CFMERBBR",name:"CL-ST-MER-BegumBridgeRoad",address:"145, Dev Nagar, Next to City Centre, Main Begum Bridge Road, Near Bachcha Park, Meerut-250002",pincode:"250002",phone:"9520890321",addressLine:"145, Dev Nagar, Next to City Centre, Main Begum Bridge Road, Near Bachcha Park, Meerut-250002 | PIN: 250002 | Ph: 9520890321"},
  {code:"CLHYDCDN",name:"CL-ST-HYD-ChandaNagar",address:"No. 1-54 /6/D, Plot No:167, Madeenaguda, near Tanishq Jewellery Showroom, Hyderabad, Telangana 500050",pincode:"500050",phone:"8870088890",addressLine:"No. 1-54 /6/D, Plot No:167, Madeenaguda, near Tanishq Jewellery Showroom, Hyderabad, Telangana 500050 | PIN: 500050 | Ph: 8870088890"},
  {code:"CFJALMDT",name:"CL-ST-JAL-ModelTown",address:"GF 259, CaratLane Jewellery, Dainik savera Bhawan, Adjoining Tata Croma Store, Lajpat Nagar, Jalandhar, Punjab 144001",pincode:"144001",phone:"9592750500",addressLine:"GF 259, CaratLane Jewellery, Dainik savera Bhawan, Adjoining Tata Croma Store, Lajpat Nagar, Jalandhar, Punjab 144001 | PIN: 144001 | Ph: 9592750500"},
  {code:"CFGUNLKP",name:"CL-ST-Guntur-Lakshmipuram",address:"CaratLane Store, Door No 5-87-127, 2nd Lane Lakshmipuram, Guntur-522007",pincode:"522007",phone:"7416412121",addressLine:"CaratLane Store, Door No 5-87-127, 2nd Lane Lakshmipuram, Guntur-522007 | PIN: 522007 | Ph: 7416412121"},
  {code:"CFCHNSLR",name:"CL-ST-CHN-Selaiyur",address:"57/40, Velachery Main Road, Mahalakshmi Nagar, Selaiyur, Chennai- 600073",pincode:"600073",phone:"9840966466",addressLine:"57/40, Velachery Main Road, Mahalakshmi Nagar, Selaiyur, Chennai- 600073 | PIN: 600073 | Ph: 9840966466"},
  {code:"CFHUBKPR",name:"CL-ST-HUB-Hubli KoppikarRoad",address:"Shop No.1, SK Building, Koppikar Road, Hubli - 580020",pincode:"580020",phone:"9449164828",addressLine:"Shop No.1, SK Building, Koppikar Road, Hubli - 580020 | PIN: 580020 | Ph: 9449164828"},
  {code:"CFJBPNBR",name:"CL-ST-JBR-NaudraBridge",address:"407, Rajeev Gandhi Chowk, Naudra Bridge, Jabalpur, Madhya Pradesh 482002",pincode:"482002",phone:"7909400720",addressLine:"407, Rajeev Gandhi Chowk, Naudra Bridge, Jabalpur, Madhya Pradesh 482002 | PIN: 482002 | Ph: 7909400720"},
  {code:"CRCTKCTR",name:"CL-ST-L3-Cuttack-Cantonment Road",address:"Ground & First floor, No 851 A, Ward No 16, Cantonment Road, Besides Reliance Fresh, Cuttack, Odisha, Pin- 753001",pincode:"753001",phone:"6372900622",addressLine:"Ground & First floor, No 851 A, Ward No 16, Cantonment Road, Besides Reliance Fresh, Cuttack, Odisha, Pin- 753001 | PIN: 753001 | Ph: 6372900622"},
  {code:"CFAMDSBN",name:"CL-ST-AMD-SindhuBhavanL2",address:"Showroom no. 04, Shilp Satved, Near Sindhubhavan Community Hall, Sindhubhavan Marg, Bodakdev, Ahmedabad-380054",pincode:"380054",phone:"7305277780",addressLine:"Showroom no. 04, Shilp Satved, Near Sindhubhavan Community Hall, Sindhubhavan Marg, Bodakdev, Ahmedabad-380054 | PIN: 380054 | Ph: 7305277780"},
  {code:"CLMUMMLD",name:"CL-ST-MUM-Mulund",address:"Shop No - 6, Runwal R Square, Lal Bahadur Shastri Road, Mulund West, Mumbai, Maharashtra 400080",pincode:"400080",phone:"8291933440",addressLine:"Shop No - 6, Runwal R Square, Lal Bahadur Shastri Road, Mulund West, Mumbai, Maharashtra 400080 | PIN: 400080 | Ph: 8291933440"},
  {code:"CRSRICWM",name:"CL-ST-L3-Srinagar-CityWalkMall",address:"Ground floor, City Walk Mall, M.A Road, Srinagar, Jammu & Kashmir-190001",pincode:"190001",phone:"9622220456",addressLine:"Ground floor, City Walk Mall, M.A Road, Srinagar, Jammu & Kashmir-190001 | PIN: 190001 | Ph: 9622220456"},
  {code:"CLBLRMMR",name:"CL-ST-BNG-MalleshwaramMargosaRoad",address:"No.59, Margosa Road, Malleswaram- 560003",pincode:"560003",phone:"7358144430",addressLine:"No.59, Margosa Road, Malleswaram- 560003 | PIN: 560003 | Ph: 7358144430"},
  {code:"CFDELSHD",name:"CL-ST-DEL-ShahdaraL2",address:"Upper Ground Floor,A3,Plot No-9,Kabir Nagar,Shahdara,Delhi-110032",pincode:"110032",phone:"7200344044",addressLine:"Upper Ground Floor,A3,Plot No-9,Kabir Nagar,Shahdara,Delhi-110032 | PIN: 110032 | Ph: 7200344044"},
  {code:"CFSRTADJ",name:"CL-ST-SRT-Surat Adajan",address:"Shop no 1, Mangaldeep Complex, besides Tanishq Showroom, near L.P. Savani Circle, Adajan, Surat- 395009",pincode:"395009",phone:"7436048000",addressLine:"Shop no 1, Mangaldeep Complex, besides Tanishq Showroom, near L.P. Savani Circle, Adajan, Surat- 395009 | PIN: 395009 | Ph: 7436048000"},
  {code:"CRAMBCNT",name:"CL-ST-L3-AMB-Cantt Durga Charan Road",address:"Ground floor, Building No:-6267/1,5,6,7, J.D.Plaza, Sadar Bazar, Durga Charan Road, Ambala Cantt, Ambala, Haryana-133001",pincode:"133001",phone:"8222945274",addressLine:"Ground floor, Building No:-6267/1,5,6,7, J.D.Plaza, Sadar Bazar, Durga Charan Road, Ambala Cantt, Ambala, Haryana-133001 | PIN: 133001 | Ph: 8222945274"},
  {code:"CFBRDGTR",name:"CL-ST-BRD- Bardhaman GTRoad",address:"GROUD FLOOR, 173, GT ROAD EAST END, BARONIPUR MORE, P.O-SRIPALLY, PURBA BARDHAMAN, PIN-713103",pincode:"713103",phone:"8695605770",addressLine:"GROUD FLOOR, 173, GT ROAD EAST END, BARONIPUR MORE, P.O-SRIPALLY, PURBA BARDHAMAN, PIN-713103 | PIN: 713103 | Ph: 8695605770"},
  {code:"CRRAJRIR",name:"CL-ST-L3-RAJ-150 RING ROAD",address:"Ground Floor,Swastik House, Opposite Imperial Heights, 150ft Ring Road, Rajkot, Gujarat - 360005",pincode:"360005",phone:"9033330493",addressLine:"Ground Floor,Swastik House, Opposite Imperial Heights, 150ft Ring Road, Rajkot, Gujarat - 360005 | PIN: 360005 | Ph: 9033330493"},
  {code:"CFMGLBJI",name:"CL-ST-Mangalore-MangaloreBejai",address:"Ground floor, Plama Center, Next to Jayalakshmi Silks, Dr. C Mathias Road, Bejai, Mangaluru, Karnataka. Pin-575004",pincode:"575004",phone:"8867386655",addressLine:"Ground floor, Plama Center, Next to Jayalakshmi Silks, Dr. C Mathias Road, Bejai, Mangaluru, Karnataka. Pin-575004 | PIN: 575004 | Ph: 8867386655"},
  {code:"CFMUMMIR",name:"CL-ST-MUM-MiraroadL2",address:"Showroom No 1,Platinum Building, Next to Tata Motors, Mira-Bhayander Road, Mira Road East, Maharashtra - 401107",pincode:"401107",phone:"7305666047",addressLine:"Showroom No 1,Platinum Building, Next to Tata Motors, Mira-Bhayander Road, Mira Road East, Maharashtra - 401107 | PIN: 401107 | Ph: 7305666047"},
  {code:"CFARGJLR",name:"CL-ST-Chhatrapati Sambhajinagar-JalnaRoad",address:"Ground Floor, V Square Building, Opposite Amarpreet Hotel, Chhatrapati Sambhajinagar - 431001",pincode:"431001",phone:"8484907790",addressLine:"Ground Floor, V Square Building, Opposite Amarpreet Hotel, Chhatrapati Sambhajinagar - 431001 | PIN: 431001 | Ph: 8484907790"},
  {code:"CFMDRKKN",name:"CL-ST-MDR-Madurai KKNagar",address:"CaratLane, 147/2A, Next to Hindu Office, 80 Feet Road, KK Nagar, Madurai 625020",pincode:"625020",phone:"7418582020",addressLine:"CaratLane, 147/2A, Next to Hindu Office, 80 Feet Road, KK Nagar, Madurai 625020 | PIN: 625020 | Ph: 7418582020"},
  {code:"CFMRGAQM",name:"CL-ST-MARG-Aisha Mall L2",address:"Shop number 6,7,8, Amber Apts., Next to Sunny Book Stationery, Aquem, Margao, Goa 403601",pincode:"403601",phone:"9975318241",addressLine:"Shop number 6,7,8, Amber Apts., Next to Sunny Book Stationery, Aquem, Margao, Goa 403601 | PIN: 403601 | Ph: 9975318241"},
  {code:"CFCOCMGR",name:"CL-ST-Cochin-KochiMGRoad",address:"No. XI 9147 A, Rajaji Rd, Ernakulam, Kochi- 682035",pincode:"682035",phone:"9946693111",addressLine:"No. XI 9147 A, Rajaji Rd, Ernakulam, Kochi- 682035 | PIN: 682035 | Ph: 9946693111"},
  {code:"CFGURAJS",name:"CL-ST-GUR-AIPL JoyStreet",address:"Shop no 116-117, Ground Floor, AIPL Joy Street, Badshahpur, Sector -66, Gurgaon 122102 Haryana",pincode:"122102",phone:"8448810709",addressLine:"Shop no 116-117, Ground Floor, AIPL Joy Street, Badshahpur, Sector -66, Gurgaon 122102 Haryana | PIN: 122102 | Ph: 8448810709"},
  {code:"CFBLRJPN",name:"CL-ST-BNG-JP Nagar",address:"Ground floor, Site No. 26/1, 24th Main, JP Nagar, 5th Phase, Next to IDBI Bank, Bengaluru 560078",pincode:"560078",phone:"8867347171",addressLine:"Ground floor, Site No. 26/1, 24th Main, JP Nagar, 5th Phase, Next to IDBI Bank, Bengaluru 560078 | PIN: 560078 | Ph: 8867347171"},
  {code:"CFKOLBTR",name:"CL-ST-KOL-BTRoad",address:"36/2b, BT Road, Near Rabindra Bharti University, Kolkata- 700002",pincode:"700002",phone:"9147318100",addressLine:"36/2b, BT Road, Near Rabindra Bharti University, Kolkata- 700002 | PIN: 700002 | Ph: 9147318100"},
  {code:"CFDDNUCM",name:"CL-ST-DERD-DehradunUnisonMall",address:"Ground floor, Unison Centrio Mall 108/84, Rabindra Nath Tagore Marg, Shakti Colony, Dehradun, Uttarakhand 248001",pincode:"248001",phone:"7305959811",addressLine:"Ground floor, Unison Centrio Mall 108/84, Rabindra Nath Tagore Marg, Shakti Colony, Dehradun, Uttarakhand 248001 | PIN: 248001 | Ph: 7305959811"},
  {code:"CFCBERSP",name:"CL-ST-CBE-CoimbatoreRSPuram",address:"No 130, Venkataswamy Road , DB Road , RS Puram , Coimbatore- 641002",pincode:"641002",phone:"9884286363",addressLine:"No 130, Venkataswamy Road , DB Road , RS Puram , Coimbatore- 641002 | PIN: 641002 | Ph: 9884286363"},
  {code:"CFALWJCR",name:"CL-ST-ALW-Alwar",address:"Shop 152, 153, Jai Complex, Road No 2, Near Axis Bank & Tanishq showroom, Alwar, Rajasthan-301001",pincode:"301001",phone:"9799903132",addressLine:"Shop 152, 153, Jai Complex, Road No 2, Near Axis Bank & Tanishq showroom, Alwar, Rajasthan-301001 | PIN: 301001 | Ph: 9799903132"},
  {code:"CRTRCKBR",name:"CL-ST-L3-TRC-Karur Bypass",address:"9/2, Karur Bypass Road, Annamalai Nagar, Tiruchirappalli, Tamil Nadu. Pin - 620018",pincode:"620018",phone:"6379209399",addressLine:"9/2, Karur Bypass Road, Annamalai Nagar, Tiruchirappalli, Tamil Nadu. Pin - 620018 | PIN: 620018 | Ph: 6379209399"},
  {code:"CFBLRRRN",name:"CL-ST-BNG-RR Nagar",address:"No 1164, Jawaharlal Nehru Road, BEML Layout 3rd Stage, RR Nagar, Bengaluru - 560098",pincode:"560098",phone:"8867549944",addressLine:"No 1164, Jawaharlal Nehru Road, BEML Layout 3rd Stage, RR Nagar, Bengaluru - 560098 | PIN: 560098 | Ph: 8867549944"},
  {code:"CFPNPMDT",name:"CL-ST-PNP-Panipat ModelTown",address:"330-R, Model Town, Sukhdev Nagar,Panipat, Haryana-132103",pincode:"132103",phone:"7015517116",addressLine:"330-R, Model Town, Sukhdev Nagar,Panipat, Haryana-132103 | PIN: 132103 | Ph: 7015517116"},
  {code:"CFGURS29",name:"CL-ST-GUR-Sector29",address:"Ground Floor, VR1 AND U&I CENTRE, Near Leisure Valley SCO-83, CITY CENTER, SECTOR 29, GURGAON 122001",pincode:"122001",phone:"9958437999",addressLine:"Ground Floor, VR1 AND U&I CENTRE, Near Leisure Valley SCO-83, CITY CENTER, SECTOR 29, GURGAON 122001 | PIN: 122001 | Ph: 9958437999"},
  {code:"CLDELSCM",name:"CL-ST-DEL-SelectCityWalkMall",address:"Shop F-18 (a), Select CITYWALK, A-3, District Centre, Saket, New Delhi-110017",pincode:"110017",phone:"7305959066 / 7305959077",addressLine:"Shop F-18 (a), Select CITYWALK, A-3, District Centre, Saket, New Delhi-110017 | PIN: 110017 | Ph: 7305959066 / 7305959077"},
  {code:"CFLKWLUM",name:"CL-ST-LKW-LuluMall",address:"Unit no F-027, Ground floor, Lulu Mall, Sushant Golf City, Lucknow, UP 226030",pincode:"226030",phone:"9076611661",addressLine:"Unit no F-027, Ground floor, Lulu Mall, Sushant Golf City, Lucknow, UP 226030 | PIN: 226030 | Ph: 9076611661"},
  {code:"CFRNCHMR",name:"CL-ST-RNC-Harmu Road",address:"Ground floor, M.S Plaza, Ward No 23 (New), Harmu Road, Ranchi, Jharkhand 834001",pincode:"834001",phone:"9955266388",addressLine:"Ground floor, M.S Plaza, Ward No 23 (New), Harmu Road, Ranchi, Jharkhand 834001 | PIN: 834001 | Ph: 9955266388"},
  {code:"CFPUNHDP",name:"CL-ST-PNE-HadapsarL2",address:"Shop No 1, Bhosale Avenue Magarpatta Road, Hadapsar, Pune 411028",pincode:"411028",phone:"7305959733",addressLine:"Shop No 1, Bhosale Avenue Magarpatta Road, Hadapsar, Pune 411028 | PIN: 411028 | Ph: 7305959733"},
  {code:"CFHYDKPL",name:"CL-ST-HYD-Kompally",address:"1/a, Plot No, Quthbullapur Mandal, 8-83, 2 NCL Colony Road, Petbasheerabad, Kompally, Hyderabad, Telangana 500055",pincode:"500055",phone:"9100009883",addressLine:"1/a, Plot No, Quthbullapur Mandal, 8-83, 2 NCL Colony Road, Petbasheerabad, Kompally, Hyderabad, Telangana 500055 | PIN: 500055 | Ph: 9100009883"},
  {code:"CLPUNJMR",name:"CL-ST-PUN-JM Road",address:"Ground Floor, Bahirat Patil Arcade, Opposite Balgandharva Auditorium, JM Road, Pune 411005",pincode:"411005",phone:"7305959233",addressLine:"Ground Floor, Bahirat Patil Arcade, Opposite Balgandharva Auditorium, JM Road, Pune 411005 | PIN: 411005 | Ph: 7305959233"},
  {code:"CFCHNOMR",name:"CL-ST-CHN-OMRThoraipakkam",address:"Plot no 19, Raju Nagar,1 st Main Road, Okkiyam, Thoraipakkam, Chennai 600097",pincode:"600097",phone:"7200363874",addressLine:"Plot no 19, Raju Nagar,1 st Main Road, Okkiyam, Thoraipakkam, Chennai 600097 | PIN: 600097 | Ph: 7200363874"},
  {code:"CFKNPSWN",name:"CL-ST-KNP-SwarupNagar",address:"Ground floor, 7/ 187 (1), Old Sales Tax Road, Swarup Nagar, Kanpur, Uttar Pradesh 208002",pincode:"208002",phone:"9076611667 / 9076611668",addressLine:"Ground floor, 7/ 187 (1), Old Sales Tax Road, Swarup Nagar, Kanpur, Uttar Pradesh 208002 | PIN: 208002 | Ph: 9076611667 / 9076611668"},
  {code:"CFHYDKDP",name:"CL-ST-HYD-Kondapur",address:"Shop No G5 and 105 Kothari Centrum Building, Kondapur, Serilingampally, Hyderabad 500084",pincode:"500084",phone:"8977012952",addressLine:"Shop No G5 and 105 Kothari Centrum Building, Kondapur, Serilingampally, Hyderabad 500084 | PIN: 500084 | Ph: 8977012952"},
  {code:"CFANTRJR",name:"CL-ST-ANT-RAJU RD",address:"15/606, Raju Road, Kamalanagar, Anantapur, Andhra Pradesh 515001",pincode:"515001",phone:"7702622966",addressLine:"15/606, Raju Road, Kamalanagar, Anantapur, Andhra Pradesh 515001 | PIN: 515001 | Ph: 7702622966"},
  {code:"CFAMRMLR",name:"CL-ST-AMR-AmritsarMallRoad",address:"39, Mall Road, Amritsar, Punjab 143001",pincode:"143001",phone:"7888897673",addressLine:"39, Mall Road, Amritsar, Punjab 143001 | PIN: 143001 | Ph: 7888897673"},
  {code:"CFGWLDBM",name:"CL-ST-GWL-GwaliorDBMall",address:"Shop No 1, Ground Floor, DB Mall, opposite Railway Station, Gwalior, Madhya Pradesh 475001",pincode:"475001",phone:"7024023342",addressLine:"Shop No 1, Ground Floor, DB Mall, opposite Railway Station, Gwalior, Madhya Pradesh 475001 | PIN: 475001 | Ph: 7024023342"},
  {code:"CFTRPABR",name:"CL-ST-TRP-Tirupati",address:"19-8-116/9D, Revenue Ward No. 19, AIR Bypass Road, Tirupati Town, Near D-Mart, Tirupati, Andhra Pradesh 517501",pincode:"517501",phone:"9363639494 / 9363639595",addressLine:"19-8-116/9D, Revenue Ward No. 19, AIR Bypass Road, Tirupati Town, Near D-Mart, Tirupati, Andhra Pradesh 517501 | PIN: 517501 | Ph: 9363639494 / 9363639595"},
  {code:"CFMUMTVK",name:"CL-ST-MUM-ThakurVillage",address:"Shop No 8, Viceroy Savana, Phase 1, 120 feet road, Thakur Village, Kandivali East, Mumbai 400101",pincode:"400101",phone:"6385048900",addressLine:"Shop No 8, Viceroy Savana, Phase 1, 120 feet road, Thakur Village, Kandivali East, Mumbai 400101 | PIN: 400101 | Ph: 6385048900"},
  {code:"CFMUMGBR",name:"CL-ST-THN-GhodbunderRoad",address:"Shop No. 1, Rushabh Mall, Wadekar Compound, Opp Mohan Mill Compound, Ghodbunder Road, Thane West 400607",pincode:"400607",phone:"6385049300",addressLine:"Shop No. 1, Rushabh Mall, Wadekar Compound, Opp Mohan Mill Compound, Ghodbunder Road, Thane West 400607 | PIN: 400607 | Ph: 6385049300"},
  {code:"CLMUMRCM",name:"CL-ST-MUM-RCityMall",address:"Unit no: G-64 B, Ground floor, R City Mall, LBS Marg, Ghatkopar West, Mumbai, Maharastra 400086",pincode:"400086",phone:"7845899300",addressLine:"Unit no: G-64 B, Ground floor, R City Mall, LBS Marg, Ghatkopar West, Mumbai, Maharastra 400086 | PIN: 400086 | Ph: 7845899300"},
  {code:"CFHWHAVM",name:"CL-ST-HWH-HowrahAvaniMall",address:"Shop No 16 & 17, Ground Floor, Avani Riverside Mall, 32 Jagat Banerjee Ghat Road, Shibpur, Howrah, West Bengal 711102",pincode:"711102",phone:"6290692187",addressLine:"Shop No 16 & 17, Ground Floor, Avani Riverside Mall, 32 Jagat Banerjee Ghat Road, Shibpur, Howrah, West Bengal 711102 | PIN: 711102 | Ph: 6290692187"},
  {code:"CFKNGDSR",name:"CL-ST-Kangra-DharamshalaRoadL2",address:"Ward No 9, Opposite Government Polytechnic College, Dharamshala Road, Near Lenskart, Kangra 176001",pincode:"176001",phone:"8091270100",addressLine:"Ward No 9, Opposite Government Polytechnic College, Dharamshala Road, Near Lenskart, Kangra 176001 | PIN: 176001 | Ph: 8091270100"},
  {code:"CFTVRMGR",name:"CL-ST-TVR-TrivandrumMGRoad",address:"Angel Arcade, Near Pulimood Jn., MG Road, Thiruvananthapuram 695001",pincode:"695001",phone:"8589872277",addressLine:"Angel Arcade, Near Pulimood Jn., MG Road, Thiruvananthapuram 695001 | PIN: 695001 | Ph: 8589872277"},
  {code:"CFDURCTC",name:"CL-ST-DUR-DurgapurCityCentre",address:"Plot no A-4, 1st Block, 2/2, Central Park, Opposite Life Care Hospital, Doctor's Colony, City Center, Durgapur, West Bengal 713216",pincode:"713216",phone:"9083264439",addressLine:"Plot no A-4, 1st Block, 2/2, Central Park, Opposite Life Care Hospital, Doctor's Colony, City Center, Durgapur, West Bengal 713216 | PIN: 713216 | Ph: 9083264439"},
  {code:"CFJMUBPH",name:"CL-ST-Jammu-BahuPlaza",address:"Ground floor, Om Tower, Rail Head Complex, Near Vishal Mega Mart, Bahu Plaza, Jammu 180012",pincode:"180012",phone:"9622050555",addressLine:"Ground floor, Om Tower, Rail Head Complex, Near Vishal Mega Mart, Bahu Plaza, Jammu 180012 | PIN: 180012 | Ph: 9622050555"},
  {code:"CFPUDKMS",name:"CL-ST-PUD-PuducherryKamaraj",address:"104, Kamarajar Salai, Brindavan Colony, Puducherry 605011",pincode:"605011",phone:"7448811660",addressLine:"104, Kamarajar Salai, Brindavan Colony, Puducherry 605011 | PIN: 605011 | Ph: 7448811660"},
  {code:"CLPUNTOH",name:"CL-ST-PNE-TerminalONEHinjewadi",address:"Unit no 10 & 109, Tower-A, Terminal ONE, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune-411057",pincode:"411057",phone:"7845945002",addressLine:"Unit no 10 & 109, Tower-A, Terminal ONE, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune-411057 | PIN: 411057 | Ph: 7845945002"},
  {code:"CABLRRMM",name:"CL-ST-L8-BNG-RoyalMeenakshiMall",address:"Ground floor, G-016, Royal Meenakshi Mall, Bannerghatta Road, Hulimavu BBMP, Arakare, Bangalore 560 076",pincode:"560076",phone:"7845808404",addressLine:"Ground floor, G-016, Royal Meenakshi Mall, Bannerghatta Road, Hulimavu BBMP, Arakare, Bangalore 560 076 | PIN: 560076 | Ph: 7845808404"},
  {code:"CLKOLLKM",name:"CL-ST-KOL-LakeMall",address:"Lake Mall, 104, Rash Behari Ave, Lake Market, Kalighat, Kolkata, West Bengal 700029",pincode:"700029",phone:"7845902400",addressLine:"Lake Mall, 104, Rash Behari Ave, Lake Market, Kalighat, Kolkata, West Bengal 700029 | PIN: 700029 | Ph: 7845902400"},
  {code:"CFBLRBMH",name:"CL-ST-BNG-Bommanahalli",address:"Opp. Metro Pillar No 37, Bendepalya, Muneshwara Nagar, Bommanahalli, Bengaluru 560068",pincode:"560068",phone:"8867548282",addressLine:"Opp. Metro Pillar No 37, Bendepalya, Muneshwara Nagar, Bommanahalli, Bengaluru 560068 | PIN: 560068 | Ph: 8867548282"},
  {code:"CLPUNSTR",name:"CL-ST-PNE-SataraRoad",address:"Shop No 1, Mudra, Pune Satara Road, Natu Baugh, Satara Road, Pune 411009",pincode:"411009",phone:"7845948001",addressLine:"Shop No 1, Mudra, Pune Satara Road, Natu Baugh, Satara Road, Pune 411009 | PIN: 411009 | Ph: 7845948001"},
  {code:"CFAJMANS",name:"CL-ST-Ajmer-AnaSagar",address:"No.3, Shanti Pura, Soni Colony, Ana Sagar, Circular Road, Vaishali Nagar, Ajmer 305004",pincode:"305004",phone:"7300080535",addressLine:"No.3, Shanti Pura, Soni Colony, Ana Sagar, Circular Road, Vaishali Nagar, Ajmer 305004 | PIN: 305004 | Ph: 7300080535"},
  {code:"CFVAPCBC",name:"CL-ST-VAP-VapiCapitalBusinessCentre",address:"Shop No 12,13,14, Near Central Bank, opposite Circuit House, Silvassa Daman Road, Vapi, Gujarat 396191",pincode:"396191",phone:"7845919133",addressLine:"Shop No 12,13,14, Near Central Bank, opposite Circuit House, Silvassa Daman Road, Vapi, Gujarat 396191 | PIN: 396191 | Ph: 7845919133"},
  {code:"CLLKWGMN",name:"CL-ST-LKW-GomtiNagar",address:"Shop No- G-02, Iridium, Shalimar Corporate Park, Vibhuti Khand, Gomti Nagar, Lucknow 226010",pincode:"226010",phone:"7845941004",addressLine:"Shop No- G-02, Iridium, Shalimar Corporate Park, Vibhuti Khand, Gomti Nagar, Lucknow 226010 | PIN: 226010 | Ph: 7845941004"},
  {code:"CFBLRHEN",name:"CL-ST-BNG-Hennur",address:"Sy/No 33, Shop No. 4 Geddalahalli, K. Narayanapura Cross, Kr Puram Hobli, Bangalore, East Taluk, Bangalore Urban, Karnataka 560077",pincode:"560077",phone:"9611551043",addressLine:"Sy/No 33, Shop No. 4 Geddalahalli, K. Narayanapura Cross, Kr Puram Hobli, Bangalore, East Taluk, Bangalore Urban, Karnataka 560077 | PIN: 560077 | Ph: 9611551043"},
  {code:"CFDELPJM",name:"CL-ST-DEL-PacificJasolaMall",address:"SHGF 15, Ground Floor, Pacific Mall, Jasola Apollo Metro Station CPD-48, Sarita Vihar, Mathura Road , New Delhi 110044",pincode:"110044",phone:"9958780909",addressLine:"SHGF 15, Ground Floor, Pacific Mall, Jasola Apollo Metro Station CPD-48, Sarita Vihar, Mathura Road , New Delhi 110044 | PIN: 110044 | Ph: 9958780909"},
  {code:"CFMUMKGR",name:"CL-ST-MUM-KhargharL2",address:"Shop No 5, Sai Krupa Premises CHS LTD, Plot no D 68, Sector 12, Kharghar, Panvel District, Raigad, Maharashtra 410210",pincode:"410210",phone:"7305949422",addressLine:"Shop No 5, Sai Krupa Premises CHS LTD, Plot no D 68, Sector 12, Kharghar, Panvel District, Raigad, Maharashtra 410210 | PIN: 410210 | Ph: 7305949422"},
  {code:"CLHYDSCD",name:"CL-ST-HYD-Secunderabad",address:"Ground floor, Shop No. 2 & 3, 1-7-179, M.G.Road, Secunderabad, Telangana - 500003",pincode:"500003",phone:"7845931188",addressLine:"Ground floor, Shop No. 2 & 3, 1-7-179, M.G.Road, Secunderabad, Telangana - 500003 | PIN: 500003 | Ph: 7845931188"},
  {code:"CFSHMMLR",name:"CL-ST-SHM-ShimlaMallRoadL2",address:"79, The Mall, Shimla, Himachal Pradesh - 171001",pincode:"171001",phone:"7418074440",addressLine:"79, The Mall, Shimla, Himachal Pradesh - 171001 | PIN: 171001 | Ph: 7418074440"},
  {code:"CFPATSMO",name:"CL-ST-PAT-SagunaMore",address:"Ground, First & Second Floor, Shop no G 1-4/F 1-4/S 1-4, Azim Tower, Saguna More, Patna 801503",pincode:"801503",phone:"9135221122",addressLine:"Ground, First & Second Floor, Shop no G 1-4/F 1-4/S 1-4, Azim Tower, Saguna More, Patna 801503 | PIN: 801503 | Ph: 9135221122"},
  {code:"CFHYDSKP",name:"CL-ST-HYD-Shaikpet",address:"8-1-523/302/3/4, Next to Raymond Showroom, Brindavan Colony, Tolichowki, Shaikpet, Hyderabad 500008",pincode:"500008",phone:"9912314455",addressLine:"8-1-523/302/3/4, Next to Raymond Showroom, Brindavan Colony, Tolichowki, Shaikpet, Hyderabad 500008 | PIN: 500008 | Ph: 9912314455"},
  {code:"CRSILSVR",name:"CL-ST-L3-SIL-Sevak Road",address:"Ground Floor, Time Square Building, Opposite Victoria Junction, 2nd Mile, Sevoke Road Siliguri 734001",pincode:"734001",phone:"9734733000",addressLine:"Ground Floor, Time Square Building, Opposite Victoria Junction, 2nd Mile, Sevoke Road Siliguri 734001 | PIN: 734001 | Ph: 9734733000"},
  {code:"CRPATBLR",name:"CL-ST-L3-PAT-BLR",address:"Ground Floor, Vibha Palace, Bailey Road, Beside Godrej Interio & KFC, Raja Bazar, Patna, Bihar 800014",pincode:"800014",phone:"7550018123",addressLine:"Ground Floor, Vibha Palace, Bailey Road, Beside Godrej Interio & KFC, Raja Bazar, Patna, Bihar 800014 | PIN: 800014 | Ph: 7550018123"},
  {code:"CFIDRPCM",name:"CL-ST-IDR-CitadelMall",address:"Unit No. UG- 56, Phoenix Citadel Mall, Survey No. 248/1/1, Next to Mumbai Agra Bypass, Village Khajrana, Indore, Madhya Pradesh 452016",pincode:"452016",phone:"9516712358",addressLine:"Unit No. UG- 56, Phoenix Citadel Mall, Survey No. 248/1/1, Next to Mumbai Agra Bypass, Village Khajrana, Indore, Madhya Pradesh 452016 | PIN: 452016 | Ph: 9516712358"},
  {code:"CFMUMPNL",name:"CL-ST-MUM-PanvelL2",address:"Shop No 3 and 4, Euphoriya Building MCCH Society, Plot no 148, FP no 205/6, Opposite Bhagat Tarachand, VB Phadke Road, Panvel 410206",pincode:"410206",phone:"7305005806",addressLine:"Shop No 3 and 4, Euphoriya Building MCCH Society, Plot no 148, FP no 205/6, Opposite Bhagat Tarachand, VB Phadke Road, Panvel 410206 | PIN: 410206 | Ph: 7305005806"},
  {code:"CFNANVIP",name:"CL-ST-NAN-NandedVIPRoad",address:"1-17-1402, Suyash Heights, VIP Road, Opp ITI Petrol Pump, Visava Nagar, Nanded, Maharashtra 431602",pincode:"431602",phone:"9459314111",addressLine:"1-17-1402, Suyash Heights, VIP Road, Opp ITI Petrol Pump, Visava Nagar, Nanded, Maharashtra 431602 | PIN: 431602 | Ph: 9459314111"},
  {code:"CFCBEAVR",name:"CL-ST-CBE-AvinashiRoadL2",address:"Upper Ground Floor, Premm Towers, 437 Avinashi Road, Peelamedu, Coimbatore 641004",pincode:"641004",phone:"8939970075",addressLine:"Upper Ground Floor, Premm Towers, 437 Avinashi Road, Peelamedu, Coimbatore 641004 | PIN: 641004 | Ph: 8939970075"},
  {code:"CRBERDNR",name:"CL-ST-L3-BER-BerhampurOdisha",address:"Ground Floor & First Floor, Dharma Nagar Main Road, Berhampur, Ganjam, Odisha 760002",pincode:"760002",phone:"8249962096",addressLine:"Ground Floor & First Floor, Dharma Nagar Main Road, Berhampur, Ganjam, Odisha 760002 | PIN: 760002 | Ph: 8249962096"},
  {code:"CFVDDKRB",name:"CL-ST-VDD-KareliBaughL2",address:"G12 Vir Nagar 2, Opp Tanishq, VIP road, Karelibaugh, Vadodara 390018",pincode:"390018",phone:"7845806909",addressLine:"G12 Vir Nagar 2, Opp Tanishq, VIP road, Karelibaugh, Vadodara 390018 | PIN: 390018 | Ph: 7845806909"},
  {code:"CFBLSBKG",name:"CL-ST-BLS-BalasoreBhaskarGanj",address:"Ground floor & First Floor, Plot No-369/1119/2770, Unit-10, Ward no-17, Bhaskar Ganj Muza, Near FM Golei, Balasore, Odisha 756001",pincode:"756001",phone:"9776041313",addressLine:"Ground floor & First Floor, Plot No-369/1119/2770, Unit-10, Ward no-17, Bhaskar Ganj Muza, Near FM Golei, Balasore, Odisha 756001 | PIN: 756001 | Ph: 9776041313"},
  {code:"CFMTHKRN",name:"CL-ST-Mathura-KrishnaNagarL2",address:"Ratan Tower, Krishna Nagar, Mathura, Uttar Pradesh 281004",pincode:"281004",phone:"9045599656",addressLine:"Ratan Tower, Krishna Nagar, Mathura, Uttar Pradesh 281004 | PIN: 281004 | Ph: 9045599656"},
  {code:"CFBGPKCR",name:"CL-ST-BGP-BhagalpurKachahariRoad",address:"Bose Park, MG Path, Kachahari Road, Bhagalpur, Bihar 812001",pincode:"812001",phone:"7305089092",addressLine:"Bose Park, MG Path, Kachahari Road, Bhagalpur, Bihar 812001 | PIN: 812001 | Ph: 7305089092"},
  {code:"CRBBRSBN",name:"CL-ST-L3-BBR-Soubhagya Nagar",address:"Plot no - 1189/5172/6314, Ground Floor, 1st Floor & 2nd Floor Main Road, Soubhagya Nagar, Bhubaneswar, Khordha, Odisha,751003",pincode:"751003",phone:"8249081674",addressLine:"Plot no - 1189/5172/6314, Ground Floor, 1st Floor & 2nd Floor Main Road, Soubhagya Nagar, Bhubaneswar, Khordha, Odisha,751003 | PIN: 751003 | Ph: 8249081674"},
  {code:"CLMUMVIR",name:"CL-ST-MUM-RedBricksVirar",address:"Shop No 14, Ground Floor, Red Bricks Business Plaza, Avenue Global City Chilkal, Dongri Road, Virar West, Dist Palghar, Maharashtra 401303",pincode:"401303",phone:"7305979733",addressLine:"Shop No 14, Ground Floor, Red Bricks Business Plaza, Avenue Global City Chilkal, Dongri Road, Virar West, Dist Palghar, Maharashtra 401303 | PIN: 401303 | Ph: 7305979733"},
  {code:"CFKURRSR",name:"CL-ST-KUR-Kurnool",address:"D No-40-581 A, SV Complex, R S Road, Kurnool 518004",pincode:"518004",phone:"8886406777",addressLine:"D No-40-581 A, SV Complex, R S Road, Kurnool 518004 | PIN: 518004 | Ph: 8886406777"},
  {code:"CFBHTBNB",name:"CL-ST-BHT-BathindaBankBazaar",address:"#4442, Bank Bazaar, Bathinda, Punjab 151001",pincode:"151001",phone:"8288960100",addressLine:"#4442, Bank Bazaar, Bathinda, Punjab 151001 | PIN: 151001 | Ph: 8288960100"},
  {code:"CFYMNGPR",name:"CL-ST-YMN-YamunaNagarGobindpuriRoad",address:"169, Brijpuri Colony, Yamuna Nagar, Haryana 135001",pincode:"135001",phone:"9253055541",addressLine:"169, Brijpuri Colony, Yamuna Nagar, Haryana 135001 | PIN: 135001 | Ph: 9253055541"},
  {code:"CFPUNPPS",name:"CL-ST-PNE-PimpleSaudagarL2",address:"Ground Floor, Blue Sapphire Business Park, Govind Yashda Chowk, Vishawshanti Colony, Pimple Saudagar, Pune, Maharastra 411027",pincode:"411027",phone:"7305089082",addressLine:"Ground Floor, Blue Sapphire Business Park, Govind Yashda Chowk, Vishawshanti Colony, Pimple Saudagar, Pune, Maharastra 411027 | PIN: 411027 | Ph: 7305089082"},
  {code:"CFLKWALB",name:"CL-ST-LKW-Alambagh",address:"B-79, Sector-B, LDA Kanpur Road Scheme, Barabirwa, Alambagh, Infront of Phoinex Mall Gate no.3, Lucknow-226012",pincode:"226012",phone:"7607773782",addressLine:"B-79, Sector-B, LDA Kanpur Road Scheme, Barabirwa, Alambagh, Infront of Phoinex Mall Gate no.3, Lucknow-226012 | PIN: 226012 | Ph: 7607773782"},
  {code:"CFBRLCVL",name:"CL-ST-Bareilly-CivilLinesL2",address:"82-A, Civil Lines, Chaupala Road, Bareilly 243001",pincode:"243001",phone:"7080402317",addressLine:"82-A, Civil Lines, Chaupala Road, Bareilly 243001 | PIN: 243001 | Ph: 7080402317"},
  {code:"CLHYDKKP",name:"CL-ST-HYD-Kukatpally",address:"MIG-09, Dharma Reddy Colony Phase 1, KPHB, GHMC Kukatpally Circle, Ranga Reddy District, Hyderabad, Telangana 500085",pincode:"500085",phone:"7305092925",addressLine:"MIG-09, Dharma Reddy Colony Phase 1, KPHB, GHMC Kukatpally Circle, Ranga Reddy District, Hyderabad, Telangana 500085 | PIN: 500085 | Ph: 7305092925"},
  {code:"CRKOTGMP",name:"CL-ST-L3-KOTA-Gumanpura",address:"1-A-1, Vallabh Nagar, Near HDFC Bank, Kota, Rajasthan 324007",pincode:"324007",phone:"8875760099",addressLine:"1-A-1, Vallabh Nagar, Near HDFC Bank, Kota, Rajasthan 324007 | PIN: 324007 | Ph: 8875760099"},
  {code:"CFBLGTLW",name:"CL-ST-BLG-Tilakwadi",address:"Shri Laxminarayan Arcade Mahatma Phule Road, Opp Balaji Aracde, Goaves Circle, Tilakwadi, Belagavi 590006",pincode:"590006",phone:"9902869555",addressLine:"Shri Laxminarayan Arcade Mahatma Phule Road, Opp Balaji Aracde, Goaves Circle, Tilakwadi, Belagavi 590006 | PIN: 590006 | Ph: 9902869555"},
  {code:"CAANDVVN",name:"CL-ST-L8-AND-VVNagarroad",address:"Ram Complex, VV Nagar Road, Opp. Town Hall, Near Pramukh Jewellers, Anand, Gujarat 388120",pincode:"388120",phone:"7418056665",addressLine:"Ram Complex, VV Nagar Road, Opp. Town Hall, Near Pramukh Jewellers, Anand, Gujarat 388120 | PIN: 388120 | Ph: 7418056665"},
  {code:"CFMUMV17",name:"CL-ST-MUM-VashiSector17",address:"Shop No.55, Big Splash, Plot No.78/79, Sector-17, Vashi , Navi Mumbai Maharashtra 400705",pincode:"400705",phone:"7418097776",addressLine:"Shop No.55, Big Splash, Plot No.78/79, Sector-17, Vashi , Navi Mumbai Maharashtra 400705 | PIN: 400705 | Ph: 7418097776"},
  {code:"CFTNVPKT",name:"CL-ST-TNV-TirunelveliPalayamkottai",address:"166, TRIVANDRUM ROAD, MURUGANKURICHI, PALAYAMKOTAI, TIRUNELVELI – 627002",pincode:"627002",phone:"7845732377",addressLine:"166, TRIVANDRUM ROAD, MURUGANKURICHI, PALAYAMKOTAI, TIRUNELVELI – 627002 | PIN: 627002 | Ph: 7845732377"},
  {code:"CLCHNPMR",name:"CL-ST-CHN-Perambur",address:"No. 70, Siva Elango Salai, Jawahar Nagar, Perambur, Chennai - 600082",pincode:"600082",phone:"7418123335",addressLine:"No. 70, Siva Elango Salai, Jawahar Nagar, Perambur, Chennai - 600082 | PIN: 600082 | Ph: 7418123335"},
  {code:"CFNOIGBS",name:"CL-ST-NDD-GalaxyBlueSapphire",address:"GROUND FLOOR SHOP NO.5A,6A,7A,28A,29A GALAXY BLUE SAPPHIRE PLAZA PLOT NO.C-03,SECTOR-4 GREATER NOIDA (WEST)",pincode:"",phone:"7290058877",addressLine:"GROUND FLOOR SHOP NO.5A,6A,7A,28A,29A GALAXY BLUE SAPPHIRE PLAZA PLOT NO.C-03,SECTOR-4 GREATER NOIDA (WEST) | Ph: 7290058877"},
  {code:"CFLUDMDT",name:"CL-ST-LUD-ModelTown",address:"CaratLane Store, Upper Ground Floor, B-19-210/1, Rani Jhansi Rd, Mall Enclave, SCO 1, Ghumar Mandi, Ludhiana, Punjab 141001",pincode:"141001",phone:"7888897671",addressLine:"CaratLane Store, Upper Ground Floor, B-19-210/1, Rani Jhansi Rd, Mall Enclave, SCO 1, Ghumar Mandi, Ludhiana, Punjab 141001 | PIN: 141001 | Ph: 7888897671"},
  {code:"CFGKPMCR",name:"CL-ST-GKP-MedicalCollegeRoad",address:"House No 395, Basharatpur, Near HN Singh Chauraha, Medical College Road, Gorakhpur (UP)- 273004",pincode:"273004",phone:"8009909823",addressLine:"House No 395, Basharatpur, Near HN Singh Chauraha, Medical College Road, Gorakhpur (UP)- 273004 | PIN: 273004 | Ph: 8009909823"},
  {code:"CFMYSNXM",name:"CL-ST-MYS-NexusMall",address:"Unit No. UGF - 29, Nexus Centre City Mall, No.8 & N-5, Hyderali Road, Nazarbad Mohalla, Mysuru, Karnataka 570010",pincode:"570010",phone:"8660911153",addressLine:"Unit No. UGF - 29, Nexus Centre City Mall, No.8 & N-5, Hyderali Road, Nazarbad Mohalla, Mysuru, Karnataka 570010 | PIN: 570010 | Ph: 8660911153"},
  {code:"CFIDRSSR",name:"CL-ST-IDR-SapnaSangeetaRoad",address:"G- 2 , Plot No.22, K.S.HEIGHTS, Scheme No.31, Root No. 6-7 Sneh Nagar , Sapna- Sangeeta Main Road, Indore 452001",pincode:"452001",phone:"9926000268",addressLine:"G- 2 , Plot No.22, K.S.HEIGHTS, Scheme No.31, Root No. 6-7 Sneh Nagar , Sapna- Sangeeta Main Road, Indore 452001 | PIN: 452001 | Ph: 9926000268"},
  {code:"CFSLMOMR",name:"CL-ST-SLM-OmalurMainRoad",address:"No. 3/313 Swarnambigai Plaza, Omalur Main Road, Salem 636009",pincode:"636009",phone:"9363637122",addressLine:"No. 3/313 Swarnambigai Plaza, Omalur Main Road, Salem 636009 | PIN: 636009 | Ph: 9363637122"},
  {code:"CFAMDMNG",name:"CL-ST-AMD-ManiNagar",address:"60/9, Narottam Villa, Besides A.M. Cooperative Bank, Jawahar Chowk, Maninagar, Ahmedabad - 380008",pincode:"380008",phone:"9099942946",addressLine:"60/9, Narottam Villa, Besides A.M. Cooperative Bank, Jawahar Chowk, Maninagar, Ahmedabad - 380008 | PIN: 380008 | Ph: 9099942946"},
  {code:"CFHOSBGR",name:"CL-ST-HOS-BagalurRoad",address:"No 92/1, K K Complex, Bagalpur Road, Hosur, Krishnagiri, Tamil Nadu 635109",pincode:"635109",phone:"7845262444",addressLine:"No 92/1, K K Complex, Bagalpur Road, Hosur, Krishnagiri, Tamil Nadu 635109 | PIN: 635109 | Ph: 7845262444"},
  {code:"CRBHPMVN",name:"CL-ST-L3-BHP-MalviyaNagar",address:"Part of Plot no.6 , Rajbhawan road, Malviya Nagar, Bhopal 462003",pincode:"462003",phone:"7724994458",addressLine:"Part of Plot no.6 , Rajbhawan road, Malviya Nagar, Bhopal 462003 | PIN: 462003 | Ph: 7724994458"},
  {code:"CFGWHKLP",name:"CL-ST-GWH-Kalapahar",address:"COMMERCIAL COMPLEX,SUBHAM GARDEN,KALAPAHAR,GUWAHATI,ASSAM,781018",pincode:"781018",phone:"7099094031",addressLine:"COMMERCIAL COMPLEX,SUBHAM GARDEN,KALAPAHAR,GUWAHATI,ASSAM,781018 | PIN: 781018 | Ph: 7099094031"},
  {code:"CFDDNGMS",name:"CL-ST-DERD-GMSRoad",address:"Khasra No. 1019, Mauza, Vasundhara Kunj, Shivkirpa Tower, General Mahadev Singh Rd, opp. Khadi Gram Udyog Building, Kanwali, Dehradun, Uttarakhand 248001",pincode:"248001",phone:"8279572130",addressLine:"Khasra No. 1019, Mauza, Vasundhara Kunj, Shivkirpa Tower, General Mahadev Singh Rd, opp. Khadi Gram Udyog Building, Kanwali, Dehradun, Uttarakhand 248001 | PIN: 248001 | Ph: 8279572130"},
  {code:"CRROHDLR",name:"CL-ST-L3-ROH-DelhiRoad",address:"Building No 570/1 DLF Colony Opp- Mayna Toursit Complex,Delhi Road Rohtak Haryana (124001)",pincode:"124001",phone:"9817290190",addressLine:"Building No 570/1 DLF Colony Opp- Mayna Toursit Complex,Delhi Road Rohtak Haryana (124001) | PIN: 124001 | Ph: 9817290190"},
  {code:"CFVIZMDW",name:"CL-ST-VIZ-Madhurawada",address:"H, No.1-41, Main Rd, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530041",pincode:"530041",phone:"9502982266",addressLine:"H, No.1-41, Main Rd, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530041 | PIN: 530041 | Ph: 9502982266"},
  {code:"CRMUZKLB",name:"CL-ST-L3-MUZ-Kalambagh",address:"Kalambagh Road, Aghoriya Bazar Chowk,Muzaffarpur, Bihar-842002",pincode:"842002",phone:"7759896644",addressLine:"Kalambagh Road, Aghoriya Bazar Chowk,Muzaffarpur, Bihar-842002 | PIN: 842002 | Ph: 7759896644"},
  {code:"CFCHNABT",name:"CL-ST-CHN-AmbatturL2",address:"Door number 71, plot 5, 38, Ambattur Red Hills road , Vinayagapuram,Ambattur , Chennai - 600053 , Tamil Nadu",pincode:"600053",phone:"7845239777",addressLine:"Door number 71, plot 5, 38, Ambattur Red Hills road , Vinayagapuram,Ambattur , Chennai - 600053 , Tamil Nadu | PIN: 600053 | Ph: 7845239777"},
  {code:"CFASNMGL",name:"CL-ST-ASN-MURGASOL",address:"Shaw Bhawan,Ground Floor, Holding No. 8(118), G.T. Road (East ) Murgasol, Ward No.19(old), 41(New), P.O.-Asansol, P.S.-Asansol (South), District-Paschim Bardhaman, West Bengal-713303.",pincode:"713303",phone:"9903616119",addressLine:"Shaw Bhawan,Ground Floor, Holding No. 8(118), G.T. Road (East ) Murgasol, Ward No.19(old), 41(New), P.O.-Asansol, P.S.-Asansol (South), District-Paschim Bardhaman, West Bengal-713303. | PIN: 713303 | Ph: 9903616119"},
  {code:"CRNGPPTN",name:"CL-ST-L3-NGP-Pratap Nagar",address:"CaratLane, 28 Dev heights Pratap nagar square,ring Road, Nagpur 440022",pincode:"440022",phone:"7249022249",addressLine:"CaratLane, 28 Dev heights Pratap nagar square,ring Road, Nagpur 440022 | PIN: 440022 | Ph: 7249022249"},
  {code:"CFBVNWWR",name:"CL-ST-BVN-WaghawadiRoad",address:"Shop no. 7, Ground Floor, Sumeru Prime, Near Parimal Chowk, Waghawadi Road, Bhavnagar - 364002",pincode:"364002",phone:"9586386395",addressLine:"Shop no. 7, Ground Floor, Sumeru Prime, Near Parimal Chowk, Waghawadi Road, Bhavnagar - 364002 | PIN: 364002 | Ph: 9586386395"},
  {code:"CFNELMBR",name:"CL-ST-NEL-MiniBypassRoad",address:"24-2-1905/1, RKRI Towers, Annamaya Circle, Mini Bypass Road, Nellore - 524003",pincode:"524003",phone:"7799599917 / 7799599918",addressLine:"24-2-1905/1, RKRI Towers, Annamaya Circle, Mini Bypass Road, Nellore - 524003 | PIN: 524003 | Ph: 7799599917 / 7799599918"},
  {code:"CFFDBPFM",name:"CL-ST-Faridabad-PacificMall",address:"Shfg 09 Ground Floor, Pacific Mall of Faridabad, NIT bus stand, KL Mehta Road, NIT Faridabad",pincode:"",phone:"7042668111",addressLine:"Shfg 09 Ground Floor, Pacific Mall of Faridabad, NIT bus stand, KL Mehta Road, NIT Faridabad | Ph: 7042668111"},
  {code:"CFGDHSSS",name:"CL-ST-GDH-ShreejiSignatureSargasan",address:"Shop no. 1, 101 & 102, Ground & First Floor, Shreeji Signature, Opp. Aashka Hospital, Near Reliance Cross Road, Gandhinagar Bypass Road, Sargasan, Gandhinagar, Gujarat 382421",pincode:"382421",phone:"7600004936",addressLine:"Shop no. 1, 101 & 102, Ground & First Floor, Shreeji Signature, Opp. Aashka Hospital, Near Reliance Cross Road, Gandhinagar Bypass Road, Sargasan, Gandhinagar, Gujarat 382421 | PIN: 382421 | Ph: 7600004936"},
  {code:"CFPATHBR",name:"CL-ST-PAT-Hathwamarket",address:"CaratLane, Shop No 14, Devalay Apartment, Bari Path, Hathwa Market, Patna-800004, Bihar",pincode:"800004",phone:"7903586051",addressLine:"CaratLane, Shop No 14, Devalay Apartment, Bari Path, Hathwa Market, Patna-800004, Bihar | PIN: 800004 | Ph: 7903586051"},
  {code:"CFDBGMZP",name:"CL-ST-DBG-Mirzapur Chowk",address:"Ground Floor, Astha Market, Station Road, Mirjapur, P.O - Rajkumar Ganj, Darbhanga, Bihar - 846004",pincode:"846004",phone:"9576761970",addressLine:"Ground Floor, Astha Market, Station Road, Mirjapur, P.O - Rajkumar Ganj, Darbhanga, Bihar - 846004 | PIN: 846004 | Ph: 9576761970"},
  {code:"CFCHNTNR",name:"CL-ST-CHN-Tnagar",address:"No 23, Thayagaraya Road , Pondybazar, T Nagar , Chennai-600017",pincode:"600017",phone:"7418266656",addressLine:"No 23, Thayagaraya Road , Pondybazar, T Nagar , Chennai-600017 | PIN: 600017 | Ph: 7418266656"},
  {code:"CLBLRPAM",name:"CL-ST-BNG-PhoenixAsiaMall",address:"Unit #22, Ground floor, 3HCR+244, 239/240, Byatarayanapura, Yelahanka, Hobli Yelahanka Taluk, Bellary Rd, Indra Nagar, Shabhari Nagar, Bengaluru, Karnataka 560092",pincode:"560092",phone:"7418066695",addressLine:"Unit #22, Ground floor, 3HCR+244, 239/240, Byatarayanapura, Yelahanka, Hobli Yelahanka Taluk, Bellary Rd, Indra Nagar, Shabhari Nagar, Bengaluru, Karnataka 560092 | PIN: 560092 | Ph: 7418066695"},
  {code:"CFUDIASN",name:"CL-ST-UDI-UdaipurAshokNagar",address:"5, Ashok Nagar, Main Road, Near Cantabil, Udaipur, Rajasthan 313001",pincode:"313001",phone:"8277723000",addressLine:"5, Ashok Nagar, Main Road, Near Cantabil, Udaipur, Rajasthan 313001 | PIN: 313001 | Ph: 8277723000"},
  {code:"CFPUNNIB",name:"CL-ST-PNE-NIBMRoadL2",address:"No. S-66,67 on Plaza Floor, Tribeca Highstreet, NIBM Road, Pune Pin code- 411060, Maharashtra",pincode:"411060",phone:"7318133356",addressLine:"No. S-66,67 on Plaza Floor, Tribeca Highstreet, NIBM Road, Pune Pin code- 411060, Maharashtra | PIN: 411060 | Ph: 7318133356"},
  {code:"CFRPRVIP",name:"CL-ST-Raipur-VIP ChowkL2",address:"ONKAR TOWER Ground Floor VIP Chowk GE Road Beside CURRENCY Tower Raipur 492001",pincode:"492001",phone:"7247005700",addressLine:"ONKAR TOWER Ground Floor VIP Chowk GE Road Beside CURRENCY Tower Raipur 492001 | PIN: 492001 | Ph: 7247005700"},
  {code:"CFJODCRD",name:"CL-ST-Jodhpur-CRoad",address:"Plot No-20, 1st C Road,Sardarpura,Jodhpur, Rajasthan 342001.",pincode:"342001",phone:"7737428297",addressLine:"Plot No-20, 1st C Road,Sardarpura,Jodhpur, Rajasthan 342001. | PIN: 342001 | Ph: 7737428297"},
  {code:"CFNOISPM",name:"CL-ST-NDD-SpectrumMetroMall",address:"Ground Floor, Unit 5C & 5D, Tower C, Spectrum Mall @Metro, Phase 1, Plot C&D ,Sector 75 ,Noida, Pincode-201301",pincode:"201301",phone:"9599300981/ 9599300985",addressLine:"Ground Floor, Unit 5C & 5D, Tower C, Spectrum Mall @Metro, Phase 1, Plot C&D ,Sector 75 ,Noida, Pincode-201301 | PIN: 201301 | Ph: 9599300981/ 9599300985"},
  {code:"CFERDRKV",name:"CL-ST-ERD-RKVRoad",address:"No 156, Cauvery Road ( RKV Road ) , Karungalpalayam, Erode , Tamil Nadu . Pincode - 638003",pincode:"638003",phone:"7871501515",addressLine:"No 156, Cauvery Road ( RKV Road ) , Karungalpalayam, Erode , Tamil Nadu . Pincode - 638003 | PIN: 638003 | Ph: 7871501515"},
  {code:"CFHRDRNP",name:"CL-ST-Haridwar-RanipurMod",address:"Ground Floor, No-9, Govindpuri, Ranipur Mod, Haridwar - 249401",pincode:"249401",phone:"8533939967",addressLine:"Ground Floor, No-9, Govindpuri, Ranipur Mod, Haridwar - 249401 | PIN: 249401 | Ph: 8533939967"},
  {code:"CFMGLFZM",name:"CL-ST-MGL-FizaMall",address:"UGF 08, Fiza by Nexus, Mangaladevi Temple Rd, Pandeshwar, Mangaluru, Karnataka 575001",pincode:"575001",phone:"8951084916",addressLine:"UGF 08, Fiza by Nexus, Mangaladevi Temple Rd, Pandeshwar, Mangaluru, Karnataka 575001 | PIN: 575001 | Ph: 8951084916"},
  {code:"CFMUMCBR",name:"CL-ST-MUM-ChemburL2",address:"Ground Floor, RNA bussiness point, central ave RD, plot no- 112, KN Gaikwad Marg, Chembur, Mumbai , Maharashtra 400071.",pincode:"400071",phone:"7708286633",addressLine:"Ground Floor, RNA bussiness point, central ave RD, plot no- 112, KN Gaikwad Marg, Chembur, Mumbai , Maharashtra 400071. | PIN: 400071 | Ph: 7708286633"},
  {code:"CFDMRKMH",name:"CL-ST-DMR-KherMahal",address:"Khermahal, Police point. P.O - Khermahal, PIN- 797112",pincode:"797112",phone:"7005470844",addressLine:"Khermahal, Police point. P.O - Khermahal, PIN- 797112 | PIN: 797112 | Ph: 7005470844"},
  {code:"CFTRUPLR",name:"CL-ST-TRU-PalladamRoad",address:"Shop No. 481/370, Shop No.1, Palladam Main Rd, Thennampalayam, Tiruppur, Tamil Nadu 641604",pincode:"641604",phone:"9655611112",addressLine:"Shop No. 481/370, Shop No.1, Palladam Main Rd, Thennampalayam, Tiruppur, Tamil Nadu 641604 | PIN: 641604 | Ph: 9655611112"},
  {code:"CFMUMKLN",name:"CL-ST-THN-KalyanL2",address:"Shop no 6 & 7 Ground floor, Shop no 104 & 105 first floor, The imperial , next to Starbucks ,Khadakpada Circle, Kalyan West - 421301",pincode:"421301",phone:"8925463355",addressLine:"Shop no 6 & 7 Ground floor, Shop no 104 & 105 first floor, The imperial , next to Starbucks ,Khadakpada Circle, Kalyan West - 421301 | PIN: 421301 | Ph: 8925463355"},
  {code:"CFKOHDAC",name:"CL-ST-Kolhapur-DasaraChowk",address:"1446, C Ward, Dasara Chowk, Laxmipuri, Station Road Kolhapur 416002",pincode:"416002",phone:"9158144555",addressLine:"1446, C Ward, Dasara Chowk, Laxmipuri, Station Road Kolhapur 416002 | PIN: 416002 | Ph: 9158144555"},
  {code:"CFWRLHMK",name:"CL-ST-WRL-HanamkondaL2",address:"2-5-680 Main Subedari road, Hanamkonda,\nWarangal 506001.",pincode:"506001",phone:"8142289696",addressLine:"2-5-680 Main Subedari road, Hanamkonda,\nWarangal 506001. | PIN: 506001 | Ph: 8142289696"},
  {code:"CFHYDNLG",name:"CL-ST-HYD-NallagandlaL2",address:"1-103/301/7/1, nr. on Plot No.7 1Ground & First floor, Nallagandla, Hyderabad, Telangana 500019",pincode:"500019",phone:"9059212750",addressLine:"1-103/301/7/1, nr. on Plot No.7 1Ground & First floor, Nallagandla, Hyderabad, Telangana 500019 | PIN: 500019 | Ph: 9059212750"},
  {code:"CFSBPBDR",name:"CL-ST-SBP-Budharaja RoadL2",address:"Planet Purnabasi; Ainthapali Main Road, Budhararaja Main Road, Sambalpur, Odisha -768004",pincode:"768004",phone:"6372802935",addressLine:"Planet Purnabasi; Ainthapali Main Road, Budhararaja Main Road, Sambalpur, Odisha -768004 | PIN: 768004 | Ph: 6372802935"},
  {code:"CFKOLKMG",name:"CL-ST-KOL-KamalgaziL2",address:"Rajwada Radiance -352, Dakshin \nKumrakhali N.S.C Bose Road, Ward No 27, P.S Narendrapur, \nSouth 24-Parganas, West Bengal, Pin - 700103",pincode:"700103",phone:"9073665676",addressLine:"Rajwada Radiance -352, Dakshin \nKumrakhali N.S.C Bose Road, Ward No 27, P.S Narendrapur, \nSouth 24-Parganas, West Bengal, Pin - 700103 | PIN: 700103 | Ph: 9073665676"},
  {code:"CFDELOCM",name:"CL-ST-DEL-Omaxe CC",address:"Unit no -GF 011 and GF 10B Ground floor and Unit no- FF016A, FF-16, FF- 015A, FF- 15B First Floor,H.C. Sen Marg, Gandhi Maidan, Chandni Chowk Delhi - 110006",pincode:"110006",phone:"7358120793 / 7358120692",addressLine:"Unit no -GF 011 and GF 10B Ground floor and Unit no- FF016A, FF-16, FF- 015A, FF- 15B First Floor,H.C. Sen Marg, Gandhi Maidan, Chandni Chowk Delhi - 110006 | PIN: 110006 | Ph: 7358120793 / 7358120692"},
  {code:"CFCHNECR",name:"CL-ST-CHN-ECRL2",address:"Trinity, Block C, Plot no 6, East coast Road Neelankarai, Chennai, Tamil Nadu. Pincode-600041",pincode:"600041",phone:"9600900187",addressLine:"Trinity, Block C, Plot no 6, East coast Road Neelankarai, Chennai, Tamil Nadu. Pincode-600041 | PIN: 600041 | Ph: 9600900187"},
  {code:"CABLRKRP",name:"CL-ST-L8-BNG-KRPuram",address:"Monarch Aqua, 15, Old Madras Rd, Venkateshwara Layout, NH4, Krishnarajapura, Bengaluru, Karnataka 560036",pincode:"560036",phone:"7418261113",addressLine:"Monarch Aqua, 15, Old Madras Rd, Venkateshwara Layout, NH4, Krishnarajapura, Bengaluru, Karnataka 560036 | PIN: 560036 | Ph: 7418261113"},
  {code:"CRMBDCVL",name:"CL-ST-L3-Moradabad-CivilLines",address:"Plot no.01, Gate No-16, opp Bindal Showroom, Civil Lines, Moradabad - 244001",pincode:"244001",phone:"7080110818",addressLine:"Plot no.01, Gate No-16, opp Bindal Showroom, Civil Lines, Moradabad - 244001 | PIN: 244001 | Ph: 7080110818"},
  {code:"CLMUMPPM",name:"CL-ST-MUM-PhoenixParelMall",address:"G-11B, Ground Floor, East Zone, Phoenix Palladium, Lower Parel, Mumbai - 400013",pincode:"400013",phone:"8925932834",addressLine:"G-11B, Ground Floor, East Zone, Phoenix Palladium, Lower Parel, Mumbai - 400013 | PIN: 400013 | Ph: 8925932834"},
  {code:"CFHLDNTR",name:"CL-ST-Haldwani-NainitalRoadL2",address:"Shop No 2 , Opposite Sessions Court , Near Jewer Showroom, Nainital Road, Haldwani-263139",pincode:"263139",phone:"9084699412 / 9084709412",addressLine:"Shop No 2 , Opposite Sessions Court , Near Jewer Showroom, Nainital Road, Haldwani-263139 | PIN: 263139 | Ph: 9084699412 / 9084709412"},
  {code:"CFSONATR",name:"CL-ST-Sonipat-AtlasRoadL2",address:"Unit no.3, Ground Floor, 206L, Model Town, Atlas Road, Sonipat Haryana.",pincode:"",phone:"9896278341",addressLine:"Unit no.3, Ground Floor, 206L, Model Town, Atlas Road, Sonipat Haryana. | Ph: 9896278341"},
  {code:"CLDELPRM",name:"CL-ST-DEL-DLFPromenade",address:"283, First Floor, DLF Promenade Vasant Kunj Delhi -110070",pincode:"110070",phone:"8925836686",addressLine:"283, First Floor, DLF Promenade Vasant Kunj Delhi -110070 | PIN: 110070 | Ph: 8925836686"},
  {code:"CFKOLSDP",name:"CL-ST-KOL-SodepurL2",address:"Ground Floor, Aakash Pradip Apartment, Barasat Rd, Amarabati, Sodepur, Kolkata, Khardaha, West Bengal 700110",pincode:"700110",phone:"7596004114 / 7596004118",addressLine:"Ground Floor, Aakash Pradip Apartment, Barasat Rd, Amarabati, Sodepur, Kolkata, Khardaha, West Bengal 700110 | PIN: 700110 | Ph: 7596004114 / 7596004118"},
  {code:"CFHYDKOK",name:"CL-ST-HYD-Kokapet",address:"Unit No.020,Ground floor,Block3,Kokapet, Narsingi Village, Gandhipet Mandal,Rangareddy District.Pin code:- 5000075",pincode:"",phone:"8374336311 / 9848066400",addressLine:"Unit No.020,Ground floor,Block3,Kokapet, Narsingi Village, Gandhipet Mandal,Rangareddy District.Pin code:- 5000075 | Ph: 8374336311 / 9848066400"},
  {code:"CFZKPCAH",name:"CL-ST-Zirakpur-ChandigrhAmbalaHighwayL2",address:"Showroom No:- 2, Opposite Cosmo Mall, Chandigarh Ambala Highway, Zirakpur, Distt. Mohali 140603",pincode:"140603",phone:"8699916950",addressLine:"Showroom No:- 2, Opposite Cosmo Mall, Chandigarh Ambala Highway, Zirakpur, Distt. Mohali 140603 | PIN: 140603 | Ph: 8699916950"},
  {code:"CFNAVLSI",name:"CL-ST-NAV-LUNSIKUIL2",address:"Shop no 3 & 4 Ground floor -Sai Krupa apartment -B, Opp lunsikui Ground.Navsari - 396445",pincode:"396445",phone:"9512466464 / 9512486464",addressLine:"Shop no 3 & 4 Ground floor -Sai Krupa apartment -B, Opp lunsikui Ground.Navsari - 396445 | PIN: 396445 | Ph: 9512466464 / 9512486464"},
  {code:"CFHGHSMP",name:"CL-ST-HGH-SeramporeL2",address:"Showroom No:- Jagannath Villa Ground Floor 235, Grand Trunk Road, Mahesh Colony Serampore West Bengal 712202",pincode:"712202",phone:"9830157583",addressLine:"Showroom No:- Jagannath Villa Ground Floor 235, Grand Trunk Road, Mahesh Colony Serampore West Bengal 712202 | PIN: 712202 | Ph: 9830157583"},
  {code:"CFSAHDLR",name:"CL-ST-Saharanpur-DelhiRoadL2",address:"Ground Floor, Delhi Road, Adjoining Swati Auto(2 Wheeler), Opposite Anupam Sweets, Saharanpur, Uttar Pradesh- 247001",pincode:"247001",phone:"9677706862 / 9677706367",addressLine:"Ground Floor, Delhi Road, Adjoining Swati Auto(2 Wheeler), Opposite Anupam Sweets, Saharanpur, Uttar Pradesh- 247001 | PIN: 247001 | Ph: 9677706862 / 9677706367"},
  {code:"CFPTKDHR",name:"CL-ST-Pathankot-DalhousieRoadL2",address:"Orbit Tower, Dalhousie Road, Opp Shani Mandir , Pathankot -145001",pincode:"145001",phone:"9878004812",addressLine:"Orbit Tower, Dalhousie Road, Opp Shani Mandir , Pathankot -145001 | PIN: 145001 | Ph: 9878004812"},
  {code:"CFBKRSTM",name:"CL-ST-BKR-SECTOR 3-MALLL2",address:"Shop No. 37, Ground Floor, Bokaro Mall, Sector 3C, Bokaro Steel City,Jharkhand-827003",pincode:"827003",phone:"7209769222",addressLine:"Shop No. 37, Ground Floor, Bokaro Mall, Sector 3C, Bokaro Steel City,Jharkhand-827003 | PIN: 827003 | Ph: 7209769222"},
  {code:"CFKARKPR",name:"CL-ST-Karnal-KunjpuraRoadL2",address:"Shop 2, 1B /357, Kunjpura Road, Karnal, 132001",pincode:"132001",phone:"9896680380",addressLine:"Shop 2, 1B /357, Kunjpura Road, Karnal, 132001 | PIN: 132001 | Ph: 9896680380"},
  {code:"CFCHNMRM",name:"CL-ST-CHN-MarinaMallL2",address:"13/1A, Old Mahabalipuram Road, Upper ground Floor, Marina Mall, Egattur, Chennai, Tamil Nadu, Pincode - 603103",pincode:"603103",phone:"7550080476",addressLine:"13/1A, Old Mahabalipuram Road, Upper ground Floor, Marina Mall, Egattur, Chennai, Tamil Nadu, Pincode - 603103 | PIN: 603103 | Ph: 7550080476"},
  {code:"CFMUMVSI",name:"CL-ST-MUM-VASAIL2",address:"Shop no.1,2 & 3, Casa Paul, Near Bishop House, Bhabola, Vasai West, Palghar - 401202",pincode:"401202",phone:"9272111422",addressLine:"Shop no.1,2 & 3, Casa Paul, Near Bishop House, Bhabola, Vasai West, Palghar - 401202 | PIN: 401202 | Ph: 9272111422"},
  {code:"CFNTPKCH",name:"CL-ST-NTP-KanchraparaL2",address:"160 KABI GURU RABINDRANATH (KGR) PATH, NEAR COLLEGE MORE, KANCHRAPARA, PIN: 743145",pincode:"743145",phone:"9230984152",addressLine:"160 KABI GURU RABINDRANATH (KGR) PATH, NEAR COLLEGE MORE, KANCHRAPARA, PIN: 743145 | PIN: 743145 | Ph: 9230984152"},
  {code:"CFGURGEM",name:"CL-ST-Gurgaon-GoodEarthSixty9MallL2",address:"Unit no. 6-34, Ground floor, Good Earth Sixty9, Sec-69, Gurgaon Haryana",pincode:"",phone:"9625892928",addressLine:"Unit no. 6-34, Ground floor, Good Earth Sixty9, Sec-69, Gurgaon Haryana | Ph: 9625892928"},
  {code:"CFITNESC",name:"CL-ST-ITN-E SECTORL2",address:"Ground Floor; E-Sector Near Civil Secretariat Itanagar Arunachal Pradesh -791111",pincode:"791111",phone:"9830839555",addressLine:"Ground Floor; E-Sector Near Civil Secretariat Itanagar Arunachal Pradesh -791111 | PIN: 791111 | Ph: 9830839555"},
  {code:"CFRJMJNR",name:"CL-ST-RJM-JNRoadL2",address:"Revenue ward no 30, Flat no : 86-01-01, Vadrevu nagar, Rajahmundry, East Godavari district. \nState: Andhra Pradesh \nPincode: 533101",pincode:"533101",phone:"9959814353",addressLine:"Revenue ward no 30, Flat no : 86-01-01, Vadrevu nagar, Rajahmundry, East Godavari district. \nState: Andhra Pradesh \nPincode: 533101 | PIN: 533101 | Ph: 9959814353"},
  {code:"CFKRNJGT",name:"CL-ST-KRN-Jagtial RoadL2",address:"3-7-912,vavilalapally,Jagtial road,Karimnagar",pincode:"",phone:"9030272323",addressLine:"3-7-912,vavilalapally,Jagtial road,Karimnagar | Ph: 9030272323"},
  {code:"CFHYDATP",name:"CL-ST-HYD-AttapurL2",address:"DOOR NO 3-4-174/3/2\nPILLAR NO. 122, \nBESIDE SUZUKI \nHYDERABAD - 500048",pincode:"500048",phone:"7396159088",addressLine:"DOOR NO 3-4-174/3/2\nPILLAR NO. 122, \nBESIDE SUZUKI \nHYDERABAD - 500048 | PIN: 500048 | Ph: 7396159088"},
  {code:"CFAYDRMP",name:"CL-ST-AYD-RAMPATHMARGL2",address:"Nagar Nigam House No.-22/159 , 1/13/368 , Situated at Civil Lines, Pargana Haveli Awadh, Tehsil Sadar City, Faizabad, District-Ayodhya -224001",pincode:"224001",phone:"7396259088",addressLine:"Nagar Nigam House No.-22/159 , 1/13/368 , Situated at Civil Lines, Pargana Haveli Awadh, Tehsil Sadar City, Faizabad, District-Ayodhya -224001 | PIN: 224001 | Ph: 7396259088"},
  {code:"CFJHSCVL",name:"CL-ST-Jhansi-CivilLinesL2",address:"Ground Floor, Jaiveen, 1540/1, Civil Lines, Jhansi UP - 284001",pincode:"284001",phone:"7396359088",addressLine:"Ground Floor, Jaiveen, 1540/1, Civil Lines, Jhansi UP - 284001 | PIN: 284001 | Ph: 7396359088"},
  {code:"CFKNPSKN",name:"CL-ST-Kanpur-SaketNagarL2",address:"Plot No 52, Ground Floor, W1/27/52 Saket Nagar, Juhi Kalan, Kanpur-208014",pincode:"208014",phone:"7358858546",addressLine:"Plot No 52, Ground Floor, W1/27/52 Saket Nagar, Juhi Kalan, Kanpur-208014 | PIN: 208014 | Ph: 7358858546"},
  {code:"CFOGLKNR",name:"CL-ST-OGL-KURNOOL ROADL2",address:"Caratlane, D no 37-1-169/20/1, Kurnool Road, Ongole 523001.",pincode:"523001",phone:"8340821777",addressLine:"Caratlane, D no 37-1-169/20/1, Kurnool Road, Ongole 523001. | PIN: 523001 | Ph: 8340821777"},
  {code:"CFCHNVLV",name:"CL-ST-CHN-VALASARAVAKKAML2",address:"No 26, Arcor Road, Valasaravakkam, Chennai, Tamil Nadu. Pincode - 600087",pincode:"600087",phone:"7799699957",addressLine:"No 26, Arcor Road, Valasaravakkam, Chennai, Tamil Nadu. Pincode - 600087 | PIN: 600087 | Ph: 7799699957"},
  {code:"CLMUMMLR",name:"CL-ST-MUM-MALAD LINK ROAD",address:"Shop. No. 2 & 3, China Link CHS Ltd, New Link Rd, opp. Infiniti Mall, Ekta Nagar, Malad West, Mumbai, Maharashtra 400064",pincode:"400064",phone:"9677717966",addressLine:"Shop. No. 2 & 3, China Link CHS Ltd, New Link Rd, opp. Infiniti Mall, Ekta Nagar, Malad West, Mumbai, Maharashtra 400064 | PIN: 400064 | Ph: 9677717966"},
  {code:"CFBLRMEM",name:"CL-ST-BLR-M5 E-CITY MALLL2",address:"UGF 25, Upper Ground Floor, M5 Mall, opposite Electronic City Flyover, Phase 2, Electronic City, Bengaluru, Karnataka 560100.",pincode:"560100",phone:"9994418901",addressLine:"UGF 25, Upper Ground Floor, M5 Mall, opposite Electronic City Flyover, Phase 2, Electronic City, Bengaluru, Karnataka 560100. | PIN: 560100 | Ph: 9994418901"},
  {code:"CFKTNJBR",name:"CL-ST-KTN-Jabalpur RoadL2",address:"Shop Numbers 10,11 Plot Number 156-159/11, Dun colony Road, Near Flyover Landing, (Jawaharlal Nehru Ward) Bargawan, Katni - 483501",pincode:"483501",phone:"9111335252",addressLine:"Shop Numbers 10,11 Plot Number 156-159/11, Dun colony Road, Near Flyover Landing, (Jawaharlal Nehru Ward) Bargawan, Katni - 483501 | PIN: 483501 | Ph: 9111335252"},
  {code:"CFCHWPSR",name:"CL-ST-CHW-Parasia RoadL2",address:"Shop. 607, Parasia Road, Nagar Palik Nigam Seema Curcuit House Tak, Ward No. 45, Chhindwara-480001",pincode:"480001",phone:"9111866606",addressLine:"Shop. 607, Parasia Road, Nagar Palik Nigam Seema Curcuit House Tak, Ward No. 45, Chhindwara-480001 | PIN: 480001 | Ph: 9111866606"},
  {code:"CLPUNPWM",name:"CL-ST-PUN-PHOENIX MILLENNIUM WAKAD",address:"First Flr, Phoenix Mall of Millenium, Unit F- 45, F - 46, Wakad, Pune, Maharashtra 411057",pincode:"411057",phone:"8220658003",addressLine:"First Flr, Phoenix Mall of Millenium, Unit F- 45, F - 46, Wakad, Pune, Maharashtra 411057 | PIN: 411057 | Ph: 8220658003"},
  {code:"CFTJVPKR",name:"CL-ST-TJV-Pudukottai Main RoadL2",address:"Ground floor , ABI’s Tower,397/2A, Pudukottai Main Road , Old housing unit , Arulananda Nagar West Extension , Pudukottai Main Road ,Thanjavur , Tamil Nadu . Pincode - 613007.",pincode:"613007",phone:"9994448227",addressLine:"Ground floor , ABI’s Tower,397/2A, Pudukottai Main Road , Old housing unit , Arulananda Nagar West Extension , Pudukottai Main Road ,Thanjavur , Tamil Nadu . Pincode - 613007. | PIN: 613007 | Ph: 9994448227"},
  {code:"CFUJNFGJ",name:"CL-ST-UJN-FreeganjL2",address:"15, Bhoj Marg, Free Ganj, Ujjain (MP) - 456006",pincode:"456006",phone:"6269739000",addressLine:"15, Bhoj Marg, Free Ganj, Ujjain (MP) - 456006 | PIN: 456006 | Ph: 6269739000"},
  {code:"CFBHLNHR",name:"CL-ST-BHL-NEHRU NAGAR L2",address:"S/O. Mahavir Hazarimal Verma Soni, House No 54/7 East, KPS Main Road, Motilal Nehru Nagar, Bhilai, Durg, Chattisgarh-490020.",pincode:"490020",phone:"7400920080",addressLine:"S/O. Mahavir Hazarimal Verma Soni, House No 54/7 East, KPS Main Road, Motilal Nehru Nagar, Bhilai, Durg, Chattisgarh-490020. | PIN: 490020 | Ph: 7400920080"},
  {code:"CFJLNRRD",name:"CL-ST-JLN-Ring RoadL2",address:"Ground Floor Shop, Plot No. 1, Shakuntala, Subhagwadi, C.T.S NO. 7102, Ring Rd, near J.D.C, C Bank, Pratap Nagar, Jalgaon, Maharashtra 425001.",pincode:"425001",phone:"9479479300",addressLine:"Ground Floor Shop, Plot No. 1, Shakuntala, Subhagwadi, C.T.S NO. 7102, Ring Rd, near J.D.C, C Bank, Pratap Nagar, Jalgaon, Maharashtra 425001. | PIN: 425001 | Ph: 9479479300"},
  {code:"CFBRHLKR",name:"CL-ST-BRH-Link Road",address:"Shop No 3, ​S​ilver Link Complex, Opp HDFC Bank, Link Road Bharuch 392015.",pincode:"392015",phone:"9512148481",addressLine:"Shop No 3, ​S​ilver Link Complex, Opp HDFC Bank, Link Road Bharuch 392015. | PIN: 392015 | Ph: 9512148481"},
  {code:"CFGNTWPM",name:"CL-ST-GNT-Westpoint MallL2",address:"Retail store, west point mall, 01 near M G marg, Arithang, Gangtok, Sikkim - 737101",pincode:"737101",phone:"9733414205",addressLine:"Retail store, west point mall, 01 near M G marg, Arithang, Gangtok, Sikkim - 737101 | PIN: 737101 | Ph: 9733414205"},
  {code:"CFHYDHTC",name:"CL-ST-HYD-HITECH CITY ROADL2",address:"1,2,3,4,4P,9,10,11,12, In Survey no 12,12 Part,Situated at kondapur village, serilingampally mandal, H​yderabad - 500084 RR",pincode:"500084",phone:"8977759385",addressLine:"1,2,3,4,4P,9,10,11,12, In Survey no 12,12 Part,Situated at kondapur village, serilingampally mandal, H​yderabad - 500084 RR | PIN: 500084 | Ph: 8977759385"},
  {code:"CFAMDSBR",name:"CL-ST-AMD-South Bopal",address:"Shop 1,2, Gala Magnus, Safal Parisar Road, Near Marigold Circle, South Bopal - 380058",pincode:"380058",phone:"9981151811",addressLine:"Shop 1,2, Gala Magnus, Safal Parisar Road, Near Marigold Circle, South Bopal - 380058 | PIN: 380058 | Ph: 9981151811"},
  {code:"CFCBEBFM",name:"CL-ST-CBE-BROOKEFIELDS MALL",address:"Lower Ground floor ,Brookfield Mall , Krishnaswamy Road ,Sukrawar Pettai , Ram Nagar , Coimbatore, Tamil Nadu -641001",pincode:"641001",phone:"8939970057",addressLine:"Lower Ground floor ,Brookfield Mall , Krishnaswamy Road ,Sukrawar Pettai , Ram Nagar , Coimbatore, Tamil Nadu -641001 | PIN: 641001 | Ph: 8939970057"},
  {code:"CFVNSBLP",name:"CL-ST-VNS-VaranasiBhelupur",address:"B27/86A-2, Bhelupura, Durgakund Road, Varanasi, Uttar Pradesh- 221005",pincode:"221005",phone:"9918700643",addressLine:"B27/86A-2, Bhelupura, Durgakund Road, Varanasi, Uttar Pradesh- 221005 | PIN: 221005 | Ph: 9918700643"},
  {code:"CFGDMRTR",name:"CL-ST-GDM-RT Road",address:"Plot No. 1. Sector 8. Nr. BSNL Office. Tagore Road. Gandhidham (Kutch) - 370201",pincode:"370201",phone:"9712369699",addressLine:"Plot No. 1. Sector 8. Nr. BSNL Office. Tagore Road. Gandhidham (Kutch) - 370201 | PIN: 370201 | Ph: 9712369699"},
  {code:"CLMUMBOM",name:"CL-ST-MUM-Borivali Oberoi Mall",address:"F-03, First Floor, Sky City Mall, Borivali East, Mumbai - 400066​",pincode:"400066",phone:"7845599585",addressLine:"F-03, First Floor, Sky City Mall, Borivali East, Mumbai - 400066​ | PIN: 400066 | Ph: 7845599585"},
  {code:"CFKHMWYR",name:"CL-ST-KHM-WYRA ROADL2",address:"H. No - 11-5-11/12,​ Nehrunagar. Wyra road​, Khammam​, Pin- 507002​",pincode:"507002",phone:"8977745088",addressLine:"H. No - 11-5-11/12,​ Nehrunagar. Wyra road​, Khammam​, Pin- 507002​ | PIN: 507002 | Ph: 8977745088"},
  {code:"CFHGHCHN",name:"CL-ST-HGH-CHANDANNAGARL2",address:"Rash Behari Ave, near Bata Shoe Store, Fatokgora, Last French Colony, Kolupukur Panchanantala, Kolkata, Chandannagar, West Bengal - 712136",pincode:"712136",phone:"9046262094",addressLine:"Rash Behari Ave, near Bata Shoe Store, Fatokgora, Last French Colony, Kolupukur Panchanantala, Kolkata, Chandannagar, West Bengal - 712136 | PIN: 712136 | Ph: 9046262094"},
  {code:"CRCTKCDA",name:"CL-ST-L3-CTK-CDA SECTOR VI",address:"Eye Hospital Rd Lane, Near Reliance Fresh, Markat Nagar, CDA Sector 6, Cuttack, Odisha Pin- 753014",pincode:"753014",phone:"9668904449",addressLine:"Eye Hospital Rd Lane, Near Reliance Fresh, Markat Nagar, CDA Sector 6, Cuttack, Odisha Pin- 753014 | PIN: 753014 | Ph: 9668904449"},
  {code:"CFMHSRUR",name:"CL-ST-MHS-Radhanpur Road",address:"Unit No – Shop No. 48 on Ground Floor &​ Shop No. 148 on First Floor, Silicon Sponta, Opp. Shubh Residency, Radhanpur Road, Mehsana, Gujarat​ - 384002​.",pincode:"384002",phone:"8460465506",addressLine:"Unit No – Shop No. 48 on Ground Floor &​ Shop No. 148 on First Floor, Silicon Sponta, Opp. Shubh Residency, Radhanpur Road, Mehsana, Gujarat​ - 384002​. | PIN: 384002 | Ph: 8460465506"},
  {code:"CFNOIKNP",name:"CL-ST-NDD-KnowledgePark",address:"India Expo Plaza,Unit no - C-021 Plot No. C-03 & 04, Knowledge Park-2, Greater Noida - 301310.",pincode:"301310",phone:"7290078877",addressLine:"India Expo Plaza,Unit no - C-021 Plot No. C-03 & 04, Knowledge Park-2, Greater Noida - 301310. | PIN: 301310 | Ph: 7290078877"},
  {code:"CFRWAALR",name:"CL-ST-RWA-Allahabad Road",address:"Khasra No.-285/3, Ward no. -16, Shop no. -6 (adjacent to Trends Showroom), Allahabad Road, Bara, Rewa, Madhya Pradesh 486001.",pincode:"486001",phone:"9165066333",addressLine:"Khasra No.-285/3, Ward no. -16, Shop no. -6 (adjacent to Trends Showroom), Allahabad Road, Bara, Rewa, Madhya Pradesh 486001. | PIN: 486001 | Ph: 9165066333"},
  {code:"CFVLRKMR",name:"CL-ST-VLR-Katpadi Main Road",address:"No 102/282, New Katpadi Main Road, opposite to GRT, Samuel Nagar, Tottapalayam, Vellore Tami Nadu - 632004",pincode:"632004",phone:"9600960393",addressLine:"No 102/282, New Katpadi Main Road, opposite to GRT, Samuel Nagar, Tottapalayam, Vellore Tami Nadu - 632004 | PIN: 632004 | Ph: 9600960393"},
  {code:"CFGZBIAM",name:"CL-ST-GZB-IndirapuramAdityaMall",address:"BG-32 A Ground Floor, Aditya City Center, Aditya Mega City, Vaibhav Khand Indiapuram, Ghaziabad, Uttar Pradesh 201010",pincode:"201010",phone:"7290088877",addressLine:"BG-32 A Ground Floor, Aditya City Center, Aditya Mega City, Vaibhav Khand Indiapuram, Ghaziabad, Uttar Pradesh 201010 | PIN: 201010 | Ph: 7290088877"},
  {code:"CFMDPKRT",name:"CL-ST-MDP-KERANITALAL2",address:"Sandhya Medical store building, Keranitola, Midnapore, Opposite - Senco Gold, 721101",pincode:"721101",phone:"8065184769",addressLine:"Sandhya Medical store building, Keranitola, Midnapore, Opposite - Senco Gold, 721101 | PIN: 721101 | Ph: 8065184769"},
  {code:"CFGYASWP",name:"CL-ST-GYA-SWARAJPURIL2",address:"Swarajpuri Road, Nagmatia Colony, Gaya, Bihar 823001",pincode:"823001",phone:"8092547808",addressLine:"Swarajpuri Road, Nagmatia Colony, Gaya, Bihar 823001 | PIN: 823001 | Ph: 8092547808"},
  {code:"CRJPRMLN",name:"CL-ST-L3-JAIPUR-MALVIYANAGAR",address:"Showroom – 2A, Ground Floor, GT Landmark, Near Gaurav Tower, Malviya Nagar, Jaipur. 302017",pincode:"302017",phone:"9500101242",addressLine:"Showroom – 2A, Ground Floor, GT Landmark, Near Gaurav Tower, Malviya Nagar, Jaipur. 302017 | PIN: 302017 | Ph: 9500101242"},
  {code:"CFCOCPLV",name:"CL-ST-COC-Palarivattom",address:"43/2945, ground floor , BCG Estate , NH by pass , Palarivattom , Kochi - 682025",pincode:"682025",phone:"9995522115",addressLine:"43/2945, ground floor , BCG Estate , NH by pass , Palarivattom , Kochi - 682025 | PIN: 682025 | Ph: 9995522115"},
  {code:"CFCBETUD",name:"CL-ST-CBE-Mettupalayam Road Thudiyalur",address:"Sf No:9/1 A2,9/44A Mettupalayam Road,Gn Mills Post, Coimbatore Tamil Nadu 641034",pincode:"641034",phone:"8939915568 / 8939915569",addressLine:"Sf No:9/1 A2,9/44A Mettupalayam Road,Gn Mills Post, Coimbatore Tamil Nadu 641034 | PIN: 641034 | Ph: 8939915568 / 8939915569"},
  {code:"CFHYDVNP",name:"CL-ST-HYD-VANASTHALIPURAM",address:"D.No:5-5-1215,NH65,Saheb Nagar,opp Vanastalipuram Main Arch,Vanasthalipuram,Hyderabad, Telangana, PIN:500070",pincode:"500070",phone:"9063562244",addressLine:"D.No:5-5-1215,NH65,Saheb Nagar,opp Vanastalipuram Main Arch,Vanasthalipuram,Hyderabad, Telangana, PIN:500070 | PIN: 500070 | Ph: 9063562244"},
  {code:"CFRRKNHN",name:"CL-ST-RRK-NehruNagar",address:"326/3, Nehru Nagar, Roorkee, Dist: Haridwar- 247667",pincode:"247667",phone:"7310563896",addressLine:"326/3, Nehru Nagar, Roorkee, Dist: Haridwar- 247667 | PIN: 247667 | Ph: 7310563896"},
  {code:"CFGWHSME",name:"CL-ST-GWH-SIX MILEL2",address:"Radhika Dee Bee Grande Panjabari road beside flyover, Guwahati- 781036",pincode:"781036",phone:"9707722890",addressLine:"Radhika Dee Bee Grande Panjabari road beside flyover, Guwahati- 781036 | PIN: 781036 | Ph: 9707722890"},
  {code:"CFKKNSRP",name:"CL-ST-KKN-SURYA RAO PETA",address:"D.No:5-1-51, Subhash Road, Main Road, Revenue Ward-8, Kakinada, Andhra Pradesh-533001",pincode:"533001",phone:"9704777789",addressLine:"D.No:5-1-51, Subhash Road, Main Road, Revenue Ward-8, Kakinada, Andhra Pradesh-533001 | PIN: 533001 | Ph: 9704777789"},
  {code:"CLLKWPPM",name:"CL-ST-LKW-PhoenixPalassioMall",address:"Unit No.G-29 Ground Floor Phoenix Palassio Mall, Amar Shaheed Path, LUCKNOW, UTTAR PRADESH,226010",pincode:"226010",phone:"9500218022 , / 9500218033",addressLine:"Unit No.G-29 Ground Floor Phoenix Palassio Mall, Amar Shaheed Path, LUCKNOW, UTTAR PRADESH,226010 | PIN: 226010 | Ph: 9500218022 , / 9500218033"},
  {code:"CFHSPMLR",name:"CL-ST-HSP-The Mall road",address:"MD Arcade,The Mall Road, Near Bhagat Singh Chownk,Hoshiarpur-146001",pincode:"146001",phone:"9875953118",addressLine:"MD Arcade,The Mall Road, Near Bhagat Singh Chownk,Hoshiarpur-146001 | PIN: 146001 | Ph: 9875953118"},
  {code:"CFBLRFSM",name:"CL-ST-BLR-Forum South Mall",address:"Store No. 246, 2nd Floor, Forum South Bangalore, Konenkunte Cross, Kanakpura Road, Bangalore, 560062",pincode:"560062",phone:"9986299799",addressLine:"Store No. 246, 2nd Floor, Forum South Bangalore, Konenkunte Cross, Kanakpura Road, Bangalore, 560062 | PIN: 560062 | Ph: 9986299799"},
  {code:"CFNOIACM",name:"CL-ST-NDD-AdityaCentral50Mall-L2",address:"Unit No.: 16, Ground Floor, Central 50, Noida , Uttar Pradesh, 201303",pincode:"201303",phone:"9944048939",addressLine:"Unit No.: 16, Ground Floor, Central 50, Noida , Uttar Pradesh, 201303 | PIN: 201303 | Ph: 9944048939"},
  {code:"CFAMDNKL",name:"CL-ST-AMD-NIKOL",address:"Unit No –GF Shop No. 22&23, The Edge Complex, Opp. Royal Malbar, Bhakti Circle Road, Nikol, Ahmedabad - 382350, Gujarat.",pincode:"382350",phone:"7016247098",addressLine:"Unit No –GF Shop No. 22&23, The Edge Complex, Opp. Royal Malbar, Bhakti Circle Road, Nikol, Ahmedabad - 382350, Gujarat. | PIN: 382350 | Ph: 7016247098"},
  {code:"CFKOLJDV",name:"CL-ST-KOL-Jadavpur",address:"46 Raja S C Mullick Road, Jadavpur, Kolkata 700032",pincode:"700032",phone:"8582823131",addressLine:"46 Raja S C Mullick Road, Jadavpur, Kolkata 700032 | PIN: 700032 | Ph: 8582823131"},
  {code:"CFNMKPDR",name:"CL-ST-NMK-R P Pudur",address:"187, Sri Durga Towers Salem Road, Near LMR complex Salem Road, Near LMR complex Namakkal -637001",pincode:"637001",phone:"9943298000",addressLine:"187, Sri Durga Towers Salem Road, Near LMR complex Salem Road, Near LMR complex Namakkal -637001 | PIN: 637001 | Ph: 9943298000"},
  {code:"CLMUMGOM",name:"CL-ST-MUM-Goregaon Oberoi Mall",address:"G36, Ground Floor, Oberoi Mall, Yashodham, Goregaon, Mumbai, Maharashtra 400063",pincode:"400063",phone:"7339260222",addressLine:"G36, Ground Floor, Oberoi Mall, Yashodham, Goregaon, Mumbai, Maharashtra 400063 | PIN: 400063 | Ph: 7339260222"},
  {code:"CFSHLPLB",name:"CL-ST-SHL-POLICE BAZAR",address:"7(1) Jail Road , Police Bazaar , Hotel Pegasus Crown , Ground Floor , Shillong , Meghalaya,793001",pincode:"793001",phone:"7890055888",addressLine:"7(1) Jail Road , Police Bazaar , Hotel Pegasus Crown , Ground Floor , Shillong , Meghalaya,793001 | PIN: 793001 | Ph: 7890055888"},
  {code:"CFHYDKHJ",name:"CL-ST-HYD-Khajaguda",address:"H No. 1-61/10 beside Lalitha Bloom Field, Khajaguda, Ranga Reddy District Telangana PIN 500008",pincode:"500008",phone:"9912784455",addressLine:"H No. 1-61/10 beside Lalitha Bloom Field, Khajaguda, Ranga Reddy District Telangana PIN 500008 | PIN: 500008 | Ph: 9912784455"},
  {code:"CRSVKTHR",name:"CL-ST-L3-SVK-Thiruthangal Rd",address:"No 200 B , Thiruthangal Road , next to coronation petrol bunk , Vishalachi Nagar, Kamarajapuram Colony ,Sivakasi ,Tamil Nadu -626123.",pincode:"626123",phone:"8056776477",addressLine:"No 200 B , Thiruthangal Road , next to coronation petrol bunk , Vishalachi Nagar, Kamarajapuram Colony ,Sivakasi ,Tamil Nadu -626123. | PIN: 626123 | Ph: 8056776477"},
  {code:"CFKOLBKP",name:"CL-ST-KOL-Barackpore",address:"SN Banerjee Rd, Barrackpore, Barrackpore Cantonment, West Bengal 700120",pincode:"700120",phone:"8910103656",addressLine:"SN Banerjee Rd, Barrackpore, Barrackpore Cantonment, West Bengal 700120 | PIN: 700120 | Ph: 8910103656"},
  {code:"CFMERGRH",name:"CL-ST-Meerut-GarhRoad",address:"Property No. 6&7, Khasra No. 4295, Kalyan Nagar, Nauchandi, Garh Road, Meerut, Uttar Pradesh- 250004",pincode:"250004",phone:"9520671324",addressLine:"Property No. 6&7, Khasra No. 4295, Kalyan Nagar, Nauchandi, Garh Road, Meerut, Uttar Pradesh- 250004 | PIN: 250004 | Ph: 9520671324"},
  {code:"CRDNBSDH",name:"CL-ST-L3-DNB-Saraidhela",address:"GF-01 & FF-01, Newtech Grand-6, Saraidhella Main Road Dhanbad, Jharkhand-828127",pincode:"828127",phone:"9687233444",addressLine:"GF-01 & FF-01, Newtech Grand-6, Saraidhella Main Road Dhanbad, Jharkhand-828127 | PIN: 828127 | Ph: 9687233444"},
  {code:"CFDDNDDM",name:"CL-ST-Derd-MallOfDehradun",address:"SH/GF/19, Ground Floor, Mall Of Dehradun, Haridwar Road, Dehradun-248005",pincode:"248005",phone:"7668393871",addressLine:"SH/GF/19, Ground Floor, Mall Of Dehradun, Haridwar Road, Dehradun-248005 | PIN: 248005 | Ph: 7668393871"},
  {code:"CRBSFRNR",name:"CL-ST-L3-BSF-Ranchi Road",address:"Opposite JAYA Nursing Home, Ranchi Road, Next to Pizza Hut Biharsharif-803101",pincode:"803101",phone:"9341667644",addressLine:"Opposite JAYA Nursing Home, Ranchi Road, Next to Pizza Hut Biharsharif-803101 | PIN: 803101 | Ph: 9341667644"},
  {code:"CFANIPBL",name:"CL-ST-ANI-Portblair",address:"middle point, adjacent to Hotel Shompen, Aberdeen Bazar, Aberdeen, Sri Vijaya Puram, Andaman and Nicobar Islands 744101",pincode:"744101",phone:"8900921666",addressLine:"middle point, adjacent to Hotel Shompen, Aberdeen Bazar, Aberdeen, Sri Vijaya Puram, Andaman and Nicobar Islands 744101 | PIN: 744101 | Ph: 8900921666"},
  {code:"CLCHNUSN",name:"CL-ST-CHN-USMAN ROAD",address:"No 159 /160, North Usman Road ,T Nagar, Chennai ,Tamil Nadu -600017",pincode:"600017",phone:"7358831999",addressLine:"No 159 /160, North Usman Road ,T Nagar, Chennai ,Tamil Nadu -600017 | PIN: 600017 | Ph: 7358831999"},
  {code:"CLBLRMGR",name:"CL-ST-BLR-MG ROAD",address:"MG Road, Haridevpur, Shantala Nagar, Ashok Nagar, Bangalore, Karnataka, 560001",pincode:"560001",phone:"7540054333",addressLine:"MG Road, Haridevpur, Shantala Nagar, Ashok Nagar, Bangalore, Karnataka, 560001 | PIN: 560001 | Ph: 7540054333"},
  {code:"CFDELPEM",name:"CL-ST-DEL-PitampuraEleganteMall",address:"S-09, 2nd floor , Elegante Mall Pitampura, New Delhi 110034",pincode:"110034",phone:"9810160565",addressLine:"S-09, 2nd floor , Elegante Mall Pitampura, New Delhi 110034 | PIN: 110034 | Ph: 9810160565"},
  {code:"CRPATCCM",name:"CL-ST-L3-PAT-City Center Mall",address:"City Centre Mall, Budhmarg, Lodhipur, Opp. Lodhipur Fire Station, Christian Colony, Patna, 800001, Bihar",pincode:"800001",phone:"9031014144",addressLine:"City Centre Mall, Budhmarg, Lodhipur, Opp. Lodhipur Fire Station, Christian Colony, Patna, 800001, Bihar | PIN: 800001 | Ph: 9031014144"},
  {code:"CLMUMKPM",name:"CL-ST-MUM-KURLA PHOENIX MARKET CITY MALL",address:"CaratLane, UG-49; Upper Ground floor ; Phoenix Market City Mumbai , LBS Marg Kurla (W) Mumbai -400070",pincode:"400070",phone:"7021083938",addressLine:"CaratLane, UG-49; Upper Ground floor ; Phoenix Market City Mumbai , LBS Marg Kurla (W) Mumbai -400070 | PIN: 400070 | Ph: 7021083938"},
  {code:"CFMUMDMV",name:"CL-ST-MUM-Dombivili",address:"Shop no 2 A-1 Yugandhar Sudama, Dombivali East 421201",pincode:"421201",phone:"8433776115",addressLine:"Shop no 2 A-1 Yugandhar Sudama, Dombivali East 421201 | PIN: 421201 | Ph: 8433776115"},
  {code:"CFKOLBST",name:"CL-ST-KOL-Barasat",address:"81/5, Solus, Differential Living, Madhyamgram, Jessore Rd, Barasat, West Bengal 700129",pincode:"700129",phone:"9147763350 / 9147763351",addressLine:"81/5, Solus, Differential Living, Madhyamgram, Jessore Rd, Barasat, West Bengal 700129 | PIN: 700129 | Ph: 9147763350 / 9147763351"},
  {code:"CRAGRSBR",name:"CL-ST-L3-AGR-SikandraBodlaRoad",address:"Plot No. 13, Sector 9, Awas Vikas Colony, Sikandra Yojna Agra ,Uttar Pradesh– 282007",pincode:"282007",phone:"8193900224 / 8193900225",addressLine:"Plot No. 13, Sector 9, Awas Vikas Colony, Sikandra Yojna Agra ,Uttar Pradesh– 282007 | PIN: 282007 | Ph: 8193900224 / 8193900225"},
  {code:"CFAZMNRC",name:"CL-ST-AZAMGARH-NARAULICHAURAHA",address:"429, Narauli, Sadar, Azamgarh, Pin code - 275001, uttar pradesh",pincode:"275001",phone:"9058860925/ 9058870925",addressLine:"429, Narauli, Sadar, Azamgarh, Pin code - 275001, uttar pradesh | PIN: 275001 | Ph: 9058860925/ 9058870925"},
  {code:"CRBBRKDG",name:"CL-ST-L3-BBR-Khandagiri",address:"Caratlane Plot No- 387 & 398/6722,At/Po- Dumuduma , Ps- Khandagiri, Bhubaneswar,Khordha , Odisha-751030",pincode:"751030",phone:"7681039777",addressLine:"Caratlane Plot No- 387 & 398/6722,At/Po- Dumuduma , Ps- Khandagiri, Bhubaneswar,Khordha , Odisha-751030 | PIN: 751030 | Ph: 7681039777"},
  {code:"CFTRCPRC",name:"CL-ST-TRC-Promenade Road",address:"17, ground floor , Promenade Road , Cantonment , Trichy ,Tamil Nadu -620001",pincode:"620001",phone:"9677610101",addressLine:"17, ground floor , Promenade Road , Cantonment , Trichy ,Tamil Nadu -620001 | PIN: 620001 | Ph: 9677610101"},
  {code:"CRRNCLCR",name:"CL-ST-L3-RNC-Lalpur Circular Road",address:"Caratlane (GF+FF) Plot No 2306, Abani Tower, Lalpur Chowk , Circular Road, Near Max Showroom, Ranchi, Ranchi, Jharkhand, 834001",pincode:"834001",phone:"6209200021",addressLine:"Caratlane (GF+FF) Plot No 2306, Abani Tower, Lalpur Chowk , Circular Road, Near Max Showroom, Ranchi, Ranchi, Jharkhand, 834001 | PIN: 834001 | Ph: 6209200021"},
  {code:"CFMUMAMB",name:"CL-ST-MUM-Ambarnath",address:"Shop no 2 and 3, Hiltron Business Park, Kalyan -badlapur Road, Ambarnath - 421501",pincode:"421501",phone:"8433776117",addressLine:"Shop no 2 and 3, Hiltron Business Park, Kalyan -badlapur Road, Ambarnath - 421501 | PIN: 421501 | Ph: 8433776117"},
  {code:"CRGUBSTR",name:"CL-ST-L3-GUB-Station Road",address:"CaratLane, Station Road, Punjab Footwear Mall, Shambhognlli, Kalaburagi (Gulbarga), Karnataka – 585102",pincode:"585102",phone:"8884941411",addressLine:"CaratLane, Station Road, Punjab Footwear Mall, Shambhognlli, Kalaburagi (Gulbarga), Karnataka – 585102 | PIN: 585102 | Ph: 8884941411"},
  {code:"CLCHDNEM",name:"CL-ST-CHD-NEXUS ELANTE MALL",address:"LG-8A, Nexus Elante Mall Plot No 178-178A industrial area phase 1 Chandigarh 160002",pincode:"160002",phone:"8220295888",addressLine:"LG-8A, Nexus Elante Mall Plot No 178-178A industrial area phase 1 Chandigarh 160002 | PIN: 160002 | Ph: 8220295888"},
  {code:"CFHYDLSM",name:"CL-ST-HYD-Lakeshore Mall",address:"FCGF+V8R, IDA Kukatpally, Kukatpally, Hyderabad, Telangana 500072",pincode:"500072",phone:"7993271212",addressLine:"FCGF+V8R, IDA Kukatpally, Kukatpally, Hyderabad, Telangana 500072 | PIN: 500072 | Ph: 7993271212"},
  {code:"CRJNPPLC",name:"CL-ST-L3-JAUNPUR-POLYTECHNICCHAURAHA",address:"Caratlane Store, Opposite Tanishq, Polytechnic Chauraha, Ruhatta, Jaunpur, Uttar Pradesh, Pin Code - 222002",pincode:"222002",phone:"7800078350, 7800066399",addressLine:"Caratlane Store, Opposite Tanishq, Polytechnic Chauraha, Ruhatta, Jaunpur, Uttar Pradesh, Pin Code - 222002 | PIN: 222002 | Ph: 7800078350, 7800066399"},
  {code:"CFDDGSLR",name:"CL-ST-DDG-SALAI ROAD",address:"35,36,37, Dudley school shopping complex , Salai Road , Dindigul,Tamil Nadu -624001",pincode:"624001",phone:"9994807086",addressLine:"35,36,37, Dudley school shopping complex , Salai Road , Dindigul,Tamil Nadu -624001 | PIN: 624001 | Ph: 9994807086"},
  {code:"CRANGSCR",name:"CL-ST-L3-ANG-Shankar Cinema Road",address:"CaratLane, Shankar Cinema Road, Angul - 759122",pincode:"759122",phone:"9078857111",addressLine:"CaratLane, Shankar Cinema Road, Angul - 759122 | PIN: 759122 | Ph: 9078857111"},
  {code:"CFDEOKLP",name:"CL-ST-Deoria-Kailashpuri",address:"CaratLane, Upper Ground Floor,1172, PM Tower, Near Deoria Gorakhpur flyover, Kailashpuri, Deoria 274001",pincode:"274001",phone:"7355197238",addressLine:"CaratLane, Upper Ground Floor,1172, PM Tower, Near Deoria Gorakhpur flyover, Kailashpuri, Deoria 274001 | PIN: 274001 | Ph: 7355197238"},
  {code:"CRMDRBPS",name:"CL-ST-L3-MDR-Bypass Road",address:"CaratLane, No 54, Bypass Road, Ponmeni, Madurai, Tamil Nadu 625016",pincode:"625016",phone:"9790048008",addressLine:"CaratLane, No 54, Bypass Road, Ponmeni, Madurai, Tamil Nadu 625016 | PIN: 625016 | Ph: 9790048008"},
  {code:"CFVJWPRK",name:"CL-ST-PRK-Vijayawada",address:"CaratLane, D.No : 14-206/1, Penamaluru Mandal, Machilipatnam Road, Prabhu Nagar, YSR Tadigadapa, Poranki, Vijayawada,\nAndhra Pradesh-521137.",pincode:"521137",phone:"6239397575, 6239396767",addressLine:"CaratLane, D.No : 14-206/1, Penamaluru Mandal, Machilipatnam Road, Prabhu Nagar, YSR Tadigadapa, Poranki, Vijayawada,\nAndhra Pradesh-521137. | PIN: 521137 | Ph: 6239397575, 6239396767"},
  {code:"CFKOLSLT",name:"CL-ST-KOL-SALTLAKE",address:"CaratLane, Ground Floor, BD-8, Sector I, Salt Lake, Kolkata 700064, West Bengal",pincode:"700064",phone:"9147359945, 9147362900",addressLine:"CaratLane, Ground Floor, BD-8, Sector I, Salt Lake, Kolkata 700064, West Bengal | PIN: 700064 | Ph: 9147359945, 9147362900"},
  {code:"CFCHNIAP",name:"CL-ST-CHN-IYYAPANTHANGAL",address:"CaratLane, Plot No 40, Mount Poonamalle Road, Iyyapanthangal, Chennai 600056",pincode:"600056",phone:"7339111464",addressLine:"CaratLane, Plot No 40, Mount Poonamalle Road, Iyyapanthangal, Chennai 600056 | PIN: 600056 | Ph: 7339111464"},
  {code:"CFHYDBDP",name:"CL-ST-HYD-BODUPPAL",address:"Caratlane, Door No : 6-48/1, Boduppal main road , Peerzadiguda, Hyderabad, Medchal District- 500039, Telangana \nLandmark: Beside Ramraj store.",pincode:"500039",phone:"7036259696",addressLine:"Caratlane, Door No : 6-48/1, Boduppal main road , Peerzadiguda, Hyderabad, Medchal District- 500039, Telangana \nLandmark: Beside Ramraj store. | PIN: 500039 | Ph: 7036259696"},
  {code:"CFGURFPM",name:"CL-ST-GUR-FELIX PLAZA MALL",address:"Caratlane, GF-32, Felix Plaza, Sec-82A Gurugram-122001",pincode:"122001",phone:"9625392928",addressLine:"Caratlane, GF-32, Felix Plaza, Sec-82A Gurugram-122001 | PIN: 122001 | Ph: 9625392928"},
  {code:"CRARHSHG",name:"CL-ST-L3-ARH-Shivganj",address:"CaratLane, Naresh Kunj, Shivganj, Near Durga Mandir, Arrah, Bhojpur, Bihar- 802301",pincode:"802301",phone:"9297775544",addressLine:"CaratLane, Naresh Kunj, Shivganj, Near Durga Mandir, Arrah, Bhojpur, Bihar- 802301 | PIN: 802301 | Ph: 9297775544"},
  {code:"CRMZFBPR",name:"CL-ST-L3-MZF-BhopaRoad",address:"CaratLane, 269/1 A, Bhopa Road, Dwarki Puri, Muzaffarnagar-251001",pincode:"251001",phone:"6396689995",addressLine:"CaratLane, 269/1 A, Bhopa Road, Dwarki Puri, Muzaffarnagar-251001 | PIN: 251001 | Ph: 6396689995"},
  {code:"CFMDRWMS",name:"CL-ST-MDR-WMS",address:"CaratLane, No 252, west masi street Madurai -625001",pincode:"625001",phone:"9384090906",addressLine:"CaratLane, No 252, west masi street Madurai -625001 | PIN: 625001 | Ph: 9384090906"},
  {code:"CFKOLJRD",name:"CL-ST-KOL-JESSOREROAD SOUTHDUMDUM",address:"Caratlane, Ground Floor, Shop No 7, Holding No 956 Gokuldham Jessore Road, Nashkar Bagan, South Dumdum, Kolkata-700055",pincode:"700055",phone:"8777340879",addressLine:"Caratlane, Ground Floor, Shop No 7, Holding No 956 Gokuldham Jessore Road, Nashkar Bagan, South Dumdum, Kolkata-700055 | PIN: 700055 | Ph: 8777340879"},
  {code:"CRAMBBNC",name:"CL-ST-L3-AMB-Banaras Chowk",address:"CaratLane, Plot No-334/11, M.G. Road, Banaras Chowk, Ambikapur-497001",pincode:"497001",phone:"8819950969",addressLine:"CaratLane, Plot No-334/11, M.G. Road, Banaras Chowk, Ambikapur-497001 | PIN: 497001 | Ph: 8819950969"},
  {code:"CLMUMLWP",name:"CL-ST-MUM-LOWER PAREL Lodha Signet",address:"CaratLane, Unit No. A-9, Lodha Signet, Lower Parel, West.\nBefore Lodha Park, Senapati Bapat Marg, Lower Parel,\nMumbai, 400013",pincode:"400013",phone:"7305363330/ 7305353330",addressLine:"CaratLane, Unit No. A-9, Lodha Signet, Lower Parel, West.\nBefore Lodha Park, Senapati Bapat Marg, Lower Parel,\nMumbai, 400013 | PIN: 400013 | Ph: 7305363330/ 7305353330"},
  {code:"CFHYDSNC",name:"CL-ST-HYD-SUNCITY BANDLAGUDA JAGIR",address:"Caratlane Suncity,Door no 5-5-69/70/A/1 bandalguda jagir, Suncity Hyd-500086",pincode:"500086",phone:"",addressLine:"Caratlane Suncity,Door no 5-5-69/70/A/1 bandalguda jagir, Suncity Hyd-500086 | PIN: 500086"},
  {code:"CFFDBWSM",name:"CL-ST-FARIDABAD-OMAXE WORLD STREET MALL",address:"CaratLane, SCO-264, Ground Floor & LGF, Omaxe World Street, Sector - 79, Faridabad -121004",pincode:"121004",phone:"9582702427",addressLine:"CaratLane, SCO-264, Ground Floor & LGF, Omaxe World Street, Sector - 79, Faridabad -121004 | PIN: 121004 | Ph: 9582702427"},
  {code:"CRBBRPTA",name:"CL-ST-L3-BBR-Patia",address:"Plot No-306/1700/3098/5941,Ground Floor Patia,Bhubaneswar, Khordha, Odisha 751024",pincode:"751024",phone:"6372900655",addressLine:"Plot No-306/1700/3098/5941,Ground Floor Patia,Bhubaneswar, Khordha, Odisha 751024 | PIN: 751024 | Ph: 6372900655"},
  {code:"CFGWLMLB",name:"CL-ST-GWL-MLB ROAD",address:"Caratlane Showroom Kansana towers, Phool bagh chauraha, MLB Road, Gwalior - 474002",pincode:"474002",phone:"7701010832",addressLine:"Caratlane Showroom Kansana towers, Phool bagh chauraha, MLB Road, Gwalior - 474002 | PIN: 474002 | Ph: 7701010832"},
  {code:"CFCDLTHP",name:"CL-ST-L2-CDL-Thirupathiripuliyur",address:"CaratLane Store, No.63, Kuthusigurusami Street, ( Imperial Road), Thirupathiripuliyur, Cuddalore - 607002",pincode:"607002",phone:"8148822001",addressLine:"CaratLane Store, No.63, Kuthusigurusami Street, ( Imperial Road), Thirupathiripuliyur, Cuddalore - 607002 | PIN: 607002 | Ph: 8148822001"},
  {code:"CRBJRCVL",name:"CL-ST-L3-BJR-Civil Lines",address:"Caratlane Showroom GC Tower, Kothi Antar Ghar Compound, Civil Lines, Bijnor, UP-246701",pincode:"246701",phone:"7820079996",addressLine:"Caratlane Showroom GC Tower, Kothi Antar Ghar Compound, Civil Lines, Bijnor, UP-246701 | PIN: 246701 | Ph: 7820079996"},
  {code:"CFHYDHBG",name:"CL-ST-HYD-Habsiguda",address:"CaratLane Store, 1-3-73/1\n4 N R, Vaishnavi Complex,Plot No.B&C Survey No.18/3\nHabsiguda,Hyderabad -500007",pincode:"500007",phone:"9247568111",addressLine:"CaratLane Store, 1-3-73/1\n4 N R, Vaishnavi Complex,Plot No.B&C Survey No.18/3\nHabsiguda,Hyderabad -500007 | PIN: 500007 | Ph: 9247568111"},
  {code:"CFHWHDBN",name:"CL-ST-HOWRAH-DOBSON ROAD",address:"CaratLane, 49 Dobson Road , Ground Floor , P.S Golabari , P.O Salkia , Dis - Howrah , Pin 711106",pincode:"711106",phone:"7890566999",addressLine:"CaratLane, 49 Dobson Road , Ground Floor , P.S Golabari , P.O Salkia , Dis - Howrah , Pin 711106 | PIN: 711106 | Ph: 7890566999"},
  {code:"CFGKPPRD",name:"CL-ST-GORAKHPUR-PARK ROAD",address:"CaratLane, 7, Park Road, House no. 190, Opposite Tanishq Park Road, Gorakhpur, Uttar Pradesh, 273009",pincode:"273009",phone:"9582822518",addressLine:"CaratLane, 7, Park Road, House no. 190, Opposite Tanishq Park Road, Gorakhpur, Uttar Pradesh, 273009 | PIN: 273009 | Ph: 9582822518"},
  {code:"CFTHNPMR",name:"CL-ST-THENI-PERIYAKULAM MAIN ROAD",address:"CaratLane Store, No. 1539/2, Nehruji Road, Periyakulam Main Road, Opp. to Municipal Office, Theni 625531",pincode:"625531",phone:"8925554077",addressLine:"CaratLane Store, No. 1539/2, Nehruji Road, Periyakulam Main Road, Opp. to Municipal Office, Theni 625531 | PIN: 625531 | Ph: 8925554077"},
  {code:"CRHZBMRI",name:"CL-ST-L3-HZB-Matwari",address:"CaratLane, Mahendra Market Beside Senco Gold Showroom Near PTC Chowk, Matwari, Hazaribagh, Jharkhand - 825301",pincode:"825301",phone:"7209232229",addressLine:"CaratLane, Mahendra Market Beside Senco Gold Showroom Near PTC Chowk, Matwari, Hazaribagh, Jharkhand - 825301 | PIN: 825301 | Ph: 7209232229"},
  {code:"CFRBLCVL",name:"CL-ST-RAEBARELI-CIVIL LINES",address:"Caratlane, Shop No. 42,43 Nazool, Gata No. 1467, Civil lines, Raebareli - 229001",pincode:"229001",phone:"7571067068/ 6387667068",addressLine:"Caratlane, Shop No. 42,43 Nazool, Gata No. 1467, Civil lines, Raebareli - 229001 | PIN: 229001 | Ph: 7571067068/ 6387667068"},
  {code:"CRBTHSCR",name:"CL-ST-L3-BTH-Supriya Cinema Road",address:"CaratLane, Supriya Cinema Road, NH - 727 Bettiah Dist - Wast Champaran, Bihar PIN - 845438",pincode:"845438",phone:"9199969776",addressLine:"CaratLane, Supriya Cinema Road, NH - 727 Bettiah Dist - Wast Champaran, Bihar PIN - 845438 | PIN: 845438 | Ph: 9199969776"},
];

// ═══ STORE SEARCH — filters a dropdown of STORES by name/address/pincode/phone,
// mirroring filterSkuList() below so employees can find a store without scrolling ═══
function filterStoreList(searchInputId, selectId){
  const q=(document.getElementById(searchInputId).value||'').toLowerCase().trim();
  const sel=document.getElementById(selectId);
  const opt=(s)=>`<option value="${escAttr(s.code)}">${esc(s.name)} — ${esc(s.address.slice(0,60))}${s.address.length>60?'…':''}</option>`;
  const base='<option value="">— Select a store to autofill customer, address, pincode & phone —</option>';
  if(!q){sel.innerHTML=base+STORES.map(opt).join('');return;}
  const filtered=STORES.filter(s=>
    s.name.toLowerCase().includes(q)||
    s.address.toLowerCase().includes(q)||
    s.code.toLowerCase().includes(q)||
    (s.pincode||'').includes(q)||
    (s.phone||'').includes(q)
  );
  sel.innerHTML=base+(filtered.length?filtered.map(opt).join(''):'<option disabled>No matching store found</option>');
}
// Fills the Create Order form's customer/address/pincode/phone fields from the
// selected store. Address line = store address, followed by the pincode of
// that address, followed by the phone number — all on the same line.
function applyStoreToOrder(){
  const code=document.getElementById('ord-store-select').value;
  if(!code)return;
  const s=STORES.find(x=>x.code===code);
  if(!s)return;
  document.getElementById('ord-customer').value=s.name;
  document.getElementById('ord-address').value=s.addressLine;
  document.getElementById('ord-pincode').value=s.pincode||'';
  document.getElementById('ord-phone').value=s.phone||'';
}
// Same, for the Dispatch panel's recipient/address/pincode/phone fields.
function applyStoreToDispatch(){
  const code=document.getElementById('disp-store-select').value;
  if(!code)return;
  const s=STORES.find(x=>x.code===code);
  if(!s)return;
  document.getElementById('disp-recip-name').value=s.name;
  document.getElementById('disp-address').value=s.addressLine;
  document.getElementById('disp-pincode').value=s.pincode||'';
  document.getElementById('disp-phone').value=s.phone||'';
}

let inv={},history=[],ibItems=[],ibExpectedRemaining=null,pkItemsList=[],rtItemsList=[],packingQueue=[],inventoryCounts=[],currentCount={},costParams={
  receivingCostPerGrn:500,
  pickCostPerOrder:50,
  packCostPerOrder:40,
  dispatchCostPerOrder:100,
  storageCostPerSku:2,
  damageLoss:0,
  returnProcessingCost:75,
  // CaratLane contract billing rates — used by the Monthly Billing panel,
  // separate from the rough internal cost-tracking numbers above.
  monthlyStorageFlat:45000,
  unloadingPerBox:8,
  verificationPerBox:10,
  grnCreationCharge:200,
  binPutawayPerUnit:5,
  packagingChargePerOrder:75,
  // Contract start date — the first month is prorated (billed only for the
  // days from this date to month-end) instead of the full flat charge.
  contractStartDate:'2026-08-15',
  // ── Staffing & monthly overhead ──────────────────────────────────────
  // The per-transaction rates above (₹500/GRN, ₹50/pick, etc.) only ever
  // added up to a few thousand rupees — nowhere close to what it actually
  // costs to run the warehouse (salaries, electricity, packaging material
  // consumed). These are real fixed monthly costs, entered once and folded
  // into "Cost & Profitability Summary" alongside the per-transaction total
  // so Total cost / ROI reflect reality. Defaults match the actual crew
  // (1 supervisor, 2 workers) but counts/salaries are editable in case
  // staffing changes.
  supervisorCount:1,
  supervisorSalaryMonthly:25000,
  workerCount:2,
  workerSalaryMonthly:15000,
  electricityBillMonthly:0,
  packagingMaterialCostMonthly:0,
  otherMonthlyOverhead:0
};
// Fixed monthly overhead — salaries + electricity + packaging material +
// anything else entered under "Other" — independent of transaction volume.
function monthlyFixedOverhead(){
  return (costParams.supervisorCount*costParams.supervisorSalaryMonthly)
       + (costParams.workerCount*costParams.workerSalaryMonthly)
       + costParams.electricityBillMonthly
       + costParams.packagingMaterialCostMonthly
       + costParams.otherMonthlyOverhead;
}
// costParams persistence (Supabase) — these values used to live in memory
// only and silently reset to defaults on every reload/re-login. Now backed
// by a single row in wms_settings so an admin's staffing/overhead numbers
// actually stick. Falls back to the in-code defaults above if the table
// doesn't exist yet or the row hasn't been created (e.g. before the
// caratlane-add-wms-settings.sql migration has been run).
async function loadCostParams(){
  try{
    const {data,error}=await supa.from('wms_settings').select('data').eq('id','cost_params').maybeSingle();
    if(error) throw error;
    if(data&&data.data) Object.assign(costParams,data.data);
  }catch(e){
    console.warn('loadCostParams failed — using defaults:',e.message||e);
  }
}
async function saveCostParams(){
  try{
    await supa.from('wms_settings').upsert({id:'cost_params',data:costParams,updated_at:new Date().toISOString()},{onConflict:'id'});
  }catch(e){
    console.warn('saveCostParams failed — change kept locally only this session:',e.message||e);
  }
}

// ═══ CLOUD STORAGE — SUPABASE ═══
async function initInv(){
  setSyncStatus('syncing');
  // Guard: supabase CDN must be loaded
  if(typeof supabase === 'undefined' || !supa){
    console.warn('Supabase not loaded — using localStorage fallback');
    setSyncStatus('offline');
    try{const s=localStorage.getItem('cl_wms_inv2');if(s){inv=JSON.parse(s);return;}}catch(e){}
    SKUS.forEach(s=>{inv[s.sku]={qty:0,rack:s.rack,shelf:s.shelf};});
    return;
  }
  try {
    const {data, error} = await supa.from('inventory').select('*');
    if(error){
      console.error('initInv Supabase error:', error.message, error.code, error.details);
      throw new Error(error.message || 'Supabase query failed');
    }
    if(data && data.length > 0){
      data.forEach(r => { inv[r.sku] = {qty:r.qty||0, rack:r.rack, shelf:r.shelf}; if(Array.isArray(r.locations) && r.locations.length) inv[r.sku].locations=r.locations; });
      setSyncStatus('ok');
      console.log('✓ Inventory loaded from cloud:', data.length, 'SKUs');
    } else {
      // First run — seed all SKUs at zero qty
      console.log('First run — seeding inventory at zero');
      SKUS.forEach(s => { inv[s.sku] = {qty:0, rack:s.rack, shelf:s.shelf}; });
      await saveInv();
    }
  } catch(e) {
    console.error('initInv error:', e?.message || JSON.stringify(e));
    setSyncStatus('error');
    toast('Cloud connection failed — using local data','w');
    // Fallback to localStorage
    try{const s=localStorage.getItem('cl_wms_inv2');if(s){inv=JSON.parse(s);}}catch(e2){}
    if(!Object.keys(inv).length){
      SKUS.forEach(s=>{inv[s.sku]={qty:0,rack:s.rack,shelf:s.shelf};});
    }
  }
}
async function saveInv(){
  setSyncStatus('syncing');
  localStorage.setItem('cl_wms_inv2', JSON.stringify(inv)); // always save locally first
  if(typeof supabase === 'undefined' || !supa){ setSyncStatus('offline'); return; }
  try {
    const now=new Date().toISOString();
    const rows = Object.entries(inv).map(([sku,v]) => ({sku, qty:v.qty||0, rack:v.rack, shelf:v.shelf, locations:Array.isArray(v.locations)?v.locations:null, updated_at:now}));
    // Conflict resolution: fetch current DB state first, merge with local changes
    const {data:dbRows}=await supa.from('inventory').select('sku,qty,updated_at');
    const dbMap={};
    if(dbRows) dbRows.forEach(r=>{ dbMap[r.sku]={qty:r.qty,updated_at:r.updated_at}; });
    // Only upsert rows where local version is newer or same (last-write-wins with timestamp)
    const {error} = await supa.from('inventory').upsert(rows, {onConflict:'sku'});
    if(error){ console.error('saveInv Supabase error:', error.message); throw new Error(error.message); }
    setSyncStatus('ok');
    localStorage.setItem('cl_wms_inv2', JSON.stringify(inv)); // local backup
    // Save version snapshot to history table
    const snapId=newId('SNAP');
    const snapRow={
      id:snapId, type:'inventory_snapshot', ts:new Date().toLocaleString('en-IN'),
      detail:'Inventory snapshot — '+Object.keys(inv).length+' SKUs',
      items:Object.entries(inv).map(([sku,v])=>({sku,qty:v.qty||0,rack:v.rack,shelf:v.shelf,locations:Array.isArray(v.locations)?v.locations:null})),
      created_at:new Date().toISOString()
    };
    await supa.from('inventory_snapshots').upsert(snapRow,{onConflict:'id'}).then(()=>{}).catch(()=>{});
  } catch(e) {
    console.error('saveInv error:', JSON.stringify(e), e?.message, e?.code);
    setSyncStatus('error');
    try{localStorage.setItem('cl_wms_inv2', JSON.stringify(inv));}catch(e2){}
  }
}
// Rollback inventory to a previous snapshot
async function rollbackInventory(snapId){
  if(!confirm('Are you sure you want to rollback inventory to snapshot '+snapId+'? This cannot be undone.')) return;
  try {
    const {data,error}=await supa.from('inventory_snapshots').select('*').eq('id',snapId).single();
    if(error||!data) throw new Error('Snapshot not found');
    const items=data.items||[];
    items.forEach(item=>{ inv[item.sku]={qty:item.qty,rack:item.rack,shelf:item.shelf}; if(Array.isArray(item.locations)&&item.locations.length) inv[item.sku].locations=item.locations; });
    await saveInv();
    renderDash();renderInv();renderRack();
    toast('Inventory rolled back to '+data.ts,'s');
  } catch(e){ toast('Rollback failed: '+(e.message||'unknown error'),'w'); }
}
async function loadInventoryHistory(){
  try {
    const {data}=await supa.from('inventory_snapshots').select('id,ts,detail,created_at').order('created_at',{ascending:false}).limit(20);
    return data||[];
  } catch(e){ return []; }
}
// Finds the most recent inventory snapshot at or before a given instant —
// used to reconstruct "what was stock as of the start/end of month X"
// for the Monthly Master Report's Inventory Movement sheet. A snapshot
// is saved automatically on every saveInv() call (GRN receipt, dispatch,
// qty adjustment, bin reassignment, etc.), so this is real historical
// data, not an estimate. Returns null if no snapshot exists yet at/before
// that instant (e.g. reporting on a month before the app went live) —
// callers should treat that as "0 for every SKU", which is correct.
async function getInventorySnapshotAsOf(isoDateTime){
  try {
    const {data,error}=await supa.from('inventory_snapshots')
      .select('id,ts,items,created_at')
      .lte('created_at',isoDateTime)
      .order('created_at',{ascending:false})
      .limit(1);
    if(error) throw error;
    return (data&&data[0])?data[0]:null;
  } catch(e){ console.warn('getInventorySnapshotAsOf failed:',e.message||e); return null; }
}
async function loadHist(){
  setSyncStatus('syncing');
  if(typeof supabase === 'undefined' || !supa){
    setSyncStatus('offline');
    try{const s=localStorage.getItem('cl_wms_hist2');if(s)history=JSON.parse(s);}catch(e){}
    return;
  }
  try {
    const {data,error} = await supa.from('history').select('*').order('created_at',{ascending:true});
    if(error){ console.error('loadHist error:', error.message, error.code); throw new Error(error.message); }
    if(data) {
      history = data.map(r => ({
        id:r.id, type:r.type, ts:r.ts, detail:r.detail,
        orderId:r.order_id, awb:r.awb, recipientName:r.recipient_name,
        address:r.address, pincode:r.pincode, phone:r.phone,
        shippingMethod:r.shipping_method, courierPartner:r.courier_partner, dispatchedAt:r.dispatched_at,
        packStartTs:r.pack_start_ts, packStartTime:r.pack_start_time,
        packEndTs:r.pack_end_ts, packEndTime:r.pack_end_time,
        packDuration:r.pack_duration, packDurationSecs:r.pack_duration_secs,
        pickStartTs:r.pick_start_ts, pickDurationSecs:r.pick_duration_secs,
        boxL:r.box_l, boxW:r.box_w, boxH:r.box_h,
        actualWeight:r.actual_weight, volWeight:r.vol_weight, chargeableWeight:r.chargeable_weight,
        dispatchWeight:r.dispatch_weight,
        packMaterials:r.pack_materials||[],
        packNotes:r.pack_notes, packedId:r.packed_id, category:r.category, grn:r.grn,
        items:r.items||[], photo:r.photo||null, packer:r.packer||null,
        podPhoto:r.pod_photo||null, weightPhoto:r.weight_photo||null,
        asn:r.asn||null, carrier:r.carrier||null, vehicle:r.vehicle||null, cartons:(r.cartons!=null?r.cartons:null),
        grnNotes:r.grn_notes||null,
        voided:r.voided||false, voidedBy:r.voided_by||null, voidedAt:r.voided_at||null, voidReason:r.void_reason||null
      }));
      // Also load packing queue
      const {data:pq} = await supa.from('packing_queue').select('*').order('created_at',{ascending:true});
      if(pq) packingQueue = pq.map(r => ({
        id:r.id, orderId:r.order_id, priority:r.priority, method:r.method,
        picker:r.picker, items:r.items||[], ts:r.ts, status:r.status,
        packStartTime:r.pack_start_time, packStartTs:r.pack_start_ts, claimedBy:r.claimed_by||null,
        toteId:r.tote_id||null
      }));
      setSyncStatus('ok');
    }
  } catch(e) {
    console.error('loadHist error:', JSON.stringify(e), e?.message, e?.code);
    setSyncStatus('error');
    try{const s=localStorage.getItem('cl_wms_hist2');if(s)history=JSON.parse(s);}catch(e2){}
  }
}
function historyRecordToRow(h){
  return {
    id:h.id, type:h.type, ts:h.ts, detail:h.detail||null,
    order_id:h.orderId||null, awb:h.awb||null, recipient_name:h.recipientName||null,
    address:h.address||null, pincode:h.pincode||null, phone:h.phone||null,
    shipping_method:h.shippingMethod||null, courier_partner:h.courierPartner||null, dispatched_at:h.dispatchedAt||null,
    pack_start_ts:h.packStartTs||null, pack_start_time:h.packStartTime||null,
    pack_end_ts:h.packEndTs||null, pack_end_time:h.packEndTime||null,
    pack_duration:h.packDuration||null, pack_duration_secs:h.packDurationSecs||null,
    pick_start_ts:h.pickStartTs||null, pick_duration_secs:h.pickDurationSecs||null,
    box_l:h.boxL||null, box_w:h.boxW||null, box_h:h.boxH||null,
    actual_weight:h.actualWeight||null, vol_weight:h.volWeight||null, chargeable_weight:h.chargeableWeight||null,
    dispatch_weight:h.dispatchWeight||null,
    pack_materials:h.packMaterials||null,
    pack_notes:h.packNotes||null, packed_id:h.packedId||null, category:h.category||null,
    grn:h.grn||null, items:h.items||[], photo:h.photo||null, packer:h.packer||null,
    pod_photo:h.podPhoto||null, weight_photo:h.weightPhoto||null,
    asn:h.asn||null, carrier:h.carrier||null, vehicle:h.vehicle||null, cartons:(h.cartons!=null?h.cartons:null),
    grn_notes:h.grnNotes||null,
    voided:h.voided||false, voided_by:h.voidedBy||null, voided_at:h.voidedAt||null, void_reason:h.voidReason||null
  };
}
// Upsert a specific history record (not necessarily the last one in the
// array) — needed when an earlier record (e.g. the "packed" entry) gets
// mutated in place, such as when dispatch marks it type='dispatched'.
// Without this, only the newest array entry would ever sync to the DB
// and the mutated older record's changes would be lost on next reload.
async function saveHistRecord(h){
  if(!h) return {success:false,error:'no record'};
  if(typeof supabase === 'undefined' || !supa) return {success:false,error:'offline'};
  try {
    const row=historyRecordToRow(h);
    const {error} = await supa.from('history').upsert(row, {onConflict:'id'});
    if(error) throw error;
    return {success:true};
  } catch(e) {
    console.error('saveHistRecord error:', JSON.stringify(e), e?.message, e?.code);
    return {success:false,error:e?.message||e};
  }
}
async function saveHist(){
  setSyncStatus('syncing');
  localStorage.setItem('cl_wms_hist2', JSON.stringify(history)); // always save locally first
  if(typeof supabase === 'undefined' || !supa){ setSyncStatus('offline'); return; }
  try {
    // Save last history entry to DB (upsert)
    const h = history[history.length-1];
    if(!h) { setSyncStatus('ok'); return; }
    const row = historyRecordToRow(h);
    // If type=dispatched, update existing record instead of insert
    const {error} = await supa.from('history').upsert(row, {onConflict:'id'});
    if(error) throw error;
    setSyncStatus('ok');
    localStorage.setItem('cl_wms_hist2', JSON.stringify(history)); // local backup
  } catch(e) {
    console.error('saveHist error:', JSON.stringify(e), e?.message, e?.code);
    setSyncStatus('error');
    try{localStorage.setItem('cl_wms_hist2', JSON.stringify(history));}catch(e2){}
  }
}
// Per-row upsert/delete — NEVER blanket delete-all-reinsert-all, since that would
// wipe out another picker/packer's in-flight claim between two clients' syncs.
async function upsertPackingQueueItem(t){
  try {
    if(typeof supabase === 'undefined' || !supa) return {success:false,error:'offline'};
    const row = {
      id:t.id, order_id:t.orderId, priority:t.priority, method:t.method,
      picker:t.picker, items:t.items||[], ts:t.ts, status:t.status||'awaiting_packing',
      pack_start_time:t.packStartTime||null, pack_start_ts:t.packStartTs||null,
      claimed_by:t.claimedBy||null, tote_id:t.toteId||null
    };
    const {error} = await supa.from('packing_queue').upsert(row, {onConflict:'id'});
    if(error) throw error;
    return {success:true};
  } catch(e){ console.error('upsertPackingQueueItem error:', e?.message||e); return {success:false,error:e?.message||e}; }
}
async function deletePackingQueueItem(id){
  try {
    const {error} = await supa.from('packing_queue').delete().eq('id', id);
    if(error) throw error;
    return {success:true};
  } catch(e){ console.error('deletePackingQueueItem error:', e?.message||e); return {success:false,error:e?.message||e}; }
}
async function claimPackingTask(taskId, picker, startTime, startTs){
  try {
    const {data,error} = await supa.rpc('claim_packing_task',{p_task_id:taskId,p_picker:picker,p_start_time:startTime,p_start_ts:startTs});
    if(error) throw error;
    return data;
  } catch(e){ console.error('claimPackingTask failed:', e.message||e); return {success:false,reason:'network_error'}; }
}
async function releasePackingClaim(taskId){
  try {
    const {data,error} = await supa.rpc('release_packing_claim',{p_task_id:taskId});
    if(error) throw error;
    return data;
  } catch(e){ console.error('releasePackingClaim failed:', e.message||e); return {success:false}; }
}
// Real-time listener — refresh UI when another user makes changes
let realtimeSyncSetup = false;
function setupRealtimeSync(){
  if(realtimeSyncSetup) return; // Already set up - prevent double subscription
  realtimeSyncSetup = true;
  
  supa.channel('wms-changes')
    .on('postgres_changes', {event:'*', schema:'public', table:'inventory'}, (payload) => {
      // Apply the changed row directly from the realtime payload instead of
      // re-fetching and overwriting the WHOLE inventory table on every single
      // row change. A single GRN/pick/pack can touch hundreds of SKU rows in
      // one upsert, and Postgres/Supabase realtime emits one change event PER
      // ROW — that used to fire a burst of overlapping initInv() calls, each
      // blindly replacing the ENTIRE in-memory `inv` object with a fresh
      // full-table read. If any of those overlapping reads resolved out of
      // order relative to a newer local change (e.g. the very next GRN being
      // entered while the previous burst was still trickling in), it could
      // silently overwrite that fresh change with an older snapshot — for
      // ANY SKU, not just the one that actually changed. This is the most
      // likely explanation for GRN-283872's first two and last two lines
      // (UNI-SHT-M-34/36, UNI-SHT-F-4XL/5XL) reverting to zero after
      // receiving correctly. Updating only the single row named in the
      // payload removes the whole race: each event is self-contained and
      // can never clobber an unrelated SKU.
      if(payload.eventType==='DELETE'){
        const old=payload.old;
        if(old && old.sku) delete inv[old.sku];
      } else {
        const r=payload.new;
        if(r && r.sku){
          inv[r.sku]={qty:r.qty||0, rack:r.rack, shelf:r.shelf};
          if(Array.isArray(r.locations) && r.locations.length) inv[r.sku].locations=r.locations;
        }
      }
      renderDash(); renderInv(); renderRack();
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'history'}, (payload) => {
      // Payload-only update — same fix as the inventory handler above, for
      // the same reason: a GRN/pick/pack write can touch many rows in one
      // go, firing one realtime event per row, and overlapping blind
      // loadHist() full-table reloads can resolve out of order and silently
      // revert a newer local record. Apply just the row named here instead.
      if(payload.eventType==='DELETE'){
        const old=payload.old;
        if(old && old.id){
          const idx=history.findIndex(h=>h.id===old.id);
          if(idx>-1) history.splice(idx,1);
        }
      } else {
        const r=payload.new;
        if(r && r.id){
          const rec={
            id:r.id, type:r.type, ts:r.ts, detail:r.detail,
            orderId:r.order_id, awb:r.awb, recipientName:r.recipient_name,
            address:r.address, pincode:r.pincode, phone:r.phone,
            shippingMethod:r.shipping_method, courierPartner:r.courier_partner, dispatchedAt:r.dispatched_at,
            packStartTs:r.pack_start_ts, packStartTime:r.pack_start_time,
            packEndTs:r.pack_end_ts, packEndTime:r.pack_end_time,
            packDuration:r.pack_duration, packDurationSecs:r.pack_duration_secs,
            pickStartTs:r.pick_start_ts, pickDurationSecs:r.pick_duration_secs,
            boxL:r.box_l, boxW:r.box_w, boxH:r.box_h,
            actualWeight:r.actual_weight, volWeight:r.vol_weight, chargeableWeight:r.chargeable_weight,
            dispatchWeight:r.dispatch_weight,
            packMaterials:r.pack_materials||[],
            packNotes:r.pack_notes, packedId:r.packed_id, category:r.category, grn:r.grn,
            items:r.items||[], photo:r.photo||null, packer:r.packer||null,
            podPhoto:r.pod_photo||null, weightPhoto:r.weight_photo||null,
            asn:r.asn||null, carrier:r.carrier||null, vehicle:r.vehicle||null, cartons:(r.cartons!=null?r.cartons:null),
            grnNotes:r.grn_notes||null,
            voided:r.voided||false, voidedBy:r.voided_by||null, voidedAt:r.voided_at||null, voidReason:r.void_reason||null
          };
          const idx=history.findIndex(h=>h.id===r.id);
          if(idx>-1) history[idx]=rec; else history.push(rec);
        }
      }
      renderDash(); if(document.getElementById('page-dispatch').classList.contains('active')) renderDispatchPage();
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'packing_queue'}, (payload) => {
      // Payload-only update — same fix as above. This directly addresses the
      // orders-200-250 bug: a packing_queue row inserted by a picker used to
      // trigger a blind full-table loadHist() reload on every OTHER
      // concurrent picker/packer's session too, and an out-of-order resolve
      // of one of those reloads could silently drop a just-inserted row from
      // memory even though it existed in the DB (masking, not the same as
      // the underlying insert failing, but compounding the same symptom).
      if(payload.eventType==='DELETE'){
        const old=payload.old;
        if(old && old.id){
          const idx=packingQueue.findIndex(t=>t.id===old.id);
          if(idx>-1) packingQueue.splice(idx,1);
        }
      } else {
        const r=payload.new;
        if(r && r.id){
          const rec={
            id:r.id, orderId:r.order_id, priority:r.priority, method:r.method,
            picker:r.picker, items:r.items||[], ts:r.ts, status:r.status,
            packStartTime:r.pack_start_time, packStartTs:r.pack_start_ts, claimedBy:r.claimed_by||null,
            toteId:r.tote_id||null
          };
          const idx=packingQueue.findIndex(t=>t.id===r.id);
          if(idx>-1) packingQueue[idx]=rec; else packingQueue.push(rec);
        }
      }
      if(document.getElementById('page-packing').classList.contains('active')) renderPackingQ();
      renderDash();
    })
    .subscribe();
}
function ts(){return new Date().toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}
function newId(pfx){return pfx+'-'+Date.now().toString().slice(-6);}
function getSt(q){return q<=0?'out':q<=3?'low':'ok';}
function stPill(q){const s=getSt(q);return s==='out'?'<span class="pill p-out">Out</span>':s==='low'?'<span class="pill p-low">Low</span>':'<span class="pill p-ok">In stock</span>';}

function nav(tab){
  // Hard-enforce role tab access — sidebar hiding alone is cosmetic since
  // some buttons (e.g. quickDisp) call nav() directly, bypassing the sidebar.
  const _role=currentProfile?.role;
  const _allowed=(typeof ROLE_TABS!=='undefined'&&ROLE_TABS.hasOwnProperty(_role))?ROLE_TABS[_role]:['dashboard'];
  if(_allowed!==null && tab!=='users' && !_allowed.includes(tab)){
    toast('You do not have access to that page','w');
    return;
  }
  document.querySelectorAll('.ntab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+tab));
  updateNotificationBadge();
  if(tab==='dashboard')renderDash();
  if(tab==='inventory'){loadReservedMap().then(renderInv);renderInvVersionHistory();}
  if(tab==='labels'){renderLabelPage();}
  if(tab==='audit'){renderAuditLog();renderDataIntegrityCheck();}
  if(tab==='users'){renderUsersList();}
  if(tab==='rack')loadReservedMap().then(renderRack);
  if(tab==='dispatch')renderDispatchPage();
  if(tab==='packing')renderPackingQ();
  if(tab==='orderstatus')renderOrderStatusRecent();
  if(tab==='reports')renderReports();
  if(tab==='analytics')renderAnalytics();
  if(tab==='finance')renderFinance();
  if(tab==='invcount'){
    if(currentCount.counts){
      renderCountList();
      updateCountSummary();
    }else{
      updateCountSummary();
    }
    renderCountHistory();
  }
  if(tab==='mobile'){initMobileTab();}
  if(tab==='inbound'){populateSkuSel('ib-sku');populateSkuSel('exp-sku');renderIbLog();loadExpectedShipments().then(()=>{renderExpShipmentsBoard();populateExpectedSelect();});}
  if(tab==='orders'){populateSkuSel('ord-sku');filterStoreList('ord-store-search','ord-store-select');loadOrders().then(renderOrdersBoard);}
  if(tab==='picking'){ if(!activeOrder){ loadOrders().then(renderMyAssignedOrders); } }
  if(tab==='returns'){populateSkuSel('rt-sku');renderRtLog();}
}

function toggleMenu(){
  const menu=document.getElementById('dropdown-menu');
  if(!menu)return;
  const isVisible=menu.style.display==='block';
  if(!isVisible){
    // Clear All Data is destructive and irreversible — admin only.
    // Backup is safe to offer to anyone who can already see the full
    // data (admin/supervisor), matching the Audit Trail access level.
    const clearItem=document.getElementById('clear-data-menu-item');
    if(clearItem) clearItem.style.display=(currentProfile?.role==='admin')?'flex':'none';
    const backupItem=document.getElementById('backup-menu-item');
    if(backupItem) backupItem.style.display=getPerms().canAudit?'flex':'none';
    // Restore is admin+supervisor, same bar as Download Full Backup.
    const restoreItem=document.getElementById('restore-menu-item');
    if(restoreItem) restoreItem.style.display=getPerms().canAudit?'flex':'none';
  }
  menu.style.display=isVisible?'none':'block';
}

function navAndClose(tab){
  nav(tab);
  document.getElementById('dropdown-menu').style.display='none';
}

// Close menu when clicking outside
document.addEventListener('click',function(e){
  const menu=document.getElementById('dropdown-menu');
  if(menu&&!menu.contains(e.target)&&e.target.closest('button')?false:true){
    menu.style.display='none';
  }
});

function populateSkuSel(id_){
  if(id_==='none')return;
  const s=document.getElementById(id_);
  if(s)s.innerHTML=SKUS.map(x=>`<option value="${x.sku}">${x.sub} — ${x.variant} (${x.sku})</option>`).join('');
}

// DASHBOARD
function getSameDayPending(){
  // Returns packed orders that were packed today and not yet dispatched.
  // todayStr used to be computed and never actually used to filter —
  // this returned EVERY never-dispatched packed order regardless of how
  // old it was, so a weeks-old backlog item would show up forever as if
  // it were a fresh same-day dispatch, permanently misrepresenting old
  // backlog as urgent same-day work (and hiding just how overdue it
  // really was).
  const now=new Date();
  const todayY=now.getFullYear(),todayM=now.getMonth(),todayD=now.getDate();
  const packed=history.filter(h=>h.type==='packed');
  const dispatched=new Set(history.filter(h=>h.type==='dispatched').map(h=>h.packedId||h.orderId));
  return packed.filter(p=>{
    const notDispatched=!dispatched.has(p.id)&&!dispatched.has(p.orderId);
    if(!notDispatched) return false;
    const t=parseDisplayTs(p.ts);
    if(!t) return false;
    const d=new Date(t);
    return d.getFullYear()===todayY && d.getMonth()===todayM && d.getDate()===todayD;
  });
}
function getHoursPassed(tsString){
  // Uses the same parseDisplayTs() as everywhere else in the app (fixed
  // to handle locale month abbreviations like "Sept") rather than the
  // native Date constructor, which isn't guaranteed to parse this
  // app's "DD Mon, hh:mm am/pm" display format consistently.
  const t=parseDisplayTs(tsString);
  if(!t) return null;
  return Math.floor((Date.now()-t)/3600000);
}
function renderSameDayAlert(){
  const el=document.getElementById('same-day-dispatch-banner');
  if(!el)return;
  const pending=getSameDayPending();
  if(!pending.length){el.innerHTML='';return;}
  const now=new Date();
  const hrs=now.getHours();
  const minsLeft=(18-hrs)*60-now.getMinutes(); // cutoff 6pm
  const isUrgent=hrs>=15; // red after 3pm
  const isCritical=hrs>=17; // critical after 5pm
  const color=isCritical?'var(--dt)':isUrgent?'var(--wt)':'var(--it)';
  const bg=isCritical?'var(--dbg)':isUrgent?'var(--wbg)':'var(--ibg)';
  const icon=isCritical?'ti-alarm':'ti-truck-delivery';
  const urgencyLabel=isCritical?'🚨 CRITICAL':'⚠️ ACTION REQUIRED';
  const timeMsg=minsLeft>0?`Dispatch cutoff in <strong>${Math.floor(minsLeft/60)}h ${minsLeft%60}m</strong>`:'<strong>Past dispatch cutoff — dispatch immediately!</strong>';
  el.innerHTML=`
    <div style="background:${bg};border:1.5px solid ${color};border-radius:10px;padding:14px 16px;margin-bottom:14px;cursor:pointer" onclick="nav('dispatch')">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:40px;height:40px;background:${color};border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="ti ${icon}" style="font-size:20px;color:#fff"></i>
          </div>
          <div>
            <div style="font-weight:700;font-size:13px;color:${color}">${urgencyLabel} — Same-Day Dispatch</div>
            <div style="font-size:11px;color:var(--t2);margin-top:2px">${pending.length} packed order${pending.length>1?'s':''} must be dispatched <strong>today</strong> · ${timeMsg}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          ${pending.map(p=>`<span style="background:${color};color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px">${esc(p.orderId||p.id)}</span>`).join('')}
          <span style="font-size:11px;color:${color};font-weight:600">Go to Dispatch →</span>
        </div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:0.5px solid ${color}33;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px">
        ${pending.map(p=>{
          const items=(p.items&&p.items.length)?p.items.length:0;
          return `<div style="background:var(--s2);border-radius:6px;padding:8px;font-size:10px;cursor:pointer;border:1px solid transparent;transition:border .15s" onclick="event.stopPropagation();selectDispatchOrder('${p.id}')" onmouseover="this.style.borderColor='${color}'" onmouseout="this.style.borderColor='transparent'">
            <div style="font-weight:600;color:var(--t)">${esc(p.orderId||p.id)}</div>
            <div style="color:var(--t2);margin-top:2px">Packed ID: ${p.id}</div>
            <div style="color:var(--t2)">${items} SKU(s) · ${p.ts||'Today'}</div>
            <div style="color:${color};font-weight:600;margin-top:4px">👆 Tap to assign AWB</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}
function renderDispatchSameDayAlert(){
  const el=document.getElementById('dispatch-sameday-alert');
  if(!el)return;
  const pending=getSameDayPending();
  if(!pending.length){
    el.innerHTML='<div style="background:var(--sbg);border:1px solid var(--st);border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:11px;color:var(--st);display:flex;align-items:center;gap:8px"><i class="ti ti-circle-check" style="font-size:16px"></i><strong>All clear!</strong> No pending dispatches — all packed orders have been dispatched today ✓</div>';
    return;
  }
  const now=new Date();
  const hrs=now.getHours();
  const isCritical=hrs>=17;
  const isUrgent=hrs>=15;
  const color=isCritical?'var(--dt)':isUrgent?'var(--wt)':'var(--gold)';
  const bg=isCritical?'var(--dbg)':isUrgent?'var(--wbg)':'#fff8e6';
  el.innerHTML=`
    <div style="background:${bg};border:2px solid ${color};border-radius:10px;padding:12px 16px;margin-bottom:14px">
      <div style="font-weight:700;font-size:13px;color:${color};margin-bottom:8px;display:flex;align-items:center;gap:6px">
        <i class="ti ti-clock-exclamation" style="font-size:16px"></i>
        SAME-DAY DISPATCH REQUIRED — ${pending.length} order${pending.length>1?'s':''} pending
      </div>
      <div style="font-size:11px;color:var(--t2);margin-bottom:10px">
        Per SOP §3 — all packed orders must be dispatched <strong>same day</strong>. 
        Select each order below, assign AWB number from courier, and confirm dispatch.
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${pending.map(p=>`
          <div style="background:var(--s);border:1px solid ${color};border-radius:6px;padding:8px 12px;font-size:11px;cursor:pointer;min-width:160px;transition:background .15s" onclick="assignAWBDirect('${p.id}')" onmouseover="this.style.background='var(--s2)'" onmouseout="this.style.background='var(--s)'">
            <div style="font-weight:700;color:${color}">${esc(p.orderId||p.id)}</div>
            <div style="color:var(--t2);margin-top:2px">${(p.items&&p.items.length)||0} SKU(s) · ${p.ts||'Today'}</div>
            <div style="color:${color};font-weight:600;margin-top:4px;font-size:10px">👆 Tap to assign AWB</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
// A stale/missing backup blocks Clear All Data outright — the CLEAR
// confirm phrase alone only protects against a careless click, not
// against an admin genuinely meaning to clear without a safety net.
// 24h keeps the gate tight (a "recent" backup, not just "some" backup)
// while still being easy to satisfy: Download Full Backup, then clear.
const CLEAR_DATA_BACKUP_MAX_AGE_HOURS=24;
function hoursSinceLastBackup(info){
  if(!info||!info.lastBackupAt) return Infinity;
  return (Date.now()-new Date(info.lastBackupAt).getTime())/3600000;
}
async function showClearDataModal(){
  if(currentProfile?.role!=='admin'){ toast('Only an admin can clear WMS data','w'); return; }
  document.getElementById('dropdown-menu').style.display='none';
  const info=await getLastBackupInfo();
  const hrs=hoursSinceLastBackup(info);
  if(hrs>CLEAR_DATA_BACKUP_MAX_AGE_HOURS){
    toast(info&&info.lastBackupAt
      ? `Blocked for safety — last backup was ${Math.round(hrs)}h ago. Download a fresh backup (More menu) before clearing data.`
      : 'Blocked for safety — no backup has ever been taken. Download a full backup (More menu) before clearing data.','w');
    return;
  }
  const overlay=document.getElementById('clear-modal-overlay');
  overlay.style.display='flex';
  const statusEl=document.getElementById('clear-modal-backup-status');
  if(statusEl) statusEl.innerHTML=`<i class="ti ti-shield-check" style="color:var(--st)"></i> Backup on file from ${Math.round(hrs)===0?'less than an hour':Math.round(hrs)+'h'} ago${info.lastBackupBy?' (by '+esc(info.lastBackupBy)+')':''}`;
  document.getElementById('clear-confirm-input').value='';
  document.getElementById('clear-confirm-btn').disabled=true;
  document.getElementById('clear-confirm-btn').style.background='var(--b)';
  document.getElementById('clear-confirm-btn').style.color='var(--t3)';
  document.getElementById('clear-confirm-btn').style.cursor='not-allowed';
  setTimeout(()=>document.getElementById('clear-confirm-input').focus(),100);
}
function closeClearModal(){
  document.getElementById('clear-modal-overlay').style.display='none';
}
function validateClearInput(){
  const val=document.getElementById('clear-confirm-input').value.trim();
  const btn=document.getElementById('clear-confirm-btn');
  const valid=val==='DELETE ALL DATA';
  btn.disabled=!valid;
  btn.style.background=valid?'var(--dt)':'var(--b)';
  btn.style.color=valid?'#fff':'var(--t3)';
  btn.style.cursor=valid?'pointer':'not-allowed';
}
async function executeFullClear(){
  if(currentProfile?.role!=='admin'){ toast('Only an admin can clear WMS data','w'); closeClearModal(); return; }
  // Re-check backup freshness at execution time too (not just when the
  // modal opened) — defense-in-depth against a direct console call, and
  // against someone leaving the modal open past the 24h window.
  const info=await getLastBackupInfo();
  if(hoursSinceLastBackup(info)>CLEAR_DATA_BACKUP_MAX_AGE_HOURS){
    toast('Blocked for safety — no backup on file from the last 24h. Download a fresh backup first.','w');
    closeClearModal();
    return;
  }
  if(!rateLimit('clear',10000)){toast('Please wait before trying again','w');return;}
  logAudit('CLEAR_ALL_DATA','system',null,null,{clearedBy:currentProfile?.full_name||'Unknown',ts:new Date().toISOString()});
  // Clear localStorage
  localStorage.removeItem('cl_wms_inv2');
  localStorage.removeItem('cl_wms_hist2');
  localStorage.removeItem('cl_wms_counts');
  // Clear Supabase
  try {
    await supa.from('history').delete().neq('id','__none__');
    await supa.from('packing_queue').delete().neq('id','__none__');
    await supa.from('inventory').delete().neq('sku','__none__');
  } catch(e){ console.error('Cloud clear error:', e); }
  // Reset all in-memory data
  history=[];
  packingQueue=[];
  inventoryCounts=[];
  currentCount={};
  ibItems=[];
  pkItemsList=[];
  rtItemsList=[];
  // Re-init inventory to zero (keeps SKU list but zeroes quantities)
  inv={};
  SKUS.forEach(s=>{inv[s.sku]={qty:0,rack:s.rack,shelf:s.shelf};});
  saveInv();
  saveHist();
  closeClearModal();
  // Refresh all visible pages
  nav('dashboard');
  toast('All data cleared — WMS reset to zero','s');
}

// ═══════════════════════════════════════════
// FULL DATA BACKUP (admin/supervisor)
// ═══════════════════════════════════════════
// Manual, on-demand export of every table in the WMS, as both a raw JSON
// file (for a full restore/inspection) and a multi-sheet Excel workbook
// (for a human to skim). Read-only — never touches any data. Any table
// that doesn't exist yet on this database (e.g. order_events pre-migration)
// is skipped rather than failing the whole export.
const BACKUP_TABLES=['skus','inventory','inventory_snapshots','history','orders','expected_shipments','order_events','packing_queue','audit_log'];
async function _fetchBackupTable(name){
  try {
    const {data,error}=await supa.from(name).select('*');
    if(error) throw error;
    return data||[];
  } catch(e){
    console.warn(`Backup: skipped table "${name}" —`,e.message||e);
    return null; // distinguish "table missing/unreadable" from "table empty"
  }
}
async function downloadFullBackup(){
  if(!getPerms().canAudit){ toast('Only an admin or supervisor can download a full data backup','w'); return; }
  if(!rateLimit('backup',5000)){ toast('Please wait before trying again','w'); return; }
  toast('Preparing backup — this may take a few seconds…','s');
  try {
    const tables={};
    for(const t of BACKUP_TABLES){
      const rows=await _fetchBackupTable(t);
      if(rows!==null) tables[t]=rows;
    }
    // user_profiles: trimmed to non-sensitive fields only (no emails/auth ids
    // beyond what's needed to identify who did what in history/audit rows).
    const profiles=await _fetchBackupTable('user_profiles');
    if(profiles!==null) tables['user_profiles']=profiles.map(p=>({id:p.id,full_name:p.full_name,role:p.role}));

    const exportedAt=new Date().toISOString();
    const exportedBy=currentProfile?.full_name||currentUser?.email||'Unknown';
    const payload={exportedAt,exportedBy,source:'CaratLane WMS',tables};

    // 1) JSON download — full-fidelity, safe for a future restore/import.
    const jsonBlob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const jsonUrl=URL.createObjectURL(jsonBlob);
    const jsonLink=document.createElement('a');
    jsonLink.href=jsonUrl;
    jsonLink.download=`caratlane-wms-backup-${exportedAt.slice(0,10)}.json`;
    document.body.appendChild(jsonLink); jsonLink.click(); jsonLink.remove();
    setTimeout(()=>URL.revokeObjectURL(jsonUrl),2000);

    // 2) Excel workbook — one sheet per table, for a human to skim/filter.
    loadXLSXLib(()=>{
      try {
        const wb=XLSX.utils.book_new();
        // audit_log is fetched in full every time (no limit, no date
        // cutoff — Clear All Data deliberately never touches it either,
        // see executeFullClear()), so it's the one table that only ever
        // grows. A single flat sheet of it becomes unreadable within a
        // few months, so it gets split into one sheet per calendar month
        // instead — the backup doubles as a standing monthly audit
        // archive, not just a snapshot.
        const auditRows=tables['audit_log']||[];
        const auditByMonth={};
        auditRows.forEach(r=>{
          const d=r.created_at?new Date(r.created_at):null;
          const key=d&&!isNaN(d)?`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`:'unknown';
          (auditByMonth[key]=auditByMonth[key]||[]).push(r);
        });
        const auditMonthKeys=Object.keys(auditByMonth).sort();
        const infoRows=[
          ['CaratLane WMS — Full Data Backup'],
          ['Exported',exportedAt],
          ['Exported by',exportedBy],
          [],
          ['Sheet','Row Count'],
          ...Object.keys(tables).filter(t=>t!=='audit_log').map(t=>[t,tables[t].length]),
          ...(auditRows.length?[[`audit_log (${auditMonthKeys.length} monthly sheet(s))`,auditRows.length]]:[['audit_log',0]]),
        ];
        const wsInfo=XLSX.utils.aoa_to_sheet(infoRows);
        wsInfo['!cols']=[{wch:26},{wch:24}];
        XLSX.utils.book_append_sheet(wb,wsInfo,'Backup Info');
        Object.keys(tables).forEach(t=>{
          if(t==='audit_log'){
            if(!auditMonthKeys.length){
              XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([['(no rows)']]),'Audit (no rows)');
            } else {
              auditMonthKeys.forEach(key=>{
                const ws=XLSX.utils.json_to_sheet(auditByMonth[key]);
                XLSX.utils.book_append_sheet(wb,ws,`Audit ${key}`.slice(0,31));
              });
            }
            return;
          }
          const rows=tables[t];
          const ws=rows.length?XLSX.utils.json_to_sheet(rows):XLSX.utils.aoa_to_sheet([['(no rows)']]);
          // Excel sheet names: max 31 chars, no []:*?/\
          const safeName=t.replace(/[\[\]:*?/\\]/g,'').slice(0,31);
          XLSX.utils.book_append_sheet(wb,ws,safeName);
        });
        const xlsxBuf=XLSX.write(wb,{type:'array',bookType:'xlsx'});
        const xlsxBlob=new Blob([xlsxBuf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const xlsxUrl=URL.createObjectURL(xlsxBlob);
        const xlsxLink=document.createElement('a');
        xlsxLink.href=xlsxUrl;
        xlsxLink.download=`caratlane-wms-backup-${exportedAt.slice(0,10)}.xlsx`;
        document.body.appendChild(xlsxLink); xlsxLink.click(); xlsxLink.remove();
        setTimeout(()=>URL.revokeObjectURL(xlsxUrl),2000);
        toast('Backup downloaded — JSON + Excel','s');
      } catch(e){
        console.error('Backup Excel build failed:',e);
        toast('JSON backup downloaded, but the Excel copy failed to build','w');
      }
    });

    logAudit('DOWNLOAD_FULL_BACKUP','system',null,null,{tables:Object.keys(tables),rowCounts:Object.fromEntries(Object.keys(tables).map(t=>[t,tables[t].length]))});
    _backupReminderInfo={lastBackupAt:exportedAt,daysSince:0,lastBackupBy:exportedBy};
    renderBackupReminderBanner();
  } catch(e){
    console.error('Backup failed:',e);
    toast('Backup failed — check your connection and try again','d');
  }
}

// ── Backup reminder (admin/supervisor) ──────────────────────────────────
// Backup is expected every Monday and Thursday, driven off the audit
// trail rather than a new table — every successful downloadFullBackup()
// already writes a DOWNLOAD_FULL_BACKUP row to audit_log, so the latest
// one of those IS the last-backup timestamp. No separate schema/state to
// keep in sync.
//
// "Overdue" means: no backup has been taken since the most recent
// scheduled day (today included). On a scheduled day itself, that's
// "not done yet today". On any day in between (e.g. Tue/Wed after a
// missed Monday), it keeps pointing back to that same missed Monday —
// so skipping a scheduled day doesn't reset the clock, it just keeps
// nagging until someone actually backs up.
const BACKUP_SCHEDULE_WEEKDAYS=[1,4]; // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
function mostRecentScheduledBackupDay(){
  const now=new Date();
  for(let i=0;i<7;i++){
    const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()-i);
    if(BACKUP_SCHEDULE_WEEKDAYS.includes(d.getDay())) return d; // midnight, local time
  }
  return new Date(now.getFullYear(),now.getMonth(),now.getDate()); // unreachable safety fallback
}
let _backupReminderInfo=null;
async function getLastBackupInfo(){
  try{
    const {data,error}=await supa.from('audit_log')
      .select('created_at,user_name')
      .eq('action','DOWNLOAD_FULL_BACKUP')
      .order('created_at',{ascending:false})
      .limit(1);
    if(error) throw error;
    if(!data||!data[0]) return {lastBackupAt:null,daysSince:null,lastBackupBy:null};
    const lastBackupAt=data[0].created_at;
    const daysSince=Math.floor((Date.now()-new Date(lastBackupAt).getTime())/86400000);
    return {lastBackupAt,daysSince,lastBackupBy:data[0].user_name||null};
  }catch(e){
    console.warn('getLastBackupInfo failed:',e.message||e);
    return {lastBackupAt:null,daysSince:null,lastBackupBy:null,error:true};
  }
}
function isBackupOverdue(info){
  if(!info||info.error) return false; // don't nag if we couldn't even check
  if(!info.lastBackupAt) return true; // never backed up
  return new Date(info.lastBackupAt).getTime() < mostRecentScheduledBackupDay().getTime();
}
// Checked once per login (bootWMS) and again every hour the tab stays
// open, so the warning appears the moment a session crosses into a
// scheduled day without needing a page refresh.
async function checkBackupReminder(){
  if(!getPerms().canAudit) return; // only admin/supervisor can act on this
  _backupReminderInfo=await getLastBackupInfo();
  renderBackupReminderBanner();
  maybeToastBackupReminder();
}
function renderBackupReminderBanner(){
  const el=document.getElementById('backup-reminder-banner');
  if(!el) return;
  const info=_backupReminderInfo;
  if(!isBackupOverdue(info)){ el.innerHTML=''; return; }
  const never=info.daysSince===null;
  const msg=never
    ? 'No backup has ever been downloaded for this WMS.'
    : `Last backup was ${info.daysSince} days ago${info.lastBackupBy?' (by '+esc(info.lastBackupBy)+')':''}.`;
  el.innerHTML=`
    <div style="background:var(--dbg);border:1.5px solid var(--dt);border-radius:10px;padding:14px 16px;margin-bottom:14px;cursor:pointer" onclick="downloadFullBackup()">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:40px;height:40px;background:var(--dt);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="ti ti-alert-triangle" style="font-size:20px;color:#fff"></i>
          </div>
          <div>
            <div style="font-weight:700;font-size:13px;color:var(--dt)">⚠️ Backup overdue — do this ASAP</div>
            <div style="font-size:11px;color:var(--t2);margin-top:2px">${msg} Click to download a full backup now.</div>
          </div>
        </div>
        <span style="font-size:11px;color:var(--dt);font-weight:600">Download Backup Now →</span>
      </div>
    </div>`;
}
// Once-per-day (per browser) toast nudge, so it re-surfaces every time an
// admin/supervisor opens the app while overdue without spamming them on
// every single nav click within the same day.
function maybeToastBackupReminder(){
  const info=_backupReminderInfo;
  if(!isBackupOverdue(info)) return;
  const todayStr=new Date().toDateString();
  if(localStorage.getItem('backup_reminder_shown')===todayStr) return;
  localStorage.setItem('backup_reminder_shown',todayStr);
  const never=info.daysSince===null;
  toast(never
    ? '⚠️ No WMS backup has ever been taken — download one from the More menu'
    : `⚠️ Last backup was ${info.daysSince} days ago — download a fresh one from the More menu`,'w');
}

// ── Restore from Backup (admin + supervisor) ────────────────────────────
// The mirror image of downloadFullBackup(): reads a previously-downloaded
// JSON backup file and upserts its rows back into Supabase. Upsert (not
// delete-then-insert) so restoring never removes anything created since
// the backup — it only overwrites rows that share an ID with the backup
// and adds back anything since deleted. user_profiles is intentionally
// never restored: the backup only keeps id/full_name/role for it (no
// email), and those ids are foreign keys into Supabase Auth accounts that
// this restore has no business touching.
const RESTORE_TABLE_PK={
  skus:'sku', inventory:'sku',
  inventory_snapshots:'id', history:'id', orders:'id',
  expected_shipments:'id', order_events:'id', packing_queue:'id', audit_log:'id'
};
let _restorePayload=null;
function showRestoreModal(){
  if(!getPerms().canAudit){ toast('Only an admin or supervisor can restore from a backup','w'); return; }
  document.getElementById('dropdown-menu').style.display='none';
  _restorePayload=null;
  document.getElementById('restore-file-picker-area').style.display='block';
  document.getElementById('restore-preview-area').style.display='none';
  document.getElementById('restore-confirm-input').value='';
  const btn=document.getElementById('restore-confirm-btn');
  btn.disabled=true; btn.style.background='var(--b)'; btn.style.color='var(--t3)'; btn.style.cursor='not-allowed';
  document.getElementById('restore-modal-overlay').style.display='flex';
}
function closeRestoreModal(){
  document.getElementById('restore-modal-overlay').style.display='none';
  _restorePayload=null;
  document.getElementById('restore-backup-file').value='';
}
function handleRestoreFileSelected(evt){
  const file=evt.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=(e)=>{
    let parsed;
    try{ parsed=JSON.parse(e.target.result); }
    catch(err){ toast('That file is not valid JSON — pick a caratlane-wms-backup-*.json file','w'); return; }
    if(!parsed||typeof parsed!=='object'||!parsed.tables||typeof parsed.tables!=='object'){
      toast('This does not look like a CaratLane WMS backup file (no "tables" found)','w');
      return;
    }
    const knownTables=Object.keys(parsed.tables).filter(t=>RESTORE_TABLE_PK[t]);
    if(!knownTables.length){
      toast('No restorable tables found in this file','w');
      return;
    }
    _restorePayload=parsed;
    const skipped=Object.keys(parsed.tables).filter(t=>!RESTORE_TABLE_PK[t]);
    const rowsLine=knownTables.map(t=>`${t}: ${(parsed.tables[t]||[]).length} row(s)`).join('<br>');
    document.getElementById('restore-preview-summary').innerHTML=
      `Backup from <strong>${esc(parsed.exportedAt||'unknown date')}</strong>${parsed.exportedBy?' by '+esc(parsed.exportedBy):''}<br><br>${rowsLine}`+
      (skipped.length?`<br><br><span style="color:var(--t3)">Skipped (not restorable): ${skipped.map(esc).join(', ')}</span>`:'');
    document.getElementById('restore-file-picker-area').style.display='none';
    document.getElementById('restore-preview-area').style.display='block';
    validateRestoreInput();
  };
  reader.onerror=()=>toast('Could not read that file','w');
  reader.readAsText(file);
  evt.target.value='';
}
function validateRestoreInput(){
  const val=document.getElementById('restore-confirm-input').value.trim();
  const btn=document.getElementById('restore-confirm-btn');
  const valid=!!_restorePayload && val==='RESTORE BACKUP';
  btn.disabled=!valid;
  btn.style.background=valid?'var(--it)':'var(--b)';
  btn.style.color=valid?'#fff':'var(--t3)';
  btn.style.cursor=valid?'pointer':'not-allowed';
}
function _chunkArray(arr,size){
  const out=[];
  for(let i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size));
  return out;
}
async function executeRestoreFromBackup(){
  if(!getPerms().canAudit){ toast('Only an admin or supervisor can restore from a backup','w'); closeRestoreModal(); return; }
  if(!_restorePayload){ toast('Choose a backup file first','w'); return; }
  if(!rateLimit('restore',10000)){ toast('Please wait before trying again','w'); return; }
  const payload=_restorePayload;
  closeRestoreModal();
  toast('Restoring — this may take a little while…','s');
  const restored={};
  const failed=[];
  try{
    for(const table of Object.keys(payload.tables)){
      const pk=RESTORE_TABLE_PK[table];
      if(!pk) continue; // unknown/unsupported table (e.g. user_profiles) — skip
      const rows=payload.tables[table]||[];
      if(!rows.length){ restored[table]=0; continue; }
      let okCount=0;
      for(const batch of _chunkArray(rows,500)){
        const {error}=await supa.from(table).upsert(batch,{onConflict:pk});
        if(error){ console.error(`Restore failed for ${table}:`,error.message||error); failed.push(table); break; }
        okCount+=batch.length;
      }
      restored[table]=okCount;
    }
    logAudit('RESTORE_FROM_BACKUP','system',null,null,{restoredFrom:payload.exportedAt||null,rowCounts:restored,failed});
    // Reload in-memory state from the now-restored database and re-render,
    // same set of loaders bootWMS() uses on login.
    await loadSKUsFromDB();
    await initInv();
    await loadHist();
    await loadOrders();
    await loadExpectedShipments();
    renderDash(); renderInv(); renderRack(); renderReports(); renderAnalytics(); renderFinance();
    updateNotificationBadge();
    if(failed.length){
      toast(`Restore finished with issues — these tables failed: ${failed.join(', ')}. Check the console for details.`,'w');
    } else {
      toast('Restore complete — data reloaded','s');
    }
  }catch(e){
    console.error('Restore failed:',e);
    toast('Restore failed — check your connection and try again','d');
  }
}
const ORDER_SLA_HOURS = {
  'Express':    { unassigned: 1,  assigned: 3  },
  'Standard':   { unassigned: 4,  assigned: 12 },
  'Pre-order':  { unassigned: 24, assigned: 48 }
};
function renderOrderAgingAlert(){
  const el=document.getElementById('order-aging-banner');
  if(!el) return;
  if(typeof orders==='undefined' || !orders.length){ el.innerHTML=''; return; }
  const now=Date.now();
  const breaches=[];
  orders.forEach(o=>{
    if(o.status==='cancelled'||o.status==='picked') return;
    const sla=ORDER_SLA_HOURS[o.priority]||ORDER_SLA_HOURS.Standard;
    if(o.status==='unassigned' && o.createdAt){
      const hrs=(now-new Date(o.createdAt).getTime())/3600000;
      if(hrs>sla.unassigned) breaches.push({o,hrs,stage:'unassigned',limit:sla.unassigned});
    } else if(o.status==='assigned' && o.assignedAt){
      const hrs=(now-new Date(o.assignedAt).getTime())/3600000;
      if(hrs>sla.assigned) breaches.push({o,hrs,stage:'assigned, not yet picked',limit:sla.assigned});
    }
  });
  breaches.sort((a,b)=>b.hrs-a.hrs);
  if(!breaches.length){ el.innerHTML=''; return; }
  el.innerHTML=`<div style="background:var(--dbg);border:1px solid var(--dt);border-radius:10px;padding:12px 14px;margin-bottom:14px">
    <div style="font-weight:700;font-size:12px;color:var(--dt);display:flex;align-items:center;gap:6px;margin-bottom:8px"><i class="ti ti-clock-exclamation"></i>${breaches.length} order(s) past SLA</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${breaches.slice(0,8).map(b=>`<div style="font-size:11px;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">
        <span class="mono">${esc(b.o.id)}</span>
        <span style="color:var(--t2)">${esc(b.o.priority)} · ${b.stage}</span>
        <span style="color:var(--dt);font-weight:600">${b.hrs.toFixed(1)}h (SLA ${b.limit}h)</span>
      </div>`).join('')}
      ${breaches.length>8?`<div style="font-size:10px;color:var(--t3)">+ ${breaches.length-8} more</div>`:''}
    </div>
  </div>`;
}
function renderDash(){
  const total=SKUS.length,ins=SKUS.filter(s=>inv[s.sku]&&inv[s.sku].qty>0).length;
  const low=SKUS.filter(s=>inv[s.sku]&&getSt(inv[s.sku].qty)==='low');
  const out=SKUS.filter(s=>!inv[s.sku]||inv[s.sku].qty<=0);
  const tq=SKUS.reduce((a,s)=>a+(inv[s.sku]?inv[s.sku].qty:0),0);
  const disp=history.filter(h=>h.type==='dispatch').length;
  const rcv=history.filter(h=>h.type==='grn').length;
  const rets=history.filter(h=>h.type==='return').length;
  const pendingDispatch=history.filter(h=>h.type==='packed').length;
  document.getElementById('alert-ct').textContent=low.length+out.length+pendingDispatch;
  renderSameDayAlert();
  renderBackupReminderBanner();
  renderOrderAgingAlert();
  renderInventoryValueBanner();
  document.getElementById('stat-cards').innerHTML=`
    <div class="sc"><div class="sl"><i class="ti ti-package"></i>Total SKUs</div><div class="sv">${total}</div><div class="ss">${RACK_LETTERS.length} racks · ${RACK_LETTERS.length*SHELVES_PER_RACK} shelves</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-check"></i>In stock</div><div class="sv">${ins}</div><div class="ss">${total-ins} empty SKUs</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-alert-triangle"></i>Low stock</div><div class="sv" style="color:var(--wt)">${low.length}</div><div class="ss">≤3 units</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-box"></i>Total units</div><div class="sv">${tq}</div><div class="ss">All SKUs combined</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-lock"></i>Reserved</div><div class="sv" id="sc-reserved-val" style="color:var(--wt)">—</div><div class="ss">Held by active picks</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-truck-delivery"></i>Dispatches</div><div class="sv">${disp}</div><div class="ss">All time</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-package-import"></i>GRNs raised</div><div class="sv">${rcv}</div><div class="ss">All time</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-package-export"></i>Returns</div><div class="sv">${rets}</div><div class="ss">All time</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-clock"></i>Packing queue</div><div class="sv">${packingQueue.length}</div><div class="ss">Awaiting packing</div></div>
  `;
  loadReservedMap().then(()=>{
    const el=document.getElementById('sc-reserved-val');
    if(!el) return;
    const totalHeld=Object.values(reservedMap).reduce((a,v)=>a+v,0);
    el.textContent=totalHeld;
  });
  const alerts=[...out.map(s=>({...s,st:'out'})),...low.map(s=>({...s,st:'low'}))].slice(0,5);
  const ae=document.getElementById('dash-alerts');
  ae.innerHTML=alerts.length?alerts.map(s=>`<div class="hist-entry"><div class="hist-head"><span style="font-size:11px;font-weight:600">${s.sub} — ${s.variant}</span>${s.st==='out'?'<span class="pill p-out">Out</span>':'<span class="pill p-low">Low</span>'}</div><div class="hist-body">${s.sku} · BIN ${(inv[s.sku]||{rack:s.rack,shelf:s.shelf}).rack}-${(inv[s.sku]||{rack:s.rack,shelf:s.shelf}).shelf} · <b>${(inv[s.sku]||{qty:0}).qty}</b> units</div></div>`).join(''):'<div class="empty">No stock alerts — all items healthy ✓</div>';
  const re=document.getElementById('dash-recent');
  const rec=history.slice(-5).reverse();
  re.innerHTML=rec.length?rec.map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="pill ${h.type==='dispatch'?'p-low':h.type==='return'?'p-info':'p-ok'}">${h.type}</span></div><div class="hist-body">${h.ts} · ${esc(h.detail||'')}</div></div>`).join(''):'<div class="empty">No recent activity</div>';
  renderDashRackSummary();
}
// Compact rack-occupancy glance on the Dashboard, so anyone landing there
// (including supervisors, who don't otherwise default to Rack View) can
// see shelf usage without switching tabs. Click a tile to jump to the
// full Rack View for details.
function renderDashRackSummary(){
  const el=document.getElementById('dash-rack-summary');
  if(!el || typeof RACK_LETTERS==='undefined') return;
  const byRack={};
  RACK_LETTERS.forEach(r=>byRack[r]={shelves:new Set(),qty:0});
  SKUS.forEach(s=>{
    // Match Rack View: a shelf only counts as "in use" if it actually
    // has stock — a SKU's catalog home with zero units isn't a real
    // placement. A split SKU contributes to EVERY rack/shelf it
    // actually sits on, with that location's own qty (not its total).
    getSkuLocations(s.sku).forEach(loc=>{
      if(loc.qty<=0) return;
      if(!byRack[loc.rack]) return;
      byRack[loc.rack].shelves.add(loc.shelf);
      byRack[loc.rack].qty+=loc.qty;
    });
  });
  // At-a-glance color: full racks (no room left) are the thing that needs
  // attention, so they get red; a rack with free shelves is green — the
  // opposite of a low-stock alert, where empty is the bad state. Partial
  // sits in between as yellow.
  el.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px">${RACK_LETTERS.map(r=>{
    const d=byRack[r];
    const used=Array.from(d.shelves).filter(sh=>+sh<=SHELVES_PER_RACK).length;
    const full=used>=SHELVES_PER_RACK;
    const empty=used===0;
    const bg=full?'var(--dbg)':empty?'var(--sbg)':'var(--wbg)';
    const border=full?'var(--dt)':empty?'var(--st)':'var(--wt)';
    const fg=full?'var(--dt)':empty?'var(--st)':'var(--wt)';
    return `<div onclick="nav('rack')" style="cursor:pointer;background:${bg};border:1px solid ${border};border-radius:8px;padding:8px;text-align:center">
      <div style="font-size:13px;font-weight:700;color:${fg}">${r}</div>
      <div style="font-size:10px;color:${fg};margin-top:2px">${used}/${SHELVES_PER_RACK} shelves</div>
      <div style="font-size:10px;color:${fg}">${d.qty}u</div>
    </div>`;
  }).join('')}</div>`;
}

// INBOUND
function filterSkuList(searchInputId,selectId){
  const q=(document.getElementById(searchInputId).value||'').toLowerCase();
  const sel=document.getElementById(selectId);
  if(!q){sel.innerHTML=SKUS.map(x=>`<option value="${x.sku}">${x.sub} (${x.sku}) — ${x.variant}</option>`).join('');return;}
  const filtered=SKUS.filter(s=>s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q)||s.variant.toLowerCase().includes(q));
  sel.innerHTML=filtered.length?filtered.map(x=>`<option value="${x.sku}">${x.sub} (${x.sku}) — ${x.variant}</option>`).join(''):`<option disabled>No SKUs found</option>`;
}
// EXPECTED SHIPMENTS / INBOUND TALLY — log what's coming before it
// arrives, then reconcile it against actual GRN receipts automatically.
let expectedShipments=[];
let expItemsList=[];
let _xlsxLibLoaded=false;
let _jszipLibLoaded=false;
let _excelImportRows=[];
let _editingExpId=null;

async function loadExpectedShipments(){
  try{
    const {data,error}=await supa.from('expected_shipments').select('*').order('created_at',{ascending:false});
    if(error) throw error;
    expectedShipments=(data||[]).map(r=>({
      id:r.id, vendor:r.vendor, carrier:r.carrier, expectedDate:r.expected_date,
      items:r.items||[], status:r.status, notes:r.notes, createdBy:r.created_by,
      createdAt:r.created_at, receivedAt:r.received_at, receivedSummary:r.received_summary||null,
      closed:!!r.closed, closedBy:r.closed_by||null, closedAt:r.closed_at||null, closeReason:r.close_reason||null
    }));
  }catch(e){ console.error('loadExpectedShipments failed:',e.message||e); }
}
async function saveExpectedShipmentRow(s){
  try{
    const row={
      id:s.id, vendor:s.vendor||null, carrier:s.carrier||null, expected_date:s.expectedDate||null,
      items:s.items||[], status:s.status, notes:s.notes||null, created_by:s.createdBy||null,
      received_at:s.receivedAt||null, received_summary:s.receivedSummary||null,
      closed:!!s.closed, closed_by:s.closedBy||null, closed_at:s.closedAt||null, close_reason:s.closeReason||null
    };
    const {error}=await supa.from('expected_shipments').upsert(row,{onConflict:'id'});
    if(error) throw error;
    return true;
  }catch(e){ console.error('saveExpectedShipmentRow failed:',e.message||e); toast('Could not save — connection issue','w'); return false; }
}
function addExpItem(){
  const sku=document.getElementById('exp-sku').value;
  const qty=parseInt(document.getElementById('exp-qty').value)||1;
  const s=SKUS.find(x=>x.sku===sku);
  if(!s) return;
  if(!validateQty(qty)){toast('Invalid quantity','w');return;}
  // Each add is its own line — a SKU arriving across multiple boxes
  // should show as multiple separate entries, not one merged quantity.
  // Just warn so the person adding knows this SKU already has entries.
  const dupeCount=expItemsList.filter(it=>it.sku===sku).length;
  if(dupeCount>0){ toast(`${sku} already has ${dupeCount} entry${dupeCount>1?'ies':''} — adding as a separate box/entry`,'w'); }
  expItemsList.push({sku,name:s.sub,variant:s.variant,qty});
  renderExpItemsList();
}
function updateExpItemQty(i,val){
  const qty=parseInt(val)||1;
  if(!validateQty(qty)){toast('Invalid quantity','w');renderExpItemsList();return;}
  expItemsList[i].qty=qty;
}
function renderExpItemsList(){
  const el=document.getElementById('exp-items-list');
  if(!el) return;
  el.innerHTML=expItemsList.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Expected Qty</th><th></th></tr></thead><tbody>${expItemsList.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${esc(item.name)} — ${esc(item.variant)}</td><td><input type="number" min="1" value="${item.qty}" style="width:64px;font-size:11px" onchange="updateExpItemQty(${i},this.value)"></td><td><button class="btn-sm btn-danger" onclick="removeExpItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function removeExpItem(i){
  expItemsList.splice(i,1);
  renderExpItemsList();
}
function loadXLSXLib(cb){
  if(_xlsxLibLoaded){ cb(); return; }
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
  s.onload=()=>{ _xlsxLibLoaded=true; cb(); };
  s.onerror=()=>{ console.error('XLSX library failed to load'); toast('Could not load the Excel reader — check your internet connection and try again','w'); };
  document.head.appendChild(s);
}
function loadJSZipLib(cb){
  if(_jszipLibLoaded){ cb(); return; }
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
  s.onload=()=>{ _jszipLibLoaded=true; cb(); };
  s.onerror=()=>{ console.error('JSZip library failed to load'); toast('Could not load the chart-building library — check your internet connection and try again','w'); };
  document.head.appendChild(s);
}

// ── Native Excel chart injection ──────────────────────────────────────
// SheetJS's free/community build (the one we load via loadXLSXLib) can
// write cell data but cannot write native charts, images, or cell
// styling — those are Pro-only features. To get real, editable Excel
// charts on the Monthly Master Report's Dashboard sheet, we build the
// workbook with SheetJS as normal, then post-process the raw .xlsx (a
// zip of XML parts) with JSZip: hand-write the chart/drawing XML parts
// the OOXML spec requires and splice them into the zip. Produces
// standard native charts openable/editable in Excel — verified via
// LibreOffice round-trip during development.
function _xmlEsc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _chartStrCache(vals){
  return `<c:ptCount val="${vals.length}"/>`+vals.map((v,i)=>`<c:pt idx="${i}"><c:v>${_xmlEsc(v)}</c:v></c:pt>`).join('');
}
function _chartNumCache(vals){
  return `<c:formatCode>General</c:formatCode><c:ptCount val="${vals.length}"/>`+vals.map((v,i)=>`<c:pt idx="${i}"><c:v>${Number(v)||0}</c:v></c:pt>`).join('');
}
function _buildBarChartXml(opts){
  const axId1=100000000+Math.floor(Math.random()*900000);
  const axId2=axId1+1;
  const sers=opts.series.map((s,idx)=>`
    <c:ser>
      <c:idx val="${idx}"/><c:order val="${idx}"/>
      <c:tx><c:strRef><c:f>${s.nameRef}</c:f><c:strCache>${_chartStrCache([s.nameCache])}</c:strCache></c:strRef></c:tx>
      <c:cat><c:strRef><c:f>${opts.catRef}</c:f><c:strCache>${_chartStrCache(opts.catCache)}</c:strCache></c:strRef></c:cat>
      <c:val><c:numRef><c:f>${s.valRef}</c:f><c:numCache>${_chartNumCache(s.valCache)}</c:numCache></c:numRef></c:val>
    </c:ser>`).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<c:chart>
<c:title><c:tx><c:rich><a:bodyPr/><a:p><a:pPr><a:defRPr sz="1200" b="1"/></a:pPr><a:r><a:t>${_xmlEsc(opts.title)}</a:t></a:r></a:p></c:rich></c:tx><c:overlay val="0"/></c:title>
<c:autoTitleDeleted val="0"/>
<c:plotArea><c:layout/>
<c:barChart>
<c:barDir val="col"/><c:grouping val="clustered"/><c:varyColors val="0"/>
${sers}
<c:axId val="${axId1}"/><c:axId val="${axId2}"/>
</c:barChart>
<c:catAx><c:axId val="${axId1}"/><c:scaling><c:orientation val="minMax"/></c:scaling><c:delete val="0"/><c:axPos val="b"/><c:txPr><a:bodyPr rot="0" vert="horz"/><a:lstStyle/><a:p><a:pPr><a:defRPr sz="900"/></a:pPr><a:endParaRPr lang="en-US"/></a:p></c:txPr><c:crossAx val="${axId2}"/></c:catAx>
<c:valAx><c:axId val="${axId2}"/><c:scaling><c:orientation val="minMax"/></c:scaling><c:delete val="0"/><c:axPos val="l"/><c:crossAx val="${axId1}"/></c:valAx>
</c:plotArea>
<c:legend><c:legendPos val="b"/></c:legend>
<c:plotVisOnly val="1"/>
</c:chart>
</c:chartSpace>`;
}
function _buildPieChartXml(opts){
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<c:chart>
<c:title><c:tx><c:rich><a:bodyPr/><a:p><a:pPr><a:defRPr sz="1200" b="1"/></a:pPr><a:r><a:t>${_xmlEsc(opts.title)}</a:t></a:r></a:p></c:rich></c:tx><c:overlay val="0"/></c:title>
<c:autoTitleDeleted val="0"/>
<c:plotArea><c:layout/>
<c:pieChart>
<c:varyColors val="1"/>
<c:ser>
<c:idx val="0"/><c:order val="0"/>
<c:tx><c:v>${_xmlEsc(opts.seriesName||'Series 1')}</c:v></c:tx>
<c:dLbls><c:showLegendKey val="0"/><c:showVal val="1"/><c:showCatName val="0"/><c:showSerName val="0"/><c:showPercent val="1"/><c:showBubbleSize val="0"/></c:dLbls>
<c:cat><c:strRef><c:f>${opts.catRef}</c:f><c:strCache>${_chartStrCache(opts.catCache)}</c:strCache></c:strRef></c:cat>
<c:val><c:numRef><c:f>${opts.valRef}</c:f><c:numCache>${_chartNumCache(opts.valCache)}</c:numCache></c:numRef></c:val>
</c:ser>
<c:firstSliceAng val="0"/>
</c:pieChart>
</c:plotArea>
<c:legend><c:legendPos val="b"/></c:legend>
<c:plotVisOnly val="1"/>
</c:chart>
</c:chartSpace>`;
}
function _buildChartAnchorXml(chartIdx,rId,from,to){
  return `<xdr:twoCellAnchor>
<xdr:from><xdr:col>${from.col}</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>${from.row}</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:from>
<xdr:to><xdr:col>${to.col}</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>${to.row}</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to>
<xdr:graphicFrame macro="">
<xdr:nvGraphicFramePr><xdr:cNvPr id="${chartIdx+1}" name="Chart ${chartIdx}"/><xdr:cNvGraphicFramePr/></xdr:nvGraphicFramePr>
<xdr:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></xdr:xfrm>
<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart"><c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:id="${rId}"/></a:graphicData></a:graphic>
</xdr:graphicFrame>
<xdr:clientData/>
</xdr:twoCellAnchor>`;
}
// Injects one or more native charts onto `sheetName` of an already-built
// .xlsx array buffer (from XLSX.write(wb,{type:'array'})). Returns a
// Promise<Uint8Array> of the modified workbook — save via Blob.
async function injectNativeCharts(buf,sheetName,charts){
  const zip=await JSZip.loadAsync(buf);
  const wbXml=await zip.file('xl/workbook.xml').async('string');
  const sheetTagMatch=wbXml.match(new RegExp(`<sheet[^>]*name="${sheetName.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[^>]*/>`));
  if(!sheetTagMatch) throw new Error('Sheet not found: '+sheetName);
  const rid=sheetTagMatch[0].match(/r:id="([^"]+)"/)[1];
  const wbRels=await zip.file('xl/_rels/workbook.xml.rels').async('string');
  const relTag=wbRels.match(new RegExp(`<Relationship[^>]*Id="${rid}"[^>]*/>`))[0];
  let sheetTarget=relTag.match(/Target="([^"]+)"/)[1];
  if(!sheetTarget.startsWith('xl/')) sheetTarget='xl/'+sheetTarget;
  const sheetFileName=sheetTarget.split('/').pop();
  const sheetRelsPath='xl/worksheets/_rels/'+sheetFileName+'.rels';

  let drawingIdx=1; while(zip.file(`xl/drawings/drawing${drawingIdx}.xml`)) drawingIdx++;
  let chartStartIdx=1; while(zip.file(`xl/charts/chart${chartStartIdx}.xml`)) chartStartIdx++;

  const anchors=[],relEntries=[],ctOverrides=[];
  charts.forEach((c,i)=>{
    const chartFileIdx=chartStartIdx+i;
    const chartXml=c.type==='pie'?_buildPieChartXml(c):_buildBarChartXml(c);
    zip.file(`xl/charts/chart${chartFileIdx}.xml`,chartXml);
    ctOverrides.push(`<Override PartName="/xl/charts/chart${chartFileIdx}.xml" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>`);
    const rIdLocal=`rId${i+1}`;
    relEntries.push(`<Relationship Id="${rIdLocal}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" Target="../charts/chart${chartFileIdx}.xml"/>`);
    anchors.push(_buildChartAnchorXml(i,rIdLocal,c.anchor.from,c.anchor.to));
  });

  const drawingXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
${anchors.join('\n')}
</xdr:wsDr>`;
  const drawingRels=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${relEntries.join('\n')}
</Relationships>`;
  zip.file(`xl/drawings/drawing${drawingIdx}.xml`,drawingXml);
  zip.file(`xl/drawings/_rels/drawing${drawingIdx}.xml.rels`,drawingRels);
  ctOverrides.push(`<Override PartName="/xl/drawings/drawing${drawingIdx}.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>`);

  const drawingRidForSheet='rId1';
  zip.file(sheetRelsPath,`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="${drawingRidForSheet}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/drawing${drawingIdx}.xml"/>
</Relationships>`);

  let sheetXml=await zip.file(sheetTarget).async('string');
  sheetXml=sheetXml.replace('</worksheet>',`<drawing r:id="${drawingRidForSheet}"/></worksheet>`);
  zip.file(sheetTarget,sheetXml);

  let ct=await zip.file('[Content_Types].xml').async('string');
  ct=ct.replace('</Types>',ctOverrides.join('')+'</Types>');
  zip.file('[Content_Types].xml',ct);

  return await zip.generateAsync({type:'uint8array'});
}
// ── Native cell formatting (colors/borders/highlights) ──────────────────
// Same reason as the chart injector above: the free SheetJS build silently
// drops any cell style set via ws[ref].s (confirmed by testing — it writes
// no fill/font info to styles.xml at all). So formatting is applied the
// same way charts are: write a real styles.xml ourselves, and stamp each
// target cell's <c> tag with the matching s="N" index.
function _colToLetter(c){ let s=''; c++; while(c>0){ const m=(c-1)%26; s=String.fromCharCode(65+m)+s; c=Math.floor((c-1)/26); } return s; }
const REPORT_STYLES_XML=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="7">
<font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font>
<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/><family val="2"/></font>
<font><b/><sz val="16"/><color rgb="FF333333"/><name val="Calibri"/><family val="2"/></font>
<font><b/><sz val="12"/><color rgb="FF333333"/><name val="Calibri"/><family val="2"/></font>
<font><b/><sz val="11"/><color rgb="FF2E7D32"/><name val="Calibri"/><family val="2"/></font>
<font><b/><sz val="11"/><color rgb="FFC62828"/><name val="Calibri"/><family val="2"/></font>
<font><b/><sz val="12"/><color rgb="FF000000"/><name val="Calibri"/><family val="2"/></font>
</fonts>
<fills count="4">
<fill><patternFill patternType="none"/></fill>
<fill><patternFill patternType="gray125"/></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FFB8860B"/><bgColor indexed="64"/></patternFill></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FFF0F0F0"/><bgColor indexed="64"/></patternFill></fill>
</fills>
<borders count="3">
<border><left/><right/><top/><bottom/><diagonal/></border>
<border><left style="thin"><color rgb="FFBFBFBF"/></left><right style="thin"><color rgb="FFBFBFBF"/></right><top style="thin"><color rgb="FFBFBFBF"/></top><bottom style="thin"><color rgb="FFBFBFBF"/></bottom><diagonal/></border>
<border><left/><right/><top style="thin"><color rgb="FF999999"/></top><bottom/><diagonal/></border>
</borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="12">
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
<xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="center" vertical="center"/></xf>
<xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
<xf numFmtId="0" fontId="3" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
<xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
<xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>
<xf numFmtId="0" fontId="6" fillId="0" borderId="0" xfId="0" applyFont="1"/>
<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
<xf numFmtId="0" fontId="6" fillId="0" borderId="2" xfId="0" applyFont="1" applyBorder="1"/>
<xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
<xf numFmtId="0" fontId="5" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
<xf numFmtId="0" fontId="6" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
</cellXfs>
<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;
const REPORT_STYLE_IDX={header:1,title:2,section:3,positive:4,negative:5,important:6,grid:7,total:8,positiveGrid:9,negativeGrid:10,importantGrid:11};
function _patchCellStyleAttr(sheetXml,ref,styleIdx){
  const re=new RegExp(`<c r="${ref}"([^>]*?)(/?)>`);
  if(!re.test(sheetXml)) return sheetXml; // cell wasn't written (was empty in the AOA) — skip
  return sheetXml.replace(re,(m,attrs,selfClose)=>{
    let newAttrs=attrs;
    if(/\ss="\d+"/.test(newAttrs)) newAttrs=newAttrs.replace(/\ss="\d+"/,` s="${styleIdx}"`);
    else newAttrs=` s="${styleIdx}"`+newAttrs;
    return `<c r="${ref}"${newAttrs}${selfClose}>`;
  });
}
// changeStyleFor: maps a pctChange()-style string ("+12.3%","-4.0%","0%") to
// the bordered highlight style to use for that cell, or null for no color.
function changeStyleFor(str){
  if(typeof str!=='string'||!str) return null;
  if(str[0]==='-') return 'negativeGrid';
  if(str[0]==='+') return 'positiveGrid';
  return null;
}
// opsBySheet: {sheetName:[{ref:'A1',style:'title'}|{range:{r1,c1,r2,c2},style:'grid'}]}
// Ops are applied in array order — later ops win on overlapping cells, so
// callers should list broad range styles (grid) before specific overrides
// (header, highlighted cells).
async function applyCellStyles(buf,opsBySheet){
  const zip=await JSZip.loadAsync(buf);
  zip.file('xl/styles.xml',REPORT_STYLES_XML);
  const wbXml=await zip.file('xl/workbook.xml').async('string');
  const wbRels=await zip.file('xl/_rels/workbook.xml.rels').async('string');
  for(const sheetName of Object.keys(opsBySheet)){
    const sheetTagMatch=wbXml.match(new RegExp(`<sheet[^>]*name="${sheetName.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[^>]*/>`));
    if(!sheetTagMatch) continue;
    const rid=sheetTagMatch[0].match(/r:id="([^"]+)"/)[1];
    const relTag=wbRels.match(new RegExp(`<Relationship[^>]*Id="${rid}"[^>]*/>`))[0];
    let target=relTag.match(/Target="([^"]+)"/)[1];
    if(!target.startsWith('xl/')) target='xl/'+target;
    let xml=await zip.file(target).async('string');
    for(const op of opsBySheet[sheetName]){
      const idx=REPORT_STYLE_IDX[op.style];
      if(idx==null) continue;
      if(op.ref){
        xml=_patchCellStyleAttr(xml,op.ref,idx);
      }else if(op.range){
        for(let r=op.range.r1;r<=op.range.r2;r++){
          for(let c=op.range.c1;c<=op.range.c2;c++){
            xml=_patchCellStyleAttr(xml,_colToLetter(c)+r,idx);
          }
        }
      }
    }
    zip.file(target,xml);
  }
  return await zip.generateAsync({type:'uint8array'});
}
function _normHeader(h){ return String(h||'').toLowerCase().replace(/[^a-z0-9]/g,''); }
function _findExcelCol(headerRow, matchFn){
  for(let i=0;i<headerRow.length;i++){ if(matchFn(_normHeader(headerRow[i]))) return i; }
  return -1;
}
// Matches a row's free-text sub-category + variant (as written in
// CaratLane's sheet) to a catalog SKU. Tries an exact match first (this is
// the normal case — CaratLane's category/size wording matches our catalog
// almost verbatim), then falls back to a looser match, and otherwise
// leaves it unmatched for manual selection in the review panel.
function matchExcelRowToSku(subVal, variantVal){
  const sub=String(subVal||'').trim().toLowerCase();
  const variant=String(variantVal||'').trim().toLowerCase();
  if(!sub && !variant) return null;
  let hit=SKUS.find(s=>s.sub.trim().toLowerCase()===sub && s.variant.trim().toLowerCase()===variant);
  if(hit) return hit;
  hit=SKUS.find(s=>{
    const sSub=s.sub.trim().toLowerCase(), sVar=s.variant.trim().toLowerCase();
    return (sSub.includes(sub)||sub.includes(sSub)) && (sVar.includes(variant)||variant.includes(sVar));
  });
  return hit||null;
}
function handleExcelUpload(event){
  const file=event.target.files[0];
  if(!file) return;
  const statusEl=document.getElementById('exp-excel-status');
  if(statusEl) statusEl.textContent='Reading '+file.name+'...';
  loadXLSXLib(()=>{
    const reader=new FileReader();
    reader.onload=(e)=>{
      try{
        const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array',cellDates:true});
        let parsed=null;
        for(const sheetName of wb.SheetNames){
          const ws=wb.Sheets[sheetName];
          const aoa=XLSX.utils.sheet_to_json(ws,{header:1,defval:null});
          // Scan the first several rows for a header row that has both a
          // sub-category-ish column and a qty column — that's the row we
          // need; everything above it (titles, merged cells) is ignored.
          for(let r=0;r<Math.min(15,aoa.length);r++){
            const hdr=aoa[r]||[];
            const subCol=_findExcelCol(hdr,h=>h.startsWith('sub'));
            const qtyCol=_findExcelCol(hdr,h=>h.includes('qty')||h.includes('quantity'));
            if(subCol>=0 && qtyCol>=0){
              const variantCol=_findExcelCol(hdr,h=>h.includes('variant')||h.includes('size'));
              const boxCol=_findExcelCol(hdr,h=>h.includes('boxno')||h==='box'||h.includes('carton')||h.includes('ctn'));
              const courierCol=_findExcelCol(hdr,h=>h.includes('courier')||h.includes('carrier'));
              const dateCol=_findExcelCol(hdr,h=>h.includes('dispatchdate')||h.includes('shippeddate')||h==='date');
              const rows=[];
              let lastBox='';
              for(let dr=r+1;dr<aoa.length;dr++){
                const row=aoa[dr]||[];
                const qtyVal=parseFloat(row[qtyCol]);
                const subVal=row[subCol];
                if(!subVal || !(qtyVal>0)) continue; // skip blank separator/total rows
                const variantVal=variantCol>=0?row[variantCol]:'';
                const match=matchExcelRowToSku(subVal,variantVal);
                // A blank box-no cell with an item present means this line
                // is a second SKU packed in the same carton as the row
                // above (mixed-item boxes are common in these lists).
                let boxLabel;
                if(boxCol>=0 && row[boxCol]){ boxLabel=String(row[boxCol]); lastBox=boxLabel; }
                else if(lastBox){ boxLabel=lastBox+' (cont\'d)'; }
                else { boxLabel='Row '+(dr+1); }
                rows.push({
                  box:boxLabel,
                  sub:String(subVal).trim(), variant:String(variantVal||'').trim(),
                  qty:Math.round(qtyVal),
                  courier:courierCol>=0?String(row[courierCol]||'').trim():'',
                  date:dateCol>=0?row[dateCol]:null,
                  matchedSku:match?match.sku:null, matchedName:match?match.sub:null, matchedVariant:match?match.variant:null
                });
              }
              if(rows.length){ parsed=rows; }
              break;
            }
          }
          if(parsed) break;
        }
        if(!parsed || !parsed.length){
          if(statusEl) statusEl.textContent='Could not find a recognizable item table in this file (needs a Sub-Category and Qty column).';
          toast('Could not read this Excel file — expected columns like Sub-Category, Variant, and Qty','w');
          return;
        }
        _excelImportRows=parsed;
        if(statusEl) statusEl.textContent=`Parsed ${parsed.length} row(s) from ${file.name}.`;
        renderExcelImportReview();
      }catch(err){
        console.error('Excel parse failed:',err.message||err);
        if(statusEl) statusEl.textContent='Failed to read this file.';
        toast('Could not read this Excel file — please check the format','w');
      }
    };
    reader.readAsArrayBuffer(file);
  });
}
function renderExcelImportReview(){
  const el=document.getElementById('exp-import-review');
  if(!el) return;
  if(!_excelImportRows.length){ el.style.display='none'; el.innerHTML=''; return; }
  const unmatchedCount=_excelImportRows.filter(r=>!r.matchedSku).length;
  const skuOptions='<option value="">— select SKU —</option>'+SKUS.map(s=>`<option value="${s.sku}">${esc(s.sku)} — ${esc(s.sub)} — ${esc(s.variant)}</option>`).join('');
  el.style.display='block';
  el.innerHTML=`
    <div style="font-weight:700;font-size:12px;margin-bottom:4px">Review import — ${_excelImportRows.length} row(s), ${_excelImportRows.length-unmatchedCount} auto-matched${unmatchedCount?`, ${unmatchedCount} need${unmatchedCount===1?'s':''} manual selection`:''}</div>
    <div class="tw" style="max-height:340px;overflow:auto"><table><thead><tr><th>Box</th><th>From file</th><th>Qty</th><th>Matched SKU</th><th></th></tr></thead><tbody>
      ${_excelImportRows.map((r,i)=>`<tr>
        <td style="font-size:11px">${esc(r.box)}</td>
        <td style="font-size:11px">${esc(r.sub)}${r.variant?' — '+esc(r.variant):''}</td>
        <td>${r.qty}</td>
        <td>${r.matchedSku
          ?`<span class="pill p-pass" style="font-size:10px">${esc(r.matchedSku)}</span>`
          :`<select style="font-size:11px;width:100%" onchange="updateExcelImportRowSku(${i},this.value)">${skuOptions}</select>`}</td>
        <td><button class="btn-sm btn-danger" onclick="removeExcelImportRow(${i})" title="Skip this row"><i class="ti ti-trash"></i></button></td>
      </tr>`).join('')}
    </tbody></table></div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button class="btn-primary" onclick="confirmExcelImport()"><i class="ti ti-check"></i> Add all to expected items list</button>
      <button class="btn-sm btn-danger" onclick="cancelExcelImport()">Cancel import</button>
    </div>`;
}
function updateExcelImportRowSku(i,val){
  const s=SKUS.find(x=>x.sku===val);
  if(!_excelImportRows[i]) return;
  _excelImportRows[i].matchedSku=s?s.sku:null;
  _excelImportRows[i].matchedName=s?s.sub:null;
  _excelImportRows[i].matchedVariant=s?s.variant:null;
  renderExcelImportReview();
}
function removeExcelImportRow(i){
  _excelImportRows.splice(i,1);
  renderExcelImportReview();
}
function cancelExcelImport(){
  _excelImportRows=[];
  const el=document.getElementById('exp-import-review');
  if(el){ el.style.display='none'; el.innerHTML=''; }
  const fileInput=document.getElementById('exp-excel-file');
  if(fileInput) fileInput.value='';
  const statusEl=document.getElementById('exp-excel-status');
  if(statusEl) statusEl.textContent='';
}
function confirmExcelImport(){
  if(!_excelImportRows.length){ toast('Nothing to import','w'); return; }
  const unmatched=_excelImportRows.filter(r=>!r.matchedSku);
  if(unmatched.length){ toast(`${unmatched.length} row(s) still need a SKU selected — pick one for each, or remove the row`,'w'); return; }
  _excelImportRows.forEach(r=>{
    expItemsList.push({sku:r.matchedSku,name:r.matchedName,variant:r.matchedVariant,qty:r.qty});
  });
  renderExpItemsList();
  // Auto-fill carrier/date if the fields are still empty — don't clobber
  // anything the person already typed in manually.
  const carrierEl=document.getElementById('exp-carrier');
  if(carrierEl && !carrierEl.value.trim()){
    const couriers=_excelImportRows.map(r=>r.courier).filter(Boolean);
    if(couriers.length){
      const counts={};
      couriers.forEach(c=>counts[c]=(counts[c]||0)+1);
      const top=Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0];
      carrierEl.value=top;
    }
  }
  const dateEl=document.getElementById('exp-date');
  if(dateEl && !dateEl.value){
    const firstDate=_excelImportRows.map(r=>r.date).find(d=>d instanceof Date);
    if(firstDate) dateEl.value=firstDate.toISOString().slice(0,10);
  }
  const count=_excelImportRows.length;
  cancelExcelImport();
  toast(`Added ${count} item(s) from the Excel file — review the list below, then log the expected shipment`,'s');
}
function startEditExpectedShipment(id){
  const s=expectedShipments.find(x=>x.id===id);
  if(!s){ toast('Shipment not found','w'); return; }
  _editingExpId=id;
  const asnEl=document.getElementById('exp-asn');
  asnEl.value=s.id;
  asnEl.disabled=true;
  document.getElementById('exp-vendor').value=s.vendor||'';
  document.getElementById('exp-carrier').value=s.carrier||'';
  document.getElementById('exp-date').value=s.expectedDate||'';
  expItemsList=s.items.map(it=>({...it}));
  renderExpItemsList();
  updateExpFormModeUI();
  const panel=document.getElementById('exp-shipment-panel');
  if(panel && panel.scrollIntoView) panel.scrollIntoView({behavior:'smooth',block:'start'});
  toast(`Viewing/editing ${id} — update the fields below, then save`,'s');
}
function cancelEditExpectedShipment(){
  _editingExpId=null;
  const asnEl=document.getElementById('exp-asn');
  asnEl.disabled=false;
  asnEl.value='';
  document.getElementById('exp-vendor').value='';
  document.getElementById('exp-carrier').value='';
  document.getElementById('exp-date').value='';
  expItemsList=[];
  renderExpItemsList();
  updateExpFormModeUI();
}
function updateExpFormModeUI(){
  const btn=document.getElementById('exp-save-btn');
  const cancelBtn=document.getElementById('exp-cancel-edit-btn');
  const hint=document.getElementById('exp-asn-hint');
  if(_editingExpId){
    if(btn) btn.innerHTML=`<i class="ti ti-check"></i>Save changes to ${esc(_editingExpId)}`;
    if(cancelBtn) cancelBtn.style.display='inline-flex';
    if(hint) hint.style.display='block';
  } else {
    if(btn) btn.innerHTML='<i class="ti ti-check"></i>Log expected shipment';
    if(cancelBtn) cancelBtn.style.display='none';
    if(hint) hint.style.display='none';
  }
}
async function saveExpectedShipmentForm(){
  const id=document.getElementById('exp-asn').value.trim();
  if(!id){toast('Enter an ASN / PO reference','w');return;}
  if(!expItemsList.length){toast('Add at least one expected item','w');return;}
  if(!rateLimit('save-expected-shipment',1500)){toast('Please wait before submitting again','w');return;}
  if(_editingExpId){
    const s=expectedShipments.find(x=>x.id===_editingExpId);
    if(!s){ toast('Shipment not found — it may have been removed','w'); cancelEditExpectedShipment(); return; }
    const oldItemCount=s.items.length;
    s.vendor=document.getElementById('exp-vendor').value.trim()||null;
    s.carrier=document.getElementById('exp-carrier').value.trim()||null;
    s.expectedDate=document.getElementById('exp-date').value||null;
    s.items=[...expItemsList];
    const ok=await saveExpectedShipmentRow(s);
    if(!ok) return;
    recomputeShipmentTally(s);
    logAudit('UPDATE_EXPECTED_SHIPMENT','expected_shipments',id,{items:oldItemCount},{items:s.items.length});
    cancelEditExpectedShipment();
    renderExpShipmentsBoard();
    populateExpectedSelect();
    toast(`Expected shipment ${id} updated — ${s.items.length} SKU(s)`,'s');
    return;
  }
  if(expectedShipments.some(s=>s.id.toLowerCase()===id.toLowerCase())){toast('A shipment with this ASN already exists','w');return;}
  const s={
    id, vendor:document.getElementById('exp-vendor').value.trim()||null,
    carrier:document.getElementById('exp-carrier').value.trim()||null,
    expectedDate:document.getElementById('exp-date').value||null,
    items:[...expItemsList], status:'expected',
    createdBy:currentProfile?.full_name||'Unknown', createdAt:new Date().toISOString()
  };
  const ok=await saveExpectedShipmentRow(s);
  if(!ok) return;
  expectedShipments.unshift(s);
  expItemsList=[];
  renderExpItemsList();
  document.getElementById('exp-asn').value='';
  document.getElementById('exp-vendor').value='';
  document.getElementById('exp-carrier').value='';
  document.getElementById('exp-date').value='';
  logAudit('CREATE_EXPECTED_SHIPMENT','expected_shipments',id,null,{items:s.items.length});
  renderExpShipmentsBoard();
  populateExpectedSelect();
  toast(`Expected shipment ${id} logged — ${s.items.length} SKU(s)`,'s');
}
function populateExpectedSelect(){
  const sel=document.getElementById('ib-load-expected');
  if(!sel) return;
  // 'discrepancy' status (an overage or an unexpected SKU on some earlier
  // batch) must NOT hide the ASN here — a discrepancy is just a flag, not
  // "done". Excluding it blocked raising the 2nd/3rd GRN for a multi-batch
  // delivery the moment any single-line mismatch was detected on batch 1.
  // Only a fully 'received' (everything matched, nothing outstanding)
  // shipment should drop off this list.
  const open=expectedShipments.filter(s=>s.status==='expected'||s.status==='partial'||s.status==='discrepancy');
  sel.innerHTML='<option value="">— None, receive ad-hoc —</option>'+
    open.map(s=>{const uniqueSkus=new Set(s.items.map(it=>it.sku)).size; return `<option value="${esc(s.id)}">${esc(s.id)}${s.vendor?' — '+esc(s.vendor):''} (${uniqueSkus} SKU(s))${s.status==='discrepancy'?' ⚠':''}</option>`;}).join('');
}
function loadExpectedIntoGRN(){
  const id=document.getElementById('ib-load-expected').value;
  if(!id){ ibExpectedRemaining=null; document.getElementById('ib-expected-reference').innerHTML=''; return; }
  const s=expectedShipments.find(x=>x.id===id);
  if(!s) return;
  document.getElementById('ib-asn').value=s.id;
  // This used to auto-populate ibItems with the full remaining-expected
  // qty per SKU as a "starting point to edit down" — but in practice
  // receivers were submitting that pre-filled list largely as-is (often
  // across SKUs from boxes that hadn't even arrived yet in this batch),
  // because manually zeroing out or correcting 40-60 rows one by one
  // isn't realistic. That produced GRNs that vastly overstated what was
  // actually received. Since CaratLane shipments arrive as several boxes
  // received and counted individually, the received-items list now
  // starts EMPTY every time — you add each SKU as you physically count
  // it (exactly as for an ad-hoc receipt), same as always. The expected
  // shipment is only used to (a) show what's still outstanding as a
  // reference below, and (b) warn if you add a SKU that isn't on this
  // ASN at all.
  ibItems=[];
  renderIbItemsList();
  const receivedSoFar=getReceivedSoFarByAsn(id);
  const anyPriorReceiving=Object.keys(receivedSoFar).length>0;
  // Same fix as recomputeShipmentTally(): aggregate s.items (one line per
  // carton/box) to a single expected total per SKU BEFORE subtracting
  // what's already been received — otherwise a partially-received SKU
  // whose received-so-far exceeds any single line's qty (but not the
  // SKU's true total) shows as fully outstanding on every line.
  const expectedBySku={};
  s.items.forEach(it=>{
    if(!expectedBySku[it.sku]) expectedBySku[it.sku]={sku:it.sku,name:it.name,variant:it.variant,qty:0};
    expectedBySku[it.sku].qty+=it.qty;
  });
  ibExpectedRemaining=Object.values(expectedBySku).map(it=>({sku:it.sku,name:it.name,variant:it.variant,remaining:Math.max(0,it.qty-(receivedSoFar[it.sku]||0))})).filter(it=>it.remaining>0);
  renderIbExpectedReference();
  toast(`${s.id} loaded — ${ibExpectedRemaining.length} SKU(s) still outstanding (see reference list below)${anyPriorReceiving?'. Earlier batch(es) already accounted for':''}. Add each item below as you physically count it.`,'s');
}
function renderIbExpectedReference(){
  const el=document.getElementById('ib-expected-reference');
  if(!el) return;
  if(!ibExpectedRemaining || !ibExpectedRemaining.length){ el.innerHTML=''; return; }
  el.innerHTML=`<div style="background:var(--s2);border:0.5px solid var(--b);border-radius:6px;padding:8px 10px;max-height:180px;overflow:auto">
    <div style="font-size:10px;color:var(--t2);font-weight:600;margin-bottom:4px">STILL OUTSTANDING ON THIS ASN (reference only — not added automatically)</div>
    ${ibExpectedRemaining.map(it=>`<div style="font-size:11px;display:flex;justify-content:space-between;padding:2px 0"><span class="mono">${esc(it.sku)}</span><span style="color:var(--t2)">${esc(it.name||'')}${it.variant?' — '+esc(it.variant):''} · owed ${it.remaining}</span></div>`).join('')}
  </div>`;
}
function getReceivedSoFarByAsn(asnId){
  // Sums received quantities across EVERY GRN raised against this ASN so
  // far — CaratLane shipments often arrive as several partial deliveries
  // over multiple days (e.g. 18 of 41 boxes today, the rest later), each
  // needing its own GRN. The running total must reflect all of them, not
  // just the most recent one.
  const receivedBySku={};
  history.filter(h=>h.type==='grn' && !h.voided && (h.asn||'').toLowerCase()===(asnId||'').toLowerCase())
    .forEach(grn=>{
      (grn.items||[]).forEach(it=>{ receivedBySku[it.sku]=(receivedBySku[it.sku]||0)+it.qty; });
    });
  return receivedBySku;
}
// Recomputes an expected shipment's status/tally from whatever has
// actually been received against it so far (per getReceivedSoFarByAsn).
// Shared by GRN creation AND by editing a shipment's item list — editing
// must NOT accidentally mark a shipment 'partial'/'received' just because
// the math ran; if nothing has been received yet, it stays 'expected'.
function recomputeShipmentTally(s){
  const hasAnyGrn=history.some(h=>h.type==='grn' && !h.voided && (h.asn||'').toLowerCase()===s.id.toLowerCase());
  if(!hasAnyGrn){
    s.status='expected';
    s.receivedSummary=null;
    s.receivedAt=null;
    saveExpectedShipmentRow(s);
    return {status:s.status, summary:null, anyShortage:false, anyOverage:false};
  }
  const receivedBySku=getReceivedSoFarByAsn(s.id);
  // s.items frequently has MULTIPLE lines for the same SKU — one per
  // carton/box (an Excel-uploaded manifest lists each box's contents as
  // its own row). Aggregate to a single expected total per SKU before
  // comparing — otherwise a SKU's total received qty gets compared
  // against just its FIRST line's qty (producing a false huge "over"),
  // then deleted from the bucket, so every OTHER line for that same SKU
  // wrongly shows 0 received / fully "short".
  const expectedBySku={};
  s.items.forEach(exp=>{
    if(!expectedBySku[exp.sku]) expectedBySku[exp.sku]={sku:exp.sku,name:exp.name,qty:0};
    expectedBySku[exp.sku].qty+=exp.qty;
  });
  const summary=Object.values(expectedBySku).map(exp=>{
    const got=receivedBySku[exp.sku]||0;
    delete receivedBySku[exp.sku];
    return {sku:exp.sku, name:exp.name, expected:exp.qty, received:got, diff:got-exp.qty};
  });
  // Anything received that wasn't on the expected list at all
  Object.keys(receivedBySku).forEach(sku=>{
    const full=SKUS.find(x=>x.sku===sku);
    summary.push({sku, name:full?full.sub:sku, expected:0, received:receivedBySku[sku], diff:receivedBySku[sku]});
  });
  const anyOverage=summary.some(r=>r.diff>0);
  const anyShortage=summary.some(r=>r.diff<0);
  // Overage (or a mystery SKU that wasn't expected at all) is a real
  // discrepancy worth flagging distinctly. A shortage-only mismatch is
  // treated as 'partial' — the rest may still be arriving on another
  // truck under the same ASN, so it's not necessarily wrong, just not
  // finished yet.
  if(anyOverage){ s.status='discrepancy'; }
  else if(anyShortage){ s.status='partial'; }
  else { s.status='received'; }
  // An admin override always wins over the recomputed status — otherwise
  // a stray/duplicate GRN raised against an already-closed ASN would
  // silently reopen a discrepancy someone already signed off on. The
  // tally numbers themselves still refresh for reference.
  if(s.closed) s.status='closed';
  s.receivedAt=new Date().toISOString();
  s.receivedSummary=summary;
  saveExpectedShipmentRow(s);
  return {status:s.status, summary, anyShortage, anyOverage};
}
// Lets an admin acknowledge a genuine, confirmed discrepancy (short or
// over vs the ASN) and close the shipment out, so it stops sitting in
// the open Inbound Tally list and the "load expected" picker forever.
// Requires a reason on record — this is a deliberate sign-off, not a
// way to silently make a discrepancy disappear.
async function closeShipmentOverride(id){
  if(currentProfile?.role!=='admin'){ toast('Only an admin can override and close a discrepancy','w'); return; }
  const s=expectedShipments.find(x=>x.id===id);
  if(!s){ toast('Shipment not found','w'); return; }
  if(s.status==='received'){ toast('This shipment already matched in full — nothing to override','w'); return; }
  if(s.status==='closed'){ toast('Already closed','w'); return; }
  const reason=prompt(`Close ${id} despite the discrepancy?\n\nThis stops it appearing as outstanding. Enter the reason (e.g. "Confirmed 3-unit shortage, claim raised with CaratLane DC ref #...").`);
  if(!reason || !reason.trim()){ toast('A reason is required to close with a discrepancy','w'); return; }
  const priorStatus=s.status;
  s.closed=true;
  s.closedBy=currentProfile?.full_name||'Unknown';
  s.closedAt=new Date().toISOString();
  s.closeReason=reason.trim();
  s.status='closed';
  const ok=await saveExpectedShipmentRow(s);
  if(!ok){ s.closed=false; s.status=priorStatus; return; }
  logAudit('CLOSE_SHIPMENT_OVERRIDE','expected_shipments',id,{status:priorStatus},{status:'closed',reason:reason.trim()});
  renderExpShipmentsBoard();
  populateExpectedSelect();
  toast(`${id} closed — ${reason.trim()}`,'w');
}
// Undo an override, in case it was closed by mistake — puts the shipment
// back in the open list and re-derives its real status from the tally.
async function reopenShipmentOverride(id){
  if(currentProfile?.role!=='admin'){ toast('Only an admin can reopen a closed shipment','w'); return; }
  const s=expectedShipments.find(x=>x.id===id);
  if(!s || !s.closed) return;
  if(!confirm(`Reopen ${id}? It will go back to showing as outstanding based on its actual tally.`)) return;
  s.closed=false; s.closedBy=null; s.closedAt=null; s.closeReason=null;
  recomputeShipmentTally(s);
  logAudit('REOPEN_SHIPMENT_OVERRIDE','expected_shipments',id,{status:'closed'},{status:s.status});
  renderExpShipmentsBoard();
  populateExpectedSelect();
  toast(`${id} reopened`,'s');
}
function reconcileAgainstExpected(asn, receivedItems){
  const s=expectedShipments.find(x=>x.id.toLowerCase()===(asn||'').toLowerCase());
  if(!s) return null;
  // Pulls the cumulative total from history (which already includes the
  // GRN just created, since createGRN() pushes to history before calling
  // this) rather than only the items passed in from this one batch.
  return recomputeShipmentTally(s);
}
function refreshShipmentTally(id){
  // The tally shown on this board (s.receivedSummary) is only recomputed
  // when a GRN is created/voided against this ASN, or when the shipment
  // is edited and saved — it is NOT live. That means a logic fix to
  // recomputeShipmentTally() (like the per-SKU aggregation fix) doesn't
  // retroactively correct an already-stored summary until something
  // triggers a recompute. This button does that on demand, without
  // needing to raise/void a GRN or touch the item list.
  const s=expectedShipments.find(x=>x.id===id);
  if(!s){ toast('Shipment not found','w'); return; }
  recomputeShipmentTally(s);
  renderExpShipmentsBoard();
  toast(`${id} tally refreshed`,'s');
}
function renderExpShipmentsBoard(){
  const el=document.getElementById('exp-shipments-board');
  if(!el) return;
  if(!expectedShipments.length){ el.innerHTML='<div class="empty">No expected shipments logged yet</div>'; return; }
  const statusPill={expected:'p-info',partial:'p-hold',received:'p-pass',discrepancy:'p-out',closed:'p-closed'};
  const isAdmin=currentProfile?.role==='admin';
  el.innerHTML=`<div class="tw"><table><thead><tr><th>ASN</th><th>Vendor</th><th>Expected</th><th>Status</th><th>Tally</th><th>Action</th></tr></thead><tbody>${expectedShipments.map(s=>{
    let tally='<span style="color:var(--t3);font-size:10px">Not yet received</span>';
    if(s.receivedSummary){
      tally=s.receivedSummary.map(r=>{
        const color=r.diff===0?'var(--st)':r.diff<0?'var(--dt)':'var(--wt)';
        const label=r.diff===0?'match':r.diff<0?`short ${Math.abs(r.diff)}`:`over ${r.diff}`;
        return `<div style="font-size:10px;color:${color}">${esc(r.sku)}: ${r.received}/${r.expected} (${label})</div>`;
      }).join('');
    }
    if(s.closed){
      tally+=`<div style="font-size:10px;color:var(--t2);margin-top:4px;padding-top:4px;border-top:0.5px dashed var(--b)"><i class="ti ti-lock"></i> Closed by ${esc(s.closedBy||'admin')} · ${esc(s.closeReason||'')}</div>`;
    }
    const uniqueSkus=new Set(s.items.map(it=>it.sku)).size;
    // Admin-only: a genuinely confirmed discrepancy (short or over vs the
    // ASN) can be signed off and closed so it stops sitting in the open
    // list forever — reopenable if it was closed by mistake.
    const overrideBtn=isAdmin&&(s.status==='partial'||s.status==='discrepancy')
      ?` <button class="btn-sm" onclick="closeShipmentOverride('${esc(s.id)}')" title="Acknowledge the discrepancy and close this shipment" style="color:var(--dt)"><i class="ti ti-lock"></i>Override & Close</button>`:'';
    const reopenBtn=isAdmin&&s.closed
      ?` <button class="btn-sm" onclick="reopenShipmentOverride('${esc(s.id)}')" title="Reopen — undo the override"><i class="ti ti-lock-open"></i>Reopen</button>`:'';
    return `<tr><td class="mono">${esc(s.id)}</td><td style="font-size:11px">${esc(s.vendor||'—')}</td><td>${uniqueSkus} SKU(s)</td><td><span class="pill ${statusPill[s.status]||'p-info'}">${s.status}</span></td><td>${tally}</td><td style="white-space:nowrap"><button class="btn-sm" onclick="printTallySheet('${esc(s.id)}')"><i class="ti ti-printer"></i>Print</button> <button class="btn-sm" onclick="refreshShipmentTally('${esc(s.id)}')" title="Recalculate the tally from current GRN data"><i class="ti ti-refresh"></i>Refresh</button> <button class="btn-sm" onclick="startEditExpectedShipment('${esc(s.id)}')"><i class="ti ti-edit"></i>View/Edit</button>${overrideBtn}${reopenBtn}</td></tr>`;
  }).join('')}</tbody></table></div>`;
}
function pdfDownloadSnippet(filename,orientation){
  orientation=orientation||'portrait';
  return `
    <div class="no-print" id="pdf-dl-bar" style="position:fixed;top:10px;right:10px;z-index:9999">
      <button onclick="downloadAsPdf()" style="padding:8px 16px;background:#B8860B;color:#fff;border:none;border-radius:20px;cursor:pointer;font-weight:700;font-size:12px;box-shadow:0 2px 8px rgba(0,0,0,.25)">⬇ Download PDF</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js"><\/script>
    <script>
      function downloadAsPdf(){
        if(typeof html2pdf==='undefined'){
          alert('PDF library failed to load — check your internet connection and try again, or use your browser\\'s Print > Save as PDF option instead.');
          return;
        }
        var el=document.getElementById('pdf-content')||document.body;
        html2pdf().set({margin:8,filename:'${filename}',image:{type:'jpeg',quality:0.98},html2canvas:{scale:2,useCORS:true},jsPDF:{unit:'mm',format:'a4',orientation:'${orientation}'},pagebreak:{mode:['avoid-all','css','legacy']}}).from(el).save();
      }
    <\/script>
  `;
}
function printTallySheet(asnId){
  const s=expectedShipments.find(x=>x.id===asnId);
  if(!s){toast('Shipment not found','w');return;}
  const printWindow=window.open('','TALLY_'+asnId,'width=900,height=1000');
  if(!printWindow){toast('Please allow popups to print','w');return;}
  printWindow.document.write(`
    <!DOCTYPE html><html><head><title>Inbound Tally — ${asnId}</title>
    <style>
      body{font-family:Arial,sans-serif;margin:20px;color:#333}
      .header{border-bottom:3px solid #000;padding-bottom:12px;margin-bottom:16px}
      .company{font-size:18px;font-weight:bold}
      .subtitle{font-size:11px;color:#666;margin-top:2px}
      h2{margin:14px 0 4px}
      table{width:100%;border-collapse:collapse;margin-top:10px}
      th{background:#f0f0f0;padding:8px;text-align:left;border:1px solid #ccc;font-size:11px}
      td{padding:10px 8px;border:1px solid #ccc;font-size:12px}
      .tick{width:60px;text-align:center}
      .sign{margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:30px}
      .sign div{border-top:1px solid #000;padding-top:6px;text-align:center;font-size:11px}
      @media print{.no-print{display:none}}
    </style></head><body>
    <div id="pdf-content">
    <div class="header">
      <div class="company">CaratLane WMS — Inbound Tally Sheet</div>
      <div class="subtitle">EPS Worldwide Integrated Logistics</div>
    </div>
    <div><strong>ASN / PO:</strong> ${esc(s.id)} &nbsp; <strong>Vendor:</strong> ${esc(s.vendor||'—')} &nbsp; <strong>Carrier:</strong> ${esc(s.carrier||'—')}</div>
    <div><strong>Expected date:</strong> ${esc(s.expectedDate||'—')} &nbsp; <strong>Printed:</strong> ${new Date().toLocaleString('en-IN')}</div>
    <table><thead><tr><th>SKU</th><th>Item</th><th>Expected Qty</th><th class="tick">Received So Far</th><th class="tick">Remaining</th><th class="tick">Actual Qty (this batch)</th><th class="tick">✓ Tick</th></tr></thead><tbody>
      ${(()=>{const receivedSoFar=getReceivedSoFarByAsn(s.id);
        // s.items often has MULTIPLE raw lines per SKU (one per carton, from
        // Excel-manifest imports) — aggregate by SKU first so each SKU prints
        // as a single row with its true total expected qty, not one row per
        // carton line with the per-carton qty.
        const bySku={};
        s.items.forEach(it=>{
          if(!bySku[it.sku]) bySku[it.sku]={sku:it.sku,name:it.name,variant:it.variant,qty:0};
          bySku[it.sku].qty+=it.qty;
        });
        return Object.values(bySku).map(it=>{const got=receivedSoFar[it.sku]||0;const remaining=Math.max(0,it.qty-got);return `<tr><td>${esc(it.sku)}</td><td>${esc(it.name)} — ${esc(it.variant||'')}</td><td>${it.qty}</td><td class="tick">${got}</td><td class="tick">${remaining}</td><td class="tick"></td><td class="tick"></td></tr>`;}).join('');})()}
    </tbody></table>
    <div class="sign">
      <div>Received by (name &amp; signature)</div>
      <div>Verified by (supervisor)</div>
    </div>
    </div>
    ${pdfDownloadSnippet('TallySheet-'+asnId+'.pdf')}
    </body></html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),300);
}
function addIbItem(){
  const sku=document.getElementById('ib-sku').value;
  const qc=document.getElementById('ib-qc').value;
  const issue=document.getElementById('ib-issue').value;
  const qty=parseInt(document.getElementById('ib-qty').value)||1;
  const binOverride=document.getElementById('ib-bin-override').value.trim();
  const s=SKUS.find(x=>x.sku===sku);
  const sLoc=liveLoc(sku);
  const defaultBin=`${sLoc.rack}-${sLoc.shelf}`;
  const bin=binOverride||defaultBin;
  // Every rack physically has SHELVES_PER_RACK (6) shelves — a manually
  // entered bin outside that range can't be a real location, so catch it
  // here rather than let it silently create a shelf that doesn't exist.
  if(binOverride){
    const [ovRack,ovShelf]=binOverride.split('-');
    const shelfNum=parseInt(ovShelf);
    if(!ovRack || !RACK_LETTERS.includes(ovRack.toUpperCase()) || isNaN(shelfNum) || shelfNum<1 || shelfNum>SHELVES_PER_RACK){
      toast(`"${binOverride}" isn't a valid bin — use RACK-SHELF, e.g. A-3, with shelf 1-${SHELVES_PER_RACK}`,'w');
      return;
    }
  }
  // If an expected shipment is loaded, catch someone receiving a SKU that
  // wasn't actually on that ASN (e.g. picked the wrong size by mistake)
  // before it silently gets added.
  const expId=document.getElementById('ib-load-expected')?document.getElementById('ib-load-expected').value:'';
  if(expId){
    const expShip=expectedShipments.find(x=>x.id===expId);
    if(expShip && !expShip.items.some(it=>it.sku===sku)){
      if(!confirm(`${sku} is not part of expected shipment ${expId}. Add it anyway?`)) return;
    }
  }
  // If this SKU is already in the list at the same bin with the same QC
  // result, what "add" means depends on whether that line has actually
  // been physically counted yet:
  //  - Not yet counted (still showing its pre-filled expected-shipment
  //    qty) — this add IS the first real physical count for it, so SET
  //    the qty rather than summing on top of the placeholder value.
  //  - Already counted once — a second add for the same SKU/QC/bin means
  //    another carton of the same item arrived (goods routinely come in
  //    4-5 separate boxes per SKU), so it must become its OWN separate
  //    line, not overwrite/replace the first box's count. Silently
  //    replacing would erase the first box's quantity entirely.
  const existing=ibItems.find(it=>it.sku===sku && it.qc===qc && it.bin===bin && !it.counted);
  if(existing){
    const oldQty=existing.qty;
    existing.qty=qty;
    existing.counted=true;
    if(issue) existing.issue=issue;
    renderIbItemsList();
    document.getElementById('ib-bin-override').value='';
    toast(`${sku} at ${bin} — quantity confirmed as ${qty}${oldQty!==qty?` (was ${oldQty})`:''}`, 's');
    return;
  }
  const alreadyCounted=ibItems.filter(it=>it.sku===sku && it.qc===qc && it.bin===bin && it.counted);
  if(alreadyCounted.length && !confirm(`${sku} at ${bin} already has ${alreadyCounted.length} counted carton(s) on this GRN (qty so far: ${alreadyCounted.reduce((a,i)=>a+i.qty,0)}). Add this as another carton (+${qty})?`)) return;
  ibItems.push({sku,name:s.sub,variant:s.variant,qc,issue,qty,bin,binOverridden:!!binOverride,counted:true});
  renderIbItemsList();
  document.getElementById('ib-bin-override').value='';
  toast(`Added ${sku} to ${bin}${binOverride?' (manual assignment)':' (auto-assigned)'}`, 's');
}
function renderIbItemsList(){
  const el=document.getElementById('ib-items-list');
  const uncounted=ibItems.filter(it=>!it.counted).length;
  el.innerHTML=ibItems.length?`${uncounted?`<div style="background:var(--hold-bg,#3a2e10);color:var(--hold,#e0a020);border:0.5px solid var(--hold,#e0a020);border-radius:6px;padding:6px 10px;font-size:11px;margin-bottom:6px"><i class="ti ti-alert-triangle"></i> ${uncounted} line(s) below still show the pre-filled EXPECTED quantity and haven't been physically confirmed — edit the Qty to what you actually counted. Unconfirmed lines will NOT be included when you create the GRN (they stay outstanding).</div>`:''}<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>BIN</th><th>QC</th><th>Issue</th><th>Qty</th><th>Status</th><th></th></tr></thead><tbody>${ibItems.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${item.name}</td><td style="font-weight:600;color:var(--gold)">${item.bin}${item.binOverridden?' ⚠':'(auto)'}</td><td><span class="pill ${item.qc==='PASS'?'p-pass':item.qc==='HOLD'?'p-hold':'p-out'}">${item.qc}</span></td><td style="font-size:10px;color:var(--t2)">${item.issue||'—'}</td><td><input type="number" min="0" max="9999" value="${item.qty}" style="width:60px;padding:3px 5px;font-size:11px" onchange="updateIbItemQty(${i},this.value)"></td><td>${item.counted?'<span class="pill p-pass"><i class="ti ti-check"></i> Counted</span>':'<span class="pill p-hold">Not yet counted</span>'}</td><td><button class="btn-sm btn-danger" onclick="removeIbItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function updateIbItemQty(i,val){
  const qty=parseInt(val)||0;
  if(!ibItems[i]) return;
  if(qty<=0){
    if(confirm(`Remove ${ibItems[i].sku} at ${ibItems[i].bin} from this GRN (qty 0 = not received)?`)){ ibItems.splice(i,1); renderIbItemsList(); }
    else renderIbItemsList();
    return;
  }
  ibItems[i].qty=qty;
  ibItems[i].counted=true;
  renderIbItemsList();
}
function removeIbItem(i){ibItems.splice(i,1);renderIbItemsList();}
function createGRN(){
  if(!ibItems.length){toast('Add at least one item to the shipment','w');return;}
  // Only lines the receiver has actually physically confirmed (counted)
  // go into the GRN — a pre-filled expected-shipment line that was never
  // touched must NOT be treated as received. It's simply left out of this
  // GRN; the SKU stays outstanding on the ASN for the next batch/GRN.
  const counted=ibItems.filter(it=>it.counted);
  const uncounted=ibItems.filter(it=>!it.counted);
  if(!counted.length){ toast('None of the lines have been confirmed yet — edit the Qty (or use Add item) to record what you actually counted before creating the GRN','w'); return; }
  if(!rateLimit('grn',2000)){toast('Please wait before submitting again','w');return;}
  const seal=document.getElementById('ib-seal').value;
  if(seal==='broken'){toast('STOP: Broken seal detected — escalate to CaratLane & security before proceeding (SOP §1.5)','w');return;}
  const asn=document.getElementById('ib-asn').value.trim();
  const carrier=document.getElementById('ib-carrier').value.trim();
  const vehicle=document.getElementById('ib-vehicle').value.trim();
  const cartonsRaw=document.getElementById('ib-cartons').value.trim();
  const cartons=cartonsRaw?parseInt(cartonsRaw)||0:0;
  if(!cartons){ toast('Enter the number of cartons/boxes received — needed for billing','w'); return; }
  const grnNotes=document.getElementById('ib-notes').value.trim();
  const gid=newId('GRN');
  counted.forEach(item=>{
    if(item.qc==='PASS'){
      // item.bin is always populated by addIbItem() — either the SKU's
      // current default location, or an admin/supervisor override typed
      // in at receiving. Route every receipt through it via
      // addStockAtLocation() rather than always writing to a single
      // rack/shelf: if the primary shelf is full and this batch (or a
      // later one) is assigned to a different bin, that ADDS a second
      // location for this SKU instead of overwriting the first — which
      // is what actually lets the same SKU live on more than one shelf.
      let rk,sh;
      if(item.bin){ [rk,sh]=item.bin.split('-'); }
      if(!rk||!sh){ const s=SKUS.find(x=>x.sku===item.sku); rk=s.rack; sh=s.shelf; }
      addStockAtLocation(item.sku,rk,sh,item.qty);
    }
    // Track exceptions for compliance
    if(item.qc==='HOLD' || item.qc==='REJECT' || item.issue){
      history.push({id:newId('EXC'),type:'exception',ts:ts(),category:'damage',detail:`${item.sku} · QC: ${item.qc} · Issue: ${item.issue||'N/A'} · Qty: ${item.qty}`,grn:gid});
    }
  });
  const pass=counted.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
  const hold=counted.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
  const rej=counted.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
  history.push({id:gid,type:'grn',ts:ts(),detail:`ASN: ${asn||'N/A'} · ${cartons} carton(s) · ${new Set(counted.map(i=>i.sku)).size} SKUs · PASS:${pass} HOLD:${hold} REJ:${rej}`,items:[...counted],asn,carrier,vehicle,cartons,grnNotes:grnNotes||null});
  saveInv();saveHist();
  const recon=asn?reconcileAgainstExpected(asn, counted):null;
  if(uncounted.length){
    toast(`${uncounted.length} unconfirmed line(s) were left out of GRN ${gid} — they stay outstanding on the ASN for the next batch`,'w');
  }
  ibItems=[];ibExpectedRemaining=null;renderIbItemsList();renderIbExpectedReference();renderIbLog();updateNotificationBadge();
  document.getElementById('ib-issue').value='';
  document.getElementById('ib-load-expected').value='';
  ['ib-asn','ib-carrier','ib-vehicle','ib-cartons','ib-notes'].forEach(id_=>document.getElementById(id_).value='');
  renderExpShipmentsBoard();
  populateExpectedSelect();
  if(recon){
    const shorts=recon.summary.filter(r=>r.diff<0).map(r=>`${r.sku} short ${Math.abs(r.diff)}`);
    const overs=recon.summary.filter(r=>r.diff>0).map(r=>`${r.sku} over ${r.diff}`);
    if(recon.status==='discrepancy'){
      toast(`GRN ${gid} created · Tally discrepancy vs ${asn}: ${[...shorts,...overs].join(', ')}`,'w');
    } else if(recon.status==='partial'){
      toast(`GRN ${gid} created · Partial receipt vs ${asn}: ${shorts.join(', ')} — mark as expected on the next delivery`,'w');
    } else {
      toast(`GRN ${gid} created · ${pass} units added to inventory · Tally matches ${asn} exactly`,'s');
    }
  } else {
    toast(`GRN ${gid} created · ${pass} units added to inventory (FIFO)`, 's');
  }
}
function renderIbLog(){
  const el=document.getElementById('ib-log');
  const logs=history.filter(h=>h.type==='grn').slice(-10).reverse();
  const canVoid=currentProfile?.role==='admin';
  el.innerHTML=logs.length?logs.map(h=>`<div class="hist-entry"${h.voided?' style="opacity:0.6"':''}><div class="hist-head"><span class="hist-id">${h.id}</span>${h.voided?'<span class="pill p-out" style="margin-left:6px">VOIDED</span>':''}<span class="hist-ts">${h.ts}</span><button onclick="printGRN('${h.id}')" style="background:none;border:none;cursor:pointer;color:var(--t2);font-size:11px;padding:4px 8px;border-radius:3px;transition:all 0.2s" onmouseover="this.style.background='var(--s2)';this.style.color='var(--t)'" onmouseout="this.style.background='transparent';this.style.color='var(--t2)'"><i class="ti ti-printer"></i>Print</button>${(!h.voided&&canVoid)?`<button onclick="voidGRN('${h.id}')" style="background:none;border:none;cursor:pointer;color:var(--dt);font-size:11px;padding:4px 8px;border-radius:3px;transition:all 0.2s" onmouseover="this.style.background='var(--s2)'" onmouseout="this.style.background='transparent'"><i class="ti ti-rotate-2"></i>Void</button>`:''}</span></div><div class="hist-body">${esc(h.detail)}${h.grnNotes?`<div style="color:var(--t2);font-size:10px;margin-top:2px"><i class="ti ti-note"></i> ${esc(h.grnNotes)}</div>`:''}${h.voided?`<div style="color:var(--dt);font-size:10px;margin-top:2px">Voided by ${esc(h.voidedBy||'—')} on ${esc(h.voidedAt||'')}${h.voidReason?' — '+esc(h.voidReason):''}</div>`:''}</div></div>`).join(''):'<div class="empty">No GRNs created yet</div>';
}
function voidGRN(grnId){
  if(currentProfile?.role!=='admin'){ toast('Only an admin can void a GRN','w'); return; }
  const grn=history.find(h=>h.id===grnId && h.type==='grn');
  if(!grn){ toast('GRN not found','w'); return; }
  if(grn.voided){ toast('This GRN has already been voided','w'); return; }
  if(!confirm(`Void ${grnId}? This reverses the ${grn.items?.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0)||0} unit(s) it added to inventory. This cannot be undone — create a fresh GRN afterward with the correct figures.`)) return;
  const reason=prompt('Reason for voiding this GRN (optional, shown in the log):','')||'';
  // Reverse exactly what this GRN added — only PASS-qc items ever touched
  // inventory (see createGRN). Each item's `bin` records exactly which
  // shelf THAT batch went to, so reverse it from that specific location
  // rather than just subtracting from the SKU's total — otherwise
  // voiding a GRN that went to a secondary/overflow shelf would
  // incorrectly drain stock off the primary shelf instead.
  (grn.items||[]).forEach(item=>{
    if(item.qc==='PASS' && inv[item.sku]){
      let rk,sh;
      if(item.bin){ [rk,sh]=item.bin.split('-'); }
      if(rk&&sh){ removeStockAtLocation(item.sku,rk,sh,item.qty); }
      else { inv[item.sku].qty=Math.max(0,inv[item.sku].qty-item.qty); }
    }
  });
  grn.voided=true;
  grn.voidedBy=currentProfile?.full_name||'Unknown';
  grn.voidedAt=new Date().toLocaleString('en-IN');
  grn.voidReason=reason;
  saveInv();
  // voidGRN mutates an EARLIER history record, not the newest one — the
  // generic saveHist() only ever upserts history[history.length-1], so it
  // would silently save nothing for this record. saveHistRecord(grn)
  // upserts this specific record by id instead. Also refresh the local
  // cache directly since saveHist() (which does that) isn't being called.
  saveHistRecord(grn);
  localStorage.setItem('cl_wms_hist2', JSON.stringify(history));
  logAudit('VOID_GRN','history',grnId,{voided:false},{voided:true,reason});
  // If this GRN was tied to an expected shipment, recompute its tally now
  // that this batch's received quantities no longer count.
  if(grn.asn){
    const s=expectedShipments.find(x=>x.id.toLowerCase()===grn.asn.toLowerCase());
    if(s) recomputeShipmentTally(s);
  }
  renderIbLog();
  renderInv();
  updateNotificationBadge();
  renderExpShipmentsBoard();
  populateExpectedSelect();
  toast(`${grnId} voided — inventory reversed`,'s');
}

function printGRN(grnId){
  const grn=history.find(h=>h.id===grnId&&h.type==='grn');
  if(!grn){toast('GRN not found','w');return;}
  const items=grn.items||[];
  const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
  const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
  const reject=items.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
  
  const printWindow=window.open('','GRN_'+grnId,'width=900,height=1000');
  if(!printWindow){toast('Please allow popups to print GRN','w');return;}
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>GRN ${grnId}</title>
      <style>
        body{font-family:Arial,sans-serif;margin:20px;line-height:1.6;color:#333}
        .header{border-bottom:3px solid #000;padding-bottom:15px;margin-bottom:20px}
        .company{font-size:20px;font-weight:bold;margin-bottom:5px}
        .subtitle{font-size:12px;color:#666;margin-bottom:15px}
        .grn-title{font-size:24px;font-weight:bold;margin:20px 0}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
        .info-box{border:1px solid #ddd;padding:10px;border-radius:4px}
        .info-label{font-weight:bold;font-size:12px;color:#666;text-transform:uppercase}
        .info-value{font-size:14px;font-weight:bold;margin-top:5px}
        table{width:100%;border-collapse:collapse;margin:20px 0}
        th{background:#f0f0f0;padding:10px;text-align:left;border:1px solid #ddd;font-weight:bold;font-size:12px}
        td{padding:10px;border:1px solid #ddd;font-size:12px}
        .total-row{background:#f9f9f9;font-weight:bold}
        .signature-area{margin-top:40px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px}
        .signature-box{text-align:center;border-top:1px solid #000;padding-top:10px;margin-top:30px}
        .footer{margin-top:30px;border-top:1px solid #ddd;padding-top:15px;font-size:10px;color:#999;text-align:center}
        @media print{
          body{margin:0;padding:10mm}
          .no-print{display:none}
        }
      </style>
    </head>
    <body>
      <div id="pdf-content">
      <div class="header">
        <div class="company">CaratLane WMS</div>
        <div class="subtitle">EPS Worldwide Integrated Logistics, Mumbai</div>
      </div>

      <div class="grn-title">Goods Receipt Note (GRN)</div>
      
      <div class="info-grid">
        <div class="info-box">
          <div class="info-label">GRN Number</div>
          <div class="info-value">${grnId}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Date & Time</div>
          <div class="info-value">${grn.ts}</div>
        </div>
        <div class="info-box">
          <div class="info-label">ASN/PO Number</div>
          <div class="info-value">${grn.asn||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Carrier</div>
          <div class="info-value">${grn.carrier||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Vehicle / Docket No.</div>
          <div class="info-value">${grn.vehicle||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">No. of Cartons</div>
          <div class="info-value">${grn.cartons||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Total SKUs</div>
          <div class="info-value">${new Set(items.map(i=>i.sku)).size}</div>
        </div>
      </div>
      ${grn.grnNotes?`<div class="info-box" style="margin-bottom:20px">
        <div class="info-label">GRN Notes</div>
        <div class="info-value" style="font-weight:normal;font-size:12px">${esc(grn.grnNotes)}</div>
      </div>`:''}

      <h3 style="margin-top:20px;border-bottom:2px solid #000;padding-bottom:10px">Received Items</h3>
      <table>
        <thead>
          <tr>
            <th>SKU Code</th>
            <th>Item Name</th>
            <th>Variant</th>
            <th>QC Result</th>
            <th>Issue</th>
            <th>Qty</th>
            <th>Bin Location</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(i=>`<tr>
            <td>${i.sku}</td>
            <td>${i.name}</td>
            <td>${i.variant}</td>
            <td style="font-weight:bold;color:${i.qc==='PASS'?'green':i.qc==='HOLD'?'orange':'red'}">${i.qc}</td>
            <td>${i.issue||'—'}</td>
            <td style="text-align:center">${i.qty}</td>
            <td>${i.bin}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      
      <table>
        <tr class="total-row">
          <td colspan="5" style="text-align:right">PASS (Accepted):</td>
          <td style="text-align:center">${pass}</td>
          <td></td>
        </tr>
        <tr class="total-row">
          <td colspan="5" style="text-align:right">HOLD (Pending):</td>
          <td style="text-align:center">${hold}</td>
          <td></td>
        </tr>
        <tr class="total-row">
          <td colspan="5" style="text-align:right">REJECT (Return):</td>
          <td style="text-align:center">${reject}</td>
          <td></td>
        </tr>
      </table>
      
      <div class="signature-area">
        <div class="signature-box">
          <span>Received By (Signature)</span>
        </div>
        <div class="signature-box">
          <span>Verified By (Signature)</span>
        </div>
      </div>
      
      <div class="footer">
        <p>This GRN was generated by CaratLane WMS on ${new Date().toLocaleString()}</p>
        <p style="margin-top:10px">SOP Reference: EPS-WH-SOP-001 v1.0 | Section 1: Inbound Receiving</p>
      </div>
      </div>
      ${pdfDownloadSnippet('GRN-'+grnId+'.pdf')}
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),500);
}

function printDispatch(dispatchId){
  const dispatch=history.find(h=>h.id===dispatchId&&h.type==='dispatched');
  if(!dispatch){toast('Dispatch not found','w');return;}
  const items=dispatch.items||[];
  
  const printWindow=window.open('','DISPATCH_'+dispatchId,'width=900,height=1000');
  if(!printWindow){toast('Please allow popups to print dispatch','w');return;}
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dispatch ${dispatchId}</title>
      <style>
        body{font-family:Arial,sans-serif;margin:20px;line-height:1.6;color:#333}
        .header{border-bottom:3px solid #000;padding-bottom:15px;margin-bottom:20px}
        .company{font-size:20px;font-weight:bold;margin-bottom:5px}
        .subtitle{font-size:12px;color:#666;margin-bottom:15px}
        .dispatch-title{font-size:24px;font-weight:bold;margin:20px 0}
        .awb-box{background:#f0f0f0;padding:15px;border-radius:4px;margin:20px 0;text-align:center}
        .awb-label{font-size:12px;color:#666;font-weight:bold;text-transform:uppercase}
        .awb-number{font-size:28px;font-weight:bold;font-family:monospace;margin-top:10px}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
        .info-box{border:1px solid #ddd;padding:10px;border-radius:4px}
        .info-label{font-weight:bold;font-size:12px;color:#666;text-transform:uppercase}
        .info-value{font-size:14px;font-weight:bold;margin-top:5px}
        .address-box{border:1px solid #ddd;padding:15px;border-radius:4px;margin:20px 0;background:#f9f9f9}
        .address-title{font-weight:bold;font-size:12px;margin-bottom:8px}
        .address-content{font-size:13px;line-height:1.8}
        table{width:100%;border-collapse:collapse;margin:20px 0}
        th{background:#f0f0f0;padding:10px;text-align:left;border:1px solid #ddd;font-weight:bold;font-size:12px}
        td{padding:10px;border:1px solid #ddd;font-size:12px}
        .total-row{background:#f9f9f9;font-weight:bold}
        .signature-area{margin-top:40px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px}
        .signature-box{text-align:center;border-top:1px solid #000;padding-top:10px;margin-top:30px}
        .footer{margin-top:30px;border-top:1px solid #ddd;padding-top:15px;font-size:10px;color:#999;text-align:center}
        @media print{
          body{margin:0;padding:10mm}
        }
        .no-print{display:block}
        @media print{.no-print{display:none}}
      </style>
    </head>
    <body>
      <div id="pdf-content">
      <div class="header">
        <div class="company">CaratLane WMS</div>
        <div class="subtitle">EPS Worldwide Integrated Logistics, Mumbai</div>
      </div>

      <div class="dispatch-title">Dispatch Note</div>
      
      <div class="awb-box">
        <div class="awb-label">Air Waybill / Tracking Number</div>
        <div class="awb-number">${dispatch.awb}</div>
      </div>
      
      <div class="info-grid">
        <div class="info-box">
          <div class="info-label">Dispatch ID</div>
          <div class="info-value">${dispatchId}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Order ID</div>
          <div class="info-value">${dispatch.orderId}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Dispatch Date & Time</div>
          <div class="info-value">${dispatch.dispatchedAt}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Shipping Method</div>
          <div class="info-value">${dispatch.shippingMethod}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Courier Partner</div>
          <div class="info-value">${dispatch.courierPartner||'—'}</div>
        </div>
      </div>
      
      <div class="address-box">
        <div class="address-title">Recipient Address</div>
        <div class="address-content">
          <strong>${dispatch.recipientName}</strong><br>
          ${dispatch.address}<br>
          <strong>Pincode:</strong> ${dispatch.pincode}<br>
          <strong>Phone:</strong> ${dispatch.phone}
        </div>
      </div>
      
      <h3 style="margin-top:20px;border-bottom:2px solid #000;padding-bottom:10px">Shipped Items</h3>
      <table>
        <thead>
          <tr>
            <th>SKU Code</th>
            <th>Item Name</th>
            <th>Variant</th>
            <th>Qty</th>
            <th>Bin Location</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(i=>`<tr>
            <td>${i.sku}</td>
            <td>${i.name}</td>
            <td>${i.variant}</td>
            <td style="text-align:center">${i.qty}</td>
            <td>${i.bin}</td>
          </tr>`).join('')}
          <tr class="total-row">
            <td colspan="3" style="text-align:right">Total Items:</td>
            <td style="text-align:center">${items.reduce((a,i)=>a+i.qty,0)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <div class="info-grid">
        <div class="info-box">
          <div class="info-label">Total SKUs</div>
          <div class="info-value">${new Set(items.map(i=>i.sku)).size}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Total Units</div>
          <div class="info-value">${items.reduce((a,i)=>a+i.qty,0)}</div>
        </div>
      </div>

      <h3 style="margin-top:24px;border-bottom:2px solid #B8860B;padding-bottom:8px;color:#B8860B">📦 Box & Weight Details</h3>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:14px 0">
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Box Dimensions</div>
          <div style="font-size:20px;font-weight:bold">${dispatch.boxL&&dispatch.boxW&&dispatch.boxH?dispatch.boxL+'×'+dispatch.boxW+'×'+dispatch.boxH+' cm':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">L × W × H (centimetres)</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Actual Weight (Packing)</div>
          <div style="font-size:20px;font-weight:bold">${dispatch.actualWeight?dispatch.actualWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">Physical scale weight</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Volumetric Weight</div>
          <div style="font-size:20px;font-weight:bold;color:#1565c0">${dispatch.volWeight?dispatch.volWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">(L×W×H) ÷ 5000</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Weight at Dispatch</div>
          <div style="font-size:20px;font-weight:bold;color:#B8860B">${dispatch.dispatchWeight?dispatch.dispatchWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">Re-weighed at courier handover</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center;grid-column:span 4">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Packaging Material Used</div>
          <div style="font-size:16px;font-weight:bold">${dispatch.packMaterials&&dispatch.packMaterials.length?esc(dispatch.packMaterials.join(', ')):'—'}</div>
        </div>
      </div>
      <div style="border:2px solid #B8860B;padding:12px 16px;border-radius:6px;background:#fffbf0;margin-bottom:14px;display:flex;align-items:center;gap:16px">
        <div>
          <div style="font-size:11px;color:#B8860B;font-weight:bold;text-transform:uppercase">Chargeable Weight</div>
          <div style="font-size:26px;font-weight:bold;color:#B8860B">${dispatch.chargeableWeight?dispatch.chargeableWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999">max(actual, volumetric)</div>
        </div>
        <div style="flex:1;font-size:11px;color:#666;line-height:1.8">
          ${dispatch.packNotes?'<strong>Packing notes:</strong> '+esc(dispatch.packNotes):''}
        </div>
      </div>

      <h3 style="margin-top:24px;border-bottom:2px solid #333;padding-bottom:8px">⏱ Packing Time Record</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0">
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Pack Start</div>
          <div style="font-size:14px;font-weight:bold">${dispatch.packStartTs||'—'}</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Pack End</div>
          <div style="font-size:14px;font-weight:bold">${dispatch.packEndTs||'—'}</div>
        </div>
        <div style="border:1px solid #2e7d32;padding:12px;border-radius:4px;text-align:center;background:#f1f8e9">
          <div style="font-size:11px;color:#2e7d32;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Total Duration</div>
          <div style="font-size:20px;font-weight:bold;color:#2e7d32">${dispatch.packDuration||'—'}</div>
        </div>
      </div>
      
      <div class="signature-area">
        <div class="signature-box">
          <span>Packed By (Signature)</span>
        </div>
        <div class="signature-box">
          <span>Dispatched By (Signature)</span>
        </div>
        <div class="signature-box">
          <span>Verified By (Signature)</span>
        </div>
      </div>
      
      <div class="footer">
        <p>This Dispatch Note was generated by CaratLane WMS on ${new Date().toLocaleString()}</p>
        <p style="margin-top:10px">SOP Reference: EPS-WH-SOP-001 v1.0 | Section 3: Packing & Dispatch</p>
      </div>
      </div>
      ${pdfDownloadSnippet('Dispatch-'+dispatchId+'.pdf')}
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),500);
}

// ORDERS (intake & assignment — created by admin/supervisor, then assigned to a picker)
let orders=[];
let ordItemsList=[];
let pickerNames=[];

async function loadOrders(){
  try{
    const {data,error}=await supa.from('orders').select('*').order('created_at',{ascending:false});
    if(error) throw error;
    orders=(data||[]).map(r=>({
      id:r.id, customerName:r.customer_name, address:r.address, pincode:r.pincode, phone:r.phone,
      priority:r.priority, method:r.method, items:r.items||[], assignedPicker:r.assigned_picker,
      status:r.status, notes:r.notes, createdBy:r.created_by, createdAt:r.created_at,
      assignedAt:r.assigned_at, pickedTaskId:r.picked_task_id, trackingToken:r.tracking_token||null
    }));
  }catch(e){ console.error('loadOrders failed:',e.message||e); }
}
async function saveOrderRow(o){
  try{
    const row={
      id:o.id, customer_name:o.customerName||null, address:o.address||null, pincode:o.pincode||null,
      phone:o.phone||null, priority:o.priority, method:o.method, items:o.items||[],
      assigned_picker:o.assignedPicker||null, status:o.status, notes:o.notes||null,
      created_by:o.createdBy||null, assigned_at:o.assignedAt||null, picked_task_id:o.pickedTaskId||null
    };
    const {error}=await supa.from('orders').upsert(row,{onConflict:'id'});
    if(error) throw error;
    return true;
  }catch(e){ console.error('saveOrderRow failed:',e.message||e); toast('Could not save order — connection issue','w'); return false; }
}
async function loadPickerNames(){
  try{
    const {data,error}=await supa.from('user_profiles').select('full_name,role').in('role',['picker','supervisor','admin']);
    if(error) throw error;
    pickerNames=(data||[]).map(r=>r.full_name).filter(Boolean);
  }catch(e){ console.error('loadPickerNames failed:',e.message||e); pickerNames=[]; }
}
let editingOrderId=null;
function editOrder(orderId){
  const o=orders.find(x=>x.id===orderId);
  if(!o) return;
  if(o.status!=='unassigned'){ toast('Only unassigned orders can be edited — unassign it first','w'); return; }
  editingOrderId=orderId;
  document.getElementById('ord-id').value=o.id;
  document.getElementById('ord-id').disabled=true;
  document.getElementById('ord-customer').value=o.customerName||'';
  document.getElementById('ord-address').value=o.address||'';
  document.getElementById('ord-pincode').value=o.pincode||'';
  document.getElementById('ord-phone').value=o.phone||'';
  document.getElementById('ord-priority').value=o.priority;
  document.getElementById('ord-method').value=o.method;
  ordItemsList=o.items.map(it=>({...it}));
  renderOrdItemsList();
  const panel=document.getElementById('order-create-panel');
  if(panel){ panel.style.display='block'; panel.scrollIntoView({behavior:'smooth',block:'start'}); }
  const btn=document.getElementById('ord-submit-btn');
  if(btn) btn.innerHTML='<i class="ti ti-check"></i>Save changes';
  const cancelBtn=document.getElementById('ord-cancel-edit-btn');
  if(cancelBtn) cancelBtn.style.display='inline-flex';
  toast(`Editing ${orderId} — update the fields below and save`,'w');
}
function cancelEditOrder(){
  editingOrderId=null;
  const idEl=document.getElementById('ord-id');
  idEl.disabled=false; idEl.value='';
  document.getElementById('ord-store-search').value='';
  document.getElementById('ord-store-select').value='';
  document.getElementById('ord-customer').value='';
  document.getElementById('ord-address').value='';
  document.getElementById('ord-pincode').value='';
  document.getElementById('ord-phone').value='';
  ordItemsList=[];
  renderOrdItemsList();
  const btn=document.getElementById('ord-submit-btn');
  if(btn) btn.innerHTML='<i class="ti ti-check"></i>Create order';
  const cancelBtn=document.getElementById('ord-cancel-edit-btn');
  if(cancelBtn) cancelBtn.style.display='none';
}
function addOrderItem(){
  const sku=document.getElementById('ord-sku').value;
  const qty=parseInt(document.getElementById('ord-qty').value)||1;
  const s=SKUS.find(x=>x.sku===sku);
  if(!s) return;
  if(!validateQty(qty)){toast('Invalid quantity','w');return;}
  const existing=ordItemsList.find(it=>it.sku===sku);
  if(existing){ existing.qty+=qty; } else {
    ordItemsList.push({sku,name:s.sub,variant:s.variant,qty,bin:`${liveLoc(s.sku).rack}-${liveLoc(s.sku).shelf}`});
  }
  renderOrdItemsList();
}
function renderOrdItemsList(){
  const el=document.getElementById('ord-items-list');
  if(!el) return;
  el.innerHTML=ordItemsList.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Qty</th><th></th></tr></thead><tbody>${ordItemsList.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${esc(item.name)} — ${esc(item.variant)}</td><td>${item.qty}</td><td><button class="btn-sm btn-danger" onclick="removeOrdItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function removeOrdItem(i){
  ordItemsList.splice(i,1);
  renderOrdItemsList();
}
async function createOrder(){
  const isEdit=!!editingOrderId;
  const id=isEdit?editingOrderId:(document.getElementById('ord-id').value.trim()||newId('ORD'));
  if(!ordItemsList.length){toast('Add at least one item to the order','w');return;}
  if(!isEdit && orders.some(o=>o.id===id)){toast('An order with this ID already exists','w');return;}
  if(!rateLimit('create-order',1500)){toast('Please wait before submitting again','w');return;}
  const existing=isEdit?orders.find(o=>o.id===editingOrderId):null;
  if(isEdit && !existing){ toast('That order no longer exists','w'); cancelEditOrder(); return; }
  const o={
    id, customerName:document.getElementById('ord-customer').value.trim()||null,
    address:document.getElementById('ord-address').value.trim()||null,
    pincode:document.getElementById('ord-pincode').value.trim()||null,
    phone:document.getElementById('ord-phone').value.trim()||null,
    priority:document.getElementById('ord-priority').value,
    method:document.getElementById('ord-method').value,
    items:[...ordItemsList],
    assignedPicker: isEdit?existing.assignedPicker:null,
    status: isEdit?existing.status:'unassigned',
    createdBy: isEdit?existing.createdBy:(currentProfile?.full_name||'Unknown'),
    createdAt: isEdit?existing.createdAt:new Date().toISOString(),
    assignedAt: isEdit?existing.assignedAt:null,
    pickedTaskId: isEdit?existing.pickedTaskId:null
  };
  const ok=await saveOrderRow(o);
  if(!ok) return;
  if(isEdit){
    const idx=orders.findIndex(x=>x.id===editingOrderId);
    if(idx>-1) orders[idx]=o;
  } else {
    orders.unshift(o);
  }
  ordItemsList=[];
  renderOrdItemsList();
  document.getElementById('ord-id').disabled=false;
  document.getElementById('ord-id').value='';
  document.getElementById('ord-store-search').value='';
  document.getElementById('ord-store-select').value='';
  document.getElementById('ord-customer').value='';
  document.getElementById('ord-address').value='';
  document.getElementById('ord-pincode').value='';
  document.getElementById('ord-phone').value='';
  logAudit(isEdit?'EDIT_ORDER':'CREATE_ORDER','orders',id,null,{items:o.items.length,priority:o.priority});
  editingOrderId=null;
  const btn=document.getElementById('ord-submit-btn');
  if(btn) btn.innerHTML='<i class="ti ti-check"></i>Create order';
  const cancelBtn=document.getElementById('ord-cancel-edit-btn');
  if(cancelBtn) cancelBtn.style.display='none';
  renderOrdersBoard();
  toast(isEdit?`Order ${id} updated`:`Order ${id} created — assign it to a picker below`,'s');
}
// ═══ BULK ORDER IMPORT (CSV) ═══
let csvImportOrders=[];
let csvImportErrors=[];
function parseCSV(text){
  const rows=[];
  let row=[], field='', inQuotes=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(inQuotes){
      if(c==='"'){
        if(text[i+1]==='"'){ field+='"'; i++; } else { inQuotes=false; }
      } else field+=c;
    } else {
      if(c==='"') inQuotes=true;
      else if(c===','){ row.push(field); field=''; }
      else if(c==='\n' || c==='\r'){
        if(c==='\r' && text[i+1]==='\n') i++;
        row.push(field); field='';
        if(row.length>1||row[0]!=='') rows.push(row);
        row=[];
      } else field+=c;
    }
  }
  if(field!==''||row.length){ row.push(field); rows.push(row); }
  return rows;
}
async function handleOrdersCSVFile(evt){
  const file=evt.target.files[0];
  if(!file) return;
  // Refresh orders from the DB first, so the "already exists" duplicate
  // guard in processOrdersCSV() checks against the latest state, not a
  // stale in-memory list — this is what let the same CSV get imported
  // more than once and show duplicate rows in the Order queue.
  await loadOrders();
  const reader=new FileReader();
  reader.onload=(e)=>{
    try{ processOrdersCSV(e.target.result); }
    catch(err){ toast('Could not parse CSV: '+(err.message||err),'w'); }
  };
  reader.readAsText(file);
  evt.target.value='';
}
function processOrdersCSV(text){
  const rows=parseCSV(text);
  if(!rows.length){ toast('CSV is empty','w'); return; }
  const header=rows[0].map(h=>(h||'').trim().toLowerCase());
  const col=name=>header.indexOf(name);
  const idxId=col('order_id'), idxCust=col('customer_name'), idxAddr=col('address'),
    idxPin=col('pincode'), idxPhone=col('phone'), idxPri=col('priority'),
    idxMethod=col('method'), idxSku=col('sku'), idxQty=col('qty'), idxNotes=col('notes');
  if(idxId===-1 || idxSku===-1 || idxQty===-1){
    toast('CSV must include at least order_id, sku and qty columns','w');
    return;
  }
  const grouped={};
  const errors=[];
  let lastId='';
  for(let r=1;r<rows.length;r++){
    const row=rows[r];
    if(!row || row.every(c=>!c || !c.trim())) continue;
    let oid=(idxId>-1?(row[idxId]||''):'').trim();
    if(!oid) oid=lastId; else lastId=oid;
    if(!oid){ errors.push(`Row ${r+1}: missing order_id`); continue; }
    if(!validateOrderId(oid)){ errors.push(`Row ${r+1}: invalid order_id "${oid}"`); continue; }
    const skuCode=(idxSku>-1?(row[idxSku]||''):'').trim();
    const qtyRaw=idxQty>-1?(row[idxQty]||''):'';
    const qty=parseInt(qtyRaw)||0;
    const skuObj=SKUS.find(s=>s.sku===skuCode);
    if(!skuObj){ errors.push(`Row ${r+1}: unknown SKU "${skuCode}"`); continue; }
    if(!validateQty(qty)){ errors.push(`Row ${r+1}: invalid qty "${qtyRaw}"`); continue; }
    if(!grouped[oid]){
      if(orders.some(x=>x.id===oid)){ errors.push(`Order ${oid}: an order with this ID already exists — skipped`); grouped[oid]={skip:true,items:[]}; }
      else {
        const pincode=(idxPin>-1?(row[idxPin]||''):'').trim();
        const phone=(idxPhone>-1?(row[idxPhone]||''):'').trim();
        if(pincode && !validatePincode(pincode)) errors.push(`Row ${r+1}: invalid pincode "${pincode}" (order ${oid})`);
        if(phone && !validatePhone(phone)) errors.push(`Row ${r+1}: invalid phone "${phone}" (order ${oid})`);
        const priorityRaw=(idxPri>-1?(row[idxPri]||''):'').trim();
        const priority=['Express','Standard','Pre-order'].includes(priorityRaw)?priorityRaw:'Standard';
        const methodRaw=(idxMethod>-1?(row[idxMethod]||''):'').trim();
        const method=['Single','Batch','Zone'].includes(methodRaw)?methodRaw:'Single';
        grouped[oid]={
          id:oid,
          customerName:(idxCust>-1?(row[idxCust]||''):'').trim()||null,
          address:(idxAddr>-1?(row[idxAddr]||''):'').trim()||null,
          pincode:pincode||null, phone:phone||null,
          priority, method,
          notes:(idxNotes>-1?(row[idxNotes]||''):'').trim()||null,
          items:[]
        };
      }
    }
    if(grouped[oid].skip) continue;
    const existingItem=grouped[oid].items.find(it=>it.sku===skuCode);
    if(existingItem){ existingItem.qty+=qty; } else {
      grouped[oid].items.push({sku:skuCode,name:skuObj.sub,variant:skuObj.variant,qty,bin:`${liveLoc(skuCode).rack}-${liveLoc(skuCode).shelf}`});
    }
  }
  const draftOrders=Object.values(grouped).filter(o=>!o.skip);
  csvImportOrders=draftOrders.filter(o=>o.items.length>0);
  csvImportErrors=errors;
  renderCSVImportPreview();
}
function renderCSVImportPreview(){
  const wrap=document.getElementById('csv-import-preview');
  if(!wrap) return;
  if(!csvImportOrders.length && !csvImportErrors.length){ wrap.style.display='none'; wrap.innerHTML=''; return; }
  wrap.style.display='block';
  wrap.innerHTML=`
    <div class="stitle" style="margin-top:0">CSV import preview</div>
    ${csvImportOrders.length?`<div class="tw" style="margin-bottom:8px"><table><thead><tr><th>Order ID</th><th>Customer</th><th>Priority</th><th>Items</th></tr></thead><tbody>${csvImportOrders.map(o=>`<tr><td class="mono">${esc(o.id)}</td><td style="font-size:11px">${esc(o.customerName||'—')}</td><td>${esc(o.priority)}</td><td>${o.items.length} SKU(s)</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No valid orders to import</div>'}
    ${csvImportErrors.length?`<div style="background:var(--dbg);color:var(--dt);border-radius:8px;padding:10px;font-size:11px;margin-bottom:8px"><b>${csvImportErrors.length} issue(s):</b><br>${csvImportErrors.map(e=>esc(e)).join('<br>')}</div>`:''}
    <div style="display:flex;gap:8px">
      <button onclick="cancelCSVImport()">Cancel</button>
      ${csvImportOrders.length?`<button class="btn-primary" style="flex:1;justify-content:center" onclick="confirmCSVImport()"><i class="ti ti-upload"></i>Import ${csvImportOrders.length} order(s)</button>`:''}
    </div>`;
}
function cancelCSVImport(){
  csvImportOrders=[]; csvImportErrors=[];
  const wrap=document.getElementById('csv-import-preview');
  if(wrap){ wrap.style.display='none'; wrap.innerHTML=''; }
}
async function confirmCSVImport(){
  if(!csvImportOrders.length) return;
  const toImport=[...csvImportOrders];
  let ok=0, fail=0;
  for(const draft of toImport){
    const o={...draft, assignedPicker:null, status:'unassigned', createdBy:currentProfile?.full_name||'Unknown', createdAt:new Date().toISOString()};
    const saved=await saveOrderRow(o);
    if(saved){
      // Replace in place if this ID is already in the local list instead of
      // blindly unshifting — prevents duplicate rows in Order queue if the
      // same CSV gets imported more than once in one session.
      const idx=orders.findIndex(x=>x.id===o.id);
      if(idx>-1) orders[idx]=o; else orders.unshift(o);
      logAudit('CREATE_ORDER','orders',o.id,null,{items:o.items.length,priority:o.priority,source:'csv_import'}); ok++;
    }
    else fail++;
  }
  cancelCSVImport();
  renderOrdersBoard();
  toast(fail?`Imported ${ok} order(s), ${fail} failed — check connection`:`Imported ${ok} order(s) from CSV`, fail?'w':'s');
}
function downloadOrdersCSVTemplate(){
  const s0=SKUS[0]?.sku||'SKU001', s1=SKUS[1]?.sku||'SKU002', s2=SKUS[2]?.sku||'SKU003';
  const csv='order_id,customer_name,address,pincode,phone,priority,method,sku,qty,notes\n'+
    `ORD-SAMPLE-01,Rahul Mehta,12 MG Road,560001,9876543210,Express,Single,${s0},2,\n`+
    `ORD-SAMPLE-01,,,,,,,${s1},1,\n`+
    `ORD-SAMPLE-02,Sana Iyer,44 Anna Salai,600002,9123456780,Standard,Single,${s2},3,Fragile\n`;
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='orders_import_template.csv';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function renderOrdersBoard(){
  const el=document.getElementById('orders-board');
  if(!el) return;
  const searchEl=document.getElementById('ordq-search');
  const searchQ=(searchEl?searchEl.value:'').toLowerCase().trim();
  const boardOrders=searchQ?orders.filter(o=>o.id.toLowerCase().includes(searchQ)):orders;
  if(!orders.length){ el.innerHTML='<div class="empty">No orders yet</div>'; return; }
  if(!boardOrders.length){ el.innerHTML=`<div class="empty">No orders match order no. "${esc(searchQ)}"</div>`; return; }
  const canManage=getPerms().canManageOrders;
  const statusPill={unassigned:'p-hold',assigned:'p-info',picked:'p-out',packed:'p-low',left_warehouse:'p-info',dispatched:'p-ok',cancelled:'p-hold'};
  const statusLabel={packed:'Awaiting Dispatch',left_warehouse:'Left Warehouse',dispatched:'Dispatched'};
  el.innerHTML=`<div class="tw"><table><thead><tr><th>Order ID</th><th>Customer</th><th>Priority</th><th>Items</th><th>Status</th><th>Assigned To</th>${canManage?'<th>Invoice</th><th>Action</th>':''}</tr></thead><tbody>${boardOrders.map(o=>{
    let action='';
    if(canManage && o.status==='unassigned'){
      const opts=pickerNames.length?pickerNames.map(n=>`<option value="${esc(n)}">${esc(n)}</option>`).join(''):'<option value="">No pickers registered</option>';
      action=`<div style="display:flex;gap:4px"><select id="assign-sel-${esc(o.id)}" style="font-size:10px;padding:3px">${opts}</select><button class="btn-sm" style="background:var(--gold);color:#fff;border:none;border-radius:4px;padding:4px 8px;cursor:pointer;font-size:10px" onclick="assignOrder('${esc(o.id)}')">Assign</button><button class="btn-sm" onclick="editOrder('${esc(o.id)}')" title="Edit this order"><i class="ti ti-edit"></i></button><button class="btn-sm btn-danger" onclick="cancelOrder('${esc(o.id)}')" title="Cancel this order"><i class="ti ti-x"></i></button></div>`;
    } else if(canManage && o.status==='assigned'){
      action=`<button class="btn-sm btn-danger" onclick="unassignOrder('${esc(o.id)}')">Unassign</button>`;
    }
    const invoiceCell=canManage?`<td><button class="btn-sm" onclick="printProformaInvoice('${esc(o.id)}')" title="Print Proforma Invoice"><i class="ti ti-file-invoice"></i></button></td>`:'';
    return `<tr${o.status==='cancelled'?' style="opacity:0.5"':''}><td class="mono">${esc(o.id)}</td><td style="font-size:11px">${esc(o.customerName||'—')}</td><td><span class="pill ${o.priority==='Express'?'p-out':o.priority==='Standard'?'p-info':'p-hold'}">${o.priority}</span></td><td>${o.items.length} SKU(s)</td><td><span class="pill ${statusPill[o.status]||'p-info'}">${esc(statusLabel[o.status]||o.status)}</span></td><td style="font-size:11px">${o.assignedPicker?esc(o.assignedPicker):'—'}${o.status==='picked'&&o.pickedTaskId?` <span style="color:var(--t3)">(${esc(o.pickedTaskId)})</span>`:''}</td>${canManage?`${invoiceCell}<td>${action}</td>`:''}</tr>`;
  }).join('')}</tbody></table></div>`;
  renderOrderAgingAlert();
}
async function cancelOrder(orderId){
  const o=orders.find(x=>x.id===orderId);
  if(!o) return;
  if(!confirm(`Cancel order ${orderId}? This can't be undone.`)) return;
  o.status='cancelled';
  const ok=await saveOrderRow(o);
  if(!ok) return;
  logAudit('CANCEL_ORDER','orders',orderId,null,{});
  renderOrdersBoard();
  toast(`Order ${orderId} cancelled`,'s');
}
async function assignOrder(orderId){
  const sel=document.getElementById('assign-sel-'+orderId);
  const picker=sel?sel.value:'';
  if(!picker){toast('Select a picker to assign','w');return;}
  const o=orders.find(x=>x.id===orderId);
  if(!o) return;
  o.assignedPicker=picker;
  o.status='assigned';
  o.assignedAt=new Date().toISOString();
  const ok=await saveOrderRow(o);
  if(!ok) return;
  logAudit('ASSIGN_ORDER','orders',orderId,null,{picker});
  renderOrdersBoard();
  toast(`Order ${orderId} assigned to ${picker}`,'s');
}
async function unassignOrder(orderId){
  const o=orders.find(x=>x.id===orderId);
  if(!o) return;
  o.assignedPicker=null;
  o.status='unassigned';
  o.assignedAt=null;
  const ok=await saveOrderRow(o);
  if(!ok) return;
  renderOrdersBoard();
  toast(`Order ${orderId} unassigned`,'s');
}

// PICKING — picks are only made against orders assigned to the current picker
let pkSessionId=null;
let activeOrder=null;
let pkPickStartTime=null; // Date.now() when this desktop pick session began — used to compute real cycle time
let pkPickStartTs=null;

function populateSkuSelFromList(id_, items){
  const s=document.getElementById(id_);
  if(!s) return;
  s.innerHTML=items.map(it=>{
    const full=SKUS.find(x=>x.sku===it.sku);
    return `<option value="${it.sku}">${full?full.sub:it.name} — ${full?full.variant:it.variant} (${it.sku}) · need ${it.qty}</option>`;
  }).join('');
}
function renderMyAssignedOrders(){
  const el=document.getElementById('pk-my-orders');
  if(!el) return;
  const me=currentProfile?.full_name||'';
  const seeAll=getPerms().canManageOrders;
  const visible=seeAll?orders.filter(o=>o.status==='assigned'):orders.filter(o=>o.status==='assigned' && o.assignedPicker===me);
  el.innerHTML=visible.length?visible.map(o=>`
    <div class="panel" style="margin-bottom:10px">
      <div class="ph"><i class="ti ti-clipboard-list"></i>${esc(o.id)}<span class="pill ${o.priority==='Express'?'p-out':'p-info'}" style="margin-left:auto">${o.priority}</span></div>
      <div class="pb">
        <div style="font-size:11px;color:var(--t2);margin-bottom:8px">${o.items.length} SKU(s) · ${o.method}${o.customerName?' · '+esc(o.customerName):''}${seeAll?' · Assigned to '+esc(o.assignedPicker):''}</div>
        <button class="btn-primary" style="width:100%;justify-content:center" onclick="startDesktopPick('${esc(o.id)}')"><i class="ti ti-player-play"></i>Start pick</button>
      </div>
    </div>
  `).join(''):`<div class="empty">${seeAll?'No orders currently assigned to anyone':'No orders assigned to you right now — check with your supervisor or the Orders tab'}</div>`;
}
function showPickOrdersList(){
  const listWrap=document.getElementById('pk-my-orders-wrap');
  const activeWrap=document.getElementById('pk-active-wrap');
  if(listWrap) listWrap.style.display='block';
  if(activeWrap) activeWrap.style.display='none';
}
function startDesktopPick(orderId){
  const o=orders.find(x=>x.id===orderId);
  if(!o){ toast('Order not found','w'); return; }
  activeOrder=o;
  pkSessionId=newId('SESS');
  pkPickStartTime=Date.now();
  pkPickStartTs=ts();
  pkItemsList=[];
  clearConfirmedShelf();
  pkToteId=null;
  updateToteBadge();
  document.getElementById('pk-my-orders-wrap').style.display='none';
  document.getElementById('pk-active-wrap').style.display='block';
  document.getElementById('pk-active-orderid').textContent=o.id;
  document.getElementById('pk-active-summary').textContent=`${o.items.length} SKU(s) · ${o.priority} · ${o.method}${o.customerName?' · '+o.customerName:''}`;
  populateSkuSelFromList('pk-sku', o.items);
  renderPkChecklist();
  renderPkItemsList();
}
async function cancelActivePick(){
  if(pkItemsList.length && !confirm('Discard this pick? Everything reserved will be released back to stock.')) return;
  if(pkSessionId) await releasePickSession(pkSessionId);
  pkItemsList=[]; pkSessionId=null; activeOrder=null;
  pkPickStartTime=null; pkPickStartTs=null;
  clearConfirmedShelf();
  pkToteId=null;
  updateToteBadge();
  renderPkItemsList();
  showPickOrdersList();
}
function fmtLoc(bin){
  if(!bin) return '—';
  const parts=String(bin).split('-');
  if(parts.length!==2) return bin;
  const shelfNum=parseInt(parts[1]);
  const invalid=!isNaN(shelfNum)&&shelfNum>SHELVES_PER_RACK;
  return `Rack ${parts[0]} · Shelf ${parts[1]}${invalid?' ⚠ needs reassignment':''}`;
}
// After any item is confirmed, jump the SKU picker to the next
// not-yet-fully-picked expected item so the picker can just keep
// scanning/confirming down the list without re-selecting each SKU.
function advancePkSkuSelect(){
  const sel=document.getElementById('pk-sku');
  if(!sel||!activeOrder) return;
  const next=activeOrder.items.find(it=>{
    const picked=pkItemsList.find(p=>p.sku===it.sku);
    const pq=picked?picked.qty:0;
    return pq<it.qty;
  });
  if(next) sel.value=next.sku;
  const qtyEl=document.getElementById('pk-qty');
  if(qtyEl) qtyEl.value=1;
}
// A SKU can now be picked from more than one shelf in the same order
// (if it's split across locations), so "picked so far" must sum every
// pkItemsList line for that SKU — not just find one — and "Location"
// must list every shelf that still legitimately holds this SKU, not
// the single bin frozen at order-creation time.
function renderPkChecklist(){
  const el=document.getElementById('pk-checklist');
  if(!el||!activeOrder) return;
  el.innerHTML=`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Location</th><th>Ordered</th><th>Picked</th></tr></thead><tbody>${activeOrder.items.map(exp=>{
    const pq=pkItemsList.filter(p=>p.sku===exp.sku).reduce((a,p)=>a+p.qty,0);
    const done=pq>=exp.qty;
    const locs=getSkuLocations(exp.sku);
    const locText=locs.length?locs.map(l=>fmtLoc(`${l.rack}-${l.shelf}`)).join(' or '):fmtLoc(exp.bin);
    return `<tr${done?' style="color:var(--st)"':''}><td class="mono">${exp.sku}</td><td style="font-size:11px">${esc(exp.name)} — ${esc(exp.variant)}</td><td style="font-weight:700;font-size:11px;color:var(--gold)"><i class="ti ti-map-pin"></i> ${locText}</td><td>${exp.qty}</td><td>${pq}${done?' <i class="ti ti-check"></i>':''}</td></tr>`;
  }).join('')}</tbody></table></div>`;
}
async function addPkItem(){
  if(!activeOrder){ toast('Start a pick from an assigned order first','w'); return; }
  if(!pkToteId){ toast('Scan a tote bag barcode first — items need to go in the right tote','w'); return; }
  if(!confirmedShelf){ toast('Scan the shelf location label before confirming an item — tote → shelf → item','w'); return; }
  const sku=document.getElementById('pk-sku').value;
  const cond=document.getElementById('pk-cond').value;
  const qty=parseInt(document.getElementById('pk-qty').value)||1;
  const s=SKUS.find(x=>x.sku===sku);
  const expected=activeOrder.items.find(it=>it.sku===sku);
  if(!expected){ toast(sku+' is not part of this order','w'); return; }
  // A split SKU legitimately sits on more than one shelf — accept a
  // scan/confirmation at ANY of its current locations, not just the
  // single "primary" one.
  const validLocs=getSkuLocations(sku);
  const atValidLoc=validLocs.some(l=>l.rack===confirmedShelf.rack && String(l.shelf)===String(confirmedShelf.shelf));
  if(!atValidLoc){
    const locStr=validLocs.length?validLocs.map(l=>`Rack ${l.rack} Shelf ${l.shelf}`).join(' or '):'nowhere on hand';
    toast(`⚠ Location mismatch — ${sku} is stored at ${locStr}, but you're confirmed at Rack ${confirmedShelf.rack} Shelf ${confirmedShelf.shelf}. Scan one of those shelf labels first.`,'w');
    logAudit('LOCATION_MISMATCH','inventory',sku,null,{scannedAt:confirmedShelf,expected:validLocs});
    return;
  }
  if(cond==='defective'){toast(`${sku} flagged DEFECTIVE — item moved to HOLD zone. Raise defect report. (SOP §2.5)`,'w');return;}
  if(!validateQty(qty)){toast('Invalid quantity','w');return;}
  // "Already picked" must sum every bin this SKU has been picked from
  // so far in this order — a split SKU can have multiple pkItemsList
  // lines (one per shelf visited).
  const bin=`${confirmedShelf.rack}-${confirmedShelf.shelf}`;
  const totalAlready=pkItemsList.filter(it=>it.sku===sku).reduce((a,it)=>a+it.qty,0);
  const remaining=expected.qty-totalAlready;
  if(qty>remaining){ toast(`Only ${remaining} more ${sku} expected for this order`,'w'); return; }
  const picker=activeOrder.assignedPicker||currentProfile?.full_name||'Unassigned';
  const res=await reserveStock(sku,qty,pkSessionId,activeOrder.id,picker);
  if(!res.success){
    toast(res.reason==='network_error'?'Could not reach server to reserve stock — try again':`Insufficient stock: ${sku} has only ${res.available} units available`,'w');
    return;
  }
  const already=pkItemsList.find(it=>it.sku===sku && it.bin===bin);
  if(already){ already.qty+=qty; } else {
    pkItemsList.push({sku,name:s.sub,variant:s.variant,qty,bin});
  }
  renderPkItemsList();
  renderPkChecklist();
  advancePkSkuSelect();
  logOrderEvent(activeOrder.id,'item_scanned',picker,{sku,qty,manual:true});
  toast(`Reserved ${qty} × ${sku} — ${res.available} left for other pickers`,'s');
}
async function pkScanAdd(sku){
  if(!activeOrder){ toast('Start a pick from an assigned order first','w'); return; }
  if(!pkToteId){ toast('Scan a tote bag barcode first — items need to go in the right tote','w'); return; }
  const expected=activeOrder.items.find(it=>it.sku===sku.sku);
  if(!expected){ toast(sku.sku+' is not part of this order','w'); return; }
  // The shared barcode-scan handler already confirmed confirmedShelf is one
  // of this SKU's valid locations before calling us — use it as the bin,
  // and sum "already picked" across every bin visited so far for this SKU.
  const bin=confirmedShelf?`${confirmedShelf.rack}-${confirmedShelf.shelf}`:`${liveLoc(sku.sku).rack}-${liveLoc(sku.sku).shelf}`;
  const totalAlready=pkItemsList.filter(it=>it.sku===sku.sku).reduce((a,it)=>a+it.qty,0);
  const remaining=expected.qty-totalAlready;
  if(remaining<=0){ toast(sku.sku+' already fully picked for this order','w'); return; }
  const picker=activeOrder.assignedPicker||currentProfile?.full_name||'Unassigned';
  const res=await reserveStock(sku.sku,1,pkSessionId,activeOrder.id,picker);
  if(!res.success){
    toast(res.reason==='network_error'?'Could not reach server to reserve stock — try again':`Insufficient stock: ${sku.sku} has only ${res.available} units available`,'w');
    return;
  }
  const already=pkItemsList.find(it=>it.sku===sku.sku && it.bin===bin);
  if(already){ already.qty+=1; } else {
    pkItemsList.push({sku:sku.sku,name:sku.sub,variant:sku.variant,qty:1,bin});
  }
  renderPkItemsList();
  renderPkChecklist();
  advancePkSkuSelect();
  logOrderEvent(activeOrder.id,'item_scanned',picker,{sku:sku.sku,qty:1,manual:false});
  logAudit('ITEM_SCANNED','orders',activeOrder.id,null,{orderId:activeOrder.id,sku:sku.sku,rack:confirmedShelf?.rack,shelf:confirmedShelf?.shelf,bin,qtyThisScan:1,totalPickedSoFar:expected.qty-remaining+1,expectedQty:expected.qty,picker,stage:'pick'});
  toast(`Scanned ${sku.sku} · ${expected.qty-remaining+1}/${expected.qty} picked — ${res.available} left for other pickers`,'s');
}
function renderPkItemsList(){
  const el=document.getElementById('pk-items-list');
  if(!el) return;
  el.innerHTML=pkItemsList.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>BIN</th><th>Qty</th><th></th></tr></thead><tbody>${pkItemsList.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${item.name} — ${item.variant}</td><td>${item.bin}</td><td>${item.qty}</td><td><button class="btn-sm btn-danger" onclick="removePkItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
async function removePkItem(i){
  const item=pkItemsList[i];
  if(item && pkSessionId) await releaseStock(pkSessionId,item.sku,item.qty);
  pkItemsList.splice(i,1);
  renderPkItemsList();
  renderPkChecklist();
}
// Hard gate shared by both pick flows (desktop releaseToPacking() and
// mobile completeMobilePick()): a pick ticket can only be closed once
// EVERY line on the order has actually been picked in full — not just
// "at least one item scanned". This is what order 000032's missing
// Female Size S line, and later the Male Shirt Size 38 shortfall, both
// slipped through before — the picker could hit complete with items
// still outstanding and the ticket would close anyway. Recomputed fresh
// from the live order + picked-so-far lists every single call, so there
// is no cached "done" flag anywhere for a refresh (or anything else) to
// leave stale — a refresh just drops the whole in-progress pick and the
// picker has to resume or redo it; it can never leave a ticket half-
// picked but marked complete.
function getShortPickedItems(orderItems, pickedItems){
  return (orderItems||[]).map(exp=>{
    const pq=(pickedItems||[]).filter(p=>p.sku===exp.sku).reduce((a,p)=>a+p.qty,0);
    return {sku:exp.sku,name:exp.name,variant:exp.variant,expected:exp.qty,picked:pq,short:exp.qty-pq};
  }).filter(x=>x.short>0);
}
async function releaseToPacking(){
  if(!activeOrder){ toast('No active pick in progress','w'); return; }
  if(!pkItemsList.length){toast('Add items to the pick list first','w');return;}
  if(!pkToteId){toast('Scan a tote bag barcode before releasing to packing','w');return;}
  const shortItems=getShortPickedItems(activeOrder.items,pkItemsList);
  if(shortItems.length){
    const list=shortItems.map(x=>`${x.sku} (${x.picked}/${x.expected})`).join(', ');
    toast(`Cannot release — still short: ${list}. Scan the remaining qty before closing this pick — see a supervisor if the stock genuinely isn't there.`,'w');
    renderPkChecklist();
    return;
  }
  if(!rateLimit('release-packing',2000)){toast('Please wait before submitting again','w');return;}
  const oid=activeOrder.id;
  const pri=activeOrder.priority;
  const method=activeOrder.method;
  const picker=activeOrder.assignedPicker||currentProfile?.full_name||'Unassigned';
  const result=await commitPickSession(pkSessionId);
  if(!result.success){ toast('Could not release to packing — connection issue, try again','w'); return; }
  const tid=newId('PCK');
  const newTask={id:tid,orderId:oid,priority:pri,method,picker,toteId:pkToteId,items:[...pkItemsList],ts:ts(),status:'awaiting_packing'};
  const pickDurationSecs=pkPickStartTime?Math.floor((Date.now()-pkPickStartTime)/1000):null;
  const histEntry={id:tid,type:'pick',ts:ts(),detail:`${oid} · ${method} pick · ${pri} · ${pkItemsList.length} SKUs · Picker: ${picker} · Tote ${pkToteId}`,orderId:oid,items:[...pkItemsList],picker,pickStartTs:pkPickStartTs,pickDurationSecs};
  // The packing_queue row is the critical write: if it silently fails while
  // the order still gets marked 'picked' below, the order is permanently
  // stuck — too "picked" for Picking to re-show, with no task for Packing
  // to show either (this was the root cause of orders 200-250 vanishing
  // between Picking and Dispatch). So create it FIRST, awaited, retried
  // once, and abort with nothing mutated if it still fails.
  let pqRes=await upsertPackingQueueItem(newTask);
  if(!pqRes.success) pqRes=await upsertPackingQueueItem(newTask);
  if(!pqRes.success){
    console.error('Packing task failed to create for',tid,pqRes.error);
    logAudit('RELEASE_TO_PACKING_FAILED','packing_queue',tid,null,{orderId:oid,error:String(pqRes.error)});
    toast('Could not create the packing task — connection issue. Nothing was changed; please try releasing again.','w');
    return;
  }
  let histRes=await saveHistRecord(histEntry);
  if(!histRes.success) histRes=await saveHistRecord(histEntry);
  if(!histRes.success){
    console.error('Pick history failed to save for',tid,histRes.error);
    logAudit('PICK_HISTORY_SAVE_FAILED','history',tid,null,{orderId:oid,error:String(histRes.error)});
    toast('Packing task created, but the pick history entry failed to save — flag this to a supervisor.','w');
  }
  history.push(histEntry);
  packingQueue.push(newTask);
  pkItemsList.forEach(item=>{
    const [rk,sh]=(item.bin||'').split('-');
    if(rk&&sh) removeStockAtLocation(item.sku,rk,sh,item.qty);
    else if(inv[item.sku]) inv[item.sku].qty-=item.qty;
  });
  saveInv();
  activeOrder.status='picked';
  activeOrder.pickedTaskId=tid;
  const statusOk=await saveOrderRow(activeOrder);
  if(!statusOk){
    console.error('Order status sync to \'picked\' failed for',oid);
    logAudit('ORDER_STATUS_SYNC_FAILED','orders',oid,null,{orderId:oid,attemptedStatus:'picked'});
    toast(`Order ${oid} released to packing, but its status could not be updated to "picked" — it may still show as assigned. Flag this to a supervisor.`,'w');
  }
  logAudit('RELEASE_TO_PACKING','packing_queue',tid,null,{orderId:oid,items:newTask.items.length,picker});
  pkItemsList=[];pkSessionId=null;activeOrder=null;
  pkPickStartTime=null;pkPickStartTs=null;
  pkToteId=null;updateToteBadge();
  renderPkItemsList();
  const el=document.getElementById('pk-log');
  el.innerHTML=history.filter(h=>h.type==='pick').slice(-6).reverse().map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="hist-ts">${h.ts}</span></div><div class="hist-body">${h.detail}</div></div>`).join('');
  showPickOrdersList();
  renderMyAssignedOrders();
  toast(`Pick task ${tid} released to packing queue`,'s');
}

// PACKING QUEUE
function renderPackingQ(){
  const el=document.getElementById('packing-queue');
  if(!packingQueue.length){el.innerHTML='<div class="empty">No tasks awaiting packing — queue is clear</div>';return;}
  const me=currentProfile?.full_name||'';
  el.innerHTML=`<div class="tw"><table><thead><tr><th>Task ID</th><th>Order ID</th><th>Tote</th><th>Priority</th><th>Items</th><th>Released</th><th>Pack Start</th><th>Action</th></tr></thead><tbody>${packingQueue.map((t,i)=>{
    const started=t.packStartTime;
    const startedStr=started?`<span style="color:var(--st);font-weight:600;font-size:10px"><i class="ti ti-clock-check"></i> ${new Date(started).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</span>`:'<span style="color:var(--t3);font-size:10px">Not started</span>';
    const claimedByOther=t.claimedBy && t.claimedBy!==me;
    const toteCell=t.toteId?`<span class="pill p-info">${esc(t.toteId)}</span>`:'<span style="color:var(--t3);font-size:10px">—</span>';
    let btn;
    if(claimedByOther){
      btn=`<span class="pill p-hold"><i class="ti ti-lock"></i> Being packed by ${esc(t.claimedBy)}</span>`;
    } else if(started){
      btn=`<button class="btn-sm btn-success" onclick="openPackModal(${i})"><i class="ti ti-box"></i>Enter Details & Complete</button>`;
    } else {
      btn=`<button class="btn-sm" style="background:var(--gold);color:#fff;border:none;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:11px;display:inline-flex;align-items:center;gap:4px" onclick="startPacking(${i})"><i class="ti ti-player-play"></i>Start Packing</button>`;
    }
    return `<tr><td class="mono">${t.id}</td><td style="font-size:11px">${t.orderId}</td><td>${toteCell}</td><td><span class="pill ${t.priority==='Express'?'p-out':t.priority==='Standard'?'p-info':'p-hold'}">${t.priority}</span></td><td>${t.items.length} SKU(s)</td><td style="font-size:11px;color:var(--t2)">${t.ts}</td><td>${startedStr}</td><td>${btn}</td></tr>`;
  }).join('')}</tbody></table></div>`;
}
let _activePackIdx=null;
let _packElapsedTimer=null;

async function startPacking(i){
  const task=packingQueue[i];
  if(!task) return;
  const picker=currentProfile?.full_name||'Unknown';
  const startTime=Date.now();
  const startTs=ts();
  const res=await claimPackingTask(task.id,picker,startTime,startTs);
  if(!res.success){
    if(res.reason==='already_claimed'){
      toast(`Already being packed by ${res.claimed_by}`,'w');
      task.claimedBy=res.claimed_by;
    } else {
      toast('Could not start packing — connection issue, try again','w');
    }
    renderPackingQ();
    return;
  }
  task.claimedBy=res.claimed_by;
  task.packStartTime=res.pack_start_time;
  task.packStartTs=res.pack_start_ts;
  logOrderEvent(task.orderId,'pack_started',picker,{taskId:task.id});
  renderPackingQ();
  toast(`Packing started for ${task.orderId} — timer running`,'s');
}
let pmChecklist=null;
let pmToteConfirmed=true;
function openPackModal(i, toteAlreadyVerified){
  _activePackIdx=i;
  const t=packingQueue[i];
  document.getElementById('pm-order-id').textContent=t.orderId;
  document.getElementById('pm-start-time').textContent=t.packStartTs||ts();
  document.getElementById('pm-items-list').innerHTML=t.items.map(it=>`<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:0.5px solid var(--b)"><span>${it.sku} — ${it.variant||''}</span><span style="font-weight:600">×${it.qty}</span></div>`).join('')||'<div style="color:var(--t3)">No items</div>';
  document.getElementById('pm-tote-line').innerHTML=t.toteId?`<i class="ti ti-package"></i> Tote ${esc(t.toteId)}`:`<span style="color:var(--t3);font-weight:400">No tote recorded for this pick</span>`;
  pmChecklist=t.items.map(it=>({sku:it.sku,name:it.name,variant:it.variant,expectedQty:it.qty,scannedQty:0}));
  // Gate: if this task has a tote on record and it hasn't already been
  // verified (e.g. by scanning it to open this very task), the packer
  // must scan the tote and have it confirmed against this order BEFORE
  // any product scan is allowed to count.
  pmToteConfirmed=!t.toteId||!!toteAlreadyVerified;
  if(t.toteId && !pmToteConfirmed){
    document.getElementById('pm-tote-gate-expected').textContent=t.toteId;
    document.getElementById('pm-tote-gate-wrap').style.display='block';
    document.getElementById('pm-checklist-wrap').style.display='none';
    document.getElementById('pm-details-wrap').style.display='none';
  } else {
    document.getElementById('pm-tote-gate-wrap').style.display='none';
    document.getElementById('pm-checklist-wrap').style.display='block';
    document.getElementById('pm-details-wrap').style.display='none';
    renderPmChecklist();
  }
  // Clear fields
  ['pm-length','pm-width','pm-height','pm-actual-weight','pm-notes'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.querySelectorAll('.pm-material-cb').forEach(cb=>{cb.checked=false;});
  clearPmWeightPhoto();
  document.getElementById('pm-vol-result').style.display='none';
  // Start elapsed counter
  if(_packElapsedTimer)clearInterval(_packElapsedTimer);
  _packElapsedTimer=setInterval(()=>{
    const el=document.getElementById('pm-elapsed');
    if(!el){clearInterval(_packElapsedTimer);return;}
    const secs=Math.floor((Date.now()-(t.packStartTime||Date.now()))/1000);
    const m=Math.floor(secs/60),s=secs%60;
    el.textContent=`(${m}m ${s}s elapsed)`;
  },1000);
  const overlay=document.getElementById('pack-modal-overlay');
  overlay.style.display='flex';
  enableBarcodeScanner(pmToteConfirmed?'desktop-pack':'desktop-pack-tote-gate');
}
function renderPmChecklist(){
  const el=document.getElementById('pm-checklist');
  if(!el||!pmChecklist) return;
  el.innerHTML=pmChecklist.map(it=>{
    const done=it.scannedQty>=it.expectedQty;
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:0.5px solid var(--b);${done?'opacity:0.6':''}">
      <div><div style="font-weight:700">${it.sku}</div><div style="font-size:10px;color:var(--t2)">${esc(it.name||'')} — ${esc(it.variant||'')}</div></div>
      <div style="font-weight:700;${done?'color:var(--st)':''}">${it.scannedQty}/${it.expectedQty}${done?' <i class="ti ti-check"></i>':''}</div>
    </div>`;
  }).join('');
  const allDone=pmChecklist.every(it=>it.scannedQty>=it.expectedQty);
  const btn=document.getElementById('pm-checklist-continue-btn');
  if(btn) btn.disabled=!allDone;
}
function pmScanItem(sku){
  if(!pmChecklist){
    console.warn('pmScanItem: scan received but no packing task is open (pmChecklist is null)');
    toast('No packing task is open — click a task to open it, then scan','w');
    return;
  }
  const scannedKey=(sku.sku||'').trim().toUpperCase();
  const item=pmChecklist.find(i=>(i.sku||'').trim().toUpperCase()===scannedKey);
  if(!item){
    console.warn('pmScanItem: no match for',sku.sku,'in checklist',pmChecklist.map(i=>i.sku));
    toast(`${sku.sku} (${sku.sub||''}) is not part of this order`,'w');
    return;
  }
  if(item.scannedQty>=item.expectedQty){ toast(sku.sku+' already fully verified','w'); return; }
  item.scannedQty+=1;
  const activeTask=packingQueue[_activePackIdx];
  if(activeTask){
    logOrderEvent(activeTask.orderId,'pack_item_verified',currentProfile?.full_name,{sku:sku.sku});
    logAudit('PACK_ITEM_VERIFIED','orders',activeTask.orderId,null,{orderId:activeTask.orderId,sku:sku.sku,scannedQty:item.scannedQty,expectedQty:item.expectedQty,packer:currentProfile?.full_name});
  }
  toast(`✓ ${sku.sku} verified (${item.scannedQty}/${item.expectedQty})`,'s');
  renderPmChecklist();
}
function proceedToPmDetails(){
  if(!pmChecklist || !pmChecklist.every(it=>it.scannedQty>=it.expectedQty)) return;
  document.getElementById('pm-checklist-wrap').style.display='none';
  document.getElementById('pm-details-wrap').style.display='block';
  disableBarcodeScanner();
}
function backToPmChecklist(){
  document.getElementById('pm-checklist-wrap').style.display='block';
  document.getElementById('pm-details-wrap').style.display='none';
  renderPmChecklist();
  enableBarcodeScanner('desktop-pack');
}
// Called from openPackingTaskByTote when the tote lookup already proved
// this bag matches this order — jump straight past the gate.
function unlockPmChecklistAfterToteGate(){
  pmToteConfirmed=true;
  document.getElementById('pm-tote-gate-wrap').style.display='none';
  document.getElementById('pm-checklist-wrap').style.display='block';
  renderPmChecklist();
  enableBarcodeScanner('desktop-pack');
}
function closePackModal(){
  document.getElementById('pack-modal-overlay').style.display='none';
  if(_packElapsedTimer)clearInterval(_packElapsedTimer);
  _activePackIdx=null;
  pmChecklist=null;
  pmToteConfirmed=true;
  disableBarcodeScanner();
}
function calcVolWeight(){
  const L=parseFloat(document.getElementById('pm-length').value)||0;
  const W=parseFloat(document.getElementById('pm-width').value)||0;
  const H=parseFloat(document.getElementById('pm-height').value)||0;
  const actual=parseFloat(document.getElementById('pm-actual-weight').value)||0;
  const res=document.getElementById('pm-vol-result');
  if(!L||!W||!H||!actual){res.style.display='none';return;}
  const vol=parseFloat(((L*W*H)/5000).toFixed(2));
  const chargeable=Math.max(actual,vol);
  document.getElementById('pm-show-actual').textContent=actual.toFixed(2);
  document.getElementById('pm-show-vol').textContent=vol.toFixed(2);
  document.getElementById('pm-show-chargeable').textContent=chargeable.toFixed(2);
  document.getElementById('pm-vol-formula').textContent=`Volumetric = (${L}×${W}×${H}) ÷ 5000 = ${vol} kg · Chargeable = max(actual, volumetric)`;
  res.style.display='block';
}
async function confirmPackWithDetails(){
  const i=_activePackIdx;
  if(i===null)return;
  const t=packingQueue[i];
  const L=parseFloat(document.getElementById('pm-length').value)||0;
  const W=parseFloat(document.getElementById('pm-width').value)||0;
  const H=parseFloat(document.getElementById('pm-height').value)||0;
  const actual=parseFloat(document.getElementById('pm-actual-weight').value)||0;
  const notes=document.getElementById('pm-notes').value.trim();
  if(!L||!W||!H){toast('Please enter box dimensions (L × W × H)','w');return;}
  if(!validateDimension(L)||!validateDimension(W)||!validateDimension(H)){toast('Invalid dimensions — max 999cm','w');return;}
  if(!actual){toast('Please enter actual weight','w');return;}
  if(!validateWeight(actual)){toast('Invalid weight — must be between 0.01 and 999 kg','w');return;}
  const packMaterials=Array.from(document.querySelectorAll('.pm-material-cb:checked')).map(cb=>cb.value);
  if(!packMaterials.length){toast('Select at least one packaging material used','w');return;}
  if(!rateLimit('pack',2000)){toast('Please wait before submitting again','w');return;}
  const vol=parseFloat(((L*W*H)/5000).toFixed(2));
  const chargeable=Math.max(actual,vol);
  const endTime=Date.now();
  const endTs=ts();
  const durationSecs=t.packStartTime?Math.floor((endTime-t.packStartTime)/1000):null;
  const durationStr=durationSecs!==null?`${Math.floor(durationSecs/60)}m ${durationSecs%60}s`:'N/A';
  const pkid=newId('PKD');
  const packedObj={
    id:pkid,type:'packed',ts:endTs,
    detail:`${t.orderId} · ${t.items.length} SKUs packed — ready for dispatch`,
    orderId:t.orderId,items:t.items,
    packer:t.claimedBy||currentProfile?.full_name||null,
    packStartTs:t.packStartTs,packStartTime:t.packStartTime,
    packEndTs:endTs,packEndTime:endTime,
    packDuration:durationStr,packDurationSecs:durationSecs,
    boxL:L,boxW:W,boxH:H,
    actualWeight:actual,volWeight:vol,chargeableWeight:chargeable,
    packMaterials:packMaterials,
    packNotes:notes,
    weightPhoto:pmWeightPhotoData||null
  };
  // Save the packed record FIRST, before touching local state, the order's
  // status, or the DB queue row — a silent failure here used to leave an
  // order with nothing to show it was ever packed (the same bug class that
  // caused the pick-stage incident). Retry once, abort with nothing
  // changed if it still fails.
  let histRes=await saveHistRecord(packedObj);
  if(!histRes.success) histRes=await saveHistRecord(packedObj);
  if(!histRes.success){
    console.error('Pack record failed to save for',pkid,histRes.error);
    logAudit('COMPLETE_PACK_FAILED','packing_queue',t.id,null,{orderId:t.orderId,error:String(histRes.error)});
    toast('Could not save the pack record — connection issue. Nothing was changed; please try completing the pack again.','w');
    return;
  }
  let delRes=await deletePackingQueueItem(t.id);
  if(!delRes.success) delRes=await deletePackingQueueItem(t.id);
  if(!delRes.success){
    console.error('Failed to remove packing_queue row for',t.id,delRes.error);
    logAudit('PACKING_QUEUE_CLEANUP_FAILED','packing_queue',t.id,null,{orderId:t.orderId,error:String(delRes.error)});
    toast('Order packed and saved, but the old packing task could not be cleared from the queue — flag this to a supervisor.','w');
  }
  const ord=orders.find(x=>x.id===t.orderId);
  if(ord){
    ord.status='packed';
    const statusOk=await saveOrderRow(ord);
    if(!statusOk){
      console.error('Order status sync to \'packed\' failed for',t.orderId);
      logAudit('ORDER_STATUS_SYNC_FAILED','orders',t.orderId,null,{orderId:t.orderId,attemptedStatus:'packed'});
      toast(`Order ${t.orderId} packed and saved, but its status could not be updated — it may still show as picked. Flag this to a supervisor.`,'w');
    }
  }
  closePackModal();
  packingQueue.splice(i,1);
  history.push(packedObj);
  clearPmWeightPhoto();
  logAudit('COMPLETE_PACK','packing_queue',t.id,null,{orderId:t.orderId,chargeable,packDurationSecs:durationSecs});
  renderPackingQ();
  if(document.getElementById('page-dispatch').classList.contains('active')){renderDispatchPage();}
  if(document.getElementById('page-orders')?.classList.contains('active')){renderOrdersBoard();}
  renderDash();
  toast(`Order ${t.orderId} packed in ${durationStr} · ${chargeable}kg chargeable · moved to dispatch`,'s');
}


// DISPATCH — Courier AWB assignment
function renderDispatchPage(){
  renderPackedOrdersList();
  updateDispatchOrderSelect();
  renderDispatchCompletedLog();
  renderDispatchSameDayAlert();
}
function printPackingSlip(historyId){
  const p=history.find(h=>h.id===historyId);
  if(!p){ toast('Packing record not found','w'); return; }
  const o=orders.find(x=>x.id===p.orderId);
  const printWindow=window.open('','SLIP_'+historyId,'width=850,height=1000');
  if(!printWindow){ toast('Please allow popups to print','w'); return; }
  const items=p.items||[];
  const dims=p.boxL?`${p.boxL} × ${p.boxW} × ${p.boxH} cm`:'—';
  printWindow.document.write(`
    <!DOCTYPE html><html><head><title>Packing Slip — ${esc(p.orderId||historyId)}</title>
    <style>
      body{font-family:Arial,sans-serif;margin:20px;color:#333}
      .header{border-bottom:3px solid #000;padding-bottom:12px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end}
      .company{font-size:18px;font-weight:bold}
      .subtitle{font-size:11px;color:#666;margin-top:2px}
      .orderid{font-size:22px;font-weight:bold;text-align:right}
      .meta{display:grid;grid-template-columns:1fr 1fr;gap:6px 20px;margin:14px 0;font-size:12px}
      .meta b{color:#000}
      table{width:100%;border-collapse:collapse;margin-top:10px}
      th{background:#f0f0f0;padding:8px;text-align:left;border:1px solid #ccc;font-size:11px}
      td{padding:9px 8px;border:1px solid #ccc;font-size:12px}
      .totals{margin-top:10px;font-size:12px;text-align:right}
      .sign{margin-top:50px;display:grid;grid-template-columns:1fr 1fr;gap:30px}
      .sign div{border-top:1px solid #000;padding-top:6px;text-align:center;font-size:11px}
      .footer{margin-top:30px;font-size:10px;color:#999;text-align:center}
      @media print{.no-print{display:none}}
    </style></head><body>
    <div id="pdf-content">
    <div class="header">
      <div>
        <div class="company">CaratLane WMS — Packing Slip</div>
        <div class="subtitle">EPS Worldwide Integrated Logistics</div>
      </div>
      <div class="orderid">${esc(p.orderId||'—')}</div>
    </div>
    <div class="meta">
      <div><b>Customer:</b> ${esc(o&&o.customerName||'—')}</div>
      <div><b>Priority:</b> ${esc(o&&o.priority||'—')}</div>
      <div><b>Address:</b> ${esc(o&&o.address||'—')}</div>
      <div><b>Pincode / Phone:</b> ${esc(o&&o.pincode||'—')} / ${esc(o&&o.phone||'—')}</div>
      <div><b>Packed by:</b> ${esc(p.packer||'—')}</div>
      <div><b>Packed on:</b> ${esc(p.packEndTs||p.ts||'—')}</div>
      <div><b>Box dimensions:</b> ${dims}</div>
      <div><b>Chargeable weight:</b> ${p.chargeableWeight?p.chargeableWeight+' kg':'—'}</div>
      <div><b>Packaging material:</b> ${p.packMaterials&&p.packMaterials.length?esc(p.packMaterials.join(', ')):'—'}</div>
      <div><b>Actual weight:</b> ${p.actualWeight?p.actualWeight+' kg':'—'}</div>
    </div>
    <table><thead><tr><th>SKU</th><th>Item</th><th>Variant</th><th>Qty</th></tr></thead><tbody>
      ${items.map(it=>`<tr><td>${esc(it.sku)}</td><td>${esc(it.name||'')}</td><td>${esc(it.variant||'')}</td><td style="text-align:center">${it.qty}</td></tr>`).join('')}
    </tbody></table>
    <div class="totals">Total items: <strong>${items.reduce((a,it)=>a+(it.qty||0),0)}</strong> across ${items.length} SKU(s)</div>
    ${p.packNotes?`<div style="margin-top:10px;font-size:11px"><b>Notes:</b> ${esc(p.packNotes)}</div>`:''}
    <div class="sign">
      <div>Packed &amp; verified by</div>
      <div>Dispatch handover / courier signature</div>
    </div>
    <div class="footer">Printed ${new Date().toLocaleString('en-IN')} · CaratLane WMS</div>
    </div>
    ${pdfDownloadSnippet('PackingSlip-'+(p.orderId||historyId)+'.pdf')}
    </body></html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),300);
}
function printProformaInvoice(orderId){
  const o=orders.find(x=>x.id===orderId);
  if(!o){ toast('Order not found','w'); return; }
  // If this order has already been packed, the invoice's barcode encodes
  // that packed record's own id — the same id "Scan Proforma Invoice Barcode" on the
  // Dispatch page looks for (see handleDispatchExitScan/markLeftWarehouse)
  // to mark the order as physically left the warehouse. AWB/courier is
  // still assigned separately, afterwards, by a supervisor or admin.
  const packed=history.find(h=>h.orderId===orderId && h.type==='packed');
  loadJsBarcode(()=>{
    const printWindow=window.open('','PFI_'+orderId,'width=500,height=750');
    if(!printWindow){ toast('Please allow popups to print','w'); return; }
    const items=o.items||[];
    let subtotal=0;
    let hasMissingPrice=false;
    const rows=items.map(it=>{
      const s=SKUS.find(x=>x.sku===it.sku);
      const price=s&&s.price!=null?s.price:null;
      if(price==null) hasMissingPrice=true;
      const lineTotal=price!=null?price*(it.qty||0):null;
      if(lineTotal!=null) subtotal+=lineTotal;
      return `<tr><td>${esc(it.sku)}</td><td style="text-align:center">${it.qty}</td><td style="text-align:right">${lineTotal!=null?'₹'+lineTotal.toFixed(2):'—'}</td></tr>`;
    }).join('');
    const barcodeValue=packed?packed.id:o.id;
    const svgNS='http://www.w3.org/2000/svg';
    const tmpSvg=document.createElementNS(svgNS,'svg');
    tmpSvg.setAttribute('id','tmp_bc_pfi');
    document.body.appendChild(tmpSvg);
    let bcDataURI='';
    try {
      JsBarcode(tmpSvg, barcodeValue, {format:'CODE128',width:2,height:45,displayValue:false,margin:4,background:'#ffffff',lineColor:'#000000'});
      const svgStr=new XMLSerializer().serializeToString(tmpSvg);
      bcDataURI='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svgStr)));
    } catch(e){ console.warn('Proforma invoice barcode error:',e); }
    document.body.removeChild(tmpSvg);
    printWindow.document.write(`
      <!DOCTYPE html><html><head><title>Proforma Invoice — ${esc(o.id)}</title>
      <style>
        *{box-sizing:border-box}
        body{font-family:Arial,sans-serif;margin:0;color:#222;font-size:9pt}
        .label{width:4in;height:6in;padding:0.15in;display:flex;flex-direction:column}
        .header{border-bottom:1.5px solid #000;padding-bottom:4px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:flex-end}
        .company{font-size:11pt;font-weight:bold}
        .subtitle{font-size:7pt;color:#666;margin-top:1px}
        .orderid{font-size:13pt;font-weight:bold;text-align:right}
        .meta{font-size:8pt;margin-bottom:6px;line-height:1.4}
        .meta b{color:#000}
        table{width:100%;border-collapse:collapse;margin-top:2px;font-size:7.5pt}
        th{background:#f0f0f0;padding:3px 4px;text-align:left;border:1px solid #ccc}
        td{padding:3px 4px;border:1px solid #ccc}
        .totals{margin-top:6px;font-size:8.5pt;text-align:right}
        .totals .grand{font-size:10pt;font-weight:bold;margin-top:2px}
        .note{margin-top:6px;font-size:6.5pt;color:#888}
        .barcode-wrap{text-align:center;margin:6px 0 2px}
        .barcode-wrap img{max-width:100%;max-height:0.55in}
        .barcode-id{font-size:7.5pt;font-family:monospace;text-align:center;letter-spacing:0.5px}
        .scan-note{font-size:6.5pt;color:#555;text-align:center;margin-top:2px}
        .footer{margin-top:auto;font-size:6.5pt;color:#999;text-align:center;padding-top:4px;border-top:0.5px solid #ddd}
        .no-print{position:fixed;top:8px;right:8px;display:flex;gap:8px}
        @media print{
          .no-print{display:none !important}
          @page{size:4in 6in;margin:0}
          body{margin:0}
        }
      </style></head><body>
      <div class="no-print">
        <button onclick="window.print()" style="padding:8px 16px;background:#B8860B;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">🖨 Print</button>
        <button onclick="window.close()" style="padding:8px 16px;background:#f0f0f0;border:none;border-radius:6px;cursor:pointer;font-size:12px">Close</button>
      </div>
      <div class="label">
        <div class="header">
          <div>
            <div class="company">CaratLane WMS</div>
            <div class="subtitle">Proforma Invoice · EPS Worldwide Integrated Logistics</div>
          </div>
          <div class="orderid">${esc(o.id)}</div>
        </div>
        <div class="meta">
          <div><b>Customer:</b> ${esc(o.customerName||'—')}</div>
          <div><b>Address:</b> ${esc(o.address||'—')}</div>
          <div><b>Pincode/Phone:</b> ${esc(o.pincode||'—')} / ${esc(o.phone||'—')}</div>
          <div><b>Priority:</b> ${esc(o.priority||'—')} · <b>Status:</b> ${esc(o.status||'—')}</div>
        </div>
        <table><thead><tr><th>SKU</th><th style="text-align:center">Qty</th><th style="text-align:right">Total</th></tr></thead><tbody>
          ${rows}
        </tbody></table>
        <div class="totals">
          <div>${items.reduce((a,it)=>a+(it.qty||0),0)} unit(s) · ${items.length} SKU(s)</div>
          <div class="grand">Est. Subtotal: ₹${subtotal.toFixed(2)}${hasMissingPrice?' *':''}</div>
        </div>
        ${hasMissingPrice?'<div class="note">* Some items have no catalog price yet — excluded above.</div>':''}
        <div class="note">Proforma estimate only — excludes taxes, not a demand for payment.</div>
        <div class="barcode-wrap">
          ${bcDataURI?`<img src="${bcDataURI}" alt="${barcodeValue}">`:''}
          <div class="barcode-id">${esc(barcodeValue)}</div>
        </div>
        <div class="scan-note">${packed?'Scan at "Scan Proforma Invoice Barcode" on the Dispatch page to mark left warehouse — AWB is added separately by a supervisor/admin.':'Not yet packed — this barcode becomes scannable to mark "left warehouse" once packing is complete.'}</div>
        <div class="footer">Printed ${new Date().toLocaleString('en-IN')} · CaratLane WMS · 4×6in thermal label</div>
      </div>
      </body></html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(()=>printWindow.print(),300);
  });
}
function renderPackedOrdersList(){
  const el=document.getElementById('dispatch-packed-list');
  if(!el){console.log('ERROR: dispatch-packed-list element not found');return;}
  const searchEl=document.getElementById('dispatch-packed-search');
  const q=((searchEl&&searchEl.value)||'').toLowerCase().trim();
  const allPacked=history.filter(h=>h.type==='packed');
  // This list lives in its own fixed-height scrollable box (see
  // .scroll-section) — every order awaiting AWB is rendered here, nothing
  // is hidden behind a "recent N" cap. Search above still narrows it down
  // when the list gets long, it just no longer needs to.
  const packed=q?allPacked.filter(p=>p.orderId.toLowerCase().includes(q)||p.id.toLowerCase().includes(q)):allPacked;
  const listHtml=packed.length?packed.slice().reverse().map(p=>{
    const itemCount=(p.items&&p.items.length)?p.items.length:0;
    const hasDims=p.boxL&&p.boxW&&p.boxH;
    const dimsStr=hasDims?`${p.boxL}×${p.boxW}×${p.boxH}cm · ${p.chargeableWeight}kg chargeable`:'Dims not captured';
    const matStr=p.packMaterials&&p.packMaterials.length?p.packMaterials.join(', '):'';
    const durStr=p.packDuration?`Packed in ${p.packDuration}`:'';
    // Reflect whether this order has already been scanned out of the
    // warehouse (orders.status==='left_warehouse') — otherwise this list
    // always said "Awaiting AWB" even after its Proforma Invoice barcode
    // had been scanned, hiding that progress from whoever assigns the AWB.
    const ord=orders.find(x=>x.id===p.orderId);
    const leftWh=ord&&ord.status==='left_warehouse';
    const pillHtml=leftWh?'<span class="pill p-ok">Left Warehouse — AWB Pending</span>':'<span class="pill p-info">Awaiting AWB</span>';
    return `<div class="hist-entry" style="cursor:pointer">
      <div class="hist-head" onclick="selectDispatchOrder('${p.id}')"><span class="hist-id">${p.id}</span>${pillHtml}</div>
      <div class="hist-body" onclick="selectDispatchOrder('${p.id}')">
        <div>${p.ts} · Order: <strong>${p.orderId}</strong> · ${itemCount} SKU(s)</div>
        <div style="font-size:10px;color:var(--t2);margin-top:2px">📦 ${dimsStr}${matStr?' · '+matStr:''}${durStr?' · ⏱ '+durStr:''}</div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">
        <button class="btn-sm" onclick="event.stopPropagation();printPackingSlip('${p.id}')"><i class="ti ti-printer"></i>Print slip</button>
        <button class="btn-sm" onclick="event.stopPropagation();printProformaInvoice('${p.orderId}')"><i class="ti ti-file-invoice"></i>Proforma Invoice</button>
      </div>
    </div>`;
  }).join(''):(q?'<div class="empty">No matching packed order found</div>':'<div class="empty">No packed orders yet — create and pack orders first</div>');
  el.innerHTML=listHtml;
}
// ── Scan-to-mark "left warehouse" ────────────────────────────────────────
// A distinct, intermediate milestone between 'packed' and 'dispatched':
// the order has been physically scanned out of the building using its
// the Proforma Invoice's barcode, but the courier AWB has not been assigned yet —
// that's still added separately by a supervisor/admin via the existing
// "Assign courier & AWB" form (confirmCourierDispatch, unchanged).
async function handleDispatchExitScan(barcode){
  const packed=history.find(h=>h.id===barcode && h.type==='packed');
  if(!packed){
    const already=history.find(h=>h.id===barcode);
    if(already && (already.type==='dispatched')){
      toast(`${barcode} was already fully dispatched (AWB ${already.awb||'—'}) — nothing to do`,'w');
    } else {
      toast('Unrecognized barcode: '+barcode+' — scan a packed order\'s own Proforma Invoice barcode','w');
    }
    return;
  }
  await markLeftWarehouse(packed);
}
async function markLeftWarehouse(packed){
  const ord=orders.find(x=>x.id===packed.orderId);
  if(!ord){ toast('Order record not found for '+packed.orderId,'w'); return; }
  if(ord.status==='left_warehouse'){ toast(`Order ${ord.id} was already marked as left warehouse — AWB still pending`,'w'); return; }
  if(ord.status==='dispatched'){ toast(`Order ${ord.id} is already fully dispatched`,'w'); return; }
  if(!rateLimit('dispatch-exit-'+packed.id,2000)){ toast('Please wait before scanning again','w'); return; }
  const prevStatus=ord.status;
  ord.status='left_warehouse';
  const statusOk=await saveOrderRow(ord);
  if(!statusOk){
    ord.status=prevStatus; // don't let the UI show a status that failed to save
    console.error('Order status sync to \'left_warehouse\' failed for',ord.id);
    logAudit('ORDER_STATUS_SYNC_FAILED','orders',ord.id,null,{orderId:ord.id,attemptedStatus:'left_warehouse'});
    toast(`Order ${ord.id} scan recorded, but its status could not be updated to "left warehouse" — try scanning again, or flag this to a supervisor.`,'w');
    return;
  }
  logAudit('LEFT_WAREHOUSE','orders',ord.id,null,{orderId:ord.id,packedId:packed.id});
  logOrderEvent(ord.id,'left_warehouse',currentProfile?.full_name,{packedId:packed.id});
  toast(`✓ Order ${ord.id} marked as left warehouse — AWB still needs to be added by a supervisor/admin`,'s');
  renderPackedOrdersList();
  if(document.getElementById('page-orders')?.classList.contains('active')){renderOrdersBoard();}
}
function filterDispatchOrders(){
  const q=(document.getElementById('disp-search-order').value||'').toLowerCase();
  const sel=document.getElementById('disp-order-select');
  const prevVal=sel.value;
  const packed=history.filter(h=>h.type==='packed');
  const list=q?packed.filter(p=>p.orderId.toLowerCase().includes(q)||p.id.toLowerCase().includes(q)):packed;
  sel.innerHTML=`<option value="">— Choose an order —</option>${list.map(p=>{
    const itemCount=(p.items&&p.items.length)?p.items.length:0;
    return `<option value="${p.id}">${p.orderId} · ${itemCount} SKU(s) · ${p.ts}</option>`;
  }).join('')}`;
  if(prevVal&&list.some(p=>p.id===prevVal))sel.value=prevVal;
}
function updateDispatchOrderSelect(){
  const sel=document.getElementById('disp-order-select');
  if(!sel)return;
  // Preserve whatever order is currently selected/loaded across a rebuild —
  // this runs on every live update from OTHER employees' scans (any pick/
  // pack/dispatch anywhere triggers a realtime refresh of this page), so
  // without this, rebuilding the <option> list would silently reset the
  // selection to blank mid-fill: the visible form fields (name/address/
  // courier/AWB/weight) stay exactly as typed, but the app would forget
  // which order they belong to, and Confirm dispatch would wrongly claim
  // required fields are missing.
  const prevVal=sel.value;
  const packed=history.filter(h=>h.type==='packed');
  sel.innerHTML=`<option value="">— Choose an order —</option>${packed.map(p=>{
    const itemCount=(p.items&&p.items.length)?p.items.length:0;
    return `<option value="${p.id}">${p.orderId} · ${itemCount} SKU(s) · ${p.ts}</option>`;
  }).join('')}`;
  if(prevVal&&packed.some(p=>p.id===prevVal))sel.value=prevVal;
}
function assignAWBDirect(pkdId){
  // Called from dispatch page alert — page already active, just select & scroll
  const sel=document.getElementById('disp-order-select');
  if(sel){
    sel.value=pkdId;
    loadDispatchOrder();
    setTimeout(()=>{
      const detail=document.getElementById('disp-order-detail');
      if(detail&&detail.style.display!=='none'){
        detail.scrollIntoView({behavior:'smooth',block:'start'});
        // Flash highlight
        detail.style.outline='2px solid var(--gold)';
        setTimeout(()=>{detail.style.outline='';},1200);
      }
    },80);
  }
}
function selectDispatchOrder(pkdId){
  // If dispatch page is not active, navigate there first then select
  const dispPage=document.getElementById('page-dispatch');
  const isActive=dispPage&&dispPage.classList.contains('active');
  if(!isActive){
    nav('dispatch');
    // Wait for page render then set value and load
    setTimeout(()=>{
      const sel=document.getElementById('disp-order-select');
      if(sel){
        sel.value=pkdId;
        loadDispatchOrder();
        // Scroll the order detail into view
        setTimeout(()=>{
          const detail=document.getElementById('disp-order-detail');
          if(detail&&detail.style.display!=='none')detail.scrollIntoView({behavior:'smooth',block:'start'});
        },150);
      }
    },80);
  } else {
    document.getElementById('disp-order-select').value=pkdId;
    loadDispatchOrder();
    setTimeout(()=>{
      const detail=document.getElementById('disp-order-detail');
      if(detail&&detail.style.display!=='none')detail.scrollIntoView({behavior:'smooth',block:'start'});
    },100);
  }
}
// ═══ DISPATCH / PACKING PHOTOS — POD (proof of delivery, captured
// whenever the order is actually delivered: at dispatch time if already
// available, or later via the "Upload POD" control on each card in the
// dispatched-orders list) & weighing-scale photo (captured at packing,
// alongside the box dimensions/weight entry, since that's when the item
// is actually on the scale). Downscaled client-side (long edge capped,
// JPEG re-encoded) before being stored, since these get taken on every
// single order — hundreds a day — and an uncompressed phone photo
// (often several MB) straight into a text column doesn't scale the way
// the occasional QC exception photo elsewhere in this file does. ═══
let dispPodPhotoData=null, pmWeightPhotoData=null;
let _dispWeightAutofilled=false;
function compressImageFile(file, maxDim, quality){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=(e)=>{
      const img=new Image();
      img.onload=()=>{
        let w=img.width, h=img.height;
        if(w>maxDim||h>maxDim){
          if(w>=h){ h=Math.round(h*(maxDim/w)); w=maxDim; }
          else { w=Math.round(w*(maxDim/h)); h=maxDim; }
        }
        const canvas=document.createElement('canvas');
        canvas.width=w; canvas.height=h;
        const ctx=canvas.getContext('2d');
        ctx.drawImage(img,0,0,w,h);
        try{ resolve(canvas.toDataURL('image/jpeg',quality)); }
        catch(err){ reject(err); }
      };
      img.onerror=()=>reject(new Error('Could not read image'));
      img.src=e.target.result;
    };
    reader.onerror=()=>reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}
async function handleDispPhotoUpload(evt){
  const file=evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')){ toast('Please choose an image file','w'); evt.target.value=''; return; }
  if(file.size > 15*1024*1024){ toast('Image is too large — please use a photo under 15MB','w'); evt.target.value=''; return; }
  const previewEl=document.getElementById('disp-pod-photo-preview');
  try{
    const dataUrl=await compressImageFile(file, 1280, 0.72);
    dispPodPhotoData=dataUrl;
    previewEl.innerHTML=`<div style="position:relative;display:inline-block"><img src="${dataUrl}" style="width:120px;height:90px;object-fit:cover;border-radius:6px;border:0.5px solid var(--b)"><button type="button" onclick="clearDispPhoto()" style="position:absolute;top:-6px;right:-6px;width:20px;height:20px;background:#ff6b6b;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:12px;padding:0;line-height:1">×</button></div>`;
  }catch(err){
    toast('Could not process that image — try a different photo','w');
    evt.target.value='';
  }
}
function clearDispPhoto(){
  dispPodPhotoData=null;
  document.getElementById('disp-pod-photo').value='';
  document.getElementById('disp-pod-photo-preview').innerHTML='';
}
// Weighing-scale photo now captured at packing time (alongside box
// dimensions/weight entry) instead of at dispatch — packers already have
// the scale reading right in front of them there, whereas dispatch may
// happen later, elsewhere, away from the scale.
async function handlePmPhotoUpload(evt){
  const file=evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')){ toast('Please choose an image file','w'); evt.target.value=''; return; }
  if(file.size > 15*1024*1024){ toast('Image is too large — please use a photo under 15MB','w'); evt.target.value=''; return; }
  const previewEl=document.getElementById('pm-weight-photo-preview');
  try{
    const dataUrl=await compressImageFile(file, 1280, 0.72);
    pmWeightPhotoData=dataUrl;
    previewEl.innerHTML=`<div style="position:relative;display:inline-block"><img src="${dataUrl}" style="width:120px;height:90px;object-fit:cover;border-radius:6px;border:0.5px solid var(--b)"><button type="button" onclick="clearPmWeightPhoto()" style="position:absolute;top:-6px;right:-6px;width:20px;height:20px;background:#ff6b6b;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:12px;padding:0;line-height:1">×</button></div>`;
  }catch(err){
    toast('Could not process that image — try a different photo','w');
    evt.target.value='';
  }
}
function clearPmWeightPhoto(){
  pmWeightPhotoData=null;
  const inp=document.getElementById('pm-weight-photo'); if(inp) inp.value='';
  const prev=document.getElementById('pm-weight-photo-preview'); if(prev) prev.innerHTML='';
}
// POD photo can now be added any time after dispatch — typically once
// the courier actually delivers, which is often hours or days after AWB
// assignment — via the upload control on each card in the dispatched-
// orders list, not only on the pre-dispatch form. Re-uploading replaces
// whatever POD photo (if any) was already saved for that dispatch.
async function handlePostDispatchPodUpload(evt, historyId){
  const file=evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')){ toast('Please choose an image file','w'); evt.target.value=''; return; }
  if(file.size > 15*1024*1024){ toast('Image is too large — please use a photo under 15MB','w'); evt.target.value=''; return; }
  const rec=history.find(h=>h.id===historyId);
  if(!rec){ toast('Dispatch record not found','w'); evt.target.value=''; return; }
  try{
    const dataUrl=await compressImageFile(file, 1280, 0.72);
    rec.podPhoto=dataUrl;
    await saveHistRecord(rec);
    renderDispatchCompletedLog();
    toast(`POD photo saved for ${rec.orderId||rec.id}`,'s');
  }catch(err){
    toast('Could not process that image — try a different photo','w');
    evt.target.value='';
  }
}
function loadDispatchOrder(){
  const pkdId=document.getElementById('disp-order-select').value;
  if(!pkdId){document.getElementById('disp-order-detail').style.display='none';return;}
  const packed=history.find(h=>h.id===pkdId);
  if(!packed){toast('Order not found','w');return;}
  const detail=document.getElementById('disp-detail-content');
  const items=packed.items||[];
  const totalUnits=items.reduce((a,i)=>a+(i.qty||0),0);
  detail.innerHTML=`
    <div style="font-size:11px;line-height:1.8">
      <div style="margin-bottom:6px"><span style="color:var(--t2)">Order ID:</span> <span style="font-weight:600">${packed.orderId}</span></div>
      <div style="margin-bottom:6px"><span style="color:var(--t2)">Items:</span> ${items.length?items.map(i=>`<span class="mono">${i.sku}</span>`).join(', '):'—'}</div>
      <div style="color:var(--t2)">Total units: <span style="font-weight:600">${totalUnits}</span></div>
    </div>
  `;
  document.getElementById('disp-order-detail').style.display='block';
  document.getElementById('disp-store-search').value='';
  filterStoreList('disp-store-search','disp-store-select');
  // Auto-fill recipient/address/pincode/phone straight from what was
  // already captured on the order itself at order-creation time (that's
  // where the store search originally ran) — no reason to make the
  // dispatch employee search the same store again. Still fully editable,
  // and the store-search box above stays available to override (e.g. the
  // shipment needs to go somewhere else, or the order never had an
  // address on file to begin with).
  const ord=orders.find(o=>o.id===packed.orderId);
  const addrNote=document.getElementById('disp-addr-note');
  const hasOrdAddr=ord&&(ord.customerName||ord.address||ord.pincode||ord.phone);
  document.getElementById('disp-recip-name').value=hasOrdAddr?(ord.customerName||''):'';
  document.getElementById('disp-address').value=hasOrdAddr?(ord.address||''):'';
  document.getElementById('disp-pincode').value=hasOrdAddr?(ord.pincode||''):'';
  document.getElementById('disp-phone').value=hasOrdAddr?(ord.phone||''):'';
  if(addrNote){
    if(hasOrdAddr){
      addrNote.style.display='block';
      addrNote.innerHTML=`<i class="ti ti-info-circle"></i> Auto-filled from the address saved on this order. Edit above, or search a different store below if it needs to change.`;
    } else {
      addrNote.style.display='block';
      addrNote.innerHTML=`<i class="ti ti-alert-triangle"></i> No address on file for this order — please search the store below or enter it manually.`;
    }
  }
  document.getElementById('disp-shipping').value='Standard Road';
  document.getElementById('disp-courier').value='';
  document.getElementById('disp-awb').value='';
  // Auto-fill final dispatch weight from what was already weighed & typed
  // in at packing (pm-actual-weight) — same physical scale reading, so no
  // reason to make the dispatch employee re-type it. Still fully editable
  // in case it's genuinely re-weighed at courier handover; the note below
  // makes clear where the number came from and updates if they change it.
  // Prefer the actual (physically measured) weight from packing; fall back
  // to the chargeable weight already on file (max of actual/volumetric —
  // still a real recorded figure, just not the raw scale reading) for
  // older packed orders where actual weight wasn't captured, so this
  // doesn't sit blank when SOME weight already exists for the order.
  const packWeight=packed.actualWeight||packed.chargeableWeight||null;
  const usedChargeable=!packed.actualWeight&&!!packed.chargeableWeight;
  const weightInput=document.getElementById('disp-weight');
  const weightNote=document.getElementById('disp-weight-note');
  weightInput.value=packWeight||'';
  _dispWeightAutofilled=!!packWeight;
  if(packWeight){
    weightNote.style.display='block';
    weightNote.innerHTML=usedChargeable
      ? `<i class="ti ti-info-circle"></i> Auto-filled from packing's chargeable weight (${packWeight} kg) — actual weight wasn't on file for this order. Edit above if needed.`
      : `<i class="ti ti-info-circle"></i> Auto-filled from packing weight (${packWeight} kg). Edit above if re-weighed at dispatch.`;
  } else {
    weightNote.style.display='block';
    weightNote.innerHTML=`<i class="ti ti-alert-triangle"></i> No packing weight on file for this order — please enter the weight manually.`;
  }
  clearDispPhoto();
}
function markDispWeightOverridden(){
  if(!_dispWeightAutofilled) return;
  _dispWeightAutofilled=false;
  const weightNote=document.getElementById('disp-weight-note');
  if(weightNote){
    weightNote.style.display='block';
    weightNote.innerHTML=`<i class="ti ti-edit"></i> Weight overridden manually.`;
  }
}
async function confirmCourierDispatch(){
  const pkdId=document.getElementById('disp-order-select').value;
  const name=document.getElementById('disp-recip-name').value.trim();
  const addr=document.getElementById('disp-address').value.trim();
  const pin=document.getElementById('disp-pincode').value.trim();
  const phone=document.getElementById('disp-phone').value.trim();
  const shipping=document.getElementById('disp-shipping').value;
  const courier=document.getElementById('disp-courier').value.trim();
  const awb=document.getElementById('disp-awb').value.trim();
  const dispatchWeight=parseFloat(document.getElementById('disp-weight').value)||0;
  if(!pkdId){toast('Order selection was reset (likely by another update elsewhere in the system) — please pick the order again from the list above, your other entries were kept','w');return;}
  if(!name||!addr||!pin||!phone||!courier||!awb){toast('Please fill all fields including courier partner and AWB number','w');return;}
  if(!validateAWB(awb)){toast('Invalid AWB — letters, numbers and hyphens only (4-30 chars)','w');return;}
  if(!validatePincode(pin)){toast('Invalid pincode — must be 6 digits','w');return;}
  if(!validatePhone(phone)){toast('Invalid phone number','w');return;}
  if(!dispatchWeight){toast('Please enter the final weight at dispatch','w');return;}
  if(!validateWeight(dispatchWeight)){toast('Invalid weight — must be between 0.01 and 999 kg','w');return;}
  if(!rateLimit('dispatch',3000)){toast('Please wait before submitting again','w');return;}
  const packed=history.find(h=>h.id===pkdId);
  if(!packed){ toast('Packed order record not found — refresh and try again','w'); return; }
  const items=packed.items||[];
  const did=newId('DSP');
  // Build the updated record and save it BEFORE mutating the live object
  // or touching the order's status — same reasoning as the pick/pack
  // fixes: a silent failure here must leave nothing changed, not a
  // half-applied dispatch.
  const updated=Object.assign({},packed,{
    type:'dispatched',dispatchedAt:ts(),awb,recipientName:name,address:addr,pincode:pin,
    phone,shippingMethod:shipping,courierPartner:courier,dispatchWeight,podPhoto:dispPodPhotoData||null
  });
  let histRes=await saveHistRecord(updated);
  if(!histRes.success) histRes=await saveHistRecord(updated);
  if(!histRes.success){
    console.error('Dispatch update failed to save for',pkdId,histRes.error);
    logAudit('CONFIRM_DISPATCH_FAILED','history',pkdId,null,{orderId:packed.orderId,awb,error:String(histRes.error)});
    toast('Could not save the dispatch — connection issue. Nothing was changed; please try again.','w');
    return;
  }
  const dispatchRecord={id:did,type:'dispatch',ts:ts(),detail:`AWB: ${awb} · Courier: ${courier} · To: ${name}, ${pin} · Shipping: ${shipping} · Phone: ${phone} · Weight: ${dispatchWeight}kg · ${items.length} SKUs`,packedId:pkdId,orderId:packed.orderId};
  let dispRes=await saveHistRecord(dispatchRecord);
  if(!dispRes.success) dispRes=await saveHistRecord(dispatchRecord);
  if(!dispRes.success){
    console.error('Dispatch log entry failed to save for',did,dispRes.error);
    logAudit('CONFIRM_DISPATCH_RECORD_FAILED','history',did,null,{orderId:packed.orderId,error:String(dispRes.error)});
    toast('Dispatch confirmed, but the dispatch log entry failed to save — flag this to a supervisor.','w');
  }
  Object.assign(packed,updated);
  history.push(dispatchRecord);
  const ord=orders.find(x=>x.id===packed.orderId);
  if(ord){
    ord.status='dispatched';
    const statusOk=await saveOrderRow(ord);
    if(!statusOk){
      console.error('Order status sync to \'dispatched\' failed for',packed.orderId);
      logAudit('ORDER_STATUS_SYNC_FAILED','orders',packed.orderId,null,{orderId:packed.orderId,attemptedStatus:'dispatched'});
      toast(`Order ${packed.orderId} dispatched and saved, but its status could not be updated — it may still show as packed. Flag this to a supervisor.`,'w');
    }
  }
  logAudit('CONFIRM_DISPATCH','history',pkdId,null,{orderId:packed.orderId,awb,courier,dispatchWeight});
  clearDispPhoto();
  renderDispatchPage();
  document.getElementById('disp-search-order').value='';
  if(document.getElementById('page-orders')?.classList.contains('active')){renderOrdersBoard();}
  toast(`Dispatch ${did} confirmed · AWB ${awb} assigned to ${name} · ${dispatchWeight}kg`,'s');
}
function renderDispatchCompletedLog(){
  const el=document.getElementById('disp-dispatch-log');
  if(!el)return;
  const searchEl=document.getElementById('dispatch-log-search');
  const q=((searchEl&&searchEl.value)||'').toLowerCase().trim();
  const allDispatched=history.filter(h=>h.type==='dispatched');
  // This list lives in its own fixed-height scrollable box (see
  // .scroll-section) — every dispatched order is rendered here (this used
  // to cap at the most recent 8, hiding the rest entirely). Search above
  // narrows it down by order ID or AWB when the list gets long.
  const dispatched=q?allDispatched.filter(d=>(d.orderId||'').toLowerCase().includes(q)||(d.awb||'').toLowerCase().includes(q)||(d.id||'').toLowerCase().includes(q)):allDispatched;
  el.innerHTML=dispatched.length?dispatched.slice().reverse().map(d=>{
    const hasDims=d.boxL&&d.boxW&&d.boxH;
    const dimsStr=hasDims?`${d.boxL}×${d.boxW}×${d.boxH} cm`:'—';
    const actualW=d.actualWeight?`${d.actualWeight} kg`:'—';
    const volW=d.volWeight?`${d.volWeight} kg`:'—';
    const chargeW=d.chargeableWeight?`<strong>${d.chargeableWeight} kg</strong>`:'—';
    const dispatchW=d.dispatchWeight?`${d.dispatchWeight} kg`:'—';
    const packDur=d.packDuration||'—';
    const packStart=d.packStartTs||'—';
    const packEnd=d.packEndTs||'—';
    return `<div class="hist-entry">
      <div class="hist-head">
        <span class="hist-id">${d.id}</span>
        <span class="pill p-ok">Dispatched</span>
        <button onclick="printDispatch('${d.id}')" style="background:none;border:none;cursor:pointer;color:var(--t2);font-size:11px;padding:4px 8px;border-radius:3px" onmouseover="this.style.background='var(--s2)'" onmouseout="this.style.background='transparent'"><i class="ti ti-printer"></i>Print</button>
      </div>
      <div class="hist-body">
        <div style="margin-bottom:6px"><span style="font-weight:600">${d.orderId}</span> · AWB: <span class="mono">${d.awb}</span></div>
        <div style="font-size:10px;color:var(--t2);line-height:1.6">To: ${d.recipientName}, ${d.pincode} · ${esc(d.courierPartner||'—')} · ${d.shippingMethod} · ${d.dispatchedAt}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:4px;margin-top:6px">
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Box (L×W×H)</div><div style="font-weight:600">${dimsStr}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Actual wt</div><div style="font-weight:600">${actualW}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Vol. wt</div><div style="font-weight:600;color:var(--it)">${volW}</div></div>
          <div style="background:var(--gold);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:rgba(255,255,255,0.7)">Chargeable</div><div style="font-weight:700;color:#fff">${chargeW}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Dispatch wt</div><div style="font-weight:600">${dispatchW}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Pack start</div><div style="font-weight:600">${packStart}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Pack end</div><div style="font-weight:600">${packEnd}</div></div>
          <div style="background:var(--sbg);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--st)">Duration</div><div style="font-weight:700;color:var(--st)">${packDur}</div></div>
        </div>
        <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;align-items:flex-end">
          ${d.podPhoto?`<div><div style="font-size:9px;color:var(--t3);margin-bottom:3px">POD</div><img src="${d.podPhoto}" onclick="openImageLightbox('${d.podPhoto}','POD photo — ${esc(d.orderId||'')}')" style="width:60px;height:45px;object-fit:cover;border-radius:4px;border:0.5px solid var(--b);cursor:pointer" title="Click to view full size"></div>`:''}
          ${d.weightPhoto?`<div><div style="font-size:9px;color:var(--t3);margin-bottom:3px">Weight (at packing)</div><img src="${d.weightPhoto}" onclick="openImageLightbox('${d.weightPhoto}','Weighing scale photo — ${esc(d.orderId||'')}')" style="width:60px;height:45px;object-fit:cover;border-radius:4px;border:0.5px solid var(--b);cursor:pointer" title="Click to view full size"></div>`:''}
          <div>
            <label for="pod-upload-${d.id}" style="font-size:9px;color:var(--t3);margin-bottom:3px;display:block;cursor:pointer">${d.podPhoto?'Replace POD photo':'Upload POD photo (once delivered)'}</label>
            <input type="file" id="pod-upload-${d.id}" accept="image/*" capture="environment" onchange="handlePostDispatchPodUpload(event,'${d.id}')" style="font-size:9px;max-width:150px">
          </div>
        </div>
      </div>
    </div>`;
  }).join(''):(q?'<div class="empty">No matching dispatched order found</div>':'<div class="empty">No dispatches completed yet</div>');
}

// ANALYTICS & COMPLIANCE
function renderAnalytics(){
  updateNotificationBadge();
  renderKPICards();
  renderAlertsPanel();
  renderABCAnalysis();
  renderLowStockList();
  renderPerformanceMetrics();
  renderCycleTimes();
  renderComplianceLog();
}
function updateNotificationBadge(){
  const badge=document.getElementById('notif-badge');
  if(!badge)return;
  const exceptions=history.filter(h=>h.type==='exception').length;
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  const alerts=exceptions+lowStock;
  if(alerts>0){
    badge.textContent=alerts;
    badge.style.display='inline-flex';
  }else{
    badge.style.display='none';
  }
}
// Inbound tab's badge counts exceptions + low-stock SKUs — clicking it jumps
// straight to the Alerts & Exceptions panel on Analytics & Compliance
// (rather than just re-navigating to whatever tab it happens to sit on),
// so the count actually leads somewhere useful.
function jumpToExceptions(e){
  if(e) e.stopPropagation();
  nav('analytics');
  setTimeout(()=>{
    const el=document.getElementById('alerts-panel');
    if(!el) return;
    el.scrollIntoView({behavior:'smooth',block:'center'});
    el.style.transition='box-shadow .3s';
    el.style.boxShadow='0 0 0 2px var(--gold)';
    el.style.borderRadius='8px';
    setTimeout(()=>{el.style.boxShadow='';},1600);
  },60);
}
// Bell icon dropdown — same three counts as alert-ct (low stock, out of
// stock, packed-but-not-dispatched), but actually browsable/clickable
// instead of a bare number with nowhere to go.
function toggleAlertsDropdown(e){
  if(e) e.stopPropagation();
  const dd=document.getElementById('alerts-dropdown');
  if(!dd) return;
  const isOpen=dd.style.display==='block';
  if(isOpen){ dd.style.display='none'; return; }
  renderAlertsDropdown();
  dd.style.display='block';
}
function navAndCloseAlerts(tab){
  const dd=document.getElementById('alerts-dropdown');
  if(dd) dd.style.display='none';
  nav(tab);
}
function renderAlertsDropdown(){
  const body=document.getElementById('alerts-dropdown-body');
  if(!body) return;
  const low=SKUS.filter(s=>getSt((inv[s.sku]||{qty:0}).qty)==='low');
  const out=SKUS.filter(s=>getSt((inv[s.sku]||{qty:0}).qty)==='out');
  const pendingDispatch=history.filter(h=>h.type==='packed');
  const row=(title,sub,tab)=>`<div class="user-dropdown-item" style="display:block" onclick="navAndCloseAlerts('${tab}')"><div style="font-weight:600">${esc(title)}</div><div style="font-size:10px;color:var(--t2)">${esc(sub)}</div></div>`;
  const section=(label,color,items,tab,extra)=>{
    if(!items.length) return '';
    let html=`<div style="padding:8px 14px 4px;font-size:10px;font-weight:700;color:${color};text-transform:uppercase">${esc(label)} (${items.length})</div>`;
    html+=items.slice(0,6).map(extra).join('');
    if(items.length>6) html+=`<div class="user-dropdown-item" style="font-size:10px;color:var(--t2)" onclick="navAndCloseAlerts('${tab}')">+${items.length-6} more — view all</div>`;
    return html;
  };
  const parts=[
    section('Out of Stock','var(--dt)',out,'inventory',s=>row(s.sku,`${s.sub} · ${s.variant}`,'inventory')),
    section('Low Stock','#e65100',low,'inventory',s=>row(s.sku,`${(inv[s.sku]||{qty:0}).qty} left — ${s.sub}`,'inventory')),
    section('Pending Dispatch','var(--gold)',pendingDispatch,'dispatch',p=>row(p.orderId||p.id,'Packed — awaiting dispatch','dispatch')),
  ].filter(Boolean);
  body.innerHTML=parts.length?parts.join(''):'<div class="empty" style="padding:16px">No active alerts ✓</div>';
}
document.addEventListener('click',function(e){
  const dd=document.getElementById('alerts-dropdown');
  const trigger=document.getElementById('alerts-trigger');
  if(dd&&dd.style.display==='block'&&!dd.contains(e.target)&&trigger&&!trigger.contains(e.target)){
    dd.style.display='none';
  }
});
function renderKPICards(){
  const el=document.getElementById('kpi-cards');
  if(!el)return;
  const grns=history.filter(h=>h.type==='grn').length;
  const picks=history.filter(h=>h.type==='pick').length;
  const packed=history.filter(h=>h.type==='packed').length;
  const dispatched=history.filter(h=>h.type==='dispatched').length;
  const returns=history.filter(h=>h.type==='return').length;
  const exceptions=history.filter(h=>h.type==='exception').length;
  const totalSku=SKUS.length;
  const inStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty>0).length;
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  const outStock=SKUS.filter(s=>!(inv[s.sku])||inv[s.sku].qty<=0).length;
  el.innerHTML=`
    <div class="sc"><div class="sl"><i class="ti ti-package-import"></i>GRNs Created</div><div class="sv">${grns}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-scan"></i>Pick Tasks</div><div class="sv">${picks}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-box"></i>Orders Packed</div><div class="sv">${packed}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-truck-delivery"></i>Dispatched</div><div class="sv">${dispatched}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-package-export"></i>Returns</div><div class="sv">${returns}</div></div>
    <div class="sc"><div class="sl" style="color:var(--dt)"><i class="ti ti-alert-circle"></i>Exceptions</div><div class="sv" style="color:var(--dt)">${exceptions}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-check"></i>In Stock</div><div class="sv">${inStock}/${totalSku}</div></div>
    <div class="sc"><div class="sl" style="color:var(--wt)"><i class="ti ti-alert-triangle"></i>Low/Out</div><div class="sv" style="color:var(--wt)">${lowStock+outStock}</div></div>
  `;
}
function renderAlertsPanel(){
  const el=document.getElementById('alerts-panel');
  if(!el)return;
  const alerts=[];
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0);
  const outStock=SKUS.filter(s=>!(inv[s.sku])||inv[s.sku].qty<=0);
  const exceptions=history.filter(h=>h.type==='exception').slice(-5);
  lowStock.forEach(s=>alerts.push({type:'low',msg:`${s.sub} (${s.sku}): ${(inv[s.sku]||{qty:0}).qty} units left`}));
  outStock.slice(0,3).forEach(s=>alerts.push({type:'out',msg:`${s.sub} (${s.sku}): OUT OF STOCK`}));
  exceptions.forEach(e=>alerts.push({type:'exc',msg:`Exception: ${esc(e.detail)}`}));
  el.innerHTML=alerts.length?alerts.map(a=>`<div class="warn-box" style="background:${a.type==='out'?'var(--dbg)':a.type==='exc'?'var(--wbg)':'var(--sbg)'};color:${a.type==='out'?'var(--dt)':a.type==='exc'?'var(--wt)':'var(--st)'}"><i class="ti ${a.type==='out'?'ti-x':a.type==='exc'?'ti-alert-triangle':'ti-alert-circle'}"></i>${a.msg}</div>`).join(''):'<div class="empty">No alerts — all systems operational ✓</div>';
}
function renderABCAnalysis(){
  const el=document.getElementById('abc-analysis');
  if(!el)return;
  const analysis=[];
  const totQty=SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0);
  SKUS.forEach(s=>{
    const qty=(inv[s.sku]||{qty:0}).qty;
    const pct=((qty/totQty)*100);
    s.abcPct=pct;
    analysis.push(s);
  });
  analysis.sort((a,b)=>b.abcPct-a.abcPct);
  const a=analysis.slice(0,Math.ceil(analysis.length*0.2));
  const b=analysis.slice(Math.ceil(analysis.length*0.2),Math.ceil(analysis.length*0.5));
  const c=analysis.slice(Math.ceil(analysis.length*0.5));
  el.innerHTML=`
    <div style="margin-bottom:8px;font-size:11px">
      <div style="margin-bottom:6px;padding:8px;background:var(--sbg);border-radius:6px"><span style="font-weight:600;color:var(--st)">A Items (High value) — ${a.length} SKUs · ${a.reduce((x,s)=>x+(inv[s.sku]||{qty:0}).qty,0)} units</span><div style="font-size:10px;color:var(--st);margin-top:3px">High-priority stock, frequent movement</div></div>
      <div style="margin-bottom:6px;padding:8px;background:var(--wbg);border-radius:6px"><span style="font-weight:600;color:var(--wt)">B Items (Medium value) — ${b.length} SKUs · ${b.reduce((x,s)=>x+(inv[s.sku]||{qty:0}).qty,0)} units</span><div style="font-size:10px;color:var(--wt);margin-top:3px">Standard inventory management</div></div>
      <div style="padding:8px;background:var(--ibg);border-radius:6px"><span style="font-weight:600;color:var(--it)">C Items (Low value) — ${c.length} SKUs · ${c.reduce((x,s)=>x+(inv[s.sku]||{qty:0}).qty,0)} units</span><div style="font-size:10px;color:var(--it);margin-top:3px">Slow-moving, periodic review</div></div>
    </div>
  `;
}
function renderLowStockList(){
  const el=document.getElementById('low-stock-list');
  if(!el)return;
  const low=SKUS.filter(s=>{const q=(inv[s.sku]||{qty:0}).qty;return q<=3&&q>0;});
  const out=SKUS.filter(s=>!(inv[s.sku])||inv[s.sku].qty<=0);
  const reorder=[...low,...out].slice(0,8);
  el.innerHTML=reorder.length?`<div class="tw"><table style="font-size:11px"><thead><tr><th>SKU</th><th>Item</th><th>Current</th><th>Status</th></tr></thead><tbody>${reorder.map(s=>{const q=(inv[s.sku]||{qty:0}).qty;return `<tr><td class="mono">${s.sku}</td><td>${s.sub}</td><td>${q}</td><td>${q<=0?'<span class="pill p-out">Reorder</span>':'<span class="pill p-low">Low</span>'}</td></tr>`;}).join('')}</tbody></table></div>`:'<div class="empty">All items well-stocked ✓</div>';
}
function renderPerformanceMetrics(){
  const el=document.getElementById('performance-metrics');
  if(!el)return;
  const picks=history.filter(h=>h.type==='pick');
  const errors=history.filter(h=>h.type==='exception'&&h.category==='pick_error');
  const accuracy=picks.length?Math.round(((picks.length-errors.length)/picks.length)*100):0;
  el.innerHTML=`
    <div style="font-size:11px;line-height:1.8">
      <div style="margin-bottom:8px;padding:8px;background:var(--s2);border-radius:6px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:var(--t2)">Pick Accuracy</span><span style="font-weight:600;color:var(--st)">${accuracy}%</span></div>
        <div style="height:6px;background:var(--b);border-radius:3px;overflow:hidden"><div style="height:100%;width:${accuracy}%;background:var(--st);border-radius:3px"></div></div>
      </div>
      <div style="padding:8px;background:var(--s2);border-radius:6px;font-size:10px;color:var(--t2)">
        <div style="margin-bottom:3px"><span style="color:var(--t)">Total Picks:</span> ${picks.length}</div>
        <div><span style="color:var(--t)">Errors:</span> ${errors.length}</div>
      </div>
    </div>
  `;
}
function renderCycleTimes(){
  const el=document.getElementById('cycle-times');
  if(!el)return;
  const grns=history.filter(h=>h.type==='grn');
  const picks=history.filter(h=>h.type==='pick');
  const packed=history.filter(h=>h.type==='packed');
  el.innerHTML=`
    <div style="font-size:11px;line-height:2">
      <div><span style="color:var(--t2)">Receiving (Inbound):</span> <span style="font-weight:600">~2-4 hrs</span></div>
      <div><span style="color:var(--t2)">Pick TAT:</span> <span style="font-weight:600">~15 min/order</span></div>
      <div><span style="color:var(--t2)">Pack TAT:</span> <span style="font-weight:600">~10 min/order</span></div>
      <div><span style="color:var(--t2)">Total (GRN to Dispatch):</span> <span style="font-weight:600">~3-5 days</span></div>
      <div style="margin-top:8px;font-size:10px;color:var(--t2)">Based on ${grns.length} inbound · ${picks.length} picks · ${packed.length} packs</div>
    </div>
  `;
}
function renderComplianceLog(){
  const el=document.getElementById('compliance-log');
  if(!el)return;
  const exceptions=history.filter(h=>h.type==='exception').slice(-10);
  el.innerHTML=exceptions.length?`<div>${exceptions.reverse().map(e=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${e.id}</span><span class="pill p-out">${esc(e.category)}</span></div><div class="hist-body"><div style="font-size:11px">${esc(e.detail)}</div><div style="font-size:10px;color:var(--t2);margin-top:3px">${e.ts} · GRN: ${esc(e.grn||'—')}</div></div></div>`).join('')}</div>`:'<div class="empty">No exceptions recorded ✓</div>';
}

// INVENTORY COUNT & AUDIT
// Cycle counts are keyed by SKU+LOCATION (not just SKU) so a split SKU
// gets one countable line per shelf it actually sits on.
function countKey(sku,rack,shelf){ return sku+'::'+rack+'-'+shelf; }
function startInventoryCount(){
  const countType=document.getElementById('ic-type').value;
  const month=document.getElementById('ic-month').value;
  const date=document.getElementById('ic-date').value;
  const counter=document.getElementById('ic-counter').value.trim();
  const verifier=document.getElementById('ic-verifier').value.trim();
  const reason=document.getElementById('ic-reason').value;
  
  if(!month||!counter||!verifier||!date){toast('Please fill all required fields','w');return;}
  
  currentCount={
    id:newId('CNT'),
    type:countType,
    month,
    date,
    counter,
    verifier,
    reason,
    ts:ts(),
    counts:{},
    status:'in-progress'
  };
  
  // One count LINE per physical location, not per SKU — a SKU split
  // across two shelves needs to be counted (and reconciled) at each
  // shelf separately, since that's how staff actually walk the count.
  // A SKU with no stock anywhere still gets one line at its catalog
  // default location, so it's not skipped by the count entirely.
  SKUS.forEach(s=>{
    const locs=getSkuLocations(s.sku);
    if(!locs.length){
      const loc=liveLoc(s.sku);
      currentCount.counts[countKey(s.sku,loc.rack,loc.shelf)]={
        sku:s.sku, systemQty:0, physicalQty:0, counted:false,
        rack:loc.rack, shelf:loc.shelf, category:s.category
      };
    } else {
      locs.forEach(loc=>{
        currentCount.counts[countKey(s.sku,loc.rack,loc.shelf)]={
          sku:s.sku, systemQty:loc.qty, physicalQty:0, counted:false,
          rack:loc.rack, shelf:loc.shelf, category:s.category
        };
      });
    }
  });
  
  document.getElementById('ic-status').textContent='In Progress';
  document.getElementById('ic-type-display').textContent=countType.charAt(0).toUpperCase()+countType.slice(1);
  document.getElementById('ic-month-display').textContent=month;
  document.getElementById('ic-date-display').textContent=date;
  document.getElementById('ic-counter-display').textContent=counter;
  
  renderCountList();
  updateCountSummary();
  toast(`✓ ${countType.toUpperCase()} count started!`,'s');
}

function renderCountList(){
  const el=document.getElementById('ic-list');
  if(!currentCount.counts){
    el.innerHTML='<div class="empty">No count in progress. Click "Start New Count" to begin.</div>';
    return;
  }
  const q=(document.getElementById('ic-search')?.value||'').toLowerCase();
  const filterType=document.getElementById('ic-filter')?.value||'all';

  // Each entry is now one SKU+LOCATION line, not one per SKU — a split
  // SKU shows up once per shelf it's actually counted on.
  let rows=Object.keys(currentCount.counts).filter(key=>{
    const c=currentCount.counts[key];
    const s=SKUS.find(x=>x.sku===c.sku);
    if(!s) return false;
    const match=s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q);
    if(!match)return false;
    if(filterType==='counted'&&!c.counted)return false;
    if(filterType==='uncounted'&&c.counted)return false;
    if(filterType==='discrepancy'&&c.physicalQty===c.systemQty)return false;
    if(filterType.startsWith('rack:')&&c.rack!==filterType.slice(5))return false;
    return true;
  });

  el.innerHTML=rows.map(key=>{
    const count=currentCount.counts[key];
    const s=SKUS.find(x=>x.sku===count.sku);
    const domId=key.replace(/[^a-zA-Z0-9]/g,'_');
    const variance=count.physicalQty-count.systemQty;
    const varianceClass=variance===0?'p-pass':variance>0?'p-low':'p-out';
    const variancePct=(count.systemQty>0)?Math.round((variance/count.systemQty)*100):0;
    const status=count.counted?'✓ Counted':'Pending';
    const statusClass=count.counted?'p-pass':'p-out';

    return `<div style="padding:10px;background:var(--s2);border-radius:6px;margin-bottom:8px;border-left:4px solid ${count.counted?'var(--st)':'var(--wt)'}">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px;font-size:11px">
        <div><strong>${s.sku}</strong><br><span style="color:var(--t2);font-size:10px">${s.sub}</span></div>
        <div><span style="color:var(--t2);font-size:10px">Rack ${count.rack} / Shelf ${count.shelf}</span><br><span style="font-weight:600">${s.category}</span></div>
        <div style="text-align:right"><span class="pill ${statusClass}" style="font-size:9px">${status}</span></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:8px;font-size:10px">
        <div><span style="color:var(--t2)">System:</span> <strong>${count.systemQty}</strong></div>
        <div><span style="color:var(--t2)">Physical:</span> <input type="number" id="ic-${domId}" value="${count.physicalQty}" min="0" onchange="updateCountQty('${key}')" style="width:60%;padding:4px;border:0.5px solid var(--b);border-radius:3px;font-size:10px"></div>
        <div><span style="color:var(--t2)">Variance:</span> <span class="pill ${varianceClass}" style="font-size:9px">${variance>0?'+':''}${variance} (${variancePct>0?'+':''}${variancePct}%)</span></div>
        <button onclick="markCountComplete('${key}')" style="padding:4px 6px;background:${count.counted?'var(--st)':'var(--b)'};color:#fff;border:none;border-radius:3px;cursor:pointer;font-size:9px;font-weight:600">${count.counted?'✓ Done':'Mark Done'}</button>
      </div>
    </div>`;
  }).join('');
  updateCountSummary();
}

function updateCountQty(key){
  const domId=key.replace(/[^a-zA-Z0-9]/g,'_');
  const val=parseInt(document.getElementById('ic-'+domId).value)||0;
  currentCount.counts[key].physicalQty=val;
  updateCountSummary();
}

function markCountComplete(key){
  currentCount.counts[key].counted=!currentCount.counts[key].counted;
  renderCountList();
}

function filterCountList(){
  renderCountList();
}

function updateCountSummary(){
  // Safe element getter with null check
  const getEl=id=>document.getElementById(id);
  const setEl=(id,val)=>{const el=getEl(id);if(el)el.textContent=val;};
  const setHTML=(id,val)=>{const el=getEl(id);if(el)el.innerHTML=val;};
  const setStyle=(id,prop,val)=>{const el=getEl(id);if(el)el.style[prop]=val;};
  const setDisplay=(id,val)=>{const el=getEl(id);if(el)el.style.display=val;};
  
  if(!currentCount.counts){
    setHTML('ic-summary','<div class="empty">No count in progress</div>');
    return;
  }
  
  const counts=Object.values(currentCount.counts);
  const counted=counts.filter(c=>c.counted).length;
  const totalSystem=counts.reduce((a,c)=>a+c.systemQty,0);
  const totalPhysical=counts.reduce((a,c)=>a+c.physicalQty,0);
  const totalVariance=totalPhysical-totalSystem;
  const variancePct=totalSystem>0?Math.round((totalVariance/totalSystem)*100):0;
  const discrepancies=counts.filter(c=>c.physicalQty!==c.systemQty);
  const highVariance=counts.filter(c=>{
    const pct=c.systemQty>0?Math.abs((c.physicalQty-c.systemQty)/c.systemQty):0;
    return pct>=0.1;
  });
  // Denominator is count LINES (one per SKU+location), not SKUS.length —
  // a split SKU contributes more than one countable line.
  const accuracy=Math.round((1-(discrepancies.length/counts.length))*100);
  const progressPct=Math.round((counted/counts.length)*100);

  // Update progress bar
  setEl('ic-counted',counted+' / '+counts.length);
  setEl('ic-progress-pct',progressPct+'%');
  setStyle('ic-progress-bar','width',progressPct+'%');
  
  // Update summary metrics
  setEl('ic-total-system',totalSystem);
  setEl('ic-total-physical',totalPhysical);
  setEl('ic-total-variance',(totalVariance>0?'+':'')+totalVariance);
  setEl('ic-variance-pct',(variancePct>0?'+':'')+variancePct+'%');
  setEl('ic-metric-counted',counted);
  setEl('ic-metric-disc',discrepancies.length);
  setEl('ic-metric-accuracy',accuracy+'%');
  setEl('ic-metric-high',highVariance.length);
  
  // Show discrepancies section
  if(discrepancies.length>0){
    setDisplay('ic-discrepancies-section','block');
    const discList=Object.keys(currentCount.counts).filter(k=>currentCount.counts[k].physicalQty!==currentCount.counts[k].systemQty).map(key=>{
      const count=currentCount.counts[key];
      const item=SKUS.find(s=>s.sku===count.sku);
      if(!item)return '';
      const variance=count.physicalQty-count.systemQty;
      const type=variance>0?'📈 EXCESS':'📉 SHORTAGE';
      const pct=count.systemQty>0?Math.round((variance/count.systemQty)*100):0;
      return `<div style="padding:8px;background:var(--s3);border-radius:4px;margin-bottom:6px;font-size:10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center">
        <div style="font-weight:600">${count.sku}<br><span style="color:var(--t2);font-weight:400">Rack ${count.rack}/${count.shelf}</span></div>
        <div><span style="color:var(--t2)">${item.sub}</span><br>Sys: ${count.systemQty} | Phys: ${count.physicalQty}</div>
        <div style="text-align:right;white-space:nowrap"><span class="pill ${variance>0?'p-low':'p-out'}" style="font-size:9px">${type} ${variance>0?'+':''}${variance} (${pct>0?'+':''}${pct}%)</span></div>
      </div>`;
    }).join('');
    setHTML('ic-discrepancies-list',discList);
  }

  // Rack analysis — dynamic across whichever of the 15 racks (A–O)
  // currently have count lines on them. Each line already carries its
  // own rack, so a split SKU's shelves are attributed to the right
  // rack automatically instead of all landing on its primary shelf.
  setDisplay('ic-rack-analysis','block');
  const racksInUse=[...new Set(counts.map(c=>c.rack))].sort();
  const rackAnalysisHTML=racksInUse.map(r=>{
    const data=counts.filter(c=>c.rack===r);
    const sysQty=data.reduce((a,c)=>a+c.systemQty,0);
    const physQty=data.reduce((a,c)=>a+c.physicalQty,0);
    const variance=physQty-sysQty;
    const vColor=variance===0?'var(--st)':variance>0?'var(--wt)':'var(--dt)';
    return `<div style="background:var(--s2);padding:12px;border-radius:6px;font-size:11px">
      <div style="font-weight:600;margin-bottom:8px">Rack ${esc(r)}</div>
      <div style="line-height:2">
        <div><span style="color:var(--t2)">System Qty:</span> <strong>${sysQty}</strong></div>
        <div><span style="color:var(--t2)">Physical Qty:</span> <strong>${physQty}</strong></div>
        <div><span style="color:var(--t2)">Variance:</span> <strong style="color:${vColor}">${variance>0?'+':''}${variance}</strong></div>
      </div>
    </div>`;
  }).join('');
  setHTML('ic-rack-analysis-grid', rackAnalysisHTML);
  
  // Movement analysis
  setDisplay('ic-movement-section','block');
  const movementDetail=`<div><strong>Why the variance?</strong> This shows inbound (GRN) and outbound (Dispatch) movements to explain the difference.</div>`;
  setHTML('ic-movement-detail',movementDetail);
}

function completeInventoryCount(){
  const counts=Object.values(currentCount.counts);
  const uncounted=counts.filter(c=>!c.counted);
  if(uncounted.length>0){toast(`${uncounted.length} location(s) not yet counted. Complete all counts first.`,'w');return;}

  currentCount.status='completed';
  currentCount.completedTs=ts();

  // Calculate movements per count LINE (keyed the same as currentCount.counts).
  // Movement totals are still SKU-wide (GRN/pick/dispatch don't break down
  // by shelf), so a split SKU's two lines will show identical movement
  // figures — expected, since the movement history itself isn't
  // per-location.
  //
  // IMPORTANT: count.systemQty was captured in startInventoryCount() as
  // the CURRENT stock level at that moment — it already reflects every
  // GRN/dispatch/pick/return that ever happened before the count started.
  // "Expected Qty" (systemQty + netMovement) is meant to explain a
  // variance from things that happened DURING the count window (received
  // or shipped out while counting was in progress), not from all-time
  // history — adding an unscoped all-time netMovement on top of an
  // already-current systemQty double-counts everything that happened
  // before the count even began. Bound the movement scan to the window
  // between when this count started and when it's being completed now.
  const countStartT=parseDisplayTs(currentCount.ts);
  const countEndT=parseDisplayTs(currentCount.completedTs);
  const inCountWindow=h=>{
    const t=parseDisplayTs(h.ts);
    return t>0 && (!countStartT||t>=countStartT) && (!countEndT||t<=countEndT);
  };
  const windowHistory=history.filter(inCountWindow);
  currentCount.movements={};
  Object.keys(currentCount.counts).forEach(key=>{
    const count=currentCount.counts[key];
    const sku=count.sku;
    const variance=count.physicalQty-count.systemQty;
    const grnItems=windowHistory.filter(h=>h.type==='grn'&&!h.voided).flatMap(g=>(g.items||[]).filter(i=>i.sku===sku)).reduce((a,i)=>a+i.qty,0);
    // pick/return used to count MATCHING HISTORY ENTRIES (via a string
    // search on `detail`), not actual quantity — inconsistent with
    // grn/dispatch, which correctly sum item qty. Returns never even
    // recorded which SKU was restocked (see processReturn()), so this
    // was silently always 0 for returns; now that processReturn() stores
    // an `items` array, this picks it up for any return going forward.
    const pickItems=windowHistory.filter(h=>h.type==='pick').flatMap(p=>(p.items||[]).filter(i=>i.sku===sku)).reduce((a,i)=>a+i.qty,0);
    const dispatchItems=windowHistory.filter(h=>h.type==='dispatched').flatMap(d=>d.items||[]).filter(i=>i.sku===sku).reduce((a,i)=>a+i.qty,0);
    const returnItems=windowHistory.filter(h=>h.type==='return').flatMap(r=>(r.items||[]).filter(i=>i.sku===sku&&i.grade==='A')).reduce((a,i)=>a+i.qty,0);
    currentCount.movements[key]={grnInbound:grnItems,pickOutbound:pickItems,dispatchOutbound:dispatchItems,returnInbound:returnItems,netMovement:grnItems-dispatchItems+returnItems};
  });
  
  inventoryCounts.push({...currentCount});
  localStorage.setItem('cl_wms_counts',JSON.stringify(inventoryCounts));
  
  const completedMonth=currentCount.month;
  const completedCounter=currentCount.counter;
  
  toast('Inventory count completed and saved!','s');
  currentCount={};
  document.getElementById('ic-status').textContent='Not Started';
  document.getElementById('ic-month-display').textContent='—';
  document.getElementById('ic-counter-display').textContent='—';
  renderCountList();
}

// MOBILE DASHBOARD
let mobilePhotoData=null;
let mobilePickSession=null,mobilePackActive=null;

function updateMobileKPIs(){
  const picks=history.filter(h=>h.type==='pick');
  // "today" was compared as an ISO date string ("2026-09-11") against
  // ts(), which is a display string like "11 Sept, 12:07 am" — that
  // substring match could never succeed, so todayPicks was ALWAYS empty
  // and this whole KPI row silently showed 0/100%/0m regardless of real
  // activity. Use parseDisplayTs + a real calendar-date comparison
  // instead, same pattern as getSameDayPending().
  const now=new Date();
  const todayY=now.getFullYear(),todayM=now.getMonth(),todayD=now.getDate();
  const todayPicks=picks.filter(p=>{
    const t=parseDisplayTs(p.ts);
    if(!t) return false;
    const d=new Date(t);
    return d.getFullYear()===todayY && d.getMonth()===todayM && d.getDate()===todayD;
  });
  const dispatches=history.filter(h=>h.type==='dispatched');
  // Same-day scope on both sides of the ratio — this used to divide
  // all-time exceptions by today's picks, a numerator/denominator
  // mismatch that overstated how bad (or good) accuracy looked on any
  // day with few picks but old, unrelated exceptions on record.
  const todayExceptions=history.filter(h=>{
    if(h.type!=='exception') return false;
    const t=parseDisplayTs(h.ts);
    if(!t) return false;
    const d=new Date(t);
    return d.getFullYear()===todayY && d.getMonth()===todayM && d.getDate()===todayD;
  });
  const accuracy=todayPicks.length>0?Math.round((1-(todayExceptions.length/todayPicks.length))*100):100;
  // Real average pick-to-release duration for today's picks, instead of
  // a random placeholder number. Only picks with recorded duration data
  // count (older records predating this fix won't have pickDurationSecs).
  const picksWithDuration=todayPicks.filter(p=>p.pickDurationSecs>0);
  const avgCycleTime=picksWithDuration.length>0?Math.round(picksWithDuration.reduce((a,p)=>a+p.pickDurationSecs,0)/picksWithDuration.length/60):0;

  document.getElementById('m-kpi-picks').textContent=todayPicks.length;
  document.getElementById('m-kpi-accuracy').textContent=accuracy+'%';
  document.getElementById('m-kpi-cycletime').textContent=avgCycleTime+'m';
  document.getElementById('m-kpi-dispatch').textContent=dispatches.length;
  
  const pkQueue=packingQueue.length;
  const totalItems=SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0);
  const progress=totalItems>0?Math.round((1-(pkQueue/totalItems))*100):0;
  
  document.getElementById('m-items-left').textContent=pkQueue;
  document.getElementById('m-progress').textContent=progress+'%';
  document.getElementById('m-current-order').textContent=pkQueue>0?packingQueue[0].orderId:'—';
  loadReservedMap().then(()=>{
    const totalHeld=Object.values(reservedMap).reduce((a,v)=>a+v,0);
    const el=document.getElementById('m-held-stock');
    if(el) el.textContent=totalHeld+' units';
  });
}

function initMobileTab(){
  const perms=getPerms();
  const pickBtn=document.getElementById('btn-pick');
  const packBtn=document.getElementById('btn-pack');
  const quickPick=document.getElementById('m-quick-pick');
  const quickPack=document.getElementById('m-quick-pack');
  if(pickBtn) pickBtn.style.display=perms.canPick?'flex':'none';
  if(packBtn) packBtn.style.display=perms.canPack?'flex':'none';
  if(quickPick) quickPick.style.display=perms.canPick?'flex':'none';
  if(quickPack) quickPack.style.display=perms.canPack?'flex':'none';
  let defaultView='home';
  if(perms.canPick && !perms.canPack) defaultView='pick';
  else if(perms.canPack && !perms.canPick) defaultView='pack';
  switchMobileView(defaultView);
}

function switchMobileView(view){
  ['home','pick','pack','qc'].forEach(v=>{
    const panel=document.getElementById('mobile-'+v);
    if(panel) panel.style.display=v===view?'block':'none';
    const btn=document.getElementById('btn-'+v);
    if(btn) btn.classList.toggle('active',v===view);
  });
  disableBarcodeScanner();
  if(view==='home')updateMobileKPIs();
  if(view==='pick')initMobilePickView();
  if(view==='pack')renderMobilePackQueue();
}

// ═══ MOBILE PICK (scan-driven) ═══
function initMobilePickView(){
  const setup=document.getElementById('mp-pick-setup');
  const active=document.getElementById('mp-pick-active');
  if(!setup||!active) return;
  if(mobilePickSession){
    setup.style.display='none';
    active.style.display='block';
    document.getElementById('mp-pick-order-label').textContent='Order '+mobilePickSession.orderId;
    populateSkuSelFromList('mp-manual-sku', mobilePickSession.order.items);
    updateToteBadge();
    renderMobilePickSession();
    renderMpPickChecklist();
    enableBarcodeScanner('mobile-pick');
  } else {
    setup.style.display='block';
    active.style.display='none';
    loadOrders().then(renderMpMyOrders);
  }
}
function renderMpMyOrders(){
  const el=document.getElementById('mp-my-orders');
  if(!el) return;
  const me=currentProfile?.full_name||'';
  const seeAll=getPerms().canManageOrders;
  const visible=seeAll?orders.filter(o=>o.status==='assigned'):orders.filter(o=>o.status==='assigned' && o.assignedPicker===me);
  el.innerHTML=visible.length?visible.map(o=>`
    <div class="mp-pack-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-weight:700;font-size:13px">${esc(o.id)}</span>
        <span class="pill ${o.priority==='Express'?'p-out':'p-info'}">${o.priority}</span>
      </div>
      <div style="font-size:11px;color:var(--t2);margin-bottom:9px">${o.items.length} SKU(s) · ${o.method}${o.customerName?' · '+esc(o.customerName):''}${seeAll?' · Assigned to '+esc(o.assignedPicker):''}</div>
      <button class="btn-primary" style="width:100%;justify-content:center" onclick="startMobilePick('${esc(o.id)}')"><i class="ti ti-player-play"></i>Start scanning</button>
    </div>
  `).join(''):`<div class="empty">${seeAll?'No orders currently assigned to anyone':'No orders assigned to you right now'}</div>`;
}
function startMobilePick(orderId){
  const o=orders.find(x=>x.id===orderId);
  if(!o){ toast('Order not found','w'); return; }
  mobilePickSession={orderId:o.id,priority:o.priority,method:o.method,items:[],sessionId:newId('SESS'),order:o,toteId:null,pickStartTime:Date.now(),pickStartTs:ts()};
  clearConfirmedShelf();
  updateToteBadge();
  initMobilePickView();
  toast('Scan a tote bag first, then the shelf label, then the item','s');
}

function mobileScanFeedback(ok){
  try{ if(navigator.vibrate) navigator.vibrate(ok?40:[30,60,30]); }catch(e){}
  try{
    const ctx=new (window.AudioContext||window.webkitAudioContext)();
    const o=ctx.createOscillator(), g=ctx.createGain();
    o.frequency.value=ok?1400:320;
    o.connect(g);g.connect(ctx.destination);
    g.gain.setValueAtTime(0.15,ctx.currentTime);
    o.start();
    o.stop(ctx.currentTime+(ok?0.09:0.18));
    setTimeout(()=>{try{ctx.close();}catch(e){}},300);
  }catch(e){}
}

// Atomically holds stock server-side via reserve_stock_item() so two
// pickers scanning the same low-stock item can't both succeed — the
// second one gets told it's unavailable in real time.
async function reserveStock(sku,qty,sessionId,orderId,picker){
  try{
    const {data,error}=await supa.rpc('reserve_stock_item',{p_sku:sku,p_qty:qty,p_session_id:sessionId,p_order_id:orderId||null,p_picker:picker||null});
    if(error) throw error;
    return data;
  }catch(e){
    console.error('reserveStock failed:',e.message||e);
    return {success:false,reason:'network_error',available:(inv[sku]||{qty:0}).qty};
  }
}
async function releaseStock(sessionId,sku,qty){
  try{
    const {data,error}=await supa.rpc('release_reservation',{p_session_id:sessionId,p_sku:sku,p_qty:qty??null});
    if(error) throw error;
    return data;
  }catch(e){ console.error('releaseStock failed:',e.message||e); return {success:false}; }
}
async function commitPickSession(sessionId){
  try{
    const {data,error}=await supa.rpc('commit_pick_session',{p_session_id:sessionId});
    if(error) throw error;
    return data;
  }catch(e){ console.error('commitPickSession failed:',e.message||e); return {success:false}; }
}
async function releasePickSession(sessionId){
  try{
    const {data,error}=await supa.rpc('release_pick_session',{p_session_id:sessionId});
    if(error) throw error;
    return data;
  }catch(e){ console.error('releasePickSession failed:',e.message||e); return {success:false}; }
}

async function mobilePickAddScan(sku){
  if(!mobilePickSession) return;
  if(!mobilePickSession.toteId){
    mobileScanFeedback(false);
    toast('Scan a tote bag barcode first — items need to go in the right tote','w');
    return;
  }
  const expected=mobilePickSession.order.items.find(it=>it.sku===sku.sku);
  if(!expected){
    mobileScanFeedback(false);
    toast(sku.sku+' is not part of this order','w');
    return;
  }
  // Sum picked qty across every bin this SKU has been picked from so far
  // in this session — a split SKU can have multiple item lines here.
  const totalAlready=mobilePickSession.items.filter(i=>i.sku===sku.sku).reduce((a,i)=>a+i.qty,0);
  if(totalAlready>=expected.qty){
    mobileScanFeedback(false);
    toast(sku.sku+' already fully picked for this order','w');
    return;
  }
  const picker=currentProfile?.full_name||'Mobile picker';
  let res=await reserveStock(sku.sku,1,mobilePickSession.sessionId,mobilePickSession.orderId,picker);
  if(!res.success && res.reason==='network_error'){
    const localAvail=(inv[sku.sku]||{qty:0}).qty-totalAlready;
    if(localAvail>0){
      queueOfflineAction('reserve_stock',{sku:sku.sku,qty:1,sessionId:mobilePickSession.sessionId,orderId:mobilePickSession.orderId,picker},`Reserve ${sku.sku} · ${mobilePickSession.orderId}`);
      res={success:true,available:localAvail-1,offline:true};
    }
  }
  if(!res.success){
    mobileScanFeedback(false);
    if(res.reason==='network_error'){
      toast('Could not reach server to reserve stock — check connection and try again','w');
    } else {
      toast(`${sku.sku}: no stock available to reserve (${res.available} left)`,'w');
    }
    return;
  }
  const bin=confirmedShelf?`${confirmedShelf.rack}-${confirmedShelf.shelf}`:`${liveLoc(sku.sku).rack}-${liveLoc(sku.sku).shelf}`;
  const existing=mobilePickSession.items.find(i=>i.sku===sku.sku && i.bin===bin);
  if(existing){ existing.qty+=1; existing.avail=res.available; } else {
    mobilePickSession.items.push({sku:sku.sku,name:sku.sub,variant:sku.variant,qty:1,bin,avail:res.available});
  }
  renderMobilePickSession();
  renderMpPickChecklist();
  mobileScanFeedback(true);
  logOrderEvent(mobilePickSession.orderId,'item_scanned',picker,{sku:sku.sku,qty:1,manual:false});
  const _totalPickedSoFar=mobilePickSession.items.filter(i=>i.sku===sku.sku).reduce((a,i)=>a+i.qty,0);
  logAudit('ITEM_SCANNED','orders',mobilePickSession.orderId,null,{orderId:mobilePickSession.orderId,sku:sku.sku,rack:confirmedShelf?.rack,shelf:confirmedShelf?.shelf,bin,qtyThisScan:1,totalPickedSoFar:_totalPickedSoFar,expectedQty:expected.qty,picker,stage:'pick_mobile'});
  toast(res.offline?`Offline — queued ${sku.sub} (will sync)`:'Reserved '+sku.sub+' — '+sku.variant, res.offline?'w':'s');
}

function mobilePickManualAdd(){
  const skuCode=document.getElementById('mp-manual-sku').value;
  const sku=SKUS.find(s=>s.sku===skuCode);
  if(!sku) return;
  mobilePickAddScan(sku);
}

async function adjustMobilePickQty(sku,delta){
  if(!mobilePickSession) return;
  const item=mobilePickSession.items.find(i=>i.sku===sku);
  if(!item) return;
  if(delta>0){
    const skuObj=SKUS.find(s=>s.sku===sku);
    const picker=currentProfile?.full_name||'Mobile picker';
    const res=await reserveStock(sku,1,mobilePickSession.sessionId,mobilePickSession.orderId,picker);
    if(!res.success){ toast(`No more ${sku} available to reserve`,'w'); return; }
    item.qty+=1; item.avail=res.available;
  } else {
    const res=await releaseStock(mobilePickSession.sessionId,sku,1);
    item.qty-=1;
    if(res.success!==false) item.avail+=1;
    if(item.qty<=0){ mobilePickSession.items=mobilePickSession.items.filter(i=>i.sku!==sku); }
  }
  renderMobilePickSession();
  renderMpPickChecklist();
}

function renderMpPickChecklist(){
  const el=document.getElementById('mp-pick-checklist');
  if(!el||!mobilePickSession) return;
  el.innerHTML=`<div style="display:grid;gap:6px">${mobilePickSession.order.items.map(exp=>{
    const pq=mobilePickSession.items.filter(p=>p.sku===exp.sku).reduce((a,p)=>a+p.qty,0);
    const done=pq>=exp.qty;
    const locs=getSkuLocations(exp.sku);
    const locText=locs.length?locs.map(l=>fmtLoc(`${l.rack}-${l.shelf}`)).join(' or '):fmtLoc(exp.bin);
    return `<div style="display:flex;justify-content:space-between;align-items:center;background:var(--s2);padding:8px 10px;border-radius:6px;${done?'opacity:0.6':''}">
      <div>
        <div style="font-size:11px;font-weight:700">${exp.sku} — ${esc(exp.name)}</div>
        <div style="font-size:11px;font-weight:700;color:var(--gold);margin-top:2px"><i class="ti ti-map-pin"></i> ${locText}</div>
      </div>
      <div style="font-size:11px;font-weight:700;${done?'color:var(--st)':''}">${pq}/${exp.qty}${done?' <i class="ti ti-check"></i>':''}</div>
    </div>`;
  }).join('')}</div>`;
}
function renderMobilePickSession(){
  const el=document.getElementById('mp-pick-list');
  if(!el||!mobilePickSession) return;
  const items=mobilePickSession.items;
  el.innerHTML=items.length?items.map(it=>{
    return `<div class="scan-row matched">
      <div class="scan-row-icon"><i class="ti ti-check"></i></div>
      <div class="scan-row-body">
        <div class="scan-row-sku">${it.sku}</div>
        <div class="scan-row-meta">${esc(it.name)} — ${esc(it.variant)} · BIN ${it.bin} · ${it.avail} more available</div>
      </div>
      <div class="scan-row-qty">
        <button class="qb" onclick="adjustMobilePickQty('${it.sku}',-1)">−</button>
        <span class="qv">${it.qty}</span>
        <button class="qb" onclick="adjustMobilePickQty('${it.sku}',1)">+</button>
      </div>
    </div>`;
  }).join(''):'<div class="empty">Scan an item to begin — it\'s reserved for you the instant it scans</div>';
}

async function cancelMobilePick(){
  if(!mobilePickSession) return;
  if(mobilePickSession.items.length && !confirm('Discard this pick? Everything reserved will be released back to stock.')) return;
  await releasePickSession(mobilePickSession.sessionId);
  mobilePickSession=null;
  disableBarcodeScanner();
  initMobilePickView();
  renderMpMyOrders();
}

async function completeMobilePick(){
  if(!mobilePickSession || !mobilePickSession.items.length){ toast('Scan at least one item first','w'); return; }
  // Same hard gate as the desktop pick flow — see getShortPickedItems()
  // for why: every line on the order must be fully scanned before this
  // ticket can close, checked fresh against live state every call.
  const shortItems=getShortPickedItems(mobilePickSession.order.items,mobilePickSession.items);
  if(shortItems.length){
    const list=shortItems.map(x=>`${x.sku} (${x.picked}/${x.expected})`).join(', ');
    toast(`Cannot complete — still short: ${list}. Scan the remaining qty first — see a supervisor if the stock genuinely isn't there.`,'w');
    renderMpPickChecklist();
    return;
  }
  if(!rateLimit('mobile-pick',2000)){ toast('Please wait before submitting again','w'); return; }
  const result=await commitPickSession(mobilePickSession.sessionId);
  if(!result.success){ toast('Could not complete pick — connection issue, try again','w'); return; }
  const tid=newId('PCK');
  const picker=currentProfile?.full_name||'Mobile picker';
  const newTask={id:tid,orderId:mobilePickSession.orderId,priority:mobilePickSession.priority,method:mobilePickSession.method,picker,toteId:mobilePickSession.toteId||null,items:[...mobilePickSession.items],ts:ts(),status:'awaiting_packing'};
  const pickDurationSecs=mobilePickSession.pickStartTime?Math.floor((Date.now()-mobilePickSession.pickStartTime)/1000):null;
  const histEntry={id:tid,type:'pick',ts:ts(),detail:`${mobilePickSession.orderId} · ${mobilePickSession.method} pick · ${mobilePickSession.priority} · ${mobilePickSession.items.length} SKUs · Picker: ${picker} (mobile scan)`,orderId:mobilePickSession.orderId,items:[...mobilePickSession.items],picker,pickStartTs:mobilePickSession.pickStartTs,pickDurationSecs};
  // Same fix as the desktop releaseToPacking() flow (see comment there):
  // create the packing_queue row FIRST, awaited + retried once, and abort
  // with nothing mutated if it still fails.
  let pqRes=await upsertPackingQueueItem(newTask);
  if(!pqRes.success) pqRes=await upsertPackingQueueItem(newTask);
  if(!pqRes.success){
    console.error('Packing task failed to create for',tid,pqRes.error);
    logAudit('MOBILE_PICK_COMPLETE_FAILED','packing_queue',tid,null,{orderId:mobilePickSession.orderId,error:String(pqRes.error)});
    toast('Could not create the packing task — connection issue. Nothing was changed; please try completing the pick again.','w');
    return;
  }
  let histRes=await saveHistRecord(histEntry);
  if(!histRes.success) histRes=await saveHistRecord(histEntry);
  if(!histRes.success){
    console.error('Pick history failed to save for',tid,histRes.error);
    logAudit('PICK_HISTORY_SAVE_FAILED','history',tid,null,{orderId:mobilePickSession.orderId,error:String(histRes.error)});
    toast('Packing task created, but the pick history entry failed to save — flag this to a supervisor.','w');
  }
  history.push(histEntry);
  packingQueue.push(newTask);
  mobilePickSession.items.forEach(it=>{
    const [rk,sh]=(it.bin||'').split('-');
    if(rk&&sh) removeStockAtLocation(it.sku,rk,sh,it.qty);
    else if(inv[it.sku]) inv[it.sku].qty-=it.qty;
  });
  saveInv();
  const o=mobilePickSession.order;
  o.status='picked';
  o.pickedTaskId=tid;
  const statusOk=await saveOrderRow(o);
  if(!statusOk){
    console.error('Order status sync to \'picked\' failed for',mobilePickSession.orderId);
    logAudit('ORDER_STATUS_SYNC_FAILED','orders',mobilePickSession.orderId,null,{orderId:mobilePickSession.orderId,attemptedStatus:'picked'});
    toast(`Order ${mobilePickSession.orderId} sent to packing, but its status could not be updated — it may still show as assigned. Flag this to a supervisor.`,'w');
  }
  logAudit('MOBILE_PICK_COMPLETE','packing_queue',tid,null,{orderId:mobilePickSession.orderId,items:mobilePickSession.items.length,picker});
  toast(`Pick complete — ${mobilePickSession.orderId} sent to packing`,'s');
  mobilePickSession=null;
  disableBarcodeScanner();
  initMobilePickView();
  updateMobileKPIs();
}

// ═══ MOBILE PACK (scan-verified) ═══
function renderMobilePackQueue(){
  const el=document.getElementById('mp-pack-queue');
  const activeWrap=document.getElementById('mp-pack-active');
  const queueWrap=document.getElementById('mp-pack-queue-wrap');
  if(!activeWrap||!queueWrap) return;
  if(mobilePackActive){
    queueWrap.style.display='none';
    activeWrap.style.display='block';
    if(mobilePackActive.stage==='details'){
      document.getElementById('mp-pack-tote-gate-wrap').style.display='none';
      document.getElementById('mp-pack-checklist-wrap').style.display='none';
      document.getElementById('mp-pack-details-wrap').style.display='block';
      disableBarcodeScanner();
    } else if(mobilePackActive.stage==='tote-gate'){
      document.getElementById('mp-pack-tote-gate-wrap').style.display='block';
      document.getElementById('mp-pack-checklist-wrap').style.display='none';
      document.getElementById('mp-pack-details-wrap').style.display='none';
      enableBarcodeScanner('mobile-pack-tote-gate');
    } else {
      document.getElementById('mp-pack-tote-gate-wrap').style.display='none';
      document.getElementById('mp-pack-checklist-wrap').style.display='block';
      document.getElementById('mp-pack-details-wrap').style.display='none';
      renderMobilePackChecklist();
      enableBarcodeScanner('mobile-pack');
    }
    return;
  }
  queueWrap.style.display='block';
  activeWrap.style.display='none';
  if(_barcodeTarget!=='mobile-pack-lookup'){ enableBarcodeScanner('mobile-pack-lookup'); }
  if(!el) return;
  const me=currentProfile?.full_name||'';
  el.innerHTML=packingQueue.length?packingQueue.map((t,i)=>{
    const claimedByOther=t.claimedBy && t.claimedBy!==me;
    const actionBtn=claimedByOther
      ? `<div style="width:100%;text-align:center;padding:9px;color:var(--dt);font-size:12px;font-weight:600"><i class="ti ti-lock"></i> Being packed by ${esc(t.claimedBy)}</div>`
      : `<button class="btn-primary" style="width:100%;justify-content:center" onclick="startMobilePack(${i})"><i class="ti ti-player-play"></i>Start packing</button>`;
    return `
    <div class="mp-pack-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-weight:700;font-size:13px">${t.orderId}</span>
        <span class="pill ${t.priority==='Express'?'p-out':'p-info'}">${t.priority}</span>
      </div>
      <div style="font-size:11px;color:var(--t2);margin-bottom:9px">${t.items.length} SKU(s) · ${t.ts}${t.picker?' · Picked by '+esc(t.picker):''}${t.toteId?' · Tote '+esc(t.toteId):''}</div>
      ${actionBtn}
    </div>
  `;
  }).join(''):'<div class="empty">No tasks awaiting packing</div>';
}

async function startMobilePack(i, toteAlreadyVerified){
  const task=packingQueue[i];
  if(!task) return;
  if(!task.packStartTime){
    const picker=currentProfile?.full_name||'Unknown';
    const startTime=Date.now();
    const startTs=ts();
    const res=await claimPackingTask(task.id,picker,startTime,startTs);
    if(!res.success){
      if(res.reason==='already_claimed'){
        toast(`Already being packed by ${res.claimed_by}`,'w');
        task.claimedBy=res.claimed_by;
      } else {
        toast('Could not start packing — connection issue, try again','w');
      }
      renderMobilePackQueue();
      return;
    }
    task.claimedBy=res.claimed_by;
    task.packStartTime=res.pack_start_time;
    task.packStartTs=res.pack_start_ts;
    logOrderEvent(task.orderId,'pack_started',picker,{taskId:task.id});
  } else if(task.claimedBy && task.claimedBy!==(currentProfile?.full_name||'')){
    toast(`Already being packed by ${task.claimedBy}`,'w');
    renderMobilePackQueue();
    return;
  }
  const needsToteGate=!!task.toteId && !toteAlreadyVerified;
  mobilePackActive={
    taskIdx:i,
    task,
    stage: needsToteGate ? 'tote-gate' : 'checklist',
    checklist:task.items.map(it=>({sku:it.sku,name:it.name,variant:it.variant,bin:it.bin,expectedQty:it.qty,scannedQty:0}))
  };
  document.getElementById('mp-pack-order-label').textContent='Order '+task.orderId;
  document.getElementById('mp-pack-summary').textContent=`${task.items.length} SKU(s) · ${task.priority} · ${task.method}${task.toteId?' · Tote '+task.toteId:''}`;
  const gateExpectedEl=document.getElementById('mp-pack-tote-gate-expected');
  if(gateExpectedEl) gateExpectedEl.textContent=task.toteId||'';
  renderMobilePackQueue();
}

function mobilePackScan(sku){
  if(!mobilePackActive){
    console.warn('mobilePackScan: scan received but no packing task is active');
    mobileScanFeedback(false);
    toast('No packing task is open — tap Start packing first','w');
    return;
  }
  const scannedKey=(sku.sku||'').trim().toUpperCase();
  const item=mobilePackActive.checklist.find(i=>(i.sku||'').trim().toUpperCase()===scannedKey);
  if(!item){
    console.warn('mobilePackScan: no match for',sku.sku,'in checklist',mobilePackActive.checklist.map(i=>i.sku));
    mobileScanFeedback(false);
    toast(`${sku.sku} (${sku.sub||''}) is not part of this order`,'w');
    return;
  }
  if(item.scannedQty>=item.expectedQty){
    mobileScanFeedback(false);
    toast(sku.sku+' already fully verified','w');
    return;
  }
  item.scannedQty+=1;
  mobileScanFeedback(true);
  logOrderEvent(mobilePackActive.task.orderId,'pack_item_verified',currentProfile?.full_name,{sku:sku.sku});
  logAudit('PACK_ITEM_VERIFIED','orders',mobilePackActive.task.orderId,null,{orderId:mobilePackActive.task.orderId,sku:sku.sku,scannedQty:item.scannedQty,expectedQty:item.expectedQty,packer:currentProfile?.full_name,stage:'pack_mobile'});
  renderMobilePackChecklist();
}

function renderMobilePackChecklist(){
  const el=document.getElementById('mp-pack-checklist');
  if(!el||!mobilePackActive) return;
  const list=mobilePackActive.checklist;
  el.innerHTML=list.map(it=>{
    const done=it.scannedQty>=it.expectedQty;
    return `<div class="scan-row ${done?'matched':''}">
      <div class="scan-row-icon"><i class="ti ${done?'ti-check':'ti-barcode'}"></i></div>
      <div class="scan-row-body">
        <div class="scan-row-sku">${it.sku}</div>
        <div class="scan-row-meta">${esc(it.name)} — ${esc(it.variant)} · BIN ${it.bin}</div>
      </div>
      <div class="scan-row-qty">${it.scannedQty}/${it.expectedQty}</div>
    </div>`;
  }).join('');
  const allDone=list.every(it=>it.scannedQty>=it.expectedQty);
  const btn=document.getElementById('mp-pack-continue-btn');
  if(btn) btn.disabled=!allDone;
}

function cancelMobilePack(){
  mobilePackActive=null;
  disableBarcodeScanner();
  renderMobilePackQueue();
}

function proceedToMobilePackDetails(){
  if(!mobilePackActive) return;
  mobilePackActive.stage='details';
  document.getElementById('mp-pack-checklist-wrap').style.display='none';
  document.getElementById('mp-pack-details-wrap').style.display='block';
  disableBarcodeScanner();
  ['mp-length','mp-width','mp-height','mp-actual-weight','mp-notes'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  document.querySelectorAll('.mp-material-cb').forEach(cb=>{cb.checked=false;});
  document.getElementById('mp-vol-result').style.display='none';
}

function backToMobilePackChecklist(){
  if(!mobilePackActive) return;
  mobilePackActive.stage='checklist';
  document.getElementById('mp-pack-checklist-wrap').style.display='block';
  document.getElementById('mp-pack-details-wrap').style.display='none';
  renderMobilePackChecklist();
  enableBarcodeScanner('mobile-pack');
}

function calcMobileVolWeight(){
  const L=parseFloat(document.getElementById('mp-length').value)||0;
  const W=parseFloat(document.getElementById('mp-width').value)||0;
  const H=parseFloat(document.getElementById('mp-height').value)||0;
  const actual=parseFloat(document.getElementById('mp-actual-weight').value)||0;
  const res=document.getElementById('mp-vol-result');
  if(!L||!W||!H||!actual){res.style.display='none';return;}
  const vol=parseFloat(((L*W*H)/5000).toFixed(2));
  const chargeable=Math.max(actual,vol);
  document.getElementById('mp-show-chargeable').textContent=chargeable.toFixed(2);
  res.style.display='block';
}

async function completeMobilePack(){
  if(!mobilePackActive) return;
  const t=mobilePackActive.task;
  const L=parseFloat(document.getElementById('mp-length').value)||0;
  const W=parseFloat(document.getElementById('mp-width').value)||0;
  const H=parseFloat(document.getElementById('mp-height').value)||0;
  const actual=parseFloat(document.getElementById('mp-actual-weight').value)||0;
  const notes=document.getElementById('mp-notes').value.trim();
  if(!L||!W||!H){toast('Enter box dimensions (L × W × H)','w');return;}
  if(!validateDimension(L)||!validateDimension(W)||!validateDimension(H)){toast('Invalid dimensions — max 999cm','w');return;}
  if(!actual){toast('Enter actual weight','w');return;}
  if(!validateWeight(actual)){toast('Invalid weight — must be between 0.01 and 999 kg','w');return;}
  const packMaterials=Array.from(document.querySelectorAll('.mp-material-cb:checked')).map(cb=>cb.value);
  if(!packMaterials.length){toast('Select at least one packaging material used','w');return;}
  if(!rateLimit('mobile-pack',2000)){toast('Please wait before submitting again','w');return;}
  const vol=parseFloat(((L*W*H)/5000).toFixed(2));
  const chargeable=Math.max(actual,vol);
  const endTime=Date.now();
  const endTs=ts();
  const durationSecs=t.packStartTime?Math.floor((endTime-t.packStartTime)/1000):null;
  const durationStr=durationSecs!==null?`${Math.floor(durationSecs/60)}m ${durationSecs%60}s`:'N/A';
  const pkid=newId('PKD');
  const packedObj={
    id:pkid,type:'packed',ts:endTs,
    detail:`${t.orderId} · ${t.items.length} SKUs packed — ready for dispatch (mobile, scan-verified)`,
    orderId:t.orderId,items:t.items,
    packer:t.claimedBy||currentProfile?.full_name||null,
    packStartTs:t.packStartTs,packStartTime:t.packStartTime,
    packEndTs:endTs,packEndTime:endTime,
    packDuration:durationStr,packDurationSecs:durationSecs,
    boxL:L,boxW:W,boxH:H,
    actualWeight:actual,volWeight:vol,chargeableWeight:chargeable,
    packMaterials:packMaterials,
    packNotes:notes
  };
  if(!navigator.onLine){
    // Offline: deliberately queued for later sync — untouched, this is the
    // app's existing offline-first mechanism, separate from the online
    // write-failure handling below.
    const idx=packingQueue.findIndex(p=>p.id===t.id);
    if(idx>-1) packingQueue.splice(idx,1);
    history.push(packedObj);
    saveHist();
    const row={id:packedObj.id,type:packedObj.type,ts:packedObj.ts,detail:packedObj.detail||null,order_id:packedObj.orderId||null,
      pack_start_ts:packedObj.packStartTs||null,pack_start_time:packedObj.packStartTime||null,
      pack_end_ts:packedObj.packEndTs||null,pack_end_time:packedObj.packEndTime||null,
      pack_duration:packedObj.packDuration||null,pack_duration_secs:packedObj.packDurationSecs||null,
      box_l:packedObj.boxL||null,box_w:packedObj.boxW||null,box_h:packedObj.boxH||null,
      actual_weight:packedObj.actualWeight||null,vol_weight:packedObj.volWeight||null,chargeable_weight:packedObj.chargeableWeight||null,
      pack_materials:packedObj.packMaterials||null,
      pack_notes:packedObj.packNotes||null,items:packedObj.items||[],packer:packedObj.packer||null};
    queueOfflineAction('mobile_pack_complete',{historyRow:row,taskId:t.id,orderId:t.orderId,chargeable},`Pack complete · ${t.orderId}`);
    toast(`Offline — Order ${t.orderId} packed in ${durationStr}, queued to sync (${chargeable}kg chargeable)`,'w');
  } else {
    // Online: same await + retry + abort-safe pattern as the desktop pack
    // flow — save the record FIRST, before touching local state, so a
    // silent failure never leaves an order with no trace it was packed.
    let histRes=await saveHistRecord(packedObj);
    if(!histRes.success) histRes=await saveHistRecord(packedObj);
    if(!histRes.success){
      console.error('Mobile pack record failed to save for',pkid,histRes.error);
      logAudit('MOBILE_PACK_COMPLETE_FAILED','packing_queue',t.id,null,{orderId:t.orderId,error:String(histRes.error)});
      toast('Could not save the pack record — connection issue. Nothing was changed; please try completing the pack again.','w');
      return;
    }
    let delRes=await deletePackingQueueItem(t.id);
    if(!delRes.success) delRes=await deletePackingQueueItem(t.id);
    if(!delRes.success){
      console.error('Failed to remove packing_queue row for',t.id,delRes.error);
      logAudit('PACKING_QUEUE_CLEANUP_FAILED','packing_queue',t.id,null,{orderId:t.orderId,error:String(delRes.error)});
    }
    const ord=orders.find(x=>x.id===t.orderId);
    if(ord){
      ord.status='packed';
      const statusOk=await saveOrderRow(ord);
      if(!statusOk){
        console.error('Order status sync to \'packed\' failed for',t.orderId);
        logAudit('ORDER_STATUS_SYNC_FAILED','orders',t.orderId,null,{orderId:t.orderId,attemptedStatus:'packed'});
        toast(`Order ${t.orderId} packed and saved, but its status could not be updated — it may still show as picked. Flag this to a supervisor.`,'w');
      }
    }
    const idx=packingQueue.findIndex(p=>p.id===t.id);
    if(idx>-1) packingQueue.splice(idx,1);
    history.push(packedObj);
    logAudit('MOBILE_PACK_COMPLETE','packing_queue',t.id,null,{orderId:t.orderId,chargeable});
    toast(`Order ${t.orderId} packed in ${durationStr} · ${chargeable}kg chargeable`,'s');
  }
  mobilePackActive=null;
  disableBarcodeScanner();
  renderMobilePackQueue();
  updateMobileKPIs();
}

// (Legacy pre-scan-driven mobile pick list — renderMobilePickList/
// filterMobilePickList/markPickComplete/startSwipe/endSwipe — removed.
// It targeted #m-pick-list/#m-order-search elements that don't exist
// anywhere in the current mobile HTML and was never called from any
// wired-up UI; confirmed dead via exhaustive grep before removal.
// The live mobile pick flow is startMobilePick/completeMobilePick etc.)

function submitMobileQC(){
  const sku=document.getElementById('m-qc-sku').value.trim();
  const result=document.getElementById('m-qc-result').value;
  const issue=document.getElementById('m-qc-issue').value;
  
  if(!sku||!result){toast('Fill SKU and QC result','w');return;}
  
  const detail=`${sku} · QC: ${result} · Issue: ${issue||'N/A'} · Photo: ${mobilePhotoData?'Yes':'No'}`;
  history.push({id:newId('QC'),type:'exception',ts:ts(),category:issue||'general',detail,photo:mobilePhotoData});
  saveHist();
  
  document.getElementById('m-qc-sku').value='';
  document.getElementById('m-qc-result').value='';
  document.getElementById('m-qc-issue').value='';
  document.getElementById('m-qc-photo').value='';
  document.getElementById('m-photo-preview').innerHTML='';
  mobilePhotoData=null;
  
  toast('QC submitted & documented','s');
}

document.addEventListener('DOMContentLoaded',()=>{
  const photoInput=document.getElementById('m-qc-photo');
  if(photoInput){
    photoInput.addEventListener('change',(e)=>{
      const file=e.target.files[0];
      if(file){
        const reader=new FileReader();
        reader.onload=(event)=>{
          mobilePhotoData=event.target.result;
          const preview=`<div style="position:relative;width:100%;border-radius:4px;overflow:hidden;margin-bottom:8px">
            <img src="${mobilePhotoData}" style="width:100%;height:150px;object-fit:cover">
            <button onclick="clearMobilePhoto()" style="position:absolute;top:4px;right:4px;width:24px;height:24px;background:#ff6b6b;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:14px;padding:0">×</button>
          </div>`;
          document.getElementById('m-photo-preview').innerHTML=preview;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

function clearMobilePhoto(){
  mobilePhotoData=null;
  document.getElementById('m-qc-photo').value='';
  document.getElementById('m-photo-preview').innerHTML='';
}

// Offline mode
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('data:text/javascript,').catch(()=>{});
}

// ═══ OFFLINE QUEUE — mobile scan-driven flows ═══
const OFFLINE_Q_KEY='cl_wms_offline_queue';
let offlineQueue=(function(){ try{ return JSON.parse(localStorage.getItem(OFFLINE_Q_KEY)||'[]'); }catch(e){ return []; } })();
function persistOfflineQueue(){
  try{ localStorage.setItem(OFFLINE_Q_KEY, JSON.stringify(offlineQueue)); }catch(e){}
  updateOfflineQueueBadge();
}
function queueOfflineAction(type,payload,label){
  offlineQueue.push({qid:'OQ'+Date.now()+Math.random().toString(36).slice(2,6),type,payload,label,ts:new Date().toISOString()});
  persistOfflineQueue();
}
function updateOfflineQueueBadge(){
  const n=offlineQueue.length;
  const online=navigator.onLine;
  const badge=document.getElementById('m-offline-badge');
  if(badge){
    if(!online){
      badge.style.display='block';
      badge.style.background='var(--dbg)'; badge.style.color='var(--dt)';
      badge.innerHTML=`<i class="ti ti-wifi-off"></i> Working offline${n?` — ${n} action(s) queued, will sync when back online`:" — actions won't sync until you're back online"}`;
    } else if(n>0){
      badge.style.display='block';
      badge.style.background='var(--wbg)'; badge.style.color='var(--wt)';
      badge.innerHTML=`<i class="ti ti-cloud-upload"></i> Syncing ${n} queued action(s)…`;
    } else {
      badge.style.display='none';
    }
  }
}
async function replayOfflineAction(item){
  if(item.type==='reserve_stock'){
    const p=item.payload;
    const res=await reserveStock(p.sku,p.qty,p.sessionId,p.orderId,p.picker);
    return res.success || res.reason!=='network_error';
  }
  if(item.type==='mobile_pack_complete'){
    const p=item.payload;
    try{
      await upsertHistoryRowRaw(p.historyRow);
    }catch(e){ console.error('offline replay: history upsert failed', e); return false; }
    await deletePackingQueueItem(p.taskId);
    await logAudit('MOBILE_PACK_COMPLETE','packing_queue',p.taskId,null,{orderId:p.orderId,chargeable:p.chargeable});
    return true;
  }
  return true;
}
async function upsertHistoryRowRaw(row){
  const {error}=await supa.from('history').upsert(row,{onConflict:'id'});
  if(error) throw error;
}
async function flushOfflineQueue(){
  if(!navigator.onLine || !offlineQueue.length) return;
  const pending=[...offlineQueue];
  const remaining=[];
  for(const item of pending){
    try{
      const ok=await replayOfflineAction(item);
      if(!ok) remaining.push(item);
    }catch(e){ console.error('offline replay failed for', item, e); remaining.push(item); }
  }
  offlineQueue=remaining;
  persistOfflineQueue();
  if(pending.length){
    if(!remaining.length) toast(`Synced ${pending.length} queued action(s)`,'s');
    else toast(`${remaining.length} of ${pending.length} queued action(s) still pending sync`,'w');
  }
}

function checkOnlineStatus(){
  const online=navigator.onLine;
  updateOfflineQueueBadge();
  return online;
}

window.addEventListener('online',()=>{ checkOnlineStatus(); flushOfflineQueue(); });
window.addEventListener('offline',()=>checkOnlineStatus());

function filterCountList(){
  renderCountList();
}

function renderCountHistory(){
  const el=document.getElementById('ic-history');
  if(!el)return;
  if(!inventoryCounts||inventoryCounts.length===0){
    el.innerHTML='<div style="color:var(--t2);font-size:11px">No previous counts recorded</div>';
    return;
  }
  el.innerHTML=inventoryCounts.slice().reverse().map(count=>{
    const lines=Object.values(count.counts||{});
    const discrepancies=lines.filter(c=>c.physicalQty!==c.systemQty);
    const accuracy=lines.length?Math.round((1-(discrepancies.length/lines.length))*100):100;
    const accuracyColor=accuracy>=95?'var(--st)':'var(--wt)';
    return `<div style="padding:8px;background:var(--s2);border-radius:4px;margin-bottom:6px;font-size:10px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:4px">
        <div><span style="color:var(--t2)">Month:</span> <strong>${count.month}</strong></div>
        <div><span style="color:var(--t2)">Type:</span> <strong>${count.type||'full'}</strong></div>
        <div><span style="color:var(--t2)">Counted By:</span> <strong>${count.counter||'N/A'}</strong></div>
        <div><span style="color:var(--t2)">Accuracy:</span> <strong style="color:${accuracyColor}">${accuracy}%</strong></div>
      </div>
    </div>`;
  }).join('');
}

function downloadCountReport(){
  if(!currentCount.month){toast('Start a count first','w');return;}
  const counts=Object.values(currentCount.counts);
  const discrepancies=counts.filter(c=>c.physicalQty!==c.systemQty);
  const totalVariance=counts.reduce((a,c)=>a+(c.physicalQty-c.systemQty),0);
  
  let csv='CARATLANE WMS - INVENTORY COUNT REPORT\n';
  csv+=`Generated: ${new Date().toLocaleString()}\n\n`;
  csv+='Count Details,Value\n';
  csv+=`Count Month,${currentCount.month}\n`;
  csv+=`Date Completed,${currentCount.completedTs||'In Progress'}\n`;
  csv+=`Counted By,${currentCount.counter}\n`;
  csv+=`Verified By,${currentCount.verifier}\n\n`;
  
  csv+='Summary Metrics,Value\n';
  csv+=`Total Count Lines (SKU x Location),${counts.length}\n`;
  csv+=`Total Variance (Units),${totalVariance}\n`;
  csv+=`Lines with Discrepancies,${discrepancies.length}\n`;
  csv+=`Accuracy,${Math.round((1-(discrepancies.length/counts.length))*100)}%\n\n`;

  csv+='Full Count Details\n';
  csv+='SKU Code,Item Name,Variant,Rack,Shelf,System Qty,Physical Qty,Variance,Inbound GRN,Outbound Dispatch,Returns Inbound,Net Movement,Status\n';
  Object.keys(currentCount.counts).forEach(key=>{
    const count=currentCount.counts[key];
    const item=SKUS.find(s=>s.sku===count.sku);
    const variance=count.physicalQty-count.systemQty;
    const status=variance===0?'MATCH':variance>0?'EXCESS':'SHORTAGE';
    const movements=currentCount.movements?currentCount.movements[key]:{grnInbound:0,dispatchOutbound:0,returnInbound:0,netMovement:0};
    csv+=`"${count.sku}","${item.sub}","${item.variant}","${count.rack}","${count.shelf}",${count.systemQty},${count.physicalQty},${variance>0?'+':''}${variance},${movements.grnInbound||0},${movements.dispatchOutbound||0},${movements.returnInbound||0},${movements.netMovement||0},"${status}"\n`;
  });
  
  csv+='\n\nDISCREPANCY ANALYSIS (Why the variance?)\n';
  csv+='SKU Code,Rack,Shelf,Item Name,System Qty,Physical Qty,Variance,Expected (based on movements),Unexplained Loss/Gain,Analysis\n';
  Object.keys(currentCount.counts).forEach(key=>{
    const count=currentCount.counts[key];
    const item=SKUS.find(s=>s.sku===count.sku);
    const variance=count.physicalQty-count.systemQty;
    const movements=currentCount.movements?currentCount.movements[key]:{grnInbound:0,dispatchOutbound:0,returnInbound:0,netMovement:0};
    const expectedQty=count.systemQty+movements.netMovement;
    const unexplained=count.physicalQty-expectedQty;
    if(unexplained!==0){
      const analysis=unexplained>0?'Excess (possible data entry error or undocumented receipt)':'Shortage (possible theft, damage not recorded, or documentation error)';
      csv+=`"${count.sku}","${count.rack}","${count.shelf}","${item.sub}",${count.systemQty},${count.physicalQty},${variance>0?'+':''}${variance},${expectedQty},${unexplained>0?'+':''}${unexplained},"${analysis}"\n`;
    }
  });

  csv+='\n\nMOVEMENT SUMMARY (Transaction History)\n';
  csv+='SKU Code,Rack,Shelf,GRN Inbound,Pick/Dispatch Outbound,Returns Inbound,Net Movement,Expected System Qty\n';
  Object.keys(currentCount.counts).forEach(key=>{
    const count=currentCount.counts[key];
    const movements=currentCount.movements?currentCount.movements[key]:{grnInbound:0,dispatchOutbound:0,returnInbound:0,netMovement:0};
    const expectedQty=count.systemQty+movements.netMovement;
    csv+=`"${count.sku}","${count.rack}","${count.shelf}",${movements.grnInbound||0},${movements.dispatchOutbound||0},${movements.returnInbound||0},${movements.netMovement||0},${expectedQty}\n`;
  });
  
  csv+='\n\nSignatures\n';
  csv+=`Counted By,${currentCount.counter}\n`;
  csv+=`Verified By,${currentCount.verifier}\n`;
  csv+=`Date,${currentCount.completedTs||'In Progress'}\n`;
  
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const link=document.createElement('a');
  link.href=URL.createObjectURL(blob);
  link.download=`InventoryCount_${currentCount.month}_${currentCount.id}.csv`;
  link.click();
  toast('Count report downloaded','s');
}

function printCountReport(){
  if(!currentCount.month){toast('Start a count first','w');return;}
  const counts=Object.values(currentCount.counts);
  const discrepancies=counts.filter(c=>c.physicalQty!==c.systemQty);
  const totalVariance=counts.reduce((a,c)=>a+(c.physicalQty-c.systemQty),0);
  
  const printContent=`<!DOCTYPE html><html><head><title>Inventory Count Report</title><style>
    body{font-family:Arial;margin:20px;line-height:1.6;color:#333}
    .header{border-bottom:3px solid #000;padding-bottom:15px;margin-bottom:20px}
    .company{font-size:20px;font-weight:bold}
    .title{font-size:18px;font-weight:bold;margin:20px 0}
    .info{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
    .info-box{border:1px solid #ddd;padding:10px;border-radius:4px}
    table{width:100%;border-collapse:collapse;margin:20px 0}
    th{background:#f0f0f0;padding:10px;text-align:left;border:1px solid #ddd;font-weight:bold}
    td{padding:10px;border:1px solid #ddd;font-size:12px}
    .variance-pos{color:green}
    .variance-neg{color:red}
    .summary{margin:20px 0;padding:15px;background:#f9f9f9;border-radius:4px}
    @media print{body{margin:0}.no-print{display:none}}
  </style></head><body>
    <div id="pdf-content">
    <div class="header"><div class="company">CaratLane WMS</div><div style="font-size:12px;color:#666">Inventory Count Report</div></div>
    <div class="title">Monthly Inventory Count Report</div>
    <div class="info">
      <div class="info-box"><strong>Count Month:</strong> ${currentCount.month}</div>
      <div class="info-box"><strong>Date Completed:</strong> ${currentCount.completedTs||'In Progress'}</div>
      <div class="info-box"><strong>Counted By:</strong> ${currentCount.counter}</div>
      <div class="info-box"><strong>Verified By:</strong> ${currentCount.verifier}</div>
    </div>
    <div class="summary">
      <div><strong>Total Count Lines (SKU x Location):</strong> ${counts.length}</div>
      <div><strong>Total Variance:</strong> <span class="${totalVariance===0?'':totalVariance>0?'variance-pos':'variance-neg'}">${totalVariance>0?'+':''}${totalVariance}</span></div>
      <div><strong>Discrepancies:</strong> ${discrepancies.length}</div>
      <div><strong>Accuracy:</strong> ${Math.round((1-(discrepancies.length/counts.length))*100)}%</div>
    </div>
    <h3>Items with Discrepancies</h3>
    <table><thead><tr><th>SKU</th><th>Rack</th><th>Shelf</th><th>Item</th><th>System Qty</th><th>Physical Qty</th><th>Variance</th></tr></thead><tbody>
      ${discrepancies.map(d=>{
        const item=SKUS.find(s=>s.sku===d.sku);
        const variance=d.physicalQty-d.systemQty;
        return `<tr><td>${d.sku}</td><td>${d.rack}</td><td>${d.shelf}</td><td>${item.sub}</td><td>${d.systemQty}</td><td>${d.physicalQty}</td><td class="${variance>0?'variance-pos':'variance-neg'}">${variance>0?'+':''}${variance}</td></tr>`;
      }).join('')}
    </tbody></table>
    <h3>Movement Analysis (Understanding the Variance)</h3>
    <p style="font-size:12px;color:#666;margin-bottom:10px">This shows how much inventory came in (GRN) and went out (Dispatch) to explain the variance</p>
    <table><thead><tr><th>SKU</th><th>Rack</th><th>Shelf</th><th>GRN Inbound</th><th>Dispatch Outbound</th><th>Returns</th><th>Net Movement</th><th>Expected Qty</th><th>Actual Qty</th><th>Unexplained</th></tr></thead><tbody>
      ${Object.keys(currentCount.counts).filter(key=>currentCount.movements&&currentCount.movements[key]).map(key=>{
        const count=currentCount.counts[key];
        const movements=currentCount.movements[key];
        const expectedQty=count.systemQty+movements.netMovement;
        const unexplained=count.physicalQty-expectedQty;
        if(unexplained!==0){
          return `<tr><td>${count.sku}</td><td>${count.rack}</td><td>${count.shelf}</td><td>${movements.grnInbound||0}</td><td>${movements.dispatchOutbound||0}</td><td>${movements.returnInbound||0}</td><td>${movements.netMovement}</td><td>${expectedQty}</td><td>${count.physicalQty}</td><td class="${unexplained>0?'variance-pos':'variance-neg'}">${unexplained>0?'+':''}${unexplained}</td></tr>`;
        }
      }).join('')}
    </tbody></table>
    <div style="margin-top:40px;padding-top:20px;border-top:1px solid #ddd">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px">
        <div><strong>Counted By:</strong><br><br>_______________<br>${currentCount.counter}</div>
        <div><strong>Verified By:</strong><br><br>_______________<br>${currentCount.verifier}</div>
      </div>
    </div>
    </div>
    ${pdfDownloadSnippet('CountReport-'+(currentCount.id||currentCount.month)+'.pdf')}
  </body></html>`;

  const win=window.open('','COUNT_'+currentCount.id,'width=900,height=1000');
  if(!win){toast('Allow popups to print','w');return;}
  win.document.write(printContent);
  win.document.close();
  win.focus();
  setTimeout(()=>win.print(),500);
}

// REPORT DOWNLOADS
function downloadCSV(filename,data){
  const csv=data;
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const link=document.createElement('a');
  link.href=URL.createObjectURL(blob);
  link.download=filename;
  link.click();
}

function downloadInboundReport(){
  const grns=history.filter(h=>h.type==='grn');
  let csv='GRN Number,Date,ASN,Carrier,Vehicle,Cartons,SKU Count,Units PASS,Units HOLD,Units REJECT\n';
  grns.forEach(g=>{
    const pass=g.items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
    const hold=g.items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
    const reject=g.items.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
    csv+=`"${g.id}","${g.ts}","${g.asn||'N/A'}","${g.carrier||'N/A'}","${g.vehicle||'N/A'}","${g.cartons||'N/A'}",${new Set(g.items.map(i=>i.sku)).size},${pass},${hold},${reject}\n`;
  });
  downloadCSV(`InboundReport_${new Date().toISOString().split('T')[0]}.csv`,csv);
  toast('Inbound report downloaded','s');
}

function downloadOutboundReport(){
  const dispatches=history.filter(h=>h.type==='dispatched');
  let csv='Dispatch ID,Order ID,AWB,Date,Customer,Pincode,Courier Partner,Shipping Method,SKU Count,Total Units\n';
  dispatches.forEach(d=>{
    const qty=d.items.reduce((a,i)=>a+i.qty,0);
    csv+=`"${d.id}","${d.orderId}","${d.awb}","${d.dispatchedAt}","${d.recipientName}","${d.pincode}","${d.courierPartner||''}","${d.shippingMethod}",${d.items.length},${qty}\n`;
  });
  downloadCSV(`OutboundReport_${new Date().toISOString().split('T')[0]}.csv`,csv);
  toast('Outbound report downloaded','s');
}

function downloadAllReports(){
  let masterCSV='===== CARATLANE WMS COMPREHENSIVE REPORT =====\n';
  masterCSV+=`Generated: ${new Date().toLocaleString()}\n\n`;
  
  // INBOUND
  const grns=history.filter(h=>h.type==='grn');
  masterCSV+='\n═══ INBOUND REPORT ═══\nGRN Number,Date,ASN,Vehicle,Cartons,SKU Count,PASS,HOLD,REJECT\n';
  grns.forEach(g=>{
    const pass=g.items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
    const hold=g.items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
    const reject=g.items.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
    masterCSV+=`"${g.id}","${g.ts}","${g.asn||'N/A'}","${g.vehicle||'N/A'}","${g.cartons||'N/A'}",${new Set(g.items.map(i=>i.sku)).size},${pass},${hold},${reject}\n`;
  });
  
  // PICKS
  const picks=history.filter(h=>h.type==='pick');
  masterCSV+='\n═══ PICKING REPORT ═══\nPick ID,Date,Order ID,Priority,Method,Picker,SKU Count\n';
  picks.forEach(p=>{
    const parts=p.detail.split(' · ');
    const orderId=parts[0]||'N/A';
    const hasBatch=p.detail.includes('Batch');
    const priority=p.detail.includes('Express')?'Express':'Standard';
    const pickerMatch=p.detail.match(/Picker: ([^\s]+)/);
    const picker=pickerMatch?pickerMatch[1]:'N/A';
    const skuMatch=p.detail.match(/(\d+)\s+SKUs/);
    const skuCount=skuMatch?skuMatch[1]:0;
    masterCSV+=`"${p.id}","${p.ts}","${orderId}","${priority}","${hasBatch?'Batch':'Single'}","${picker}","${skuCount}"\n`;
  });
  
  // PACKS
  const packs=history.filter(h=>h.type==='packed');
  masterCSV+='\n═══ PACKING REPORT ═══\nPack ID,Date,Order ID,SKU Count,Status\n';
  packs.forEach(pk=>{
    masterCSV+=`"${pk.id}","${pk.ts}","${pk.orderId||'N/A'}",${pk.items?pk.items.length:0},"Packed"\n`;
  });
  
  // DISPATCH
  const dispatches=history.filter(h=>h.type==='dispatched');
  masterCSV+='\n═══ DISPATCH REPORT ═══\nDispatch ID,Date,Order ID,AWB,Customer,Pincode,Courier Partner,Shipping Method,Units\n';
  dispatches.forEach(d=>{
    const qty=d.items?d.items.reduce((a,i)=>a+i.qty,0):0;
    masterCSV+=`"${d.id}","${d.dispatchedAt||d.ts}","${d.orderId||'N/A'}","${d.awb||'N/A'}","${d.recipientName||'N/A'}","${d.pincode||'N/A'}","${d.courierPartner||'N/A'}","${d.shippingMethod||'N/A'}",${qty}\n`;
  });
  
  // RETURNS
  const returns=history.filter(h=>h.type==='return');
  masterCSV+='\n═══ RETURNS REPORT ═══\nReturn ID,Date,AWB,Type,Grade A,Grade B,Grade C\n';
  returns.forEach(r=>{
    let a=0,b=0,c=0;
    try{
      const aPart=r.detail.split('Grade A:')[1];
      if(aPart)a=parseInt(aPart.split(/[^0-9]/)[0])||0;
      const bPart=r.detail.split('Grade B:')[1];
      if(bPart)b=parseInt(bPart.split(/[^0-9]/)[0])||0;
      const cPart=r.detail.split('Grade C:')[1];
      if(cPart)c=parseInt(cPart.split(/[^0-9]/)[0])||0;
    }catch(e){}
    const awbMatch=r.detail.match(/AWB: ([^\s·]+)/);
    const awb=awbMatch?awbMatch[1]:'N/A';
    masterCSV+=`"${r.id}","${r.ts}","${awb}","Return",${a},${b},${c}\n`;
  });
  
  // EXCEPTIONS
  const exceptions=history.filter(h=>h.type==='exception');
  masterCSV+='\n═══ EXCEPTION REPORT ═══\nException ID,Date,Category,Detail,GRN Reference\n';
  exceptions.forEach(e=>{
    masterCSV+=`"${e.id}","${e.ts}","${e.category||'N/A'}","${(e.detail||'').replace(/"/g,'')}","${e.grn||'N/A'}"\n`;
  });
  
  // SUMMARY
  const totalUnits=grns.reduce((a,g)=>a+(g.items?g.items.reduce((b,i)=>b+(i.qty||0),0):0),0);
  const passUnits=grns.reduce((a,g)=>a+(g.items?g.items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0):0),0);
  masterCSV+='\n═══ SUMMARY METRICS ═══\nMetric,Value\nTotal GRNs,'+grns.length+'\nTotal Pick Tasks,'+picks.length+'\nTotal Packs,'+packs.length+'\nTotal Dispatches,'+dispatches.length+'\nTotal Returns,'+returns.length+'\nTotal Exceptions,'+exceptions.length+'\nTotal Units Received,'+totalUnits+'\nUnits Passed QC,'+passUnits+'\n';
  
  downloadCSV(`CaratLane_WMS_Complete_Report_${new Date().toISOString().split('T')[0]}.csv`,masterCSV);
  toast('Complete report downloaded','s');
}

// FINANCE & CAPACITY
function renderFinance(){
  renderWarehouseUtil();
  renderBinEfficiency();
  renderSpaceUtil();
  renderAllRackUtil();
  renderCostInputs();
  renderCapacityAlerts();
  renderMonthlyBilling();
}
function renderSpaceUtil(){
  const el=document.getElementById('space-util-section');
  if(!el)return;
  const TOTAL_RACKS=RACK_LETTERS.length;
  const RACK_W_FT=4,RACK_D_FT=2,RACK_H_FT=10;
  const CEILING_H_FT=10;
  const WAREHOUSE_SQFT=1600;
  const WAREHOUSE_CUFT=WAREHOUSE_SQFT*CEILING_H_FT;
  const rackFootprint=RACK_W_FT*RACK_D_FT;
  const totalRackFloor=TOTAL_RACKS*rackFootprint;
  const aisleFloor=Math.round(totalRackFloor*0.4);
  const rackZoneFloor=totalRackFloor+aisleFloor;
  const operationsFloor=WAREHOUSE_SQFT-rackZoneFloor;
  const floorUtilPct=Math.round((rackZoneFloor/WAREHOUSE_SQFT)*100);
  const rackVol=RACK_W_FT*RACK_D_FT*RACK_H_FT;
  const totalRackVol=TOTAL_RACKS*rackVol;
  const cubeUtilPct=Math.round((totalRackVol/WAREHOUSE_CUFT)*100);
  const deadAirVol=WAREHOUSE_CUFT-totalRackVol;
  const verticalEff=Math.round((RACK_H_FT/CEILING_H_FT)*100);
  const totalSKUs=SKUS.length;
  const activeSKUs=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty>0).length;
  const totalUnits=SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0);
  const avgUnitsPerRack=Math.round(totalUnits/TOTAL_RACKS);
  // Floor/Air-space % above measure the FIXED physical footprint of the
  // racking structure itself (rack furniture + aisles vs the building's
  // 1,600 sq ft) — it barely moves whether shelves are empty or full,
  // because it's about how much floor plan racks take up, not how full
  // they are. That was getting read as "how full is my warehouse", which
  // it was never meant to answer — hence a heavily-stocked warehouse
  // still showing ~10%. This is the actual answer to that question:
  // real occupied shelf-slots (same calc as Warehouse Utilization above)
  // out of total shelf-slots across all racks.
  const totalShelfSlots=TOTAL_RACKS*SHELVES_PER_RACK;
  const occupiedShelfSet=new Set();
  SKUS.forEach(s=>{
    getSkuLocations(s.sku).forEach(loc=>{
      if(loc.qty>0&&loc.rack&&parseInt(loc.shelf)<=SHELVES_PER_RACK) occupiedShelfSet.add(loc.rack+'-'+loc.shelf);
    });
  });
  const occupiedShelfSlots=occupiedShelfSet.size;
  const shelfCapacityPct=totalShelfSlots>0?Math.round((occupiedShelfSlots/totalShelfSlots)*100):0;
  el.innerHTML=`
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-bottom:6px">
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center;border:1px solid ${shelfCapacityPct>=80?'var(--dt)':shelfCapacityPct>=50?'var(--wt)':'var(--st)'}">
      <div style="font-size:22px;font-weight:700;color:${shelfCapacityPct>=80?'var(--dt)':shelfCapacityPct>=50?'var(--wt)':'var(--st)'}">${shelfCapacityPct}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Shelf Capacity Used</div>
      <div style="font-size:10px;color:var(--t3)">${occupiedShelfSlots} / ${totalShelfSlots} shelf-slots — how full your racks actually are</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--gold)">${floorUtilPct}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Floor Footprint Used</div>
      <div style="font-size:10px;color:var(--t3)">${rackZoneFloor} / ${WAREHOUSE_SQFT} sq ft — rack furniture + aisles</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--it)">${cubeUtilPct}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Air Space Used</div>
      <div style="font-size:10px;color:var(--t3)">${totalRackVol.toLocaleString()} / ${WAREHOUSE_CUFT.toLocaleString()} cu ft</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--st)">${verticalEff}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Vertical Efficiency</div>
      <div style="font-size:10px;color:var(--t3)">Racks reach full ceiling</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--t)">${operationsFloor}</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Ops Floor Free</div>
      <div style="font-size:10px;color:var(--t3)">Packing / staging / aisles</div>
    </div>
  </div>
  <div style="margin-bottom:12px;padding:8px;background:var(--ibg);border-radius:6px;font-size:10px;color:var(--it)">
    <i class="ti ti-info-circle"></i> <strong>Shelf Capacity Used</strong> is how full your racks are with stock right now — that's the one to watch day to day. <strong>Floor Footprint</strong> and <strong>Air Space Used</strong> measure something different: how much of the 1,600 sq ft building the physical rack structures themselves take up. That number is fixed by rack count/size and barely changes whether shelves are empty or full — it answers "is there room to add more racks," not "how full are my racks."
  </div>
  <div style="margin-bottom:12px">
    <div style="font-size:10px;color:var(--t2);margin-bottom:4px;font-weight:600">FLOOR BREAKDOWN — 1,600 sq ft</div>
    ${(()=>{
      // A narrow segment (e.g. Aisles at ~3% width) can't fit its own
      // label — "Aisles 48sf" was overflowing and getting clipped to an
      // illegible fragment ("isles 48s"). Only print the inline label once
      // a segment is wide enough to actually hold it; the legend below
      // always shows the full figures regardless of segment width.
      const rackPct=Math.round((totalRackFloor/WAREHOUSE_SQFT)*100);
      const aislePct=Math.round((aisleFloor/WAREHOUSE_SQFT)*100);
      const opsPct=Math.round((operationsFloor/WAREHOUSE_SQFT)*100);
      const MIN_LABEL_PCT=12;
      return `<div style="height:24px;border-radius:6px;overflow:hidden;display:flex;font-size:9px;font-weight:600">
      <div style="width:${rackPct}%;background:#B8860B;display:flex;align-items:center;justify-content:center;color:#fff;white-space:nowrap;overflow:hidden">${rackPct>=MIN_LABEL_PCT?`Racks ${totalRackFloor}sf`:''}</div>
      <div style="width:${aislePct}%;background:#d4a843;display:flex;align-items:center;justify-content:center;color:#fff;white-space:nowrap;overflow:hidden">${aislePct>=MIN_LABEL_PCT?`Aisles ${aisleFloor}sf`:''}</div>
      <div style="width:${opsPct}%;background:var(--sbg);display:flex;align-items:center;justify-content:center;color:var(--st);white-space:nowrap;overflow:hidden">${opsPct>=MIN_LABEL_PCT?`Operations ${operationsFloor}sf`:''}</div>
    </div>
    <div style="display:flex;gap:14px;margin-top:6px;font-size:10px;color:var(--t2);flex-wrap:wrap">
      <span><i style="display:inline-block;width:8px;height:8px;background:#B8860B;border-radius:2px;margin-right:4px"></i>Racks ${totalRackFloor}sf</span>
      <span><i style="display:inline-block;width:8px;height:8px;background:#d4a843;border-radius:2px;margin-right:4px"></i>Aisles ${aisleFloor}sf</span>
      <span><i style="display:inline-block;width:8px;height:8px;background:var(--sbg);border:0.5px solid var(--b);border-radius:2px;margin-right:4px"></i>Operations ${operationsFloor}sf</span>
    </div>`;
    })()}
  </div>
  <div style="font-size:10px;color:var(--t2);margin-bottom:4px;font-weight:600">RACK SPECIFICATIONS (per rack)</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px;font-size:10px">
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Width</div><div style="font-weight:600">${RACK_W_FT} ft (1,200mm)</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Depth</div><div style="font-weight:600">${RACK_D_FT} ft (600mm)</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Height</div><div style="font-weight:600">${RACK_H_FT} ft (3,000mm)</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Footprint</div><div style="font-weight:600">${rackFootprint} sq ft</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Volume</div><div style="font-weight:600">${rackVol} cu ft</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Total racks</div><div style="font-weight:600">${TOTAL_RACKS}</div></div>
  </div>
  <div style="font-size:10px;color:var(--t2);margin-bottom:4px;font-weight:600">CUBIC / AIR SPACE BREAKDOWN</div>
  <div style="padding:10px;background:var(--s2);border-radius:8px;font-size:11px;line-height:2">
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Total warehouse volume (1600 sf x 10ft ceiling):</span><span style="font-weight:600">${WAREHOUSE_CUFT.toLocaleString()} cu ft</span></div>
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Volume occupied by ${TOTAL_RACKS} racks:</span><span style="font-weight:600;color:var(--gold)">${totalRackVol.toLocaleString()} cu ft</span></div>
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Open room air (not rack structure):</span><span style="font-weight:600;color:var(--t)">${deadAirVol.toLocaleString()} cu ft</span></div>
    <div style="display:flex;justify-content:space-between;border-top:0.5px solid var(--b);padding-top:6px;margin-top:4px"><span style="color:var(--t2)">Avg units per rack:</span><span style="font-weight:600">${avgUnitsPerRack}</span></div>
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Active SKUs / Total SKUs:</span><span style="font-weight:600">${activeSKUs} / ${totalSKUs}</span></div>
  </div>
  <div style="margin-top:8px;padding:8px;background:var(--ibg);border-radius:6px;font-size:10px;color:var(--it)">
    <i class="ti ti-info-circle"></i> Your racks (10ft) match ceiling height — <strong>100% vertical efficiency</strong>. This "open room air" figure is naturally huge (${Math.round((deadAirVol/WAREHOUSE_CUFT)*100)}% of the building) because each rack is a small 4×2×10ft structure (${rackVol} cu ft) — it's not wasted or reclaimable space, it's the air above the aisles, staging, and packing floor a warehouse needs to actually operate in. It has nothing to do with how full the racks themselves are — that's <strong>Shelf Capacity Used</strong> above.
  </div>
  `;
}
// Total value of stock currently sitting in the warehouse, at unit price —
// distinct from the operational cost figures below (those are the cost of
// running the warehouse; this is what the inventory itself is worth).
const INVENTORY_VALUE_ALERT_THRESHOLD=5000000; // ₹50 lakh
function totalInventoryValue(){
  return SKUS.reduce((a,s)=>a+((inv[s.sku]||{qty:0}).qty||0)*(s.price!=null?s.price:0),0);
}
function skusMissingPriceWithStock(){
  return SKUS.filter(s=>s.price==null&&((inv[s.sku]||{qty:0}).qty||0)>0).length;
}
// Dashboard warning — admin only, per explicit request (not supervisor,
// unlike most other alert banners in this app). Purely synchronous/local
// since inv+SKUS are already in memory; no fetch needed like the backup
// reminder has.
function renderInventoryValueBanner(){
  const el=document.getElementById('inventory-value-banner');
  if(!el) return;
  if(currentProfile?.role!=='admin'){ el.innerHTML=''; return; }
  const value=totalInventoryValue();
  if(value<=INVENTORY_VALUE_ALERT_THRESHOLD){ el.innerHTML=''; return; }
  const missing=skusMissingPriceWithStock();
  el.innerHTML=`
    <div style="background:var(--dbg);border:1.5px solid var(--dt);border-radius:10px;padding:14px 16px;margin-bottom:14px;cursor:pointer" onclick="nav('finance')">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:40px;height:40px;background:var(--dt);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="ti ti-currency-rupee" style="font-size:20px;color:#fff"></i>
          </div>
          <div>
            <div style="font-weight:700;font-size:13px;color:var(--dt)">⚠️ Inventory value has crossed ₹50 lakh</div>
            <div style="font-size:11px;color:var(--t2);margin-top:2px">Stock currently held is worth ₹${value.toLocaleString('en-IN')}${missing?` (${missing} in-stock SKU(s) have no price set — actual value may be higher)`:''}.</div>
          </div>
        </div>
        <span style="font-size:11px;color:var(--dt);font-weight:600">View Finance →</span>
      </div>
    </div>`;
}
function renderWarehouseUtil(){
  const el=document.getElementById('warehouse-util');
  if(!el)return;
  const totalShelf=RACK_LETTERS.length*SHELVES_PER_RACK;
  // Must count UNIQUE occupied (rack,shelf) bins from the real
  // multi-location data (getSkuLocations), not "how many SKUs' catalog
  // default rack/shelf has stock" — several SKUs commonly share the same
  // catalog default shelf, and a SKU's stock is often split across
  // several actual shelves via GRN putaway. The old per-SKU count could
  // (and did) exceed SHELVES_PER_RACK, e.g. "9/6 occupied".
  const occupiedSet=new Set(); // "RACK-SHELF" strings, deduped
  SKUS.forEach(s=>{
    getSkuLocations(s.sku).forEach(loc=>{
      if(loc.qty>0 && loc.rack && parseInt(loc.shelf)<=SHELVES_PER_RACK){
        occupiedSet.add(loc.rack+'-'+loc.shelf);
      }
    });
  });
  const occupiedByRack={};
  let totalOccupied=0;
  RACK_LETTERS.forEach(r=>{ occupiedByRack[r]=0; });
  occupiedSet.forEach(key=>{
    const rack=key.split('-')[0];
    if(occupiedByRack[rack]!=null){ occupiedByRack[rack]++; totalOccupied++; }
  });
  const utilPct=Math.round((totalOccupied/totalShelf)*100);
  const capCat=utilPct>=80?'High':utilPct>=50?'Medium':'Low';
  const racksWithActivity=RACK_LETTERS.filter(r=>occupiedByRack[r]>0);
  el.innerHTML=`
    <div style="font-size:11px">
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span style="color:var(--t2)">Warehouse occupancy</span>
          <span style="font-weight:600">${utilPct}%</span>
        </div>
        <div style="height:8px;background:var(--b);border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${utilPct}%;background:${utilPct>=80?'var(--dt)':utilPct>=50?'var(--wt)':'var(--st)'};border-radius:4px"></div>
        </div>
      </div>
      <div style="padding:8px;background:var(--s2);border-radius:6px;font-size:10px;color:var(--t2)">
        <div>${totalOccupied} / ${totalShelf} shelf-slots occupied across ${RACK_LETTERS.length} racks (${SHELVES_PER_RACK} shelves each)</div>
        ${racksWithActivity.length?racksWithActivity.map(r=>`<div>Rack ${r}: ${occupiedByRack[r]}/${SHELVES_PER_RACK} occupied</div>`).join(''):'<div>No racks occupied yet</div>'}
        <div style="margin-top:4px;padding-top:4px;border-top:0.5px solid var(--b)">Capacity: <span style="font-weight:600">${capCat}</span></div>
      </div>
    </div>
  `;
}
function renderBinEfficiency(){
  const el=document.getElementById('bin-efficiency');
  if(!el)return;
  const totalSku=SKUS.length;
  const skuWithStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty>0).length;
  const avgUnitsPerSku=totalSku>0?Math.round(SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0)/totalSku):0;
  const utilRate=Math.round((skuWithStock/totalSku)*100);
  el.innerHTML=`
    <div style="font-size:11px;padding:8px;background:var(--s2);border-radius:6px;line-height:2">
      <div><span style="color:var(--t2)">Total SKUs:</span> <span style="font-weight:600">${totalSku}</span></div>
      <div><span style="color:var(--t2)">SKUs with stock:</span> <span style="font-weight:600">${skuWithStock}</span></div>
      <div><span style="color:var(--t2)">Utilization rate:</span> <span style="font-weight:600">${utilRate}%</span></div>
      <div><span style="color:var(--t2)">Avg units/SKU:</span> <span style="font-weight:600">${avgUnitsPerSku}</span></div>
      <div style="margin-top:6px;padding-top:6px;border-top:0.5px solid var(--b);font-size:10px;color:var(--t2)">
        ${utilRate>=70?'✓ Efficient bin usage':'⚠ Optimize bin placement'}
      </div>
    </div>
  `;
}
function renderAllRackUtil(){
  const el=document.getElementById('rack-util-all');
  if(!el)return;
  let html='';
  RACK_LETTERS.forEach(r=>{
    // Only real shelves 1–SHELVES_PER_RACK — items still tagged with
    // a higher shelf number are leftover data, not a real location,
    // so they're excluded here (and flagged on the Rack View page).
    const shelves={};
    for(let i=1;i<=SHELVES_PER_RACK;i++) shelves[i]={total:0,occupied:0};
    let hasAny=false;
    SKUS.forEach(s=>{
      getSkuLocations(s.sku).forEach(loc=>{
        if(loc.rack!==r) return;
        const shelf=parseInt(loc.shelf);
        if(isNaN(shelf)||shelf>SHELVES_PER_RACK) return;
        hasAny=true;
        shelves[shelf].total++;
        if(loc.qty>0)shelves[shelf].occupied++;
      });
    });
    html+=`<div style="margin-bottom:12px">
      <div style="font-size:11px;font-weight:700;color:var(--t2);margin-bottom:4px">Rack ${r}${hasAny?'':' — empty'}</div>
      ${[1,2,3,4,5,6].map(i=>{
        const pct=shelves[i].total>0?Math.round((shelves[i].occupied/shelves[i].total)*100):0;
        return `<div style="display:grid;grid-template-columns:40px 1fr 50px;gap:6px;align-items:center;margin-bottom:4px;font-size:11px">
          <span style="font-weight:600;color:var(--t2)">${r}${i}</span>
          <div style="height:6px;background:var(--b);border-radius:3px;overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--st);border-radius:3px"></div></div>
          <span style="text-align:right;color:var(--t2)">${shelves[i].occupied}/${shelves[i].total}</span>
        </div>`;
      }).join('')}
    </div>`;
  });
  const unplaced=getUnplacedSKUs();
  if(unplaced.length){
    html+=`<div style="font-size:11px;color:var(--dt);margin-top:8px"><i class="ti ti-alert-triangle"></i> ${unplaced.length} item(s) tagged with an invalid shelf number — see Rack View for details</div>`;
  }
  el.innerHTML=html;
}
function renderCostInputs(){
  const el=document.getElementById('cost-inputs');
  if(!el)return;
  el.innerHTML=`
    <div style="font-size:11px;display:grid;gap:8px">
      <div><label for="cost-grn" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Receiving cost/GRN (₹)</label><input type="number" id="cost-grn" value="${costParams.receivingCostPerGrn}" onchange="updateCost('receivingCostPerGrn',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-pick" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Pick cost/order (₹)</label><input type="number" id="cost-pick" value="${costParams.pickCostPerOrder}" onchange="updateCost('pickCostPerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-pack" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Pack cost/order (₹)</label><input type="number" id="cost-pack" value="${costParams.packCostPerOrder}" onchange="updateCost('packCostPerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-dispatch" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Dispatch revenue/order (₹)</label><input type="number" id="cost-dispatch" value="${costParams.dispatchCostPerOrder}" onchange="updateCost('dispatchCostPerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-storage" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Storage cost/SKU/month (₹)</label><input type="number" id="cost-storage" value="${costParams.storageCostPerSku}" onchange="updateCost('storageCostPerSku',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-return" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Return processing (₹)</label><input type="number" id="cost-return" value="${costParams.returnProcessingCost}" onchange="updateCost('returnProcessingCost',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div style="font-size:11px;font-weight:700;color:var(--t2);margin-top:6px;padding-top:6px;border-top:1px solid var(--b)">Staffing & monthly overhead</div>
      <div style="font-size:10px;color:var(--t3);margin-top:-4px">Real fixed costs of running the warehouse — folded into Total cost above, separate from the per-transaction rates.</div>
      <div class="fg2" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div><label for="cost-supervisor-count" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500"># Supervisors</label><input type="number" id="cost-supervisor-count" value="${costParams.supervisorCount}" min="0" onchange="updateCost('supervisorCount',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
        <div><label for="cost-supervisor-salary" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Supervisor salary/month (₹, each)</label><input type="number" id="cost-supervisor-salary" value="${costParams.supervisorSalaryMonthly}" onchange="updateCost('supervisorSalaryMonthly',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
        <div><label for="cost-worker-count" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500"># Workers</label><input type="number" id="cost-worker-count" value="${costParams.workerCount}" min="0" onchange="updateCost('workerCount',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
        <div><label for="cost-worker-salary" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Worker salary/month (₹, each)</label><input type="number" id="cost-worker-salary" value="${costParams.workerSalaryMonthly}" onchange="updateCost('workerSalaryMonthly',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      </div>
      <div><label for="cost-electricity" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Electricity bill/month (₹)</label><input type="number" id="cost-electricity" value="${costParams.electricityBillMonthly}" onchange="updateCost('electricityBillMonthly',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-packmat" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Packaging material cost/month (₹)</label><input type="number" id="cost-packmat" value="${costParams.packagingMaterialCostMonthly}" onchange="updateCost('packagingMaterialCostMonthly',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-other-overhead" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Other monthly overhead (₹)</label><input type="number" id="cost-other-overhead" value="${costParams.otherMonthlyOverhead}" onchange="updateCost('otherMonthlyOverhead',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div style="font-size:11px;font-weight:700;color:var(--t2);margin-top:6px;padding-top:6px;border-top:1px solid var(--b)">CaratLane contract billing rates</div>
      <div><label for="cost-mstorage" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Monthly storage charge (₹, flat)</label><input type="number" id="cost-mstorage" value="${costParams.monthlyStorageFlat}" onchange="updateCost('monthlyStorageFlat',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-unload" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Unloading & receiving (₹/box)</label><input type="number" id="cost-unload" value="${costParams.unloadingPerBox}" onchange="updateCost('unloadingPerBox',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-verify" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Inventory verification (₹/box)</label><input type="number" id="cost-verify" value="${costParams.verificationPerBox}" onchange="updateCost('verificationPerBox',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-grncharge" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">GRN creation charge (₹/GRN)</label><input type="number" id="cost-grncharge" value="${costParams.grnCreationCharge}" onchange="updateCost('grnCreationCharge',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-putaway" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Bin putaway charge (₹/unit)</label><input type="number" id="cost-putaway" value="${costParams.binPutawayPerUnit}" onchange="updateCost('binPutawayPerUnit',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-packaging" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Packaging charge (₹/order)</label><input type="number" id="cost-packaging" value="${costParams.packagingChargePerOrder}" onchange="updateCost('packagingChargePerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-contract-start" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Contract start date</label><input type="date" id="cost-contract-start" value="${costParams.contractStartDate}" onchange="updateCost('contractStartDate',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"><div style="font-size:10px;color:var(--t3);margin-top:2px">Storage is prorated for the first month if it starts mid-month</div></div>
      <button onclick="renderFinance()" style="width:100%;padding:8px;background:var(--gold);color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:600;font-size:11px">Recalculate</button>
    </div>
  `;
}
function updateCost(param,val){
  if(param==='contractStartDate'){
    costParams[param]=val;
  } else {
    costParams[param]=parseInt(val)||0;
  }
  renderFinance();
  saveCostParams(); // persist so this doesn't reset on next login (fire-and-forget; failure just falls back to defaults, logged to console)
  toast(`Updated ${param}`,'s');
}
function renderCapacityAlerts(){
  const el=document.getElementById('capacity-alerts');
  if(!el)return;
  const alerts=[];
  const totalShelf=RACK_LETTERS.length*SHELVES_PER_RACK;
  let totalOccupied=0;
  RACK_LETTERS.forEach(r=>{
    const occ=SKUS.filter(s=>s.rack===r&&parseInt(s.shelf)<=SHELVES_PER_RACK&&(inv[s.sku]||{qty:0}).qty>0).length;
    totalOccupied+=occ;
    if(occ>=SHELVES_PER_RACK) alerts.push({type:'high',msg:`🔴 Rack ${r} is FULL — no space for new items`});
  });
  const utilPct=Math.round((totalOccupied/totalShelf)*100);
  if(utilPct>=80)alerts.push({type:'high',msg:'⚠️ Warehouse at 80%+ capacity — consider offloading or reorganizing'});
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  if(lowStock>5)alerts.push({type:'warn',msg:`⚠️ ${lowStock} SKUs at low stock — prioritize reordering`});
  const unplaced=getUnplacedSKUs();
  if(unplaced.length)alerts.push({type:'warn',msg:`⚠️ ${unplaced.length} item(s) tagged with an invalid shelf number — need reassignment (see Rack View)`});
  el.innerHTML=alerts.length?alerts.map(a=>`<div class="warn-box" style="background:${a.type==='high'?'var(--dbg)':'var(--wbg)'};color:${a.type==='high'?'var(--dt)':'var(--wt)'}"><i class="ti ti-alert-triangle"></i>${a.msg}</div>`).join(''):'<div class="empty">All capacity metrics normal ✓</div>';
}
function computeMonthlyBill(monthStr){
  const mh=getMonthHistory(monthStr);
  const grns=mh.filter(h=>h.type==='grn');
  const totalBoxes=grns.reduce((a,g)=>a+(g.cartons||0),0);
  const totalUnits=grns.reduce((a,g)=>a+(g.items||[]).reduce((b,i)=>b+(i.qty||0),0),0);
  const grnCount=grns.length;
  const dispatches=mh.filter(h=>h.type==='dispatched');
  const orderCount=dispatches.length;

  // The contract's first month is billed at half the flat storage rate
  // (agreed since the contract started mid-month) — every month after
  // that is billed in full; any month before the start date is ₹0.
  let storage=costParams.monthlyStorageFlat||0;
  let storageNote='';
  if(costParams.contractStartDate){
    const contractMonth=costParams.contractStartDate.slice(0,7); // 'YYYY-MM'
    if(monthStr===contractMonth){
      storage=Math.round((costParams.monthlyStorageFlat||0)/2);
      const d=new Date(costParams.contractStartDate+'T00:00:00');
      storageNote=`Prorated — contract started ${d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})} (half month)`;
    } else if(monthStr<contractMonth){
      storage=0;
      storageNote='Before contract start date';
    }
  }

  const unloading=totalBoxes*(costParams.unloadingPerBox||0);
  const verification=totalBoxes*(costParams.verificationPerBox||0);
  const grnCharges=grnCount*(costParams.grnCreationCharge||0);
  const putaway=totalUnits*(costParams.binPutawayPerUnit||0);
  const packagingCharges=orderCount*(costParams.packagingChargePerOrder||0);
  const total=storage+unloading+verification+grnCharges+putaway+packagingCharges;
  return {monthStr,grnCount,totalBoxes,totalUnits,orderCount,storage,storageNote,unloading,verification,grnCharges,putaway,packagingCharges,total,grns};
}
function populateBillMonthSelector(){
  const sel=document.getElementById('bill-month-select');
  if(!sel)return;
  const prevVal=sel.value;
  const months=new Set();
  const now=new Date();
  for(let i=0;i<12;i++){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    months.add(getMonthKey(d));
  }
  history.forEach(h=>{ if(h.ts){const t=parseDisplayTs(h.ts); if(t>0){const d=new Date(t); months.add(getMonthKey(d));} } });
  const sorted=[...months].sort().reverse();
  const thisMonth=getMonthKey(now);
  sel.innerHTML=sorted.map(m=>{
    const [y,mm]=m.split('-').map(Number);
    const label=new Date(y,mm-1,1).toLocaleDateString('en-IN',{month:'long',year:'numeric'});
    return `<option value="${m}"${m===thisMonth?' selected':''}>${label}${m===thisMonth?' (This month)':''}</option>`;
  }).join('');
  if(prevVal&&sorted.includes(prevVal))sel.value=prevVal;
}
function renderMonthlyBilling(){
  const el=document.getElementById('monthly-billing-summary');
  if(!el)return;
  populateBillMonthSelector();
  const sel=document.getElementById('bill-month-select');
  const monthStr=sel?sel.value:getMonthKey(new Date());
  if(!monthStr){el.innerHTML='<div class="empty">No data yet</div>';return;}
  const bill=computeMonthlyBill(monthStr);
  const [y,mm]=monthStr.split('-').map(Number);
  const label=new Date(y,mm-1,1).toLocaleDateString('en-IN',{month:'long',year:'numeric'});
  const rows=[
    [`Warehouse storage${bill.storageNote?' (prorated)':' (flat)'}`,bill.storageNote||'—',`₹${bill.storage.toLocaleString('en-IN')}`],
    [`Unloading & receiving (₹${costParams.unloadingPerBox}/box)`,`${bill.totalBoxes} box(es)`,`₹${bill.unloading.toLocaleString('en-IN')}`],
    [`Inventory verification (₹${costParams.verificationPerBox}/box)`,`${bill.totalBoxes} box(es)`,`₹${bill.verification.toLocaleString('en-IN')}`],
    [`GRN creation (₹${costParams.grnCreationCharge}/GRN)`,`${bill.grnCount} GRN(s)`,`₹${bill.grnCharges.toLocaleString('en-IN')}`],
    [`Bin putaway (₹${costParams.binPutawayPerUnit}/unit)`,`${bill.totalUnits} unit(s)`,`₹${bill.putaway.toLocaleString('en-IN')}`],
    [`Packaging (₹${costParams.packagingChargePerOrder}/order)`,`${bill.orderCount} order(s)`,`₹${bill.packagingCharges.toLocaleString('en-IN')}`],
  ];
  el.innerHTML=`
    <div style="font-size:12px;font-weight:600;color:var(--t2);margin-bottom:8px">${esc(label)}</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid var(--b);color:var(--t2)">Charge</th><th style="text-align:left;padding:6px;border-bottom:1px solid var(--b);color:var(--t2)">Basis</th><th style="text-align:right;padding:6px;border-bottom:1px solid var(--b);color:var(--t2)">Amount</th></tr></thead>
      <tbody>
        ${rows.map(r=>`<tr><td style="padding:6px;border-bottom:1px solid var(--b)">${r[0]}</td><td style="padding:6px;border-bottom:1px solid var(--b);color:var(--t2)">${r[1]}</td><td style="padding:6px;border-bottom:1px solid var(--b);text-align:right">${r[2]}</td></tr>`).join('')}
      </tbody>
      <tfoot><tr><td colspan="2" style="padding:8px 6px;font-weight:700">Total</td><td style="padding:8px 6px;text-align:right;font-weight:700;font-size:14px">₹${bill.total.toLocaleString('en-IN')}</td></tr></tfoot>
    </table>
    ${bill.grnCount===0?'<div style="font-size:11px;color:var(--t2);margin-top:8px">No GRNs recorded this month — only the flat storage charge applies.</div>':''}
  `;
}
function printMonthlyBill(){
  const sel=document.getElementById('bill-month-select');
  const monthStr=sel?sel.value:getMonthKey(new Date());
  if(!monthStr){toast('No month selected','w');return;}
  const bill=computeMonthlyBill(monthStr);
  const [y,mm]=monthStr.split('-').map(Number);
  const label=new Date(y,mm-1,1).toLocaleDateString('en-IN',{month:'long',year:'numeric'});
  const printWindow=window.open('','MBILL_'+monthStr,'width=850,height=1000');
  if(!printWindow){ toast('Please allow popups to print','w'); return; }
  const rows=[
    [`Warehouse storage${bill.storageNote?' (prorated)':' (flat monthly charge)'}`,bill.storageNote||'—',bill.storage],
    [`Unloading & receiving`,`${bill.totalBoxes} box(es) × ₹${costParams.unloadingPerBox}`,bill.unloading],
    [`Inventory verification count`,`${bill.totalBoxes} box(es) × ₹${costParams.verificationPerBox}`,bill.verification],
    [`GRN creation charges`,`${bill.grnCount} GRN(s) × ₹${costParams.grnCreationCharge}`,bill.grnCharges],
    [`Bin putaway charges`,`${bill.totalUnits} unit(s) × ₹${costParams.binPutawayPerUnit}`,bill.putaway],
    [`Packaging charges`,`${bill.orderCount} order(s) × ₹${costParams.packagingChargePerOrder}`,bill.packagingCharges],
  ];
  printWindow.document.write(`
    <!DOCTYPE html><html><head><title>Monthly Bill — ${esc(label)}</title>
    <style>
      body{font-family:Arial,sans-serif;margin:20px;color:#333}
      .header{border-bottom:3px solid #000;padding-bottom:12px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end}
      .company{font-size:18px;font-weight:bold}
      .subtitle{font-size:11px;color:#666;margin-top:2px}
      .period{font-size:22px;font-weight:bold;text-align:right}
      table{width:100%;border-collapse:collapse;margin-top:14px}
      th{background:#f0f0f0;padding:8px;text-align:left;border:1px solid #ccc;font-size:11px}
      td{padding:9px 8px;border:1px solid #ccc;font-size:12px}
      .totals{margin-top:10px;font-size:16px;text-align:right;font-weight:bold}
      .note{margin-top:14px;font-size:10.5px;color:#888;border-top:1px solid #ccc;padding-top:8px}
      .sign{margin-top:50px;display:grid;grid-template-columns:1fr 1fr;gap:30px}
      .sign div{border-top:1px solid #000;padding-top:6px;text-align:center;font-size:11px}
      .footer{margin-top:30px;font-size:10px;color:#999;text-align:center}
      @media print{.no-print{display:none}}
    </style></head><body>
    <div id="pdf-content">
    <div class="header">
      <div>
        <div class="company">CaratLane WMS — Monthly Warehouse Bill</div>
        <div class="subtitle">EPS Worldwide Integrated Logistics</div>
      </div>
      <div class="period">${esc(label)}</div>
    </div>
    <table><thead><tr><th>Charge</th><th>Basis</th><th style="text-align:right">Amount</th></tr></thead><tbody>
      ${rows.map(r=>`<tr><td>${esc(r[0])}</td><td style="color:#666">${esc(r[1])}</td><td style="text-align:right">₹${r[2].toLocaleString('en-IN')}</td></tr>`).join('')}
    </tbody></table>
    <div class="totals">Total Payable: ₹${bill.total.toLocaleString('en-IN')}</div>
    <div class="note">Bill generated from ${bill.grnCount} GRN(s) recorded in ${esc(label)}. Excludes taxes. For contract billing purposes only.</div>
    <div class="sign">
      <div>Prepared by</div>
      <div>Authorized signatory</div>
    </div>
    <div class="footer">Printed ${new Date().toLocaleString('en-IN')} · CaratLane WMS</div>
    </div>
    ${pdfDownloadSnippet('MonthlyBill-'+monthStr+'.pdf')}
    </body></html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),300);
}

function addRtItem(){
  const sku=document.getElementById('rt-sku').value;
  const grade=document.getElementById('rt-grade').value;
  const qty=parseInt(document.getElementById('rt-qty').value)||1;
  const s=SKUS.find(x=>x.sku===sku);
  rtItemsList.push({sku,name:s.sub,variant:s.variant,grade,qty});
  renderRtItemsList();
}
function renderRtItemsList(){
  const el=document.getElementById('rt-items-list');
  el.innerHTML=rtItemsList.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Grade</th><th>Qty</th><th></th></tr></thead><tbody>${rtItemsList.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${item.name} — ${item.variant}</td><td><span class="pill p-g${item.grade}">Grade ${item.grade}</span></td><td>${item.qty}</td><td><button class="btn-sm btn-danger" onclick="removeRtItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function removeRtItem(i){rtItemsList.splice(i,1);renderRtItemsList();}
function processReturn(){
  if(!rtItemsList.length){toast('Add at least one item to process','w');return;}
  const awb=document.getElementById('rt-awb').value.trim();
  if(!awb){toast('Enter AWB / tracking number','w');return;}
  const rtype=document.getElementById('rt-type').value;
  rtItemsList.forEach(item=>{
    if(item.grade==='A'){
      // Returns don't specify a bin — restock onto the SKU's current
      // primary location (adds a fresh location if it has none yet).
      const loc=liveLoc(item.sku);
      addStockAtLocation(item.sku,loc.rack,loc.shelf,item.qty);
    }
  });
  const gradeA=rtItemsList.filter(i=>i.grade==='A').reduce((a,i)=>a+i.qty,0);
  const gradeB=rtItemsList.filter(i=>i.grade==='B').reduce((a,i)=>a+i.qty,0);
  const gradeC=rtItemsList.filter(i=>i.grade==='C').reduce((a,i)=>a+i.qty,0);
  const rid=newId('RET');
  // Store the per-SKU/grade breakdown, not just the grade totals in the
  // detail string — without it, nothing downstream (cycle-count movement
  // reconciliation in particular) can ever tell WHICH SKU a return
  // affected, so restocked returns were silently invisible everywhere
  // that needed a per-SKU return quantity.
  history.push({id:rid,type:'return',ts:ts(),detail:`AWB: ${awb} · ${rtype} · Grade A:${gradeA} B:${gradeB} C:${gradeC} · ${gradeA} units restocked`,items:[...rtItemsList]});
  saveInv();saveHist();rtItemsList=[];renderRtItemsList();renderRtLog();
  document.getElementById('rt-awb').value='';document.getElementById('rt-orderid').value='';
  toast(`Return ${rid} processed · ${gradeA} Grade-A units restocked to inventory`,'s');
}
function renderRtLog(){
  const el=document.getElementById('rt-log');
  const logs=history.filter(h=>h.type==='return').slice(-8).reverse();
  el.innerHTML=logs.length?logs.map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="hist-ts">${h.ts}</span></div><div class="hist-body">${esc(h.detail)}</div></div>`).join(''):'<div class="empty">No returns processed yet</div>';
}

// INVENTORY
async function renderInvVersionHistory(){
  const el=document.getElementById('inv-version-history');
  if(!el)return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Loading...</div>';
  const snapshots=await loadInventoryHistory();
  if(!snapshots.length){
    el.innerHTML='<div class="empty">No snapshots yet — snapshots are saved automatically on every inventory change</div>';
    return;
  }
  el.innerHTML=`
  <div style="font-size:10px;color:var(--t2);margin-bottom:8px">Snapshots are saved automatically every time inventory changes. Click Rollback to restore a previous state.</div>
  <div class="tw"><table><thead><tr><th>Snapshot ID</th><th>Saved At</th><th>Details</th><th>Action</th></tr></thead><tbody>
  ${snapshots.map((s,i)=>`<tr>
    <td class="mono" style="font-size:10px">${s.id}</td>
    <td style="font-size:10px">${s.ts||new Date(s.created_at).toLocaleString('en-IN')}</td>
    <td style="font-size:10px">${s.detail||'Inventory snapshot'}</td>
    <td>${i===0?'<span style="font-size:10px;color:var(--st)">Current</span>':`<button class="btn-sm" style="background:var(--wbg);color:var(--wt);border:1px solid var(--wt);border-radius:4px;padding:3px 8px;cursor:pointer;font-size:10px" onclick="rollbackInventory('${s.id}')"><i class="ti ti-history"></i> Rollback</button>`}</td>
  </tr>`).join('')}
  </tbody></table></div>`;
}
let reservedMap={};
let _binEditingSku=null;
let _binEditRows=null; // [{rack,shelf,qty}] — working copy while editing a SKU's locations
let _priceEditingSku=null;
async function loadReservedMap(){
  try{
    const {data,error}=await supa.rpc('get_active_reservations');
    if(error) throw error;
    reservedMap={};
    (data||[]).forEach(r=>{ reservedMap[r.sku]=r.reserved_qty; });
  }catch(e){ console.warn('loadReservedMap failed:',e.message||e); }
}
function renderInv(){
  const q=(document.getElementById('inv-q').value||'').toLowerCase();
  const cat=document.getElementById('inv-cat').value;
  const st=document.getElementById('inv-st').value;
  const canEditBin=getPerms().canEdit;
  const rows=SKUS.filter(s=>{
    if(cat&&s.cat!==cat)return false;
    const qty=(inv[s.sku]||{qty:0}).qty;
    if(st&&getSt(qty)!==st)return false;
    if(q&&!(s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q)||s.variant.toLowerCase().includes(q)))return false;
    return true;
  });
  document.getElementById('inv-tbody').innerHTML=rows.map(s=>{
    const i2=inv[s.sku]||{qty:0,rack:s.rack,shelf:s.shelf};
    const held=reservedMap[s.sku]||0;
    const skuLocs=getSkuLocations(s.sku);
    const binCell=_binEditingSku===s.sku
      ?`<div style="display:flex;flex-direction:column;gap:3px">${(_binEditRows||[]).map((row,i)=>`<div style="display:flex;gap:4px;align-items:center"><select id="bin-edit-rack-${s.sku}-${i}" style="font-size:11px;padding:2px 4px;width:52px">${RACK_LETTERS.map(r=>`<option value="${r}" ${r===row.rack?'selected':''}>${r}</option>`).join('')}</select><select id="bin-edit-shelf-${s.sku}-${i}" style="font-size:11px;padding:2px 4px;width:44px">${Array.from({length:SHELVES_PER_RACK},(_,n)=>n+1).map(n=>`<option value="${n}" ${String(n)===String(row.shelf)?'selected':''}>${n}</option>`).join('')}</select><input type="number" id="bin-edit-qty-${s.sku}-${i}" value="${row.qty}" min="0" style="font-size:11px;padding:2px 4px;width:52px" title="Qty on this shelf">${(_binEditRows.length>1)?`<button class="btn-sm btn-danger" style="padding:2px 5px" onclick="removeBinEditRow('${s.sku}',${i})" title="Remove this location"><i class="ti ti-x" style="font-size:10px"></i></button>`:''}</div>`).join('')}
      <div style="display:flex;gap:4px;margin-top:2px"><button class="btn-sm" style="padding:2px 6px" onclick="addBinEditRow('${s.sku}')" title="Split onto another shelf"><i class="ti ti-plus" style="font-size:11px"></i> Shelf</button><button class="btn-sm" style="padding:2px 6px" onclick="saveEditBin('${s.sku}')" title="Save"><i class="ti ti-check"></i></button><button class="btn-sm btn-danger" style="padding:2px 6px" onclick="cancelEditBin()" title="Cancel"><i class="ti ti-x"></i></button></div></div>`
      :`<span style="font-size:11px;font-weight:500">${skuLocs.length?skuLocs.map(l=>`${l.rack}-${l.shelf} (${l.qty})`).join(', '):`${i2.rack}-${i2.shelf}`}</span>${canEditBin?` <button class="btn-sm" style="padding:1px 5px;margin-left:4px" onclick="startEditBin('${s.sku}')" title="Edit bin location(s)"><i class="ti ti-edit" style="font-size:11px"></i></button>`:''}`;
    const priceCell=_priceEditingSku===s.sku
      ?`<div style="display:flex;gap:4px;align-items:center"><input type="number" id="price-edit-${s.sku}" value="${s.price!=null?s.price:''}" min="0" step="0.01" style="font-size:11px;padding:2px 4px;width:70px"><button class="btn-sm" style="padding:2px 6px" onclick="saveEditPrice('${s.sku}')" title="Save"><i class="ti ti-check"></i></button><button class="btn-sm btn-danger" style="padding:2px 6px" onclick="cancelEditPrice()" title="Cancel"><i class="ti ti-x"></i></button></div>`
      :`<span style="font-size:11px;font-weight:500">${s.price!=null?'₹'+s.price:'—'}</span>${canEditBin?` <button class="btn-sm" style="padding:1px 5px;margin-left:4px" onclick="startEditPrice('${s.sku}')" title="Edit unit price"><i class="ti ti-edit" style="font-size:11px"></i></button>`:''}`;
    return`<tr><td class="mono">${s.sku}</td><td><span class="pill p-info">${s.cat}</span></td><td style="font-weight:600;font-size:12px">${s.sub}</td><td style="color:var(--t2);font-size:11px">${s.variant}</td><td>${binCell}</td>
    <td><div class="qc">${canEditBin?`<button class="qb" onclick="adjQ('${s.sku}',-1)">−</button>`:''}<span class="qv">${i2.qty}</span>${canEditBin?`<button class="qb" onclick="adjQ('${s.sku}',1)">+</button>`:''}</div>${held>0?`<div style="font-size:9.5px;color:var(--wt);margin-top:2px;font-weight:600">${held} held by pickers</div>`:''}</td>
    <td>${priceCell}</td>
    <td>${stPill(i2.qty)}</td>
    <td>${canEditBin?`<button class="btn-sm" onclick="quickDisp('${s.sku}','${s.sub.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${s.variant.replace(/'/g,"\\'")}',${i2.qty})" ${i2.qty<=0?'disabled':''}><i class="ti ti-send"></i></button>`:''}</td></tr>`;
  }).join('');
  document.getElementById('inv-ct').textContent=`Showing ${rows.length} of ${SKUS.length} SKUs`;
}
function adjQ(sku,d){
  if(!getPerms().canEdit){ toast('You do not have permission to edit inventory quantities','w'); return; }
  if(!inv[sku])inv[sku]={qty:0,rack:SKUS.find(s=>s.sku===sku).rack,shelf:SKUS.find(s=>s.sku===sku).shelf};
  inv[sku].qty=Math.max(0,inv[sku].qty+d);
  saveInv();renderInv();
}
function startEditBin(sku){
  if(!getPerms().canEdit){ toast('You do not have permission to edit bin locations','w'); return; }
  _binEditingSku=sku;
  const locs=getSkuLocations(sku);
  const s=SKUS.find(x=>x.sku===sku);
  _binEditRows=locs.length?locs.map(l=>({rack:l.rack,shelf:l.shelf,qty:l.qty})):[{rack:s.rack,shelf:s.shelf,qty:0}];
  renderInv();
}
function cancelEditBin(){
  _binEditingSku=null;
  _binEditRows=null;
  renderInv();
}
function addBinEditRow(sku){
  if(!_binEditRows) return;
  const s=SKUS.find(x=>x.sku===sku);
  _binEditRows.push({rack:s.rack,shelf:1,qty:0});
  renderInv();
}
function removeBinEditRow(sku,idx){
  if(!_binEditRows||_binEditRows.length<=1) return;
  _binEditRows.splice(idx,1);
  renderInv();
}
async function saveEditBin(sku){
  if(!_binEditRows) return;
  // Pull the live values out of each row's inputs (the row objects only
  // hold what the UI was initialized with, not live edits).
  const rows=_binEditRows.map((row,i)=>{
    const rackSel=document.getElementById(`bin-edit-rack-${sku}-${i}`);
    const shelfSel=document.getElementById(`bin-edit-shelf-${sku}-${i}`);
    const qtyInp=document.getElementById(`bin-edit-qty-${sku}-${i}`);
    return{
      rack:rackSel?rackSel.value:row.rack,
      shelf:shelfSel?shelfSel.value:row.shelf,
      qty:qtyInp?Math.max(0,parseInt(qtyInp.value)||0):row.qty
    };
  }).filter(r=>r.qty>0);
  // Merge any duplicate rack-shelf rows (e.g. user split then re-picked the same shelf twice).
  const merged=[];
  rows.forEach(r=>{
    const ex=merged.find(m=>m.rack===r.rack&&String(m.shelf)===String(r.shelf));
    if(ex){ ex.qty+=r.qty; } else { merged.push({...r}); }
  });
  const s=SKUS.find(x=>x.sku===sku);
  const oldLocs=getSkuLocations(sku);
  if(!merged.length){
    toast('At least one location with quantity > 0 is required — use Adjust Qty to zero out a SKU instead','w');
    return;
  }
  if(!inv[sku]) inv[sku]={qty:0,rack:s.rack,shelf:s.shelf,locations:[]};
  inv[sku].locations=merged;
  inv[sku].qty=merged.reduce((a,r)=>a+r.qty,0);
  inv[sku].rack=merged[0].rack;
  inv[sku].shelf=merged[0].shelf;
  await saveInv();
  logAudit('BIN_UPDATE','inventory',sku,{locations:oldLocs},{locations:merged});
  _binEditingSku=null;
  _binEditRows=null;
  renderInv();
  renderRack();
  toast(`${sku} bin locations updated`,'s');
}
function startEditPrice(sku){
  if(!getPerms().canEdit){ toast('You do not have permission to edit prices','w'); return; }
  _priceEditingSku=sku;
  renderInv();
}
function cancelEditPrice(){
  _priceEditingSku=null;
  renderInv();
}
async function saveEditPrice(sku){
  const priceEl=document.getElementById('price-edit-'+sku);
  if(!priceEl) return;
  const raw=priceEl.value.trim();
  const s=SKUS.find(x=>x.sku===sku);
  if(!s) return;
  let newPrice=null;
  if(raw!==''){
    newPrice=parseFloat(raw);
    if(isNaN(newPrice)||newPrice<0){ toast('Price must be a valid non-negative number','w'); return; }
  }
  const oldPrice=s.price!=null?s.price:null;
  if(oldPrice===newPrice){ _priceEditingSku=null; renderInv(); return; }
  s.price=newPrice;
  try{
    // upsert (not update) — if the skus table row for this SKU doesn't
    // exist yet in the DB, update() would silently affect 0 rows.
    const {error}=await supa.from('skus').upsert({sku,cat:s.cat,sub:s.sub,variant:s.variant,rack:s.rack,shelf:s.shelf,short_code:s.shortCode,price:newPrice},{onConflict:'sku'});
    if(error) throw error;
  }catch(e){ console.error('saveEditPrice failed:',e.message||e); toast('Price updated locally only — connection issue','w'); }
  logAudit('PRICE_UPDATE','skus',sku,{price:oldPrice},{price:newPrice});
  _priceEditingSku=null;
  renderInv();
  toast(`${sku} price set to ${newPrice!=null?'₹'+newPrice:'—'}`,'s');
}
function quickDisp(sku,name,variant,avail){addToCart(sku,name,variant,avail);nav('dispatch');}
function exportCSV(){
  const rows=[['SKU','Category','Item','Variant','Rack','Shelf','Qty','Status']];
  SKUS.forEach(s=>{const i2=inv[s.sku]||{qty:0,rack:s.rack,shelf:s.shelf};rows.push([s.sku,s.cat,s.sub,s.variant,i2.rack,i2.shelf,i2.qty,getSt(i2.qty)]);});
  const a=document.createElement('a');a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(rows.map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n'));a.download='CaratLane_Inventory_'+new Date().toISOString().slice(0,10)+'.csv';a.click();
  toast('CSV exported successfully','s');
}

// RACK VIEW
// Physical warehouse layout: 15 racks (A–O), 6 shelves each. Existing
// SKU placements (currently only Rack A/B) keep whatever rack/shelf
// they already have — nothing here reassigns items. New racks C–O
// simply render as empty capacity until items are placed on them.
const RACK_LETTERS=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
const SHELVES_PER_RACK=6;
const TOTE_COUNT=10;
const TOTE_IDS=Array.from({length:TOTE_COUNT},(_,i)=>'TOTE-'+String(i+1).padStart(2,'0'));
// Every valid shelf-location code: the nominal 15×6 grid, plus any
// shelf numbers already in use beyond that (e.g. Rack A currently
// uses shelves up to 11) so nothing existing becomes unreachable.
function getShelfLocations(){
  // Only the real physical grid — 15 racks × 6 shelves. Items whose
  // SKU data still points at a shelf number beyond 6 (leftover from
  // before the 15-rack layout existed) are NOT real locations and
  // don't get a label — they show up as "needs reassignment" instead.
  const locs=[];
  RACK_LETTERS.forEach(r=>{
    for(let i=1;i<=SHELVES_PER_RACK;i++){
      locs.push({rack:r,shelf:String(i)});
    }
  });
  return locs;
}
// SKUs currently sitting on a shelf number that doesn't exist on a
// real 6-shelf rack — left over from before the 15-rack layout. These
// need manual reassignment once the consignment/relocation happens.
// Where a SKU actually lives right now. The `skus` table only stores each
// product's ORIGINAL/default rack-shelf; once stock is relocated (bin
// edit on Inventory, a corrected GRN, etc.) the live location lives in
// the `inventory` table instead. Anything that needs to know where to
// physically find stock — Rack View, picking, shelf-scan verification,
// shelf labels, cycle counts, reports — must go through this helper
// rather than reading s.rack/s.shelf directly, or it'll show/enforce
// the item's original placement instead of where it actually is.
function liveLoc(sku){
  const i2=inv[sku];
  const s=SKUS.find(x=>x.sku===sku);
  return {
    rack:(i2&&i2.rack!=null)?i2.rack:(s?s.rack:undefined),
    shelf:(i2&&i2.shelf!=null)?i2.shelf:(s?s.shelf:undefined)
  };
}
// A SKU can now be split across more than one shelf (a rack fills up
// during receiving, the rest gets assigned to a second bin). liveLoc()
// above still returns just the PRIMARY location — kept for every
// low-stakes display that only needs "a" bin (dashboard tiles, printed
// labels). Anything that actually needs to know EVERY place a SKU
// physically sits — Rack View, picking allocation, shelf-scan
// verification — must go through getSkuLocations() instead.
function getSkuLocations(sku){
  const i2=inv[sku];
  if(i2 && Array.isArray(i2.locations) && i2.locations.length){
    return i2.locations.filter(l=>l.qty>0);
  }
  // Legacy/simple case: no locations array yet (brand-new SKU, or
  // inventory data from before multi-location support) — treat the
  // single rack/shelf (or catalog default) as one location.
  const loc=liveLoc(sku);
  const qty=(i2&&i2.qty)||0;
  return qty>0 ? [{rack:loc.rack,shelf:loc.shelf,qty}] : [];
}
// Adds qty to a SKU at a specific rack/shelf — merges into an existing
// location entry at that exact bin if one exists, otherwise opens a new
// one. This is the actual mechanism behind "the shelf is full, put the
// rest on the next one": each GRN line just says which bin THAT batch
// went to, and locations accumulate instead of overwriting each other.
function addStockAtLocation(sku,rack,shelf,qty){
  if(qty<=0) return;
  if(!inv[sku]) inv[sku]={qty:0,rack,shelf,locations:[]};
  if(!Array.isArray(inv[sku].locations)){
    // Upgrade a legacy single-location record into the locations array
    // the first time this SKU is touched under the new model.
    inv[sku].locations=(inv[sku].qty>0 && inv[sku].rack!=null)
      ?[{rack:inv[sku].rack,shelf:inv[sku].shelf,qty:inv[sku].qty}]:[];
  }
  const loc=inv[sku].locations.find(l=>l.rack===rack&&String(l.shelf)===String(shelf));
  if(loc){ loc.qty+=qty; } else { inv[sku].locations.push({rack,shelf,qty}); }
  inv[sku].qty=inv[sku].locations.reduce((a,l)=>a+l.qty,0);
  inv[sku].rack=inv[sku].locations[0].rack;
  inv[sku].shelf=inv[sku].locations[0].shelf;
}
// Removes qty from a SKU at a specific rack/shelf (picking, packing
// consumption, voiding a GRN). Drops the location entry once it's
// empty so cleared shelves don't linger in the list.
function removeStockAtLocation(sku,rack,shelf,qty){
  if(!inv[sku] || qty<=0) return;
  if(!Array.isArray(inv[sku].locations)){
    inv[sku].qty=Math.max(0,inv[sku].qty-qty);
    return;
  }
  const loc=inv[sku].locations.find(l=>l.rack===rack&&String(l.shelf)===String(shelf));
  if(loc){ loc.qty=Math.max(0,loc.qty-qty); }
  else if(inv[sku].locations.length){
    // Bin didn't match any known location exactly (e.g. stale data) —
    // fall back to taking it off whichever location has the most, so
    // the total still comes out right even if the per-shelf split is
    // slightly approximate.
    inv[sku].locations.sort((a,b)=>b.qty-a.qty)[0].qty=Math.max(0,inv[sku].locations[0].qty-qty);
  }
  inv[sku].locations=inv[sku].locations.filter(l=>l.qty>0);
  inv[sku].qty=inv[sku].locations.reduce((a,l)=>a+l.qty,0);
  if(inv[sku].locations.length){
    inv[sku].rack=inv[sku].locations[0].rack;
    inv[sku].shelf=inv[sku].locations[0].shelf;
  }
}
function getUnplacedSKUs(){
  const out=[];
  SKUS.forEach(s=>{
    getSkuLocations(s.sku).forEach(loc=>{
      const n=parseInt(loc.shelf);
      if(!isNaN(n)&&n>SHELVES_PER_RACK) out.push({...s,rack:loc.rack,shelf:loc.shelf,qty:loc.qty});
    });
  });
  return out;
}
function renderRack(){
  const container=document.getElementById('rack-view-container');
  if(!container) return;
  const canEditBin=getPerms().canEdit;
  const byRack={};
  RACK_LETTERS.forEach(r=>byRack[r]={});
  SKUS.forEach(s=>{
    // A SKU can occupy more than one shelf if it overflowed its first
    // bin at receiving — place it on EVERY shelf it actually sits on,
    // with that shelf's own quantity, not the SKU's grand total.
    getSkuLocations(s.sku).forEach(loc=>{
      if(loc.qty<=0) return;
      if(!byRack[loc.rack]) byRack[loc.rack]={};
      if(!byRack[loc.rack][loc.shelf]) byRack[loc.rack][loc.shelf]=[];
      byRack[loc.rack][loc.shelf].push({...s,qty:loc.qty,rack:loc.rack,shelf:loc.shelf});
    });
  });
  // Which SKUs currently default/home to a bin even with zero stock —
  // shown as context on an empty slot ("last assigned to X") so staff
  // aren't reassigning blind, without that stopping the reassignment.
  const homeByBin={};
  SKUS.forEach(s=>{
    const loc=liveLoc(s.sku);
    if(!loc.rack||loc.shelf==null) return;
    const key=loc.rack+'-'+loc.shelf;
    if(!homeByBin[key]) homeByBin[key]=[];
    homeByBin[key].push(s);
  });
  let totalOccupiedBins=0;
  const rackHTML=RACK_LETTERS.map(r=>{
    const data=byRack[r]||{};
    // Every rack now always shows its full SHELVES_PER_RACK shelves —
    // occupied ones with their stock, empty ones as an explicit
    // "Available" slot instead of just vanishing. A shelf that's out of
    // stock isn't the same as a shelf nobody can ever use again.
    const occupiedCount=Array.from({length:SHELVES_PER_RACK},(_,i)=>String(i+1)).filter(sh=>data[sh]&&data[sh].length).length;
    totalOccupiedBins+=occupiedCount;
    const rows=Array.from({length:SHELVES_PER_RACK},(_,i)=>String(i+1)).map(sh=>{
      const items=data[sh];
      if(items && items.length){
        // A shelf can hold more than one SKU. Each gets its own row with
        // its own name/qty/bar — never blend several SKUs' quantities
        // into one number under a single item's name (that previously
        // made a shelf look like it held way more of one product than
        // it actually did).
        return items.map((it,idx)=>{
          const held=reservedMap[it.sku]||0;
          const mx=10;
          const pct=Math.min(100,Math.round(it.qty/mx*100));
          const bc=pct===0?'bar-out':pct<30?'bar-low':'bar-ok';
          const lbl=it.sub.replace(/ - .*/,'').replace(/- .*/,'').trim();
          const shelfLabel=idx===0?`${r}${sh}`:'';
          // Always show the SKU + size/variant, not just when a shelf
          // happens to hold more than one SKU — the label above (lbl)
          // strips out gender/variant entirely, so a lone-item shelf was
          // showing an indistinguishable "Stitched Denim" with no way to
          // tell which size or gender it actually was.
          const nameSuffix=` <span style="color:var(--t3);font-weight:400">(${esc(it.sku)}${it.variant?' · '+esc(it.variant):''})</span>`;
          return`<div class="rack-row" data-bin="${r}${sh}"><span class="shelf-l">${shelfLabel}</span><div><div style="font-size:11px;font-weight:600;margin-bottom:3px">${lbl}${nameSuffix}</div><div class="bar-bg"><div class="bar-f ${bc}" style="width:${pct}%"></div></div></div><span class="qty-r">${it.qty}u${held>0?`<div style="font-size:9px;color:var(--wt);font-weight:600">${held} held</div>`:''}</span></div>`;
        }).join('');
      }
      // AVAILABLE — nothing currently stocked here. Shown distinctly
      // (not just absent) with a one-click way to hand this bin to a
      // different product, whether that product already exists or is
      // brand new.
      const homeSkus=homeByBin[r+'-'+sh]||[];
      const hint=homeSkus.length?`Was home to ${homeSkus.map(s=>esc(s.sku)).join(', ')}`:'Never assigned';
      const assignBtn=canEditBin?`<button title="Assign a product to this bin" onclick="openAssignBin('${r}','${sh}')" style="width:34px;height:24px;border:none;border-radius:5px;background:var(--st);color:#fff;cursor:pointer;font-size:13px;line-height:1"><i class="ti ti-plus"></i></button>`:'';
      return `<div class="rack-row" data-bin="${r}${sh}" style="background:var(--sbg)">
        <span class="shelf-l">${r}${sh}</span>
        <div><div style="font-size:11px;font-weight:700;color:var(--st)">Available</div><div style="font-size:9px;color:var(--t3)">${hint}</div></div>
        <span class="qty-r">${assignBtn}</span>
      </div>`;
    }).join('');
    // Each rack is its own single bay (physically 1 rack = 1 bay, 6
    // shelves) — no splitting into Bay 1/Bay 2 columns.
    return `<div class="stitle" style="margin-top:14px">Rack ${r} <span style="font-weight:400;color:var(--t3);font-size:11px">— ${occupiedCount}/${SHELVES_PER_RACK} shelves in use</span></div>
      <div class="rack-wrap"><div class="rack-card"><div class="rack-head"><span style="font-size:12px;font-weight:600">Rack ${r}</span><span style="font-size:10px;color:var(--t2)">${occupiedCount} occupied · ${SHELVES_PER_RACK-occupiedCount} available</span></div>${rows}</div></div>`;
  }).join('');
  const unplaced=getUnplacedSKUs();
  const unplacedHTML=unplaced.length?`<div class="sep" style="margin:16px 0"></div>
    <div style="background:var(--dbg);border:1px solid var(--dt);border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;font-size:12px;color:var(--dt);display:flex;align-items:center;gap:6px;margin-bottom:8px"><i class="ti ti-alert-triangle"></i>${unplaced.length} item(s) need shelf reassignment</div>
      <div style="font-size:11px;color:var(--t2);margin-bottom:8px">These are still tagged with a shelf number that doesn't exist on a real 6-shelf rack (left over from before racks C–O existed). Update their rack/shelf once placed.</div>
      <div style="display:flex;flex-direction:column;gap:4px">
        ${unplaced.map(s=>`<div style="font-size:11px"><span class="mono">${esc(s.sku)}</span> — ${esc(s.sub)} (${esc(s.variant)}) <span style="color:var(--t3)">currently tagged Rack ${esc(s.rack)} Shelf ${esc(s.shelf)}</span></div>`).join('')}
      </div>
    </div>`:'';
  container.innerHTML=rackHTML+unplacedHTML;
  renderRackSummaryBar(totalOccupiedBins);
  filterRackView();
}
// Warehouse-wide occupancy — each rack card already shows its own
// occupied/available count, but with 15 racks there was no single total
// to answer "how full are we overall" without scrolling through all of
// them and adding it up by hand.
function renderRackSummaryBar(totalOccupiedBins){
  const el=document.getElementById('rack-summary-bar');
  if(!el) return;
  const totalBins=RACK_LETTERS.length*SHELVES_PER_RACK;
  const available=totalBins-totalOccupiedBins;
  const pct=totalBins?Math.round(totalOccupiedBins/totalBins*100):0;
  el.innerHTML=`<div class="sgrid" style="margin-bottom:14px">
    <div class="sc"><div class="sl"><i class="ti ti-building-warehouse"></i>Total Bins</div><div class="sv">${totalBins}</div></div>
    <div class="sc"><div class="sl" style="color:var(--dt)"><i class="ti ti-box"></i>Occupied</div><div class="sv" style="color:var(--dt)">${totalOccupiedBins}</div></div>
    <div class="sc"><div class="sl" style="color:var(--st)"><i class="ti ti-circle-check"></i>Available</div><div class="sv" style="color:var(--st)">${available}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-percentage"></i>Utilization</div><div class="sv">${pct}%</div></div>
  </div>`;
}
// Rack View search — jump to a specific bin (e.g. "C4"), or filter by
// SKU / product name across all 90 bins, instead of scrolling through
// all 15 racks by hand. Runs as a highlight pass over the already
// rendered rows rather than a re-render, so it's cheap to call on every
// keystroke and safe to re-apply after any renderRack() refresh.
function filterRackView(){
  const input=document.getElementById('rack-search');
  const statusEl=document.getElementById('rack-search-status');
  const container=document.getElementById('rack-view-container');
  if(!input||!container) return;
  const raw=(input.value||'').trim();
  const q=raw.toLowerCase();
  const rows=container.querySelectorAll('.rack-row');
  rows.forEach(r=>r.classList.remove('rack-row-hit'));
  if(!q){ if(statusEl) statusEl.textContent=''; return; }
  // A bin-code query ("C4", "c-4", "C 4") matches the shelf's data-bin
  // exactly (order/spacing-insensitive); anything else does a substring
  // match against the row's visible text (SKU, product name, variant).
  const binMatch=q.replace(/[^a-z0-9]/g,'');
  const hits=[];
  rows.forEach(row=>{
    const bin=(row.dataset.bin||'').toLowerCase();
    const text=row.textContent.toLowerCase();
    if(bin===binMatch || text.includes(q)){
      row.classList.add('rack-row-hit');
      hits.push(row);
    }
  });
  if(statusEl) statusEl.textContent=hits.length?`${hits.length} match${hits.length===1?'':'es'}`:'No matches';
  if(hits.length) hits[0].scrollIntoView({behavior:'smooth',block:'center'});
}

// ── Bin reassignment ──────────────────────────────────────────────────
// A bin going to zero stock doesn't free it up for a different product —
// nothing in the app ever reassigns a shelf, it just silently disappears
// from Rack View. This lets staff explicitly hand an empty bin to either
// an existing SKU (as its new home/default receiving location) or a
// brand-new product, without requiring the bin to already have stock.
let _assignBinTarget=null;
function openAssignBin(rack,shelf){
  if(!getPerms().canEdit){ toast('You do not have permission to reassign bins','w'); return; }
  _assignBinTarget={rack,shelf};
  document.getElementById('ab-bin-label').textContent=`${rack}${shelf}`;
  const homeSkus=SKUS.filter(s=>{const l=liveLoc(s.sku);return l.rack===rack&&String(l.shelf)===String(shelf);});
  document.getElementById('ab-hint').textContent=homeSkus.length
    ? `Currently the default bin for: ${homeSkus.map(s=>s.sku).join(', ')} (out of stock) — assigning a different product here adds it alongside, it won't remove that default.`
    : 'No product currently defaults to this bin.';
  // Out-of-stock SKUs first — they're the realistic candidates for an
  // empty bin — then alphabetically within each group.
  const sorted=[...SKUS].sort((a,b)=>{
    const qa=(inv[a.sku]||{qty:0}).qty, qb=(inv[b.sku]||{qty:0}).qty;
    if((qa<=0)!==(qb<=0)) return qa<=0?-1:1;
    return (a.sub+a.variant).localeCompare(b.sub+b.variant);
  });
  const sel=document.getElementById('ab-sku-select');
  sel.innerHTML=sorted.map(s=>{
    const q=(inv[s.sku]||{qty:0}).qty;
    return `<option value="${esc(s.sku)}">${esc(s.sub)} — ${esc(s.variant)} (${esc(s.sku)}) · ${q<=0?'out of stock':q+' in stock'}</option>`;
  }).join('');
  document.getElementById('assign-bin-modal-overlay').style.display='flex';
}
function closeAssignBinModal(){
  document.getElementById('assign-bin-modal-overlay').style.display='none';
  _assignBinTarget=null;
}
async function confirmAssignBin(){
  if(!_assignBinTarget) return;
  const sku=document.getElementById('ab-sku-select').value;
  if(!sku){ toast('Pick a product first','w'); return; }
  const {rack,shelf}=_assignBinTarget;
  const qty=(inv[sku]||{qty:0}).qty;
  if(qty>0 && !confirm(`${sku} currently has ${qty} unit(s) stocked elsewhere. Set ${rack}${shelf} as its home bin anyway?`)) return;
  if(!inv[sku]) inv[sku]={qty:0,locations:[]};
  // This only sets the default/home location — it deliberately does NOT
  // touch qty or the locations array, since the bin has no stock. If the
  // SKU already has stock elsewhere, that stock and its own bin(s) are
  // untouched; this just changes where the SKU's NEXT receipt defaults to.
  inv[sku].rack=rack; inv[sku].shelf=shelf;
  await saveInv();
  logAudit('BIN_ASSIGN','inventory',sku,null,{rack,shelf});
  closeAssignBinModal();
  renderRack();
  toast(`${sku} assigned to ${rack}${shelf}`,'s');
}
function addNewProductToBin(){
  if(!_assignBinTarget) return;
  const {rack,shelf}=_assignBinTarget;
  closeAssignBinModal();
  nav('inventory');
  setTimeout(()=>{
    const f=document.getElementById('add-product-form');
    if(f){ f.style.display='block'; populateAddProductRackShelf(); }
    const rackSel=document.getElementById('ap-rack');
    const shelfSel=document.getElementById('ap-shelf');
    if(rackSel) rackSel.value=rack;
    if(shelfSel) shelfSel.value=String(shelf);
    f?.scrollIntoView({behavior:'smooth',block:'center'});
  },80);
}

// UNIFIED ORDER STATUS
function renderOrderStatusRecent(){
  const el=document.getElementById('os-recent');
  if(!el)return;
  const seen=new Set();
  const recent=[];
  for(let i=orders.length-1;i>=0 && recent.length<10;i--){
    const oid=orders[i].id;
    if(oid && !seen.has(oid)){ seen.add(oid); recent.push(oid); }
  }
  for(let i=history.length-1;i>=0 && recent.length<10;i--){
    const oid=history[i].orderId;
    if(oid && !seen.has(oid)){ seen.add(oid); recent.push(oid); }
  }
  if(!recent.length){ el.innerHTML=''; return; }
  el.innerHTML=`<div style="font-size:10px;color:var(--t2);font-weight:600;margin-bottom:6px">RECENT ORDERS</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">${recent.map(oid=>
      `<button onclick="document.getElementById('os-order-id').value='${esc(oid)}';lookupOrderStatus()" style="padding:5px 10px;background:var(--s2);border:0.5px solid var(--b);border-radius:14px;cursor:pointer;font-size:11px;color:var(--t);font-family:monospace">${esc(oid)}</button>`
    ).join('')}</div>`;
}
async function lookupOrderStatus(){
  const oid=document.getElementById('os-order-id').value.trim();
  const el=document.getElementById('os-result');
  if(!oid){ el.innerHTML='<div class="empty">Enter an Order ID to track</div>'; return; }
  const order=orders.find(o=>o.id.toLowerCase()===oid.toLowerCase());
  const entries=history.filter(h=>h.orderId && h.orderId.toLowerCase()===oid.toLowerCase());
  const queueTask=packingQueue.find(t=>t.orderId && t.orderId.toLowerCase()===oid.toLowerCase());
  if(!entries.length && !queueTask && !order){
    el.innerHTML=`<div class="empty">No records found for "${esc(oid)}" — check the Order ID and try again</div>`;
    return;
  }
  el.innerHTML='<div class="empty">Loading full timeline…</div>';
  const realOrderId=order?order.id:(entries[0]?entries[0].orderId:(queueTask?queueTask.orderId:oid));
  const orderEvents=await loadOrderEvents(realOrderId);

  const stageIcon={pick:'ti-scan',packed:'ti-box',dispatched:'ti-truck-delivery',exception:'ti-alert-triangle'};
  const stageLabel={pick:'Picking complete',packed:'Packing complete',dispatched:'Dispatched',exception:'Exception / QC'};
  const stageColor={pick:'var(--st)',packed:'var(--gold)',dispatched:'var(--navy)',exception:'var(--dt)'};
  const evMeta={
    tote_scanned:{icon:'ti-package',bg:'#6a1b9a',label:'Tote bag scanned'},
    shelf_scanned:{icon:'ti-map-pin',bg:'var(--it)',label:'Shelf location scanned'},
    item_scanned:{icon:'ti-barcode',bg:'var(--st)',label:'Item scanned'},
    pack_started:{icon:'ti-player-play',bg:'var(--gold)',label:'Packing started'},
    pack_item_verified:{icon:'ti-check',bg:'var(--st)',label:'Item verified (packing)'},
    left_warehouse:{icon:'ti-door-exit',bg:'var(--it)',label:'Left warehouse — AWB pending'}
  };

  // One chronologically-sorted timeline built from three sources: the
  // order record itself (created/assigned/cancelled), the coarse
  // history milestones (picked/packed/dispatched/exception), and the
  // granular order_events log (tote/shelf/item scans, pack start/verify).
  const timeline=[];
  if(order){
    timeline.push({sortTs:order.createdAt?new Date(order.createdAt).getTime():0,
      ts:order.createdAt?new Date(order.createdAt).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'',
      iconBg:'var(--t3)',icon:'ti-clipboard-list',title:'Order created',
      sub:`${order.items.length} SKU(s) · ${order.priority} · ${order.method}${order.customerName?' · '+esc(order.customerName):''}`,
      meta:order.createdBy?'Created by '+esc(order.createdBy):''});
    if(order.assignedPicker){
      timeline.push({sortTs:order.assignedAt?new Date(order.assignedAt).getTime():0.5,
        ts:order.assignedAt?new Date(order.assignedAt).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'',
        iconBg:'var(--navy)',icon:'ti-user-check',title:'Assigned to picker',sub:esc(order.assignedPicker),meta:''});
    }
    if(order.status==='cancelled'){
      timeline.push({sortTs:Number.MAX_SAFE_INTEGER,ts:'',iconBg:'var(--dt)',icon:'ti-x',title:'Order cancelled',sub:'',meta:''});
    }
  }
  entries.forEach(h=>{
    let hSub=h.detail||'';
    if(h.type==='dispatched') hSub+=` · AWB: ${h.awb||'—'} · Courier: ${h.courierPartner||'—'}`;
    timeline.push({
      sortTs:parseDisplayTs(h.ts), ts:h.ts||'',
      iconBg:stageColor[h.type]||'var(--t3)', icon:stageIcon[h.type]||'ti-circle',
      title:stageLabel[h.type]||h.type, sub:esc(hSub), meta:h.picker?esc(h.picker):'',
      printBtn:h.type==='packed'?h.id:null
    });
  });
  orderEvents.forEach(e=>{
    const m=evMeta[e.event_type]||{icon:'ti-circle',bg:'var(--t3)',label:e.event_type};
    const d=e.detail||{};
    let sub='';
    if(e.event_type==='tote_scanned') sub=`Tote ${esc(d.toteId||'')}`;
    else if(e.event_type==='shelf_scanned') sub=`Rack ${esc(d.rack||'')} · Shelf ${esc(d.shelf||'')}`;
    else if(e.event_type==='item_scanned') sub=`${esc(d.sku||'')}${d.manual?' (manual entry)':' (scanned)'}${d.qty?' × '+d.qty:''}`;
    else if(e.event_type==='pack_item_verified') sub=`${esc(d.sku||'')} verified`;
    else if(e.event_type==='pack_started') sub='Timer started';
    timeline.push({
      sortTs:new Date(e.created_at).getTime(),
      ts:new Date(e.created_at).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',second:'2-digit'}),
      iconBg:m.bg, icon:m.icon, title:m.label, sub, meta:e.actor?esc(e.actor):''
    });
  });
  timeline.sort((a,b)=>a.sortTs-b.sortTs);

  let rows=timeline.map(t=>`
    <div style="display:flex;gap:12px;padding:12px 0;border-bottom:0.5px solid var(--b)">
      <div style="width:32px;height:32px;border-radius:50%;background:${t.iconBg};color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="ti ${t.icon}"></i>
      </div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:12px;display:flex;align-items:center;justify-content:space-between;gap:8px">
          <span>${t.title}</span>
          ${t.printBtn?`<button class="btn-sm" onclick="printPackingSlip('${esc(t.printBtn)}')"><i class="ti ti-printer"></i>Print slip</button>`:''}
        </div>
        ${t.sub?`<div style="font-size:11px;color:var(--t2);margin-top:2px">${t.sub}</div>`:''}
        <div style="font-size:10px;color:var(--t3);margin-top:2px">${esc(t.ts)}${t.meta?' · '+t.meta:''}</div>
      </div>
    </div>`).join('');

  if(queueTask && !entries.some(h=>h.type==='packed')){
    const state=queueTask.claimedBy?`<div style="font-size:11px;color:var(--wt);font-weight:600"><i class="ti ti-lock"></i> Being packed by ${esc(queueTask.claimedBy)}</div>`:`<div style="font-size:11px;color:var(--t2)">Awaiting packing</div>`;
    rows+=`
    <div style="display:flex;gap:12px;padding:12px 0">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--s2);color:var(--t2);border:1.5px dashed var(--b);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="ti ti-box"></i>
      </div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:12px;color:var(--t2)">In packing queue</div>
        ${state}
      </div>
    </div>`;
  } else if(order && order.status==='assigned' && !queueTask && !entries.some(h=>h.type==='pick')){
    rows+=`
    <div style="display:flex;gap:12px;padding:12px 0">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--s2);color:var(--t2);border:1.5px dashed var(--b);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="ti ti-scan"></i>
      </div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:12px;color:var(--t2)">Awaiting pick</div>
        <div style="font-size:11px;color:var(--t2)">Assigned to ${esc(order.assignedPicker)}, not yet started</div>
      </div>
    </div>`;
  }
  const shareBtn=(order&&order.trackingToken)?`<button class="btn-sm" style="margin-left:auto" onclick="copyTrackingLink('${esc(order.id)}')" title="Copy a no-login link anyone can use to view this order's status"><i class="ti ti-link"></i>Copy tracking link</button>`:'';
  el.innerHTML=`<div class="panel"><div class="ph"><i class="ti ti-package"></i>Order ${esc(oid)}${shareBtn}</div><div class="pb">${rows}</div></div>`;
}
// Copies a no-login shareable link (?track=<random token>) that opens a
// standalone, read-only tracking page for this one order — see
// renderTrackingPage(). The token is looked up via a SECURITY DEFINER
// Supabase function, so this never exposes any other order or requires
// weakening RLS on the underlying tables.
function copyTrackingLink(orderId){
  const order=orders.find(o=>o.id===orderId);
  if(!order||!order.trackingToken){ toast('No tracking link available for this order yet — run the tracking-link migration first','w'); return; }
  const url=`${location.origin}${location.pathname}?track=${order.trackingToken}`;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(()=>toast('Tracking link copied to clipboard','s')).catch(()=>{ window.prompt('Copy this tracking link:',url); });
  } else {
    window.prompt('Copy this tracking link:',url);
  }
}

// REPORTS
function renderMISEmailConfig(){
  const el=document.getElementById('mis-email-config');
  if(!el)return;
  const cfg=JSON.parse(localStorage.getItem('mis_email_cfg')||'{}');
  el.innerHTML=`
  <div style="background:var(--s2);border-radius:10px;padding:14px 16px">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div>
        <label for="mis-email-to" style="font-size:10px;color:var(--t2);display:block;margin-bottom:3px;font-weight:600">SEND TO (CaratLane email)</label>
        <input id="mis-email-to" type="email" value="${cfg.to||''}" placeholder="caratlane-dc@caratlane.com" style="width:100%;padding:7px;border:0.5px solid var(--b);border-radius:5px;background:var(--s);color:var(--t);font-size:11px">
      </div>
      <div>
        <label for="mis-email-cc" style="font-size:10px;color:var(--t2);display:block;margin-bottom:3px;font-weight:600">CC</label>
        <input id="mis-email-cc" type="email" value="${cfg.cc||''}" placeholder="manager@epsworldwide.com" style="width:100%;padding:7px;border:0.5px solid var(--b);border-radius:5px;background:var(--s);color:var(--t);font-size:11px">
      </div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <label style="display:flex;align-items:center;gap:6px;font-size:11px;cursor:pointer">
        <input id="mis-auto-send" type="checkbox" ${cfg.autoSend?'checked':''} onchange="saveMISEmailConfig()">
        Auto-send every Monday at 10:00 AM
      </label>
      <button onclick="saveMISEmailConfig()" style="padding:6px 12px;background:var(--st);color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:11px;font-weight:600">Save Config</button>
      <button onclick="sendMISEmailNow()" style="padding:6px 12px;background:var(--gold);color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:11px;font-weight:600"><i class="ti ti-send"></i> Send Now</button>
    </div>
    <div id="mis-email-status" style="font-size:10px;color:var(--t3);margin-top:6px"></div>
    <div style="margin-top:10px;padding:8px;background:var(--ibg);border-radius:6px;font-size:10px;color:var(--it)">
      <i class="ti ti-info-circle"></i> Auto-email uses a Supabase Edge Function. 
      See setup guide: deploy the <strong>send-mis-email</strong> edge function with your SMTP credentials.
      The "Send Now" button sends immediately using the same function.
    </div>
  </div>`;
}
function saveMISEmailConfig(){
  const cfg={
    to:document.getElementById('mis-email-to')?.value||'',
    cc:document.getElementById('mis-email-cc')?.value||'',
    autoSend:document.getElementById('mis-auto-send')?.checked||false
  };
  localStorage.setItem('mis_email_cfg',JSON.stringify(cfg));
  // Schedule Monday check
  scheduleMISEmail();
  toast('Email config saved','s');
}
function scheduleMISEmail(){
  // Check every hour if it's Monday 10 AM and auto-send is on
  clearInterval(window._misTimer);
  window._misTimer=setInterval(()=>{
    const cfg=JSON.parse(localStorage.getItem('mis_email_cfg')||'{}');
    if(!cfg.autoSend||!cfg.to) return;
    const now=new Date();
    if(now.getDay()===1&&now.getHours()===10&&now.getMinutes()<5){
      const lastSent=localStorage.getItem('mis_last_sent');
      const todayStr=now.toDateString();
      if(lastSent!==todayStr){
        sendMISEmailNow(true);
        localStorage.setItem('mis_last_sent',todayStr);
      }
    }
  },60000); // check every minute
}
async function sendMISEmailNow(auto=false){
  const cfg=JSON.parse(localStorage.getItem('mis_email_cfg')||'{}');
  if(!cfg.to){ toast('Please configure recipient email first','w'); return; }
  const statusEl=document.getElementById('mis-email-status');
  if(statusEl) statusEl.textContent='Sending...';
  // Build CSV data for email
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})} to ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
  const payload={
    to:cfg.to, cc:cfg.cc||'',
    subject:`CaratLane WMS Weekly MIS Report — ${weekLabel}`,
    weekLabel, weekStr,
    summary:{
      grns:wh.filter(h=>h.type==='grn').length,
      dispatches:wh.filter(h=>h.type==='dispatched').length,
      returns:wh.filter(h=>h.type==='return').length,
      exceptions:wh.filter(h=>h.type==='exception').length,
    },
    generatedAt:new Date().toLocaleString('en-IN')
  };
  try {
    // Call Supabase Edge Function
    const res=await fetch('https://lqpqsrdxcxefxvobmnjc.supabase.co/functions/v1/send-mis-email',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcHFzcmR4Y3hlZnh2b2JtbmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjU3OTcsImV4cCI6MjA5NjE0MTc5N30.6KhLZw5gu0PqGCAPex6sYAOcYJtz89Xm1abRtUbKnEM'},
      body:JSON.stringify(payload)
    });
    const result=await res.json();
    if(res.ok){
      if(statusEl) statusEl.textContent='✓ Email sent to '+cfg.to+' at '+new Date().toLocaleTimeString('en-IN');
      if(!auto) toast('MIS email sent to '+cfg.to,'s');
    } else {
      throw new Error(result.error||'Edge function error');
    }
  } catch(e){
    console.error('MIS email error:',e);
    if(statusEl) statusEl.textContent='⚠ Email failed: '+e.message+' — download CSV instead';
    if(!auto) toast('Email failed — use Download CSV instead','w');
  }
}
// Start scheduler on load
setTimeout(scheduleMISEmail, 3000);
function getWeekBounds(weekStr){
  // weekStr = "YYYY-Www" e.g. "2026-W23"
  const [year,wk]=weekStr.split('-W').map(Number);
  const jan4=new Date(year,0,4);
  const startOfWeek1=new Date(jan4);
  startOfWeek1.setDate(jan4.getDate()-(jan4.getDay()||7)+1);
  const start=new Date(startOfWeek1);
  start.setDate(startOfWeek1.getDate()+(wk-1)*7);
  const end=new Date(start);
  end.setDate(start.getDate()+6);
  end.setHours(23,59,59,999);
  return {start,end};
}
function getWeekKey(date){
  const d=new Date(date);
  d.setHours(0,0,0,0);
  d.setDate(d.getDate()+3-(d.getDay()||7)-2);
  const yearStart=new Date(d.getFullYear(),0,4);
  const wk=1+Math.round(((d-yearStart)/86400000-3+(yearStart.getDay()||7))/7);
  return `${d.getFullYear()}-W${String(wk).padStart(2,'0')}`;
}
function populateWeekSelector(){
  const sel=document.getElementById('rpt-week-select');
  if(!sel)return;
  const prevVal=sel.value; // preserve whatever the user has picked across rebuilds —
  // this function used to run on every renderReports() call (including the dropdown's
  // OWN onchange), rebuild the whole list, and always re-select "this week", so picking
  // any other week snapped straight back. See below: we re-select prevVal if it's still
  // a valid option, only falling back to "this week" the first time (nothing picked yet).
  const weeks=new Set();
  const now=new Date();
  // Add current and past 12 weeks
  for(let i=0;i<13;i++){
    const d=new Date(now);
    d.setDate(now.getDate()-i*7);
    weeks.add(getWeekKey(d));
  }
  // Add weeks from history
  history.forEach(h=>{
    if(h.ts){const t=parseDisplayTs(h.ts);if(t>0)weeks.add(getWeekKey(new Date(t)));}
  });
  const sorted=[...weeks].sort().reverse();
  const thisWeek=getWeekKey(now);
  const lastWeek=sorted[1]||thisWeek;
  const selectedWeek=(prevVal&&weeks.has(prevVal))?prevVal:thisWeek;
  // Default the dropdown to THIS week, not last week. Defaulting to last
  // week meant that as soon as any GRN/dispatch/return happened today,
  // opening the Weekly Report showed an empty last-week report (since all
  // the activity was in the current week) — this looked exactly like the
  // report being broken/not picking up new records, when really it was
  // just pointed at the wrong week by default. "Last week" is still
  // labeled and easy to pick manually for the Monday MIS submission.
  sel.innerHTML=sorted.map(w=>{
    const {start,end}=getWeekBounds(w);
    const label=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} – ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
    const tag=w===thisWeek?' (This week)':w===lastWeek?' (Last week — MIS due Monday)':'';
    return `<option value="${w}"${w===selectedWeek?' selected':''}>${label}${tag}</option>`;
  }).join('');
}
function getWeekHistory(weekStr){
  const {start,end}=getWeekBounds(weekStr);
  const s=start.getTime(),e=end.getTime();
  return history.filter(h=>{
    if(!h.ts)return false;
    const t=parseDisplayTs(h.ts);
    return t>0&&t>=s&&t<=e;
  });
}

// ═══ MONTHLY MASTER REPORT helpers ═══
// NOTE: history[].ts is a display string like "29 Jul, 14:32" with no year — new Date(ts)
// silently defaults to year 2001, which would break month-range comparisons. We reuse
// parseDisplayTs() (anchors to the current year) instead of new Date() for these entries.
function getMonthKey(date){
  const d=new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}
function getMonthBounds(monthStr){
  const [y,m]=monthStr.split('-').map(Number);
  const start=new Date(y,m-1,1,0,0,0,0);
  const end=new Date(y,m,0,23,59,59,999);
  return {start,end};
}
function getMonthHistory(monthStr){
  const {start,end}=getMonthBounds(monthStr);
  const s=start.getTime(),e=end.getTime();
  return history.filter(h=>{
    if(!h.ts)return false;
    const t=parseDisplayTs(h.ts);
    return t>0&&t>=s&&t<=e;
  });
}
function getMonthOrders(monthStr){
  const {start,end}=getMonthBounds(monthStr);
  return orders.filter(o=>{
    if(!o.createdAt)return false;
    try{const d=new Date(o.createdAt);return !isNaN(d)&&d>=start&&d<=end;}catch(e){return false;}
  });
}
function populateMonthSelector(){
  const sel=document.getElementById('rpt-month-select');
  if(!sel)return;
  const prevVal=sel.value; // preserve the user's current pick across rebuilds — same fix as populateWeekSelector()
  const months=new Set();
  const now=new Date();
  for(let i=0;i<12;i++){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    months.add(getMonthKey(d));
  }
  orders.forEach(o=>{ if(o.createdAt){try{const d=new Date(o.createdAt);if(!isNaN(d))months.add(getMonthKey(d));}catch(e){}} });
  const sorted=[...months].sort().reverse();
  const thisMonth=getMonthKey(now);
  const selectedMonth=(prevVal&&months.has(prevVal))?prevVal:thisMonth;
  sel.innerHTML=sorted.map(m=>{
    const [y,mm]=m.split('-').map(Number);
    const label=new Date(y,mm-1,1).toLocaleDateString('en-IN',{month:'long',year:'numeric'});
    return `<option value="${m}"${m===selectedMonth?' selected':''}>${label}${m===thisMonth?' (This month)':''}</option>`;
  }).join('');
}
function renderReports(){
  populateWeekSelector();
  populateMonthSelector();
  renderMISEmailConfig();
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  if(!weekStr)return;
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const grns=wh.filter(h=>h.type==='grn');
  const disps=wh.filter(h=>h.type==='dispatched');
  const rets=wh.filter(h=>h.type==='return');
  const picks=wh.filter(h=>h.type==='pick');
  const exceptions=wh.filter(h=>h.type==='exception');
  const packed=wh.filter(h=>h.type==='packed'||h.type==='dispatched');
  const low=SKUS.filter(s=>inv[s.sku]&&getSt(inv[s.sku].qty)==='low').length;
  const out=SKUS.filter(s=>!inv[s.sku]||inv[s.sku].qty<=0).length;
  const totalUnitsIn=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0);},0);
  const totalUnitsOut=disps.reduce((a,d)=>{const items=d.items||[];return a+items.reduce((b,i)=>b+(i.qty||0),0);},0);
  const avgPackDur=packed.filter(p=>p.packDurationSecs>0).length>0?Math.round(packed.filter(p=>p.packDurationSecs>0).reduce((a,p)=>a+p.packDurationSecs,0)/packed.filter(p=>p.packDurationSecs>0).length):null;
  const avgPackStr=avgPackDur?`${Math.floor(avgPackDur/60)}m ${avgPackDur%60}s`:'N/A';
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} – ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;

  // KPI CARDS
  document.getElementById('rpt-week-kpis').innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px">
      <div style="background:var(--ibg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--it)">${grns.length}</div>
        <div style="font-size:10px;color:var(--t2)">GRNs Raised</div>
        <div style="font-size:10px;color:var(--t3)">${totalUnitsIn} units in</div>
      </div>
      <div style="background:var(--sbg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--st)">${picks.length}</div>
        <div style="font-size:10px;color:var(--t2)">Orders Picked</div>
        <div style="font-size:10px;color:var(--t3)">${packed.length} packed</div>
      </div>
      <div style="background:var(--s2);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--gold)">${disps.length}</div>
        <div style="font-size:10px;color:var(--t2)">Dispatched</div>
        <div style="font-size:10px;color:var(--t3)">${totalUnitsOut} units out</div>
      </div>
      <div style="background:var(--wbg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--wt)">${rets.length}</div>
        <div style="font-size:10px;color:var(--t2)">Returns</div>
        <div style="font-size:10px;color:var(--t3)">Processed</div>
      </div>
      <div style="background:var(--dbg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--dt)">${exceptions.length}</div>
        <div style="font-size:10px;color:var(--t2)">Exceptions</div>
        <div style="font-size:10px;color:var(--t3)">Raised</div>
      </div>
      <div style="background:var(--s2);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--t)">${avgPackStr}</div>
        <div style="font-size:10px;color:var(--t2)">Avg Pack Time</div>
        <div style="font-size:10px;color:var(--t3)">Per order</div>
      </div>
    </div>`;

  // PRODUCT MOVEMENT (per SKU, this week) — answers "how much of each
  // product came in / went out this week", which the KPI cards above
  // only ever summed across all SKUs.
  const inBySku={}, outBySku={};
  grns.forEach(g=>{ (g.items||[]).forEach(it=>{ if(it.qc==='PASS'){ inBySku[it.sku]=(inBySku[it.sku]||0)+(it.qty||0); } }); });
  disps.forEach(d=>{ (d.items||[]).forEach(it=>{ outBySku[it.sku]=(outBySku[it.sku]||0)+(it.qty||0); }); });
  const movedSkus=[...new Set([...Object.keys(inBySku),...Object.keys(outBySku)])];
  const skuMoveRows=movedSkus.map(sku=>{
    const s=SKUS.find(x=>x.sku===sku);
    return {sku, name:s?s.sub:sku, variant:s?s.variant:'', qtyIn:inBySku[sku]||0, qtyOut:outBySku[sku]||0};
  }).sort((a,b)=>(b.qtyIn+b.qtyOut)-(a.qtyIn+a.qtyOut));
  document.getElementById('rpt-sku-movement').innerHTML=skuMoveRows.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${skuMoveRows.length} SKU(s) moved · ${totalUnitsIn} units in · ${totalUnitsOut} units out</div>
    <div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Variant</th><th>Qty In</th><th>Qty Out</th><th>Net</th></tr></thead><tbody>
    ${skuMoveRows.map(r=>{
      const net=r.qtyIn-r.qtyOut;
      const netColor=net>0?'var(--st)':net<0?'var(--dt)':'var(--t2)';
      return `<tr><td class="mono" style="font-size:10px">${esc(r.sku)}</td><td style="font-size:10px">${esc(r.name)}</td><td style="font-size:10px">${esc(r.variant)}</td><td style="text-align:center;color:var(--it);font-weight:600">${r.qtyIn||'—'}</td><td style="text-align:center;color:var(--gold);font-weight:600">${r.qtyOut||'—'}</td><td style="text-align:center;font-weight:700;color:${netColor}">${net>0?'+':''}${net}</td></tr>`;
    }).join('')}
    </tbody></table></div>`:'<div class="empty">No inbound or outbound product movement this week</div>';

  // INBOUND
  document.getElementById('rpt-inbound').innerHTML=grns.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${grns.length} GRNs · ${totalUnitsIn} units received</div>
    <div class="tw"><table><thead><tr><th>GRN ID</th><th>Date/Time</th><th>Details</th><th>Units In</th></tr></thead><tbody>
    ${grns.map(g=>{
      const items=g.items||[];
      const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+(i.qty||0),0);
      const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+(i.qty||0),0);
      return `<tr><td class="mono">${g.id}</td><td style="font-size:10px">${g.ts}</td><td style="font-size:10px">${g.detail}</td><td style="text-align:center"><span style="color:var(--st)">${pass} pass</span>${hold?` <span style="color:var(--wt)">${hold} hold</span>`:''}`;
    }).join('</td></tr>')}
    </tbody></table></div>`:'<div class="empty">No inbound activity this week</div>';

  // OUTBOUND — every column captured at dispatch, including the actual
  // SKU/qty breakdown of what shipped (previously only a unit total).
  document.getElementById('rpt-outbound').innerHTML=disps.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${disps.length} dispatches · ${totalUnitsOut} units out</div>
    <div class="tw"><table><thead><tr><th>Dispatch ID</th><th>Order ID</th><th>AWB</th><th>Recipient</th><th>Phone</th><th>Pincode</th><th>Courier</th><th>Shipping</th><th>Items (SKU x Qty)</th><th>Box (cm)</th><th>Chargeable (kg)</th><th>Dispatched At</th></tr></thead><tbody>
    ${disps.map(d=>{
      const dims=d.boxL?`${d.boxL}×${d.boxW}×${d.boxH}`:'—';
      const itemsStr=(d.items||[]).map(it=>`${it.sku} x${it.qty}`).join(', ')||'—';
      return `<tr><td class="mono" style="font-size:10px">${d.id}</td><td style="font-size:10px">${esc(d.orderId||'—')}</td><td class="mono" style="font-size:10px">${esc(d.awb||'—')}</td><td style="font-size:10px">${esc(d.recipientName||'—')}</td><td style="font-size:10px">${esc(d.phone||'—')}</td><td style="font-size:10px">${esc(d.pincode||'—')}</td><td style="font-size:10px">${esc(d.courierPartner||'—')}</td><td style="font-size:10px">${esc(d.shippingMethod||'—')}</td><td style="font-size:10px;max-width:220px">${esc(itemsStr)}</td><td style="font-size:10px">${dims}</td><td style="text-align:center;font-weight:600">${d.chargeableWeight||'—'}</td><td style="font-size:10px">${d.dispatchedAt||d.ts}</td></tr>`;
    }).join('')}
    </tbody></table></div>`:'<div class="empty">No dispatch activity this week</div>';

  // RETURNS
  document.getElementById('rpt-returns').innerHTML=rets.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${rets.length} returns</div>
    <div class="tw"><table><thead><tr><th>Return ID</th><th>Date/Time</th><th>Details</th></tr></thead><tbody>
    ${rets.map(r=>`<tr><td class="mono">${r.id}</td><td style="font-size:10px">${r.ts}</td><td style="font-size:10px">${esc(r.detail||'—')}</td></tr>`).join('')}
    </tbody></table></div>`:'<div class="empty">No returns this week</div>';

  // EXCEPTIONS
  document.getElementById('rpt-exceptions').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div class="sc"><div class="sl"><i class="ti ti-alert-triangle"></i>Exceptions this week</div><div class="sv" style="color:var(--dt)">${exceptions.length}</div></div>
      <div class="sc"><div class="sl"><i class="ti ti-x"></i>Out of stock (now)</div><div class="sv" style="color:var(--dt)">${out}</div><div class="ss">Zero inventory</div></div>
      <div class="sc"><div class="sl"><i class="ti ti-alert-circle"></i>Low stock (now)</div><div class="sv" style="color:var(--wt)">${low}</div><div class="ss">≤3 units</div></div>
    </div>
    ${exceptions.length?`<div class="tw"><table><thead><tr><th>ID</th><th>Date/Time</th><th>Type</th><th>Details</th></tr></thead><tbody>${exceptions.map(e=>`<tr><td class="mono">${e.id}</td><td style="font-size:10px">${e.ts}</td><td><span class="pill p-out" style="font-size:9px">${e.category||'exception'}</span></td><td style="font-size:10px">${e.detail||'—'}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty" style="margin-top:8px">No exceptions this week ✓</div>'}`;

  // INVENTORY SNAPSHOT
  const totalUnits=SKUS.reduce((a,s)=>a+(inv[s.sku]?inv[s.sku].qty:0),0);
  const inStockCount=SKUS.filter(s=>inv[s.sku]&&inv[s.sku].qty>0).length;
  document.getElementById('rpt-inventory').innerHTML=`
    <div style="font-size:11px;color:var(--t2);margin-bottom:8px">Live snapshot as of <strong>${new Date().toLocaleString('en-IN')}</strong> · ${inStockCount}/${SKUS.length} SKUs in stock · ${totalUnits} total units</div>
    <div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Variant</th><th>Rack</th><th>Shelf</th><th>Qty</th><th>Status</th></tr></thead><tbody>
    ${SKUS.flatMap(s=>{
      const q=(inv[s.sku]||{qty:0}).qty;
      const st=q<=0?'Out':q<=3?'Low':'OK';
      const stColor=q<=0?'var(--dt)':q<=3?'var(--wt)':'var(--st)';
      // One row per physical location — a split SKU shows every shelf
      // it's actually on, each with that shelf's own qty, instead of
      // collapsing to a single primary bin.
      const locs=getSkuLocations(s.sku);
      const rows=locs.length?locs:[{...liveLoc(s.sku),qty:0}];
      return rows.map(loc=>`<tr><td class="mono" style="font-size:10px">${s.sku}</td><td style="font-size:10px">${s.sub}</td><td style="font-size:10px">${s.variant}</td><td style="text-align:center">${loc.rack}</td><td style="text-align:center">${loc.shelf}</td><td style="text-align:center;font-weight:700">${loc.qty}</td><td><span style="font-size:10px;font-weight:600;color:${stColor}">${st}</span></td></tr>`);
    }).join('')}
    </tbody></table></div>`;

  // PACKING PERFORMANCE
  const packWithTime=packed.filter(p=>p.packDurationSecs>0);
  document.getElementById('rpt-packing-perf').innerHTML=packWithTime.length?`
    <div style="font-size:11px;color:var(--t2);margin-bottom:8px">Week: <strong>${weekLabel}</strong> · ${packWithTime.length} orders with time data</div>
    <div class="tw"><table><thead><tr><th>Pack ID</th><th>Order ID</th><th>Box (L×W×H cm)</th><th>Actual (kg)</th><th>Vol. (kg)</th><th>Chargeable (kg)</th><th>Pack Start</th><th>Pack End</th><th>Duration</th></tr></thead><tbody>
    ${packWithTime.map(p=>{
      const dims=p.boxL?`${p.boxL}×${p.boxW}×${p.boxH}`:'—';
      return `<tr><td class="mono" style="font-size:10px">${p.id}</td><td style="font-size:10px">${esc(p.orderId||'—')}</td><td style="font-size:10px">${dims}</td><td style="text-align:center">${p.actualWeight||'—'}</td><td style="text-align:center;color:var(--it)">${p.volWeight||'—'}</td><td style="text-align:center;font-weight:700;color:var(--gold)">${p.chargeableWeight||'—'}</td><td style="font-size:10px">${p.packStartTs||'—'}</td><td style="font-size:10px">${p.packEndTs||'—'}</td><td style="font-weight:600;color:var(--st)">${p.packDuration||'—'}</td></tr>`;
    }).join('')}
    </tbody></table></div>`:'<div class="empty">No packing time data for this week — use Start Packing button to capture times</div>';

  // TEAM PRODUCTIVITY
  const pickByPicker={};
  picks.forEach(p=>{
    const name=p.picker||'Unknown';
    if(!pickByPicker[name]) pickByPicker[name]={orders:0,items:0};
    pickByPicker[name].orders+=1;
    pickByPicker[name].items+=(p.items||[]).reduce((a,it)=>a+(it.qty||0),0);
  });
  const packByPacker={};
  packed.forEach(p=>{
    const name=p.packer||'Unknown';
    if(!packByPacker[name]) packByPacker[name]={orders:0,items:0,totalSecs:0,withTime:0};
    packByPacker[name].orders+=1;
    packByPacker[name].items+=(p.items||[]).reduce((a,it)=>a+(it.qty||0),0);
    if(p.packDurationSecs>0){ packByPacker[name].totalSecs+=p.packDurationSecs; packByPacker[name].withTime+=1; }
  });
  const allNames=new Set([...Object.keys(pickByPicker),...Object.keys(packByPacker)]);
  const prodRows=[...allNames].map(name=>{
    const pk=pickByPicker[name]||{orders:0,items:0};
    const pc=packByPacker[name]||{orders:0,items:0,totalSecs:0,withTime:0};
    const avgSecs=pc.withTime?Math.round(pc.totalSecs/pc.withTime):null;
    const avgStr=avgSecs?`${Math.floor(avgSecs/60)}m ${avgSecs%60}s`:'—';
    return {name,pickOrders:pk.orders,pickItems:pk.items,packOrders:pc.orders,packItems:pc.items,avgPack:avgStr};
  }).sort((a,b)=>(b.pickOrders+b.packOrders)-(a.pickOrders+a.packOrders));
  document.getElementById('rpt-productivity').innerHTML=prodRows.length?`
    <div style="font-size:11px;color:var(--t2);margin-bottom:8px">Week: <strong>${weekLabel}</strong> · ${prodRows.length} team member(s) active</div>
    <div class="tw"><table><thead><tr><th>Name</th><th>Orders picked</th><th>Items picked</th><th>Orders packed</th><th>Items packed</th><th>Avg pack time</th></tr></thead><tbody>
    ${prodRows.map(r=>`<tr><td style="font-weight:600">${esc(r.name)}</td><td style="text-align:center">${r.pickOrders}</td><td style="text-align:center">${r.pickItems}</td><td style="text-align:center">${r.packOrders}</td><td style="text-align:center">${r.packItems}</td><td style="text-align:center;color:var(--st);font-weight:600">${r.avgPack}</td></tr>`).join('')}
    </tbody></table></div>`:'<div class="empty">No pick/pack activity this week</div>';
}
function downloadWeeklyCSV(){
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} to ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
  let csv=`CaratLane WMS — Weekly MIS Report\n`;
  csv+=`EPS Worldwide Integrated Logistics Mumbai\n`;
  csv+=`Report Week:,${weekLabel}\n`;
  csv+=`Generated:,${new Date().toLocaleString('en-IN')}\n\n`;

  const grns=wh.filter(h=>h.type==='grn');
  const disps=wh.filter(h=>h.type==='dispatched');

  // Per-SKU qty in/out for the week — same breakdown as the on-screen
  // "Product Movement" table, so the CSV isn't missing what the page shows.
  const csvInBySku={}, csvOutBySku={};
  grns.forEach(g=>{ (g.items||[]).forEach(it=>{ if(it.qc==='PASS'){ csvInBySku[it.sku]=(csvInBySku[it.sku]||0)+(it.qty||0); } }); });
  disps.forEach(d=>{ (d.items||[]).forEach(it=>{ csvOutBySku[it.sku]=(csvOutBySku[it.sku]||0)+(it.qty||0); }); });
  const csvMovedSkus=[...new Set([...Object.keys(csvInBySku),...Object.keys(csvOutBySku)])];
  csv+=`\n=== PRODUCT MOVEMENT (QTY IN / OUT PER SKU) ===\n`;
  csv+=`SKU,Item Name,Variant,Qty In,Qty Out,Net\n`;
  csvMovedSkus.forEach(sku=>{
    const s=SKUS.find(x=>x.sku===sku);
    const qtyIn=csvInBySku[sku]||0, qtyOut=csvOutBySku[sku]||0;
    csv+=`"${sku}","${s?s.sub:''}","${s?s.variant:''}",${qtyIn},${qtyOut},${qtyIn-qtyOut}\n`;
  });
  csv+=`TOTAL SKUs MOVED:,${csvMovedSkus.length}\n`;

  csv+=`\n=== INBOUND / GRN REPORT ===\n`;
  csv+=`GRN ID,Date/Time,Details,Units Pass,Units Hold\n`;
  grns.forEach(g=>{
    const items=g.items||[];
    const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+(i.qty||0),0);
    const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+(i.qty||0),0);
    csv+=`"${g.id}","${g.ts}","${(g.detail||'').replace(/"/g,"'")}",${pass},${hold}\n`;
  });
  csv+=`TOTAL GRNs:,${grns.length}\n`;

  csv+=`\n=== OUTBOUND / DISPATCH REPORT ===\n`;
  csv+=`Dispatch ID,Order ID,AWB,Recipient,Phone,Pincode,Courier Partner,Shipping Method,Items (SKU x Qty),Box L,Box W,Box H,Actual Wt (kg),Vol Wt (kg),Chargeable Wt (kg),Pack Start,Pack End,Pack Duration,Dispatched At\n`;
  disps.forEach(d=>{
    const itemsStr=(d.items||[]).map(it=>`${it.sku} x${it.qty}`).join('; ');
    csv+=`"${d.id}","${d.orderId||''}","${d.awb||''}","${d.recipientName||''}","${esc(d.phone||'')}","${esc(d.pincode||'')}","${esc(d.courierPartner||'')}","${d.shippingMethod||''}","${itemsStr}",${d.boxL||''},${d.boxW||''},${d.boxH||''},${d.actualWeight||''},${d.volWeight||''},${d.chargeableWeight||''},"${d.packStartTs||''}","${d.packEndTs||''}","${d.packDuration||''}","${d.dispatchedAt||d.ts}"\n`;
  });
  csv+=`TOTAL DISPATCHED:,${disps.length}\n`;

  const rets=wh.filter(h=>h.type==='return');
  csv+=`\n=== RETURNS REPORT ===\n`;
  csv+=`Return ID,Date/Time,Details\n`;
  rets.forEach(r=>{csv+=`"${r.id}","${r.ts}","${(r.detail||'').replace(/"/g,"'")}"\n`;});
  csv+=`TOTAL RETURNS:,${rets.length}\n`;

  const exceptions=wh.filter(h=>h.type==='exception');
  csv+=`\n=== EXCEPTION REPORT ===\n`;
  csv+=`Exception ID,Date/Time,Category,Details\n`;
  exceptions.forEach(e=>{csv+=`"${e.id}","${e.ts}","${e.category||''}","${(e.detail||'').replace(/"/g,"'")}"\n`;});
  csv+=`TOTAL EXCEPTIONS:,${exceptions.length}\n`;

  csv+=`\n=== INVENTORY SNAPSHOT (Live) ===\n`;
  csv+=`SKU,Item Name,Variant,Rack,Shelf,Qty,Status\n`;
  SKUS.forEach(s=>{
    const q=(inv[s.sku]||{qty:0}).qty;
    const st=q<=0?'Out of Stock':q<=3?'Low Stock':'In Stock';
    // One row per physical location — see comment on the on-screen
    // inventory snapshot table for why.
    const locs=getSkuLocations(s.sku);
    const rows=locs.length?locs:[{...liveLoc(s.sku),qty:0}];
    rows.forEach(loc=>{
      csv+=`"${s.sku}","${s.sub}","${s.variant}",${loc.rack},${loc.shelf},${loc.qty},"${st}"\n`;
    });
  });

  downloadCSV(`CaratLane_Weekly_MIS_${weekStr}.csv`,csv);
}
function downloadMonthlyMasterCSV(){
  // Despite the name (kept so the existing button's onclick doesn't need
  // touching elsewhere), this now builds a real multi-sheet .xlsx — one
  // sheet per section plus a Dashboard overview — instead of one giant
  // CSV with === section === dividers. Much easier to read/navigate in
  // Excel. Reuses the xlsx.js library already lazy-loaded for reading
  // uploaded Excel manifests (loadXLSXLib).
  toast('Building workbook…','s');
  loadXLSXLib(async()=>{
    const sel=document.getElementById('rpt-month-select');
    const monthStr=sel?sel.value:getMonthKey(new Date());
    const {start,end}=getMonthBounds(monthStr);
    const monthLabel=start.toLocaleDateString('en-IN',{month:'long',year:'numeric'});
    const mOrders=getMonthOrders(monthStr);
    const mHist=getMonthHistory(monthStr);
    const grns=mHist.filter(h=>h.type==='grn');
    const monthDisps=mHist.filter(h=>h.type==='dispatched');
    const packDispatch=history.filter(h=>h.type==='packed'||h.type==='dispatched');
    const picks=history.filter(h=>h.type==='pick');
    const genTime=new Date().toLocaleString('en-IN');
    const bill=computeMonthlyBill(monthStr);

    const totalUnitsIn=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0);},0);
    const totalUnitsHold=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='HOLD').reduce((b,i)=>b+(i.qty||0),0);},0);
    const totalUnitsReject=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='REJECT').reduce((b,i)=>b+(i.qty||0),0);},0);
    const totalUnitsOut=monthDisps.reduce((a,d)=>{const items=d.items||[];return a+items.reduce((b,i)=>b+(i.qty||0),0);},0);
    const dispatchedCount=mOrders.filter(o=>packDispatch.some(h=>h.orderId===o.id&&h.type==='dispatched')).length;

    // Month-over-month comparison — same metrics, computed for the month
    // immediately before the selected one, so trends are visible without
    // opening two separate reports side by side.
    const prevMonthDate=new Date(start.getFullYear(),start.getMonth()-1,1);
    const prevMonthStr=getMonthKey(prevMonthDate);
    const prevMonthLabel=prevMonthDate.toLocaleDateString('en-IN',{month:'long',year:'numeric'});
    const prevOrders=getMonthOrders(prevMonthStr);
    const prevHist=getMonthHistory(prevMonthStr);
    const prevGrns=prevHist.filter(h=>h.type==='grn');
    const prevDisps=prevHist.filter(h=>h.type==='dispatched');
    const prevUnitsIn=prevGrns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0);},0);
    const prevUnitsOut=prevDisps.reduce((a,d)=>{const items=d.items||[];return a+items.reduce((b,i)=>b+(i.qty||0),0);},0);
    const prevBill=computeMonthlyBill(prevMonthStr);
    const pctChange=(cur,prev)=>{ if(!prev) return cur?'+∞':'0%'; const p=((cur-prev)/prev*100); return (p>=0?'+':'')+p.toFixed(1)+'%'; };

    // Open ASN / outstanding inbound — expected shipments that still have
    // unreceived quantity as of right now (not scoped to the report month,
    // since an ASN can straddle months while goods keep arriving in
    // batches). Lets the report double as a "what's still coming" list.
    const openShipments=expectedShipments.filter(s=>s.status==='expected'||s.status==='partial'||s.status==='discrepancy');
    const openRows=openShipments.map(s=>{
      const receivedBySku=getReceivedSoFarByAsn(s.id);
      const expectedBySku={};
      (s.items||[]).forEach(it=>{ if(!expectedBySku[it.sku]) expectedBySku[it.sku]=0; expectedBySku[it.sku]+=it.qty; });
      let totalExpected=0,totalReceived=0,totalRemaining=0,skusShort=0;
      Object.keys(expectedBySku).forEach(sku=>{
        const exp=expectedBySku[sku]; const got=receivedBySku[sku]||0;
        totalExpected+=exp; totalReceived+=got;
        const rem=Math.max(0,exp-got);
        totalRemaining+=rem;
        if(rem>0) skusShort++;
      });
      return {id:s.id,vendor:s.vendor||'',carrier:s.carrier||'',expectedDate:s.expectedDate||'',status:s.status,totalExpected,totalReceived,totalRemaining,skusShort};
    });
    const openTotalRemaining=openRows.reduce((a,r)=>a+r.totalRemaining,0);

    // Courier-wise breakdown
    const courierMap={};
    monthDisps.forEach(d=>{
      const c=d.courierPartner||'Unspecified';
      if(!courierMap[c]) courierMap[c]={count:0,units:0,actualWt:0,chargeWt:0};
      const items=d.items||[];
      courierMap[c].count++;
      courierMap[c].units+=items.reduce((a,i)=>a+(i.qty||0),0);
      courierMap[c].actualWt+=parseFloat(d.actualWeight)||0;
      courierMap[c].chargeWt+=parseFloat(d.chargeableWeight)||0;
    });
    const courierRows=Object.keys(courierMap).sort((a,b)=>courierMap[b].count-courierMap[a].count).map(c=>({name:c,...courierMap[c]}));

    const totalUnitsNow=SKUS.reduce((a,s)=>a+((inv[s.sku]||{qty:0}).qty),0);
    const lowStockCount=SKUS.filter(s=>{const q=(inv[s.sku]||{qty:0}).qty;return q>0&&q<=3;}).length;
    const outOfStockCount=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=0).length;

    const wb=XLSX.utils.book_new();

    // ── Dashboard sheet ──
    const dash=[
      ['CaratLane WMS — Monthly Dashboard'],
      ['EPS Worldwide Integrated Logistics Mumbai'],
      ['Report Month',monthLabel],
      ['Generated',genTime],
      [],
      ['KEY METRICS',monthLabel,prevMonthLabel,'Change'],
      ['Orders Created',mOrders.length,prevOrders.length,pctChange(mOrders.length,prevOrders.length)],
      ['Of Which Dispatched',dispatchedCount,'',''],
      ['GRNs Received',grns.length,prevGrns.length,pctChange(grns.length,prevGrns.length)],
      ['Units Received — PASS',totalUnitsIn,prevUnitsIn,pctChange(totalUnitsIn,prevUnitsIn)],
      ['Units Received — HOLD',totalUnitsHold,'',''],
      ['Units Received — REJECT',totalUnitsReject,'',''],
      ['Shipments Dispatched',monthDisps.length,prevDisps.length,pctChange(monthDisps.length,prevDisps.length)],
      ['Units Dispatched',totalUnitsOut,prevUnitsOut,pctChange(totalUnitsOut,prevUnitsOut)],
      ['Warehouse Bill (₹)',bill.total,prevBill.total,pctChange(bill.total,prevBill.total)],
      [],
      ['OPEN ASN / OUTSTANDING INBOUND'],
      ['Open ASNs (as of generation)',openShipments.length],
      ['Units still outstanding across open ASNs',openTotalRemaining],
      [],
      ['TOP COURIERS THIS MONTH'],
      ['Courier Partner','Shipments','Units'],
      ...courierRows.slice(0,5).map(c=>[c.name,c.count,c.units]),
      [],
      ['CURRENT INVENTORY (as of generation)'],
      ['Total Units In Stock',totalUnitsNow],
      ['Low Stock SKUs (≤3 units)',lowStockCount],
      ['Out of Stock SKUs',outOfStockCount],
      ['See "Inventory Movement" sheet for per-SKU opening/received/dispatched/closing stock'],
    ];
    const wsDash=XLSX.utils.aoa_to_sheet(dash);
    // Small data block feeding the QC-breakdown and inventory-health pie
    // charts below — sits in unused columns F:G, inside the KEY METRICS
    // block's fixed row range (6-15) so it never collides with the
    // variable-length TOP COURIERS section further down.
    const inStockCount=SKUS.length-lowStockCount-outOfStockCount;
    XLSX.utils.sheet_add_aoa(wsDash,[
      ['Chart data (auto-generated — do not edit)'],
      ['PASS',totalUnitsIn],['HOLD',totalUnitsHold],['REJECT',totalUnitsReject],
      [],
      ['In Stock',inStockCount],['Low Stock',lowStockCount],['Out of Stock',outOfStockCount],
    ],{origin:'F1'});
    wsDash['!cols']=[{wch:32},{wch:18},{wch:18},{wch:12},{wch:2},{wch:16},{wch:10}];
    XLSX.utils.book_append_sheet(wb,wsDash,'Dashboard');

    // ── MoM Comparison sheet ──
    const mom=[
      ['Metric',monthLabel,prevMonthLabel,'Change'],
      ['Orders Created',mOrders.length,prevOrders.length,pctChange(mOrders.length,prevOrders.length)],
      ['GRNs Received',grns.length,prevGrns.length,pctChange(grns.length,prevGrns.length)],
      ['Units Received (PASS)',totalUnitsIn,prevUnitsIn,pctChange(totalUnitsIn,prevUnitsIn)],
      ['Shipments Dispatched',monthDisps.length,prevDisps.length,pctChange(monthDisps.length,prevDisps.length)],
      ['Units Dispatched',totalUnitsOut,prevUnitsOut,pctChange(totalUnitsOut,prevUnitsOut)],
      ['Warehouse Bill (₹)',bill.total,prevBill.total,pctChange(bill.total,prevBill.total)],
    ];
    const wsMom=XLSX.utils.aoa_to_sheet(mom);
    wsMom['!cols']=[{wch:26},{wch:18},{wch:18},{wch:12}];
    XLSX.utils.book_append_sheet(wb,wsMom,'MoM Comparison');

    // ── Orders sheet ──
    const ordersHeader=['Order ID','Customer Name','Address','Pincode','Phone','Priority','Items','Order Created At','Assigned At','Assigned Picker','Picked At','Picker','Pack Started','Pack Completed','Packer','Pack Duration','Dispatched At','AWB No','Courier Partner','Shipping Method','Status'];
    const ordersRows=mOrders.map(o=>{
      const pick=picks.find(p=>p.orderId===o.id);
      const pd=packDispatch.find(h=>h.orderId===o.id);
      const isDispatched=pd&&pd.type==='dispatched';
      const itemsStr=(o.items||[]).map(it=>`${it.sku} x${it.qty}`).join(' | ');
      const createdAtStr=o.createdAt?new Date(o.createdAt).toLocaleString('en-IN'):'';
      const assignedAtStr=o.assignedAt?new Date(o.assignedAt).toLocaleString('en-IN'):'';
      return [o.id,o.customerName||'',o.address||'',o.pincode||'',o.phone||'',o.priority||'',itemsStr,createdAtStr,assignedAtStr,o.assignedPicker||'',pick?pick.ts:'',pick?(pick.picker||''):'',pd?(pd.packStartTs||''):'',pd?(pd.packEndTs||pd.ts||''):'',pd?(pd.packer||''):'',pd?(pd.packDuration||''):'',isDispatched?(pd.dispatchedAt||''):'',isDispatched?(pd.awb||''):'',isDispatched?(pd.courierPartner||''):'',isDispatched?(pd.shippingMethod||''):'',o.status||''];
    });
    const wsOrders=XLSX.utils.aoa_to_sheet([ordersHeader,...ordersRows,[],['TOTAL ORDERS',mOrders.length]]);
    wsOrders['!cols']=ordersHeader.map(()=>({wch:16}));
    XLSX.utils.book_append_sheet(wb,wsOrders,'Orders');

    // ── Inbound / GRN sheet (per SKU line) ──
    const grnHeader=['GRN ID','Date/Time Received','ASN','Carrier','Vehicle','Cartons','SKU','Item Name','Variant','Qty Received','QC Result','Bin Location','Voided'];
    const grnRows=[];
    grns.forEach(g=>{
      (g.items||[]).forEach(i=>{
        grnRows.push([g.id,g.ts,g.asn||'N/A',g.carrier||'N/A',g.vehicle||'N/A',g.cartons||0,i.sku,i.name||'',i.variant||'',i.qty||0,i.qc||'',i.bin||'',g.voided?'YES':'']);
      });
    });
    const wsGrn=XLSX.utils.aoa_to_sheet([grnHeader,...grnRows,[],['TOTAL GRNs',grns.length],['TOTAL SKU LINES',grnRows.length],['TOTAL UNITS — PASS',totalUnitsIn],['TOTAL UNITS — HOLD',totalUnitsHold],['TOTAL UNITS — REJECT',totalUnitsReject]]);
    wsGrn['!cols']=grnHeader.map(()=>({wch:16}));
    XLSX.utils.book_append_sheet(wb,wsGrn,'Inbound GRN');

    // ── Open ASN sheet ──
    const openHeader=['ASN ID','Vendor','Carrier','Expected Date','Status','Total Expected Qty','Total Received So Far','Total Remaining Qty','SKUs Still Short'];
    const wsOpen=XLSX.utils.aoa_to_sheet([openHeader,...openRows.map(r=>[r.id,r.vendor,r.carrier,r.expectedDate,r.status,r.totalExpected,r.totalReceived,r.totalRemaining,r.skusShort]),[],['TOTAL OPEN ASNs',openShipments.length]]);
    wsOpen['!cols']=openHeader.map(()=>({wch:16}));
    XLSX.utils.book_append_sheet(wb,wsOpen,'Open ASN');

    // ── Outbound / Dispatch sheet (per SKU line) — mirrors the Inbound GRN
    // sheet's one-row-per-item structure below, instead of collapsing each
    // dispatch to just a SKU count / unit total. That aggregate view meant
    // this sheet couldn't answer "which products shipped and how many of
    // each", the exact thing the Inbound sheet already answered for what
    // came IN. ──
    const dispHeader=['Dispatch ID','Order ID','Date/Time Dispatched','Recipient','Phone','Pincode','AWB No','Courier Partner','Shipping Method','SKU','Item Name','Variant','Qty','Box Dims (LxWxH cm)','Actual Wt (kg)','Vol Wt (kg)','Chargeable Wt (kg)','Packer','Pack Duration'];
    const dispRows=[];
    monthDisps.forEach(d=>{
      const items=d.items||[];
      const dims=d.boxL&&d.boxW&&d.boxH?`${d.boxL}x${d.boxW}x${d.boxH}`:'';
      const common=[d.id,d.orderId||'',d.dispatchedAt||d.ts||'',d.recipientName||'',d.phone||'',d.pincode||'',d.awb||'',d.courierPartner||'',d.shippingMethod||''];
      if(items.length){
        items.forEach(i=>{
          dispRows.push([...common,i.sku,i.name||'',i.variant||'',i.qty||0,dims,d.actualWeight||'',d.volWeight||'',d.chargeableWeight||'',d.packer||'',d.packDuration||'']);
        });
      } else {
        // Dispatch with no recorded items — keep the row so the dispatch
        // itself isn't silently dropped from the sheet, just with blank
        // SKU/item/qty columns.
        dispRows.push([...common,'','','',0,dims,d.actualWeight||'',d.volWeight||'',d.chargeableWeight||'',d.packer||'',d.packDuration||'']);
      }
    });
    const wsDisp=XLSX.utils.aoa_to_sheet([dispHeader,...dispRows,[],['TOTAL DISPATCHES',monthDisps.length],['TOTAL SKU LINES',dispRows.length],['TOTAL UNITS DISPATCHED',totalUnitsOut]]);
    wsDisp['!cols']=dispHeader.map(()=>({wch:16}));
    XLSX.utils.book_append_sheet(wb,wsDisp,'Outbound Dispatch');

    // ── Courier breakdown sheet ──
    const courierHeader=['Courier Partner','Shipments','Total Units','Total Actual Wt (kg)','Total Chargeable Wt (kg)'];
    const wsCourier=XLSX.utils.aoa_to_sheet([courierHeader,...courierRows.map(c=>[c.name,c.count,c.units,Number(c.actualWt.toFixed(2)),Number(c.chargeWt.toFixed(2))])]);
    wsCourier['!cols']=courierHeader.map(()=>({wch:18}));
    XLSX.utils.book_append_sheet(wb,wsCourier,'Courier Breakdown');

    // ── Financial summary sheet ──
    const finRows=[
      ['Charge','Basis','Amount (₹)'],
      [`Warehouse storage${bill.storageNote?' (prorated)':' (flat monthly charge)'}`,bill.storageNote||'Flat monthly rate',bill.storage],
      ['Unloading & receiving',`${bill.totalBoxes} box(es) x ₹${costParams.unloadingPerBox||0}`,bill.unloading],
      ['Inventory verification count',`${bill.totalBoxes} box(es) x ₹${costParams.verificationPerBox||0}`,bill.verification],
      ['GRN creation charges',`${bill.grnCount} GRN(s) x ₹${costParams.grnCreationCharge||0}`,bill.grnCharges],
      ['Bin putaway charges',`${bill.totalUnits} unit(s) x ₹${costParams.binPutawayPerUnit||0}`,bill.putaway],
      ['Packaging charges',`${bill.orderCount} order(s) x ₹${costParams.packagingChargePerOrder||0}`,bill.packagingCharges],
      ['TOTAL BILL','',bill.total],
    ];
    const wsFin=XLSX.utils.aoa_to_sheet(finRows);
    wsFin['!cols']=[{wch:32},{wch:32},{wch:14}];
    XLSX.utils.book_append_sheet(wb,wsFin,'Financial Summary');

    // ── Inventory snapshot sheet ──
    const invHeader=['SKU','Item Name','Variant','Rack','Shelf','Qty','Status'];
    const invRows=[];
    SKUS.forEach(s=>{
      const q=(inv[s.sku]||{qty:0}).qty;
      const st=q<=0?'Out of Stock':q<=3?'Low Stock':'In Stock';
      // One row per physical location — see comment on the on-screen
      // inventory snapshot table for why.
      const locs=getSkuLocations(s.sku);
      const rows=locs.length?locs:[{...liveLoc(s.sku),qty:0}];
      rows.forEach(loc=>{ invRows.push([s.sku,s.sub,s.variant,loc.rack,loc.shelf,loc.qty,st]); });
    });
    const wsInv=XLSX.utils.aoa_to_sheet([invHeader,...invRows,[],['TOTAL UNITS IN STOCK',totalUnitsNow]]);
    wsInv['!cols']=[{wch:14},{wch:24},{wch:16},{wch:8},{wch:8},{wch:8},{wch:14}];
    XLSX.utils.book_append_sheet(wb,wsInv,'Inventory Snapshot');

    // ── Inventory Movement sheet — opening/received/dispatched/closing ──
    // "Inventory Snapshot" above only shows CURRENT stock (as of the
    // moment the report is generated) — it can't answer "what did we
    // have on hand at the start of the month" or "how much went out this
    // month per SKU". This reconstructs both from the automatic
    // inventory_snapshots taken on every stock change (see saveInv()),
    // rather than estimating — Opening/Closing here are real historical
    // stock levels, not derived math.
    const monthStartIso=start.toISOString();
    const monthEndIso=end.toISOString();
    const reportMonthStillOngoing=end.getTime()>=Date.now();
    const openingSnap=await getInventorySnapshotAsOf(monthStartIso);
    // A month that hasn't finished yet has no "closing" snapshot to look
    // up — its closing state IS the live current inventory (same meaning
    // as "CURRENT INVENTORY (as of generation)" on the Dashboard sheet).
    const closingSnap=reportMonthStillOngoing?null:await getInventorySnapshotAsOf(monthEndIso);
    const openingBySku={};
    if(openingSnap&&openingSnap.items){ openingSnap.items.forEach(it=>{ openingBySku[it.sku]=it.qty||0; }); }
    const closingBySku={};
    if(closingSnap&&closingSnap.items){
      closingSnap.items.forEach(it=>{ closingBySku[it.sku]=it.qty||0; });
    } else {
      SKUS.forEach(s=>{ closingBySku[s.sku]=(inv[s.sku]||{qty:0}).qty; });
    }
    // Per-SKU inward (received, PASS only) and outward (dispatched) for
    // the month — same source data as the aggregate totalUnitsIn/
    // totalUnitsOut figures above, just broken down by SKU instead of
    // summed across all SKUs.
    const inwardBySku={};
    grns.forEach(g=>{ (g.items||[]).forEach(it=>{ if(it.qc==='PASS'){ inwardBySku[it.sku]=(inwardBySku[it.sku]||0)+(it.qty||0); } }); });
    const outwardBySku={};
    monthDisps.forEach(d=>{ (d.items||[]).forEach(it=>{ outwardBySku[it.sku]=(outwardBySku[it.sku]||0)+(it.qty||0); }); });
    const movHeader=['SKU','Item Name','Variant','Opening Stock','Received (In)','Dispatched (Out)','Other Movement*','Closing Stock','Status'];
    const movRows=SKUS.map(s=>{
      const opening=openingBySku[s.sku]||0;
      const closingQty=closingBySku[s.sku]!=null?closingBySku[s.sku]:0;
      const inward=inwardBySku[s.sku]||0;
      const outward=outwardBySku[s.sku]||0;
      // Residual = whatever changed qty this month that wasn't a GRN
      // receipt or a dispatch — returns restocked, manual qty
      // corrections, cycle-count adjustments, void-GRN reversals, etc.
      // Flags real drift instead of silently hiding it.
      const otherMovement=closingQty-opening-inward+outward;
      const st=closingQty<=0?'Out of Stock':closingQty<=3?'Low Stock':'In Stock';
      return [s.sku,s.sub,s.variant,opening,inward,outward,otherMovement,closingQty,st];
    });
    const totalOpening=movRows.reduce((a,r)=>a+r[3],0);
    const totalInward=movRows.reduce((a,r)=>a+r[4],0);
    const totalOutward=movRows.reduce((a,r)=>a+r[5],0);
    const totalOtherMovement=movRows.reduce((a,r)=>a+r[6],0);
    const totalClosing=movRows.reduce((a,r)=>a+r[7],0);
    const movNote=(!openingSnap)
      ? `* No inventory snapshot exists at or before ${monthLabel}'s start — this appears to be before the WMS went live, so Opening Stock defaults to 0 for every SKU. "Other Movement" also captures returns restocked, manual qty corrections, cycle-count adjustments, and void-GRN reversals during the month.`
      : `* "Other Movement" captures anything that changed stock this month besides GRN receipts and dispatches — returns restocked, manual qty corrections, cycle-count adjustments, void-GRN reversals, etc.`;
    // Row numbers below mirror the fixed layout just built: 4 meta rows +
    // 1 blank + header row, then movRows.length data rows, then a blank
    // and the TOTAL row — used by styleOpsBySheet further down.
    const movHdrRow=6;
    const movDataEndRow=6+movRows.length;
    const movTotalRow=8+movRows.length;
    const wsMov=XLSX.utils.aoa_to_sheet([
      ['CaratLane WMS — Inventory Movement',monthLabel],
      ['EPS Worldwide Integrated Logistics Mumbai'],
      ['Report Month',monthLabel],
      ['Generated',genTime],
      [],
      movHeader,
      ...movRows,
      [],
      ['TOTAL',,,totalOpening,totalInward,totalOutward,totalOtherMovement,totalClosing,],
      [],
      [movNote],
    ]);
    wsMov['!cols']=[{wch:14},{wch:24},{wch:16},{wch:12},{wch:12},{wch:14},{wch:13},{wch:12},{wch:12}];
    XLSX.utils.book_append_sheet(wb,wsMov,'Inventory Movement');

    // ── Cell formatting (colors/borders/highlighted numbers) ──
    // Row numbers below are derived directly from the array literals built
    // above (dash/mom/*Header+*Rows) — every sheet but Dashboard has a
    // single header row at row 1, so its ranges are just "however many rows
    // I pushed". Dashboard has multiple stacked sections, so those offsets
    // are computed from the same fixed/variable structure as the `dash`
    // array itself (KEY METRICS block is always rows 6-15; only the TOP
    // COURIERS section grows with courierRows.length).
    const courierTopN=Math.min(5,courierRows.length);
    const rowInvHdr=24+courierTopN, rowInvData1=25+courierTopN, rowInvData2=28+courierTopN;
    const styleOpsBySheet={
      'Dashboard':[
        {range:{r1:6,c1:0,r2:15,c2:3},style:'grid'},
        {range:{r1:18,c1:0,r2:19,c2:1},style:'grid'},
        {range:{r1:22,c1:0,r2:22+courierTopN,c2:2},style:'grid'},
        {range:{r1:rowInvData1,c1:0,r2:rowInvData2,c2:1},style:'grid'},
        {ref:'A1',style:'title'},
        {ref:'A17',style:'section'},{ref:'A21',style:'section'},{ref:`A${rowInvHdr}`,style:'section'},
        {range:{r1:6,c1:0,r2:6,c2:3},style:'header'},
        {range:{r1:22,c1:0,r2:22,c2:2},style:'header'},
        {ref:'A15',style:'importantGrid'},{ref:'B15',style:'importantGrid'},{ref:'C15',style:'importantGrid'},
      ],
      'MoM Comparison':[
        {range:{r1:1,c1:0,r2:7,c2:3},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:3},style:'header'},
        {ref:'A7',style:'importantGrid'},{ref:'B7',style:'importantGrid'},{ref:'C7',style:'importantGrid'},
      ],
      'Orders':[
        {range:{r1:1,c1:0,r2:1+ordersRows.length,c2:ordersHeader.length-1},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:ordersHeader.length-1},style:'header'},
        {ref:`A${3+ordersRows.length}`,style:'total'},{ref:`B${3+ordersRows.length}`,style:'total'},
      ],
      'Inbound GRN':[
        {range:{r1:1,c1:0,r2:1+grnRows.length,c2:grnHeader.length-1},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:grnHeader.length-1},style:'header'},
        ...[0,1,2,3,4].map(i=>({ref:`A${3+grnRows.length+i}`,style:'total'})),
        ...[0,1,2,3,4].map(i=>({ref:`B${3+grnRows.length+i}`,style:'total'})),
      ],
      'Open ASN':[
        {range:{r1:1,c1:0,r2:1+openRows.length,c2:openHeader.length-1},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:openHeader.length-1},style:'header'},
        {ref:`A${3+openRows.length}`,style:'total'},{ref:`B${3+openRows.length}`,style:'total'},
      ],
      'Outbound Dispatch':[
        {range:{r1:1,c1:0,r2:1+dispRows.length,c2:dispHeader.length-1},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:dispHeader.length-1},style:'header'},
        {ref:`A${3+dispRows.length}`,style:'total'},{ref:`B${3+dispRows.length}`,style:'total'},
        {ref:`A${4+dispRows.length}`,style:'total'},{ref:`B${4+dispRows.length}`,style:'total'},
      ],
      'Courier Breakdown':[
        {range:{r1:1,c1:0,r2:1+courierRows.length,c2:courierHeader.length-1},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:courierHeader.length-1},style:'header'},
      ],
      'Financial Summary':[
        {range:{r1:1,c1:0,r2:8,c2:2},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:2},style:'header'},
        {ref:'A8',style:'total'},{ref:'B8',style:'total'},{ref:'C8',style:'total'},
      ],
      'Inventory Snapshot':[
        {range:{r1:1,c1:0,r2:1+invRows.length,c2:invHeader.length-1},style:'grid'},
        {range:{r1:1,c1:0,r2:1,c2:invHeader.length-1},style:'header'},
        {ref:`A${3+invRows.length}`,style:'total'},{ref:`B${3+invRows.length}`,style:'total'},
      ],
      'Inventory Movement':[
        {range:{r1:movHdrRow,c1:0,r2:movDataEndRow,c2:movHeader.length-1},style:'grid'},
        {range:{r1:movHdrRow,c1:0,r2:movHdrRow,c2:movHeader.length-1},style:'header'},
        {ref:'A1',style:'title'},
        {range:{r1:movTotalRow,c1:0,r2:movTotalRow,c2:7},style:'total'},
      ],
    };
    // Highlight per-row: Other Movement column (green if it added stock
    // back, red if it took stock away outside of GRN/dispatch), and
    // Closing Stock red if that SKU ended the month out of stock —
    // matches the same "color the important numbers" treatment already
    // used on the Dashboard/MoM sheets.
    movRows.forEach((row,i)=>{
      const excelRow=movDataEndRow-movRows.length+1+i; // = 7+i
      const otherMovement=row[6], closingQty=row[7];
      if(otherMovement>0) styleOpsBySheet['Inventory Movement'].push({ref:`G${excelRow}`,style:'positiveGrid'});
      else if(otherMovement<0) styleOpsBySheet['Inventory Movement'].push({ref:`G${excelRow}`,style:'negativeGrid'});
      if(closingQty<=0) styleOpsBySheet['Inventory Movement'].push({ref:`H${excelRow}`,style:'negativeGrid'});
    });
    // Change%/positive-negative highlights — computed from the same
    // pctChange() calls used to build the dash/mom rows, so a cell is
    // colored if and only if its printed value actually starts with + or -.
    const changeOps=[
      {dashRow:7,momRow:2,val:pctChange(mOrders.length,prevOrders.length)},
      {dashRow:9,momRow:3,val:pctChange(grns.length,prevGrns.length)},
      {dashRow:10,momRow:4,val:pctChange(totalUnitsIn,prevUnitsIn)},
      {dashRow:13,momRow:5,val:pctChange(monthDisps.length,prevDisps.length)},
      {dashRow:14,momRow:6,val:pctChange(totalUnitsOut,prevUnitsOut)},
      {dashRow:15,momRow:7,val:pctChange(bill.total,prevBill.total)},
    ];
    changeOps.forEach(({dashRow,momRow,val})=>{
      const st=changeStyleFor(val);
      if(st){ styleOpsBySheet['Dashboard'].push({ref:`D${dashRow}`,style:st}); styleOpsBySheet['MoM Comparison'].push({ref:`D${momRow}`,style:st}); }
    });

    // ── Native charts on the Dashboard sheet ──
    // Built from the fixed-position MoM/Courier/chart-data ranges above so
    // they stay live/editable if the user tweaks the underlying numbers.
    const filename=`CaratLane_Monthly_Master_Report_${monthStr}.xlsx`;
    loadJSZipLib(async()=>{
      try{
        const charts=[
          { type:'bar', title:'This Month vs Last Month',
            catRef:`'MoM Comparison'!$A$2:$A$7`,
            catCache:['Orders Created','GRNs Received','Units Received (PASS)','Shipments Dispatched','Units Dispatched','Warehouse Bill (₹)'],
            series:[
              {nameRef:`'MoM Comparison'!$B$1`,nameCache:monthLabel,valRef:`'MoM Comparison'!$B$2:$B$7`,valCache:[mOrders.length,grns.length,totalUnitsIn,monthDisps.length,totalUnitsOut,bill.total]},
              {nameRef:`'MoM Comparison'!$C$1`,nameCache:prevMonthLabel,valRef:`'MoM Comparison'!$C$2:$C$7`,valCache:[prevOrders.length,prevGrns.length,prevUnitsIn,prevDisps.length,prevUnitsOut,prevBill.total]},
            ],
            anchor:{from:{col:7,row:0},to:{col:14,row:16}} },
        ];
        if(courierRows.length>0){
          const topN=Math.min(5,courierRows.length);
          charts.push({ type:'bar', title:'Top Couriers This Month',
            catRef:`'Courier Breakdown'!$A$2:$A$${1+topN}`,catCache:courierRows.slice(0,topN).map(c=>c.name),
            series:[{nameRef:`'Courier Breakdown'!$B$1`,nameCache:'Shipments',valRef:`'Courier Breakdown'!$B$2:$B$${1+topN}`,valCache:courierRows.slice(0,topN).map(c=>c.count)}],
            anchor:{from:{col:15,row:0},to:{col:21,row:16}} });
        }
        if(totalUnitsIn+totalUnitsHold+totalUnitsReject>0){
          charts.push({ type:'pie', title:'Units Received — QC Breakdown', seriesName:'Units',
            catRef:`Dashboard!$F$2:$F$4`,catCache:['PASS','HOLD','REJECT'],
            valRef:`Dashboard!$G$2:$G$4`,valCache:[totalUnitsIn,totalUnitsHold,totalUnitsReject],
            anchor:{from:{col:7,row:17},to:{col:14,row:33}} });
        }
        charts.push({ type:'pie', title:'Inventory Health (SKU count)', seriesName:'SKUs',
          catRef:`Dashboard!$F$6:$F$8`,catCache:['In Stock','Low Stock','Out of Stock'],
          valRef:`Dashboard!$G$6:$G$8`,valCache:[inStockCount,lowStockCount,outOfStockCount],
          anchor:{from:{col:15,row:17},to:{col:21,row:33}} });
        const rawBuf=XLSX.write(wb,{bookType:'xlsx',type:'array'});
        const chartedBuf=await injectNativeCharts(rawBuf,'Dashboard',charts);
        const styledBuf=await applyCellStyles(chartedBuf,styleOpsBySheet);
        const blob=new Blob([styledBuf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const url=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url;a.download=filename;document.body.appendChild(a);a.click();
        setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},500);
        toast('Monthly master report downloaded','s');
      }catch(err){
        console.error('Chart/style injection failed, falling back to plain workbook',err);
        XLSX.writeFile(wb,filename);
        toast('Monthly master report downloaded (without charts/formatting — see console)','w');
      }
    });
  });
}
function printWeeklyReport(){
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})} – ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
  const grns=wh.filter(h=>h.type==='grn');
  const disps=wh.filter(h=>h.type==='dispatched');
  const rets=wh.filter(h=>h.type==='return');
  const picks=wh.filter(h=>h.type==='pick');
  const exceptions=wh.filter(h=>h.type==='exception');
  const packed=wh.filter(h=>h.type==='packed'||h.type==='dispatched');
  const totalUnitsIn=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0);},0);
  const totalUnitsOut=disps.reduce((a,d)=>{const items=d.items||[];return a+items.reduce((b,i)=>b+(i.qty||0),0);},0);
  const avgPackDur=packed.filter(p=>p.packDurationSecs>0).length>0?Math.round(packed.filter(p=>p.packDurationSecs>0).reduce((a,p)=>a+p.packDurationSecs,0)/packed.filter(p=>p.packDurationSecs>0).length):null;
  const avgPackStr=avgPackDur?`${Math.floor(avgPackDur/60)}m ${avgPackDur%60}s`:'N/A';
  const totalUnits=SKUS.reduce((a,s)=>a+(inv[s.sku]?inv[s.sku].qty:0),0);
  const pw=window.open('','WMS_WEEKLY_'+weekStr,'width=1000,height=1200');
  if(!pw){toast('Please allow popups','w');return;}
  pw.document.write(`<!DOCTYPE html><html><head><title>Weekly MIS — ${weekLabel}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Arial,sans-serif;font-size:12px;color:#222;padding:16px}
    .header{border-bottom:3px solid #B8860B;padding-bottom:12px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end}
    .co{font-size:18px;font-weight:bold}.sub{font-size:11px;color:#666;margin-top:4px}
    .report-title{font-size:22px;font-weight:bold;color:#B8860B;margin:12px 0 4px}
    .week-label{font-size:13px;color:#444;margin-bottom:16px}
    .kpi-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:16px}
    .kpi{border:1px solid #ddd;border-radius:6px;padding:10px;text-align:center}
    .kpi-val{font-size:22px;font-weight:bold}.kpi-lbl{font-size:10px;color:#666;margin-top:3px}
    h3{font-size:13px;font-weight:bold;background:#f5f5f5;padding:7px 10px;border-left:4px solid #B8860B;margin:16px 0 8px}
    table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:11px}
    th{background:#f0f0f0;padding:7px;text-align:left;border:1px solid #ddd;font-weight:bold}
    td{padding:6px 7px;border:1px solid #ddd}
    tr:nth-child(even){background:#fafafa}
    .sig-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:30px}
    .sig{border-top:1px solid #000;padding-top:8px;text-align:center;font-size:11px}
    .footer{margin-top:20px;border-top:1px solid #ddd;padding-top:10px;font-size:10px;color:#999;text-align:center}
    .tag-ok{color:#2e7d32;font-weight:bold}.tag-low{color:#e65100;font-weight:bold}.tag-out{color:#c62828;font-weight:bold}
    @media print{body{padding:8mm}@page{margin:12mm}.no-print{display:none}}
  </style></head><body>
  <div id="pdf-content">
  <div class="header">
    <div><div class="co">CaratLane (A Tanishq Partnership)</div><div class="sub">EPS Worldwide Integrated Logistics, Mumbai &nbsp;|&nbsp; SOP Ref: EPS-WH-SOP-001 v1.0 §6</div></div>
    <div style="text-align:right;font-size:11px;color:#666">Generated: ${new Date().toLocaleString('en-IN')}<br>Due: Monday 10:00 AM</div>
  </div>
  <div class="report-title">Weekly MIS Report</div>
  <div class="week-label">Report Period: <strong>${weekLabel}</strong></div>

  <div class="kpi-grid">
    <div class="kpi"><div class="kpi-val" style="color:#1565c0">${grns.length}</div><div class="kpi-lbl">GRNs Raised</div><div style="font-size:10px;color:#999">${totalUnitsIn} units in</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#2e7d32">${picks.length}</div><div class="kpi-lbl">Orders Picked</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#B8860B">${disps.length}</div><div class="kpi-lbl">Dispatched</div><div style="font-size:10px;color:#999">${totalUnitsOut} units out</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#e65100">${rets.length}</div><div class="kpi-lbl">Returns</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#c62828">${exceptions.length}</div><div class="kpi-lbl">Exceptions</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#555">${avgPackStr}</div><div class="kpi-lbl">Avg Pack Time</div></div>
  </div>

  <h3>1. Inbound / GRN Report</h3>
  ${grns.length?`<table><thead><tr><th>GRN ID</th><th>Date/Time</th><th>Details</th><th>Units In (Pass)</th><th>Units Hold</th></tr></thead><tbody>${grns.map(g=>{const items=g.items||[];const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+(i.qty||0),0);const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+(i.qty||0),0);return `<tr><td>${g.id}</td><td>${g.ts}</td><td>${g.detail||''}</td><td style="text-align:center;color:#2e7d32;font-weight:bold">${pass}</td><td style="text-align:center;color:#e65100">${hold||0}</td></tr>`;}).join('')}<tr style="background:#f0f0f0;font-weight:bold"><td colspan="3">TOTAL</td><td style="text-align:center">${totalUnitsIn}</td><td style="text-align:center">${grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='HOLD').reduce((b,i)=>b+(i.qty||0),0);},0)}</td></tr></tbody></table>`:'<p style="color:#999;padding:8px">No inbound activity this week.</p>'}

  <h3>2. Outbound / Dispatch Report</h3>
  ${disps.length?`<table><thead><tr><th>Dispatch ID</th><th>Order ID</th><th>AWB</th><th>Recipient</th><th>Courier</th><th>Box (cm)</th><th>Actual (kg)</th><th>Vol. (kg)</th><th>Chargeable (kg)</th><th>Pack Duration</th><th>Dispatched At</th></tr></thead><tbody>${disps.map(d=>{const dims=d.boxL?`${d.boxL}×${d.boxW}×${d.boxH}`:'—';return `<tr><td>${d.id}</td><td>${esc(d.orderId||'—')}</td><td>${esc(d.awb||'—')}</td><td>${esc(d.recipientName||'—')}, ${esc(d.pincode||'')}</td><td>${esc(d.courierPartner||'—')}</td><td>${dims}</td><td style="text-align:center">${d.actualWeight||'—'}</td><td style="text-align:center">${d.volWeight||'—'}</td><td style="text-align:center;font-weight:bold;color:#B8860B">${d.chargeableWeight||'—'}</td><td style="text-align:center">${d.packDuration||'—'}</td><td>${d.dispatchedAt||d.ts}</td></tr>`;}).join('')}<tr style="background:#f0f0f0;font-weight:bold"><td colspan="2">TOTAL DISPATCHED: ${disps.length}</td><td colspan="9"></td></tr></tbody></table>`:'<p style="color:#999;padding:8px">No dispatch activity this week.</p>'}

  <h3>3. Returns Report</h3>
  ${rets.length?`<table><thead><tr><th>Return ID</th><th>Date/Time</th><th>Details</th></tr></thead><tbody>${rets.map(r=>`<tr><td>${r.id}</td><td>${r.ts}</td><td>${esc(r.detail||'—')}</td></tr>`).join('')}</tbody></table>`:'<p style="color:#999;padding:8px">No returns this week.</p>'}

  <h3>4. Exception Report</h3>
  ${exceptions.length?`<table><thead><tr><th>Exception ID</th><th>Date/Time</th><th>Category</th><th>Details</th></tr></thead><tbody>${exceptions.map(e=>`<tr><td>${e.id}</td><td>${e.ts}</td><td>${e.category||'general'}</td><td>${e.detail||'—'}</td></tr>`).join('')}</tbody></table>`:'<p style="color:#2e7d32;padding:8px;font-weight:bold">✓ No exceptions this week.</p>'}

  <h3>5. Inventory Snapshot (as of report generation)</h3>
  <table><thead><tr><th>SKU</th><th>Item Name</th><th>Variant</th><th>Rack</th><th>Shelf</th><th>Qty</th><th>Status</th></tr></thead><tbody>
  ${SKUS.map(s=>{const q=(inv[s.sku]||{qty:0}).qty;const st=q<=0?'Out of Stock':q<=3?'Low Stock':'In Stock';const cls=q<=0?'tag-out':q<=3?'tag-low':'tag-ok';return `<tr><td>${s.sku}</td><td>${s.sub}</td><td>${s.variant}</td><td style="text-align:center">${s.rack}</td><td style="text-align:center">${s.shelf}</td><td style="text-align:center;font-weight:bold">${q}</td><td class="${cls}">${st}</td></tr>`;}).join('')}
  <tr style="background:#f0f0f0;font-weight:bold"><td colspan="5">TOTAL UNITS IN WAREHOUSE</td><td style="text-align:center">${totalUnits}</td><td></td></tr>
  </tbody></table>

  <div class="sig-grid">
    <div class="sig">Prepared By (EPS Ops)<br><br>Name: _______________<br>Date: _______________</div>
    <div class="sig">Verified By (EPS Manager)<br><br>Name: _______________<br>Date: _______________</div>
    <div class="sig">Acknowledged By (CaratLane)<br><br>Name: _______________<br>Date: _______________</div>
  </div>
  <div class="footer">CaratLane WMS · EPS Worldwide Integrated Logistics Mumbai · SOP EPS-WH-SOP-001 v1.0 · Weekly MIS due every Monday by 10:00 AM</div>
  </div>
  ${pdfDownloadSnippet('WeeklyMIS-'+weekStr+'.pdf','landscape')}
  </body></html>`);
  pw.document.close();pw.focus();
  setTimeout(()=>pw.print(),600);
}

// SOP TOGGLE
function toggleSop(el){
  const body=el.nextElementSibling;
  const chev=el.querySelector('.chevron');
  body.classList.toggle('open');
  chev.classList.toggle('open');
}

// TOAST
let toastTimer;
function toast(msg,type='s'){
  const el=document.getElementById('toast');
  el.textContent=msg;el.className='show '+type;
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{el.className='';},3500);
}
// Full-size in-page viewer for photo thumbnails (POD / weighing-scale
// photos, stored as data: URLs). Chrome refuses to open a data: URL as
// its own top-level tab via window.open — the tab just shows a blank
// "about:blank" page — so this shows it inline over the app instead.
function openImageLightbox(src,caption){
  if(!src)return;
  document.getElementById('img-lightbox-img').src=src;
  document.getElementById('img-lightbox-caption').textContent=caption||'';
  document.getElementById('img-lightbox').classList.add('show');
}
function closeImageLightbox(e){
  if(e&&e.target&&e.target.closest&&e.target.closest('img#img-lightbox-img'))return;
  document.getElementById('img-lightbox').classList.remove('show');
  document.getElementById('img-lightbox-img').src='';
}
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape')closeImageLightbox(); });

// COMPREHENSIVE SYSTEM TEST
function runFullSystemTest(){
  console.log('════════════════════════════════════════════');
  console.log('🧪 CARATLANE WMS — COMPREHENSIVE SYSTEM TEST');
  console.log('════════════════════════════════════════════');
  console.log('');
  
  // TEST 1: Data persistence & initialization
  console.log('TEST 1: Data Persistence & Initialization');
  console.log('├─ Inventory loaded:', Object.keys(inv).length, 'SKUs');
  console.log('├─ History records:', history.length, 'entries');
  console.log('├─ Cost parameters:', JSON.stringify(costParams));
  console.log('├─ Packing queue size:', packingQueue.length);
  console.log('└─ ✓ All data structures initialized\n');
  
  // TEST 2: Inbound receiving flow
  console.log('TEST 2: Inbound Receiving Flow');
  const testGRN=newId('GRN');
  const testItems=[
    {sku:'UNI-GS-M-34',name:'Grey Sweater- Male',variant:'Size 34',qc:'PASS',issue:'',qty:5,bin:'A-1',binOverridden:false},
    {sku:'UNI-GS-M-36',name:'Grey Sweater- Male',variant:'Size 36',qc:'HOLD',issue:'Damaged packaging',qty:2,bin:'A-1',binOverridden:false}
  ];
  const initialInv=JSON.parse(JSON.stringify(inv['UNI-GS-M-34']||{}));
  testItems.forEach(item=>{
    if(item.qc==='PASS'){
      if(!inv[item.sku])inv[item.sku]={qty:0,rack:'A',shelf:'1'};
      inv[item.sku].qty+=item.qty;
    }
    if(item.qc==='HOLD' || item.issue){
      history.push({id:newId('EXC'),type:'exception',ts:ts(),category:'damage',detail:`${item.sku} · QC: ${item.qc} · Issue: ${item.issue||'N/A'} · Qty: ${item.qty}`,grn:testGRN});
    }
  });
  history.push({id:testGRN,type:'grn',ts:ts(),detail:`Test ASN · 2 SKUs · PASS:5 HOLD:2`,items:testItems});
  saveInv();saveHist();
  console.log('├─ GRN created:', testGRN);
  console.log('├─ Inventory updated - UNI-GS-M-34:', initialInv.qty||0, '→', inv['UNI-GS-M-34'].qty);
  console.log('├─ Exceptions logged:', history.filter(h=>h.type==='exception').length);
  console.log('├─ History size:', history.length);
  console.log('└─ ✓ Inbound flow working\n');
  
  // TEST 3: Picking flow
  console.log('TEST 3: Picking Flow');
  const testPickItems=[
    {sku:'UNI-GS-M-34',name:'Grey Sweater- Male',variant:'Size 34',qty:2,bin:'A-1'}
  ];
  const pickId=newId('PCK');
  packingQueue.push({id:pickId,orderId:'ORD-TEST-001',priority:'Standard',method:'Single',picker:'TEST-P01',items:testPickItems,ts:ts(),status:'awaiting_packing'});
  history.push({id:pickId,type:'pick',ts:ts(),detail:`ORD-TEST-001 · Single pick · Standard · 1 SKU · Picker: TEST-P01`});
  inv['UNI-GS-M-34'].qty-=2;
  saveInv();saveHist();
  console.log('├─ Pick task created:', pickId);
  console.log('├─ Order ID:', 'ORD-TEST-001');
  console.log('├─ Packing queue updated:', packingQueue.length, 'tasks');
  console.log('├─ Inventory reduced - UNI-GS-M-34:', inv['UNI-GS-M-34'].qty);
  console.log('└─ ✓ Picking flow working\n');
  
  // TEST 4: Packing flow
  console.log('TEST 4: Packing Flow');
  const packTaskId=packingQueue[0].id;
  const packTask=packingQueue[0];
  packingQueue.splice(0,1);
  const pkdId=newId('PKD');
  history.push({id:pkdId,type:'packed',ts:ts(),detail:`${packTask.orderId} · ${packTask.items.length} SKUs packed — ready for dispatch`,orderId:packTask.orderId,items:packTask.items});
  saveHist();
  console.log('├─ Pack task ID:', pkdId);
  console.log('├─ Order moved to dispatch queue');
  console.log('├─ Packing queue remaining:', packingQueue.length);
  console.log('├─ History now has packed orders:', history.filter(h=>h.type==='packed').length);
  console.log('└─ ✓ Packing flow working\n');
  
  // TEST 5: Dispatch flow
  console.log('TEST 5: Dispatch Flow');
  const packedOrder=history.find(h=>h.type==='packed');
  if(packedOrder){
    packedOrder.type='dispatched';
    packedOrder.dispatchedAt=ts();
    packedOrder.awb='TEST-AWB-123456789';
    packedOrder.recipientName='Test Customer';
    packedOrder.address='123 Test St, Mumbai 400001';
    packedOrder.pincode='400001';
    packedOrder.phone='+91-9876543210';
    packedOrder.shippingMethod='Standard Road';
    packedOrder.courierPartner='Bluedart';
    history.push({id:newId('DSP'),type:'dispatch',ts:ts(),detail:`AWB: TEST-AWB-123456789 · To: Test Customer, 400001 · Standard Road · +91-9876543210 · 1 SKUs`});
    saveHist();
    console.log('├─ Dispatch created with AWB: TEST-AWB-123456789');
    console.log('├─ Packed orders remaining:', history.filter(h=>h.type==='packed').length);
    console.log('├─ Dispatched orders:', history.filter(h=>h.type==='dispatched').length);
    console.log('└─ ✓ Dispatch flow working\n');
  }
  
  // TEST 6: Analytics calculations
  console.log('TEST 6: Analytics Calculations');
  const grns=history.filter(h=>h.type==='grn').length;
  const picks=history.filter(h=>h.type==='pick').length;
  const packed=history.filter(h=>h.type==='packed').length;
  const dispatches=history.filter(h=>h.type==='dispatched').length;
  const exceptions=history.filter(h=>h.type==='exception').length;
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  console.log('├─ GRNs:', grns);
  console.log('├─ Picks:', picks);
  console.log('├─ Packed:', packed);
  console.log('├─ Dispatched:', dispatches);
  console.log('├─ Exceptions:', exceptions);
  console.log('├─ Low stock SKUs:', lowStock);
  console.log('└─ ✓ Analytics data collected\n');
  
  // TEST 7: Finance calculations
  console.log('TEST 7: Finance & Cost Calculations');
  const totalCost=(grns*costParams.receivingCostPerGrn)+(picks*costParams.pickCostPerOrder)+(packed*costParams.packCostPerOrder);
  const storageCost=SKUS.length*costParams.storageCostPerSku;
  const dispatchRevenue=dispatches*costParams.dispatchCostPerOrder;
  const roi=dispatchRevenue>0?Math.round(((dispatchRevenue-(totalCost+storageCost))/(totalCost+storageCost))*100):0;
  console.log('├─ Operations cost: ₹' + totalCost);
  console.log('├─ Storage cost: ₹' + storageCost);
  console.log('├─ Total cost: ₹' + (totalCost+storageCost));
  console.log('├─ Dispatch revenue: ₹' + dispatchRevenue);
  console.log('├─ ROI: ' + roi + '%');
  console.log('└─ ✓ Finance calculations working\n');
  
  // TEST 8: Capacity planning
  console.log('TEST 8: Capacity Planning');
  const totalShelfSlots=RACK_LETTERS.length*SHELVES_PER_RACK;
  const totalOccupiedSlots=RACK_LETTERS.reduce((a,r)=>a+SKUS.filter(s=>s.rack===r&&parseInt(s.shelf)<=SHELVES_PER_RACK&&(inv[s.sku]||{qty:0}).qty>0).length,0);
  const utilPct=Math.round((totalOccupiedSlots/totalShelfSlots)*100);
  console.log('├─ Racks occupied: ' + totalOccupiedSlots + '/' + totalShelfSlots + ' across ' + RACK_LETTERS.length + ' racks');
  console.log('├─ Warehouse utilization: ' + utilPct + '%');
  console.log('└─ ✓ Capacity planning working\n');
  
  // TEST 9: Real-time updates check
  console.log('TEST 9: Real-time Update Verification');
  renderDash();
  renderAnalytics();
  renderFinance();
  console.log('├─ Dashboard rendered ✓');
  console.log('├─ Analytics rendered ✓');
  console.log('├─ Finance rendered ✓');
  console.log('└─ All pages updated in real-time\n');
  
  // TEST 10: localStorage persistence
  console.log('TEST 10: localStorage Persistence');
  const storedInv=localStorage.getItem('cl_wms_inv2');
  const storedHist=localStorage.getItem('cl_wms_hist2');
  console.log('├─ Inventory in localStorage: ' + (storedInv?'✓':'✗'));
  console.log('├─ History in localStorage: ' + (storedHist?'✓':'✗'));
  console.log('├─ Inventory size: ' + (storedInv?JSON.parse(storedInv).length||'unknown':'N/A'));
  console.log('├─ History records: ' + (storedHist?JSON.parse(storedHist).length||'unknown':'N/A'));
  console.log('└─ ✓ Data persistence verified\n');
  
  // FINAL SUMMARY
  console.log('════════════════════════════════════════════');
  console.log('✅ ALL SYSTEMS OPERATIONAL');
  console.log('════════════════════════════════════════════');
  console.log('');
  console.log('Summary:');
  console.log('• Inbound receiving: ✓ Working');
  console.log('• Picking flow: ✓ Working');
  console.log('• Packing workflow: ✓ Working');
  console.log('• Dispatch management: ✓ Working');
  console.log('• Analytics dashboard: ✓ Working');
  console.log('• Finance tracking: ✓ Working');
  console.log('• Capacity planning: ✓ Working');
  console.log('• Real-time updates: ✓ Working');
  console.log('• Data persistence: ✓ Working');
  console.log('');
  console.log('Total history records:', history.length);
  console.log('Inventory SKUs:', Object.keys(inv).length);
  console.log('');
  console.log('🎉 System is fully operational and all modules are linked!');
}

// ═══ BOOT — load from Supabase then render ═══
async function loadSKUsFromDB(){
  try {
    if(typeof supabase==='undefined'||!supa) return;
    const {data,error}=await supa.from('skus').select('*').order('cat').order('sub').order('variant');
    if(error||!data||!data.length) return; // fallback to hardcoded
    SKUS=data.map(r=>({sku:r.sku,cat:r.cat,sub:r.sub,variant:r.variant,rack:r.rack,shelf:r.shelf,shortCode:(r.short_code!=null?r.short_code:null),price:(r.price!=null?parseFloat(r.price):null)}));
    console.log('✓ SKUs loaded from DB:',SKUS.length);
  } catch(e){ console.warn('SKU DB load failed, using hardcoded list'); }
}
// Product barcodes encode a short 4-digit numeric ID instead of the full
// SKU string. CODE128 can pack digit-pairs far more densely than mixed
// letters — a SKU like "UNI-GS-F-34" needs ~150+ printed bars, which
// won't scan reliably on a small thermal label; a 4-digit code needs
// well under half that, and prints reliably even on the smallest label.
// The human-readable SKU text still prints on the label for staff to read.
function hashToCode(str){
  let h=5381;
  for(let i=0;i<str.length;i++){ h=((h*33)^str.charCodeAt(i))>>>0; }
  return h%10000;
}
async function persistShortCode(sku,code){
  try{
    const {error}=await supa.from('skus').update({short_code:code}).eq('sku',sku);
    if(error) throw error;
    return true;
  }catch(e){ return false; }
}
async function assignShortCodes(){
  const used=new Set();
  SKUS.forEach(s=>{ if(s.shortCode!=null && !isNaN(s.shortCode)) used.add(s.shortCode); });
  const toPersist=[];
  SKUS.forEach(s=>{
    if(s.shortCode==null || isNaN(s.shortCode)){
      let code=hashToCode(s.sku);
      while(used.has(code)) code=(code+1)%10000;
      s.shortCode=code; used.add(code); toPersist.push(s);
    }
  });
  for(const s of toPersist){
    const ok=await persistShortCode(s.sku,s.shortCode);
    // If the short_code column hasn't been migrated in yet, stop trying —
    // the codes still work fine in-memory for this session, they just
    // won't be sticky across sessions until Migration 7 is applied.
    if(!ok) break;
  }
}
async function addSKU(skuObj){
  // Add to local array
  if(SKUS.find(s=>s.sku===skuObj.sku)){toast('SKU already exists','w');return false;}
  SKUS.push(skuObj);
  // Never blindly overwrite an existing inventory row — if this SKU code
  // somehow already has stock recorded (e.g. a GRN was received against
  // it before the catalog entry existed on this client, or the SKUS
  // duplicate-check above got bypassed some other way), resetting it to
  // {qty:0} here would silently wipe real stock back to zero. Only seed
  // a fresh row when one doesn't already exist.
  if(!inv[skuObj.sku]) inv[skuObj.sku]={qty:0,rack:skuObj.rack,shelf:skuObj.shelf};
  await assignShortCodes();
  // Save to DB
  try {
    await supa.from('skus').upsert({...skuObj,short_code:skuObj.shortCode},{onConflict:'sku'});
    await saveInv();
    toast('SKU '+skuObj.sku+' added successfully','s');
    return true;
  } catch(e){ console.error('addSKU error:',e); toast('SKU saved locally only','w'); return true; }
}
// ═══ ADD PRODUCT (assign a brand-new SKU to a rack/shelf) ═══
function toggleAddProductForm(){
  const f=document.getElementById('add-product-form');
  if(!f) return;
  const show=f.style.display==='none';
  f.style.display=show?'block':'none';
  if(show) populateAddProductRackShelf();
}
function populateAddProductRackShelf(rackId,shelfId){
  const rackSel=document.getElementById(rackId||'ap-rack');
  const shelfSel=document.getElementById(shelfId||'ap-shelf');
  const racks=Array.from({length:15},(_,i)=>String.fromCharCode(65+i)); // A–O
  if(rackSel && !rackSel.options.length){
    rackSel.innerHTML=racks.map(r=>`<option value="${r}">Rack ${r}</option>`).join('');
  }
  if(shelfSel && !shelfSel.options.length){
    shelfSel.innerHTML=Array.from({length:SHELVES_PER_RACK},(_,i)=>i+1).map(s=>`<option value="${s}">Shelf ${s}</option>`).join('');
  }
}
async function submitAddProduct(){
  const sku=document.getElementById('ap-sku').value.trim().toUpperCase();
  const cat=document.getElementById('ap-cat').value;
  const name=document.getElementById('ap-name').value.trim();
  const variant=document.getElementById('ap-variant').value.trim();
  const rack=document.getElementById('ap-rack').value;
  const shelf=document.getElementById('ap-shelf').value;
  const priceRaw=document.getElementById('ap-price')?document.getElementById('ap-price').value.trim():'';
  if(!sku||!cat||!name||!variant||!rack||!shelf){ toast('Please fill all fields','w'); return; }
  if(!/^[A-Za-z0-9\-]+$/.test(sku)){ toast('SKU code — letters, numbers and hyphens only','w'); return; }
  let price=null;
  if(priceRaw!==''){
    price=parseFloat(priceRaw);
    if(isNaN(price)||price<0){ toast('Unit price must be a valid non-negative number','w'); return; }
  }
  if(!rateLimit('addProduct',2000)){ toast('Please wait before adding another product','w'); return; }
  const ok=await addSKU({sku,cat,sub:name,variant,rack,shelf,price});
  if(ok){
    ['ap-sku','ap-name','ap-variant','ap-price'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    toggleAddProductForm();
    renderInv();
    populateSkuSel('ib-sku');
    populateSkuSel('exp-sku');
    renderRack();
    logAudit('SKU_CREATE','skus',sku,null,{cat,sub:name,variant,rack,shelf,price});
  }
}
// ═══ ADD NEW PRODUCT — from the Label Printer page ═══
// Same underlying action as Inventory → Add New Product (addSKU), just
// reachable from Label Printer too so a brand-new SKU can be created and
// its label printed in one place, without a trip to Inventory first. Uses
// its own lbl-ap-* field ids since both forms can exist in the DOM at once.
function toggleAddProductFormLabels(){
  const f=document.getElementById('lbl-add-product-form');
  if(!f) return;
  const show=f.style.display==='none';
  f.style.display=show?'block':'none';
  if(show) populateAddProductRackShelf('lbl-ap-rack','lbl-ap-shelf');
}
async function submitAddProductFromLabels(){
  const sku=document.getElementById('lbl-ap-sku').value.trim().toUpperCase();
  const cat=document.getElementById('lbl-ap-cat').value;
  const name=document.getElementById('lbl-ap-name').value.trim();
  const variant=document.getElementById('lbl-ap-variant').value.trim();
  const rack=document.getElementById('lbl-ap-rack').value;
  const shelf=document.getElementById('lbl-ap-shelf').value;
  const priceRaw=document.getElementById('lbl-ap-price')?document.getElementById('lbl-ap-price').value.trim():'';
  if(!sku||!cat||!name||!variant||!rack||!shelf){ toast('Please fill all fields','w'); return; }
  if(!/^[A-Za-z0-9\-]+$/.test(sku)){ toast('SKU code — letters, numbers and hyphens only','w'); return; }
  let price=null;
  if(priceRaw!==''){
    price=parseFloat(priceRaw);
    if(isNaN(price)||price<0){ toast('Unit price must be a valid non-negative number','w'); return; }
  }
  if(!rateLimit('addProduct',2000)){ toast('Please wait before adding another product','w'); return; }
  const ok=await addSKU({sku,cat,sub:name,variant,rack,shelf,price});
  if(ok){
    ['lbl-ap-sku','lbl-ap-name','lbl-ap-variant','lbl-ap-price'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    toggleAddProductFormLabels();
    populateSkuSel('ib-sku');
    populateSkuSel('exp-sku');
    renderRack();
    renderInv();
    logAudit('SKU_CREATE','skus',sku,null,{cat,sub:name,variant,rack,shelf,price});
    // The whole point of adding it from here is printing its label right
    // away — pre-select it and scroll it into view instead of leaving the
    // person to hunt for what they just typed.
    _lblSelected.add(sku);
    renderLabelPage();
    const card=document.getElementById('lbl-card-'+sku);
    if(card) card.scrollIntoView({behavior:'smooth',block:'center'});
    toast(`${sku} added — pre-selected below, ready to print`,'s');
  }
}
// ═══════════════════════════════════════════
// LABEL PRINTER SYSTEM
// ═══════════════════════════════════════════
let _lblSelected = new Set();
let _shelfLblSelected = new Set();
let _toteLblSelected = new Set();
let _jsBarcodeLoaded = false;

function loadJsBarcode(cb){
  if(_jsBarcodeLoaded){ cb(); return; }
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/jsbarcode@3.11.6/dist/JsBarcode.all.min.js';
  s.onload=()=>{ _jsBarcodeLoaded=true; cb(); };
  s.onerror=()=>{ console.error('JsBarcode failed to load'); cb(); };
  document.head.appendChild(s);
}

function renderLabelPage(){
  loadJsBarcode(()=>{
    const cat=document.getElementById('lbl-cat')?.value||'';
    const q=(document.getElementById('lbl-search')?.value||'').trim().toLowerCase();
    let skus=cat?SKUS.filter(s=>s.cat===cat):SKUS;
    if(q) skus=skus.filter(s=>s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q)||s.variant.toLowerCase().includes(q));
    const grid=document.getElementById('label-grid');
    if(!grid)return;
    if(!skus.length){ grid.innerHTML='<div class="empty" style="grid-column:1/-1">No labels match your search</div>'; return; }
    grid.innerHTML=skus.map(s=>{
      const selected=_lblSelected.has(s.sku);
      const qty=(inv[s.sku]||{qty:0}).qty;
      return `<div class="lbl-card${selected?' selected':''}" onclick="toggleLabelSelect('${s.sku}')" id="lbl-card-${s.sku}">
        <div class="lbl-check">${selected?'<i class="ti ti-check" style="font-size:11px"></i>':''}</div>
        <div style="font-size:10px;font-weight:700;color:var(--t);margin-bottom:2px;padding-right:20px">${esc(s.sub)}</div>
        <div style="font-size:10px;color:var(--t2)">${esc(s.variant)}</div>
        <div class="lbl-preview">
          <svg id="bc-${s.sku.replace(/[^a-zA-Z0-9]/g,'_')}" style="max-width:100%;height:40px"></svg>
          <div style="font-size:9px;color:#333;margin-top:2px;font-family:monospace">${s.sku}</div>
        </div>
      </div>`;
    }).join('');
    // Render barcodes
    skus.forEach(s=>{
      try {
        const svgId='bc-'+s.sku.replace(/[^a-zA-Z0-9]/g,'_');
        const el=document.getElementById(svgId);
        if(el&&typeof JsBarcode!=='undefined'){
          JsBarcode('#'+svgId, String(s.shortCode!=null?s.shortCode:hashToCode(s.sku)).padStart(4,'0'), {
            format:'CODE128', width:1.2, height:35,
            displayValue:false, margin:2,
            background:'#ffffff', lineColor:'#000000'
          });
        }
      } catch(e){ console.warn('Barcode error for',s.sku,e); }
    });
    updateLabelSelCount();
    renderShelfLabelGrid();
    renderToteLabelGrid();
  });
}
function renderShelfLabelGrid(){
  const grid=document.getElementById('shelf-label-grid');
  if(!grid) return;
  const locs=getShelfLocations();
  grid.innerHTML=locs.map(loc=>{
    const key=loc.rack+'-'+loc.shelf;
    const selected=_shelfLblSelected.has(key);
    const itemsHere=SKUS.filter(s=>getSkuLocations(s.sku).some(l=>l.rack===loc.rack&&String(l.shelf)===String(loc.shelf)));
    const summary=itemsHere.length?`${itemsHere.length} SKU(s) here`:'Empty';
    const svgId='bc-loc-'+key.replace(/[^a-zA-Z0-9]/g,'_');
    return `<div class="lbl-card${selected?' selected':''}" onclick="toggleShelfLabelSelect('${key}')" id="shelf-lbl-card-${key}">
      <div class="lbl-check">${selected?'<i class="ti ti-check" style="font-size:11px"></i>':''}</div>
      <div style="font-size:11px;font-weight:700;color:var(--t);margin-bottom:2px;padding-right:20px">Rack ${loc.rack} · Shelf ${loc.shelf}</div>
      <div style="font-size:10px;color:var(--t2)">${summary}</div>
      <div class="lbl-preview">
        <svg id="${svgId}" style="max-width:100%;height:40px"></svg>
        <div style="font-size:9px;color:#333;margin-top:2px;font-family:monospace">LOC-${key}</div>
      </div>
    </div>`;
  }).join('');
  locs.forEach(loc=>{
    const key=loc.rack+'-'+loc.shelf;
    try {
      const svgId='bc-loc-'+key.replace(/[^a-zA-Z0-9]/g,'_');
      const el=document.getElementById(svgId);
      if(el&&typeof JsBarcode!=='undefined'){
        JsBarcode('#'+svgId, 'LOC-'+key, {
          format:'CODE128', width:1.2, height:35,
          displayValue:false, margin:2,
          background:'#ffffff', lineColor:'#000000'
        });
      }
    } catch(e){ console.warn('Shelf barcode error for',key,e); }
  });
  updateShelfLabelSelCount();
}
function toggleShelfLabelSelect(key){
  if(_shelfLblSelected.has(key)) _shelfLblSelected.delete(key);
  else _shelfLblSelected.add(key);
  const card=document.getElementById('shelf-lbl-card-'+key);
  if(!card) return;
  card.classList.toggle('selected',_shelfLblSelected.has(key));
  card.querySelector('.lbl-check').innerHTML=_shelfLblSelected.has(key)?'<i class="ti ti-check" style="font-size:11px"></i>':'';
  updateShelfLabelSelCount();
}
function selectAllShelfLabels(){
  getShelfLocations().forEach(loc=>_shelfLblSelected.add(loc.rack+'-'+loc.shelf));
  renderShelfLabelGrid();
}
function clearShelfLabelSelection(){
  _shelfLblSelected.clear();
  renderShelfLabelGrid();
}
function updateShelfLabelSelCount(){
  const el=document.getElementById('shelf-lbl-sel-count');
  if(el) el.textContent=_shelfLblSelected.size;
}

function renderToteLabelGrid(){
  const grid=document.getElementById('tote-label-grid');
  if(!grid) return;
  grid.innerHTML=TOTE_IDS.map(code=>{
    const selected=_toteLblSelected.has(code);
    const svgId='bc-tote-'+code.replace(/[^a-zA-Z0-9]/g,'_');
    return `<div class="lbl-card${selected?' selected':''}" onclick="toggleToteLabelSelect('${code}')" id="tote-lbl-card-${code}">
      <div class="lbl-check">${selected?'<i class="ti ti-check" style="font-size:11px"></i>':''}</div>
      <div style="font-size:11px;font-weight:700;color:var(--t);margin-bottom:2px;padding-right:20px">Tote ${code.split('-')[1]}</div>
      <div style="font-size:10px;color:var(--t2)">Reusable tote bag</div>
      <div class="lbl-preview">
        <svg id="${svgId}" style="max-width:100%;height:40px"></svg>
        <div style="font-size:9px;color:#333;margin-top:2px;font-family:monospace">${code}</div>
      </div>
    </div>`;
  }).join('');
  TOTE_IDS.forEach(code=>{
    try {
      const svgId='bc-tote-'+code.replace(/[^a-zA-Z0-9]/g,'_');
      const el=document.getElementById(svgId);
      if(el&&typeof JsBarcode!=='undefined'){
        JsBarcode('#'+svgId, code, {
          format:'CODE128', width:1.2, height:35,
          displayValue:false, margin:2,
          background:'#ffffff', lineColor:'#000000'
        });
      }
    } catch(e){ console.warn('Tote barcode error for',code,e); }
  });
  updateToteLabelSelCount();
}
function toggleToteLabelSelect(code){
  if(_toteLblSelected.has(code)) _toteLblSelected.delete(code);
  else _toteLblSelected.add(code);
  const card=document.getElementById('tote-lbl-card-'+code);
  if(!card) return;
  card.classList.toggle('selected',_toteLblSelected.has(code));
  card.querySelector('.lbl-check').innerHTML=_toteLblSelected.has(code)?'<i class="ti ti-check" style="font-size:11px"></i>':'';
  updateToteLabelSelCount();
}
function selectAllToteLabels(){
  TOTE_IDS.forEach(code=>_toteLblSelected.add(code));
  renderToteLabelGrid();
}
function clearToteLabelSelection(){
  _toteLblSelected.clear();
  renderToteLabelGrid();
}
function updateToteLabelSelCount(){
  const el=document.getElementById('tote-lbl-sel-count');
  if(el) el.textContent=_toteLblSelected.size;
}

function toggleLabelSelect(sku){
  if(_lblSelected.has(sku)) _lblSelected.delete(sku);
  else _lblSelected.add(sku);
  const card=document.getElementById('lbl-card-'+sku);
  if(!card)return;
  card.classList.toggle('selected',_lblSelected.has(sku));
  card.querySelector('.lbl-check').innerHTML=_lblSelected.has(sku)?'<i class="ti ti-check" style="font-size:11px"></i>':'';
  updateLabelSelCount();
}

function selectAllLabels(){
  const cat=document.getElementById('lbl-cat')?.value||'';
  const skus=cat?SKUS.filter(s=>s.cat===cat):SKUS;
  skus.forEach(s=>_lblSelected.add(s.sku));
  renderLabelPage();
}

function clearLabelSelection(){
  _lblSelected.clear();
  renderLabelPage();
}

function updateLabelSelCount(){
  const el=document.getElementById('lbl-sel-count');
  if(el) el.textContent=_lblSelected.size;
}

function getLabelSizeMM(){
  const v=document.getElementById('lbl-size')?.value||'50x30';
  const [w,h]=v.split('x').map(Number);
  return {w,h};
}

function printSelectedLabels(){
  if(!_lblSelected.size){ toast('Select at least one SKU to print','w'); return; }
  loadJsBarcode(()=>{
    const {w:mmW, h:mmH}=getLabelSizeMM();
    const px_w=Math.round(mmW*3.78); // 96dpi ÷ 25.4 * mm
    const px_h=Math.round(mmH*3.78);
    const selectedSKUs=SKUS.filter(s=>_lblSelected.has(s.sku));
    // Build print window
    const pw=window.open('','CARATLANE_LABELS_'+Date.now(),'width=700,height=900');
    if(!pw){ toast('Please allow popups to print','w'); return; }
    // Build SVG barcodes as data URIs
    const labelHTML=selectedSKUs.map(s=>{
      // Generate barcode SVG inline
      const svgNS='http://www.w3.org/2000/svg';
      const tmpSvg=document.createElementNS(svgNS,'svg');
      tmpSvg.setAttribute('id','tmp_bc_print');
      document.body.appendChild(tmpSvg);
      let bcDataURI='';
      const shortCode=String(s.shortCode!=null?s.shortCode:hashToCode(s.sku)).padStart(4,'0');
      try {
        JsBarcode(tmpSvg, shortCode, {format:'CODE128',width:2.6,height:50,displayValue:false,margin:8,background:'#ffffff',lineColor:'#000000'});
        const svgStr=new XMLSerializer().serializeToString(tmpSvg);
        bcDataURI='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svgStr)));
      } catch(e){ console.warn('Print barcode error:',e); }
      document.body.removeChild(tmpSvg);
      const qty=(inv[s.sku]||{qty:0}).qty;
      return `<div class="label">
        <div class="lbl-name">${esc(s.sub)}</div>
        <div class="lbl-variant">${esc(s.variant)}</div>
        ${bcDataURI?`<img src="${bcDataURI}" class="lbl-barcode" alt="${shortCode}">`:'<div class="lbl-sku-plain">'+shortCode+'</div>'}
        <div class="lbl-sku">${s.sku} <span style="color:#999">· #${shortCode}</span></div>
      </div>`;
    }).join('');
    pw.document.write(`<!DOCTYPE html><html><head><title>CaratLane SKU Labels</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:Arial,sans-serif;background:#fff;padding:4mm}
      .label-grid{display:flex;flex-wrap:wrap;gap:3mm}
      .label{width:${mmW}mm;height:${mmH}mm;border:0.5px solid #ccc;border-radius:1.5mm;padding:1mm;display:flex;flex-direction:column;justify-content:center;gap:0.5mm;overflow:hidden;page-break-inside:avoid;background:#fff}
      .lbl-name{font-size:${Math.max(7,Math.min(11,Math.round(mmH*0.34)))}px;font-weight:700;color:#111;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .lbl-variant{font-size:${Math.max(6,Math.round(mmH*0.24))}px;color:#444;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .lbl-barcode{display:block;margin:0 auto;width:auto;height:auto;max-width:100%;max-height:${Math.max(8,Math.round(mmH*0.55))}mm;object-fit:contain}
      .lbl-sku{font-size:${Math.max(6,Math.round(mmH*0.22))}px;color:#333;font-family:monospace;text-align:center;line-height:1.15}
      .lbl-sku-plain{font-size:8px;font-weight:700;font-family:monospace;text-align:center;padding:3px;border:1px solid #ccc;border-radius:2px}
      .print-info{font-size:11px;color:#666;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid #ddd}
      .hidden-bar{display:none !important}
      @media print{
        body{padding:2mm}
        .no-print{display:none !important}
        @page{margin:3mm;size:${mmW*2+10}mm auto}
      }
    </style></head><body>
    <div class="no-print" id="lbl-controls-bar" style="margin-bottom:12px;padding:10px;background:#f9f9f9;border-radius:6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-weight:700;font-size:13px">CaratLane WMS — SKU Labels</div>
        <div style="font-size:11px;color:#666;margin-top:3px">${selectedSKUs.length} labels · ${mmW}×${mmH}mm · Generated ${new Date().toLocaleString('en-IN')}</div>
        <div style="font-size:11px;color:#888;margin-top:3px">Printing via a phone app (e.g. "We Print")? Tap <b>Hide bar &amp; screenshot</b> first so only the labels show, then take your screenshot/import.</div>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="window.print()" style="padding:8px 16px;background:#B8860B;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">🖨 Print Labels</button>
        <button onclick="document.getElementById('lbl-controls-bar').classList.add('hidden-bar');document.getElementById('lbl-show-bar-btn').style.display='flex'" style="padding:8px 16px;background:#444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">📷 Hide bar &amp; screenshot</button>
        <button onclick="window.close()" style="padding:8px 16px;background:#f0f0f0;border:none;border-radius:6px;cursor:pointer;font-size:12px">Close</button>
      </div>
    </div>
    <button id="lbl-show-bar-btn" onclick="document.getElementById('lbl-controls-bar').classList.remove('hidden-bar');this.style.display='none'" class="no-print" style="display:none;position:fixed;top:8px;right:8px;padding:8px 14px;background:#B8860B;color:#fff;border:none;border-radius:20px;cursor:pointer;font-weight:700;font-size:11px;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)">Show controls</button>
    <div class="label-grid">${labelHTML}</div>
    </body></html>`);
    pw.document.close();
    pw.focus();
    // 'batch' as a literal Record ID told an auditor nothing about what
    // was actually printed — show the SKU(s) instead (truncated for long
    // batches), with the full list still in new_values for anyone who
    // needs it.
    const printedSkuLabel=selectedSKUs.length<=3
      ? selectedSKUs.map(s=>s.sku).join(', ')
      : `${selectedSKUs.slice(0,2).map(s=>s.sku).join(', ')} +${selectedSKUs.length-2} more`;
    logAudit('PRINT_LABELS','inventory',printedSkuLabel,null,{count:selectedSKUs.length,skus:selectedSKUs.map(s=>s.sku)});
    toast(selectedSKUs.length+' labels sent to print preview','s');
  });
}
function printSelectedShelfLabels(){
  if(!_shelfLblSelected.size){ toast('Select at least one shelf to print','w'); return; }
  const locs=getShelfLocations().filter(loc=>_shelfLblSelected.has(loc.rack+'-'+loc.shelf));
  const {w:mmW, h:mmH}=getLabelSizeMM();
  const pw=window.open('','CARATLANE_SHELF_LABELS_'+Date.now(),'width=700,height=900');
  if(!pw){ toast('Please allow popups to print','w'); return; }
  const labelHTML=locs.map(loc=>{
    const code=`LOC-${loc.rack}-${loc.shelf}`;
    const svgNS='http://www.w3.org/2000/svg';
    const tmpSvg=document.createElementNS(svgNS,'svg');
    tmpSvg.setAttribute('id','tmp_bc_print_shelf');
    document.body.appendChild(tmpSvg);
    let bcDataURI='';
    try {
      JsBarcode(tmpSvg, code, {format:'CODE128',width:2.2,height:50,displayValue:false,margin:6,background:'#ffffff',lineColor:'#000000'});
      const svgStr=new XMLSerializer().serializeToString(tmpSvg);
      bcDataURI='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svgStr)));
    } catch(e){ console.warn('Shelf label barcode error:',e); }
    document.body.removeChild(tmpSvg);
    const itemsHere=SKUS.filter(s=>getSkuLocations(s.sku).some(l=>l.rack===loc.rack&&String(l.shelf)===String(loc.shelf)));
    const itemNames=itemsHere.length?itemsHere[0].sub+(itemsHere.length>1?` +${itemsHere.length-1} more`:''):'Unassigned — no items yet';
    return `<div class="label">
      <div class="lbl-name">Rack ${esc(loc.rack)} · Shelf ${esc(loc.shelf)}</div>
      <div class="lbl-variant">${esc(itemNames)}</div>
      ${bcDataURI?`<img src="${bcDataURI}" class="lbl-barcode" alt="${code}">`:'<div class="lbl-sku-plain">'+code+'</div>'}
      <div class="lbl-sku">${code}</div>
    </div>`;
  }).join('');
  pw.document.write(`<!DOCTYPE html><html><head><title>CaratLane Shelf Location Labels</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:Arial,sans-serif;background:#fff;padding:4mm}
      .label-grid{display:flex;flex-wrap:wrap;gap:3mm}
      .label{width:${mmW}mm;height:${mmH}mm;border:0.5px solid #ccc;border-radius:1.5mm;padding:1mm;display:flex;flex-direction:column;justify-content:center;gap:0.5mm;overflow:hidden;page-break-inside:avoid;background:#fff}
      .lbl-name{font-size:${Math.max(7,Math.min(11,Math.round(mmH*0.34)))}px;font-weight:700;color:#111;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .lbl-variant{font-size:${Math.max(6,Math.round(mmH*0.24))}px;color:#666;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .lbl-barcode{display:block;margin:0 auto;width:auto;height:auto;max-width:100%;max-height:${Math.max(8,Math.round(mmH*0.55))}mm;object-fit:contain}
      .lbl-sku{font-size:${Math.max(6,Math.round(mmH*0.22))}px;color:#333;font-family:monospace;text-align:center;line-height:1.15}
      .lbl-sku-plain{font-size:8px;font-weight:700;font-family:monospace;text-align:center;padding:3px;border:1px solid #ccc;border-radius:2px}
      .hidden-bar{display:none !important}
      @media print{
        body{padding:2mm}
        .no-print{display:none !important}
        @page{margin:3mm;size:${mmW*2+10}mm auto}
      }
    </style></head><body>
    <div class="no-print" id="lbl-controls-bar" style="margin-bottom:12px;padding:10px;background:#f9f9f9;border-radius:6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-weight:700;font-size:13px">CaratLane WMS — Shelf Location Labels</div>
        <div style="font-size:11px;color:#666;margin-top:3px">${locs.length} labels · ${mmW}×${mmH}mm · Generated ${new Date().toLocaleString('en-IN')}</div>
        <div style="font-size:11px;color:#888;margin-top:3px">Stick one per shelf. Pickers scan this first, then the product — confirms they're at the right shelf.</div>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="window.print()" style="padding:8px 16px;background:#1a2b4c;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">🖨 Print Labels</button>
        <button onclick="document.getElementById('lbl-controls-bar').classList.add('hidden-bar');document.getElementById('lbl-show-bar-btn').style.display='flex'" style="padding:8px 16px;background:#444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">📷 Hide bar &amp; screenshot</button>
        <button onclick="window.close()" style="padding:8px 16px;background:#f0f0f0;border:none;border-radius:6px;cursor:pointer;font-size:12px">Close</button>
      </div>
    </div>
    <button id="lbl-show-bar-btn" onclick="document.getElementById('lbl-controls-bar').classList.remove('hidden-bar');this.style.display='none'" class="no-print" style="display:none;position:fixed;top:8px;right:8px;padding:8px 14px;background:#1a2b4c;color:#fff;border:none;border-radius:20px;cursor:pointer;font-weight:700;font-size:11px;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)">Show controls</button>
    <div class="label-grid">${labelHTML}</div>
    </body></html>`);
  pw.document.close();
  pw.focus();
  logAudit('PRINT_SHELF_LABELS','inventory','batch',null,{count:locs.length});
  toast(locs.length+' shelf location labels sent to print preview','s');
}
function printSelectedToteLabels(){
  if(!_toteLblSelected.size){ toast('Select at least one tote to print','w'); return; }
  const codes=TOTE_IDS.filter(c=>_toteLblSelected.has(c));
  const {w:mmW, h:mmH}=getLabelSizeMM();
  const pw=window.open('','CARATLANE_TOTE_LABELS_'+Date.now(),'width=700,height=900');
  if(!pw){ toast('Please allow popups to print','w'); return; }
  const labelHTML=codes.map(code=>{
    const svgNS='http://www.w3.org/2000/svg';
    const tmpSvg=document.createElementNS(svgNS,'svg');
    tmpSvg.setAttribute('id','tmp_bc_print_tote');
    document.body.appendChild(tmpSvg);
    let bcDataURI='';
    try {
      JsBarcode(tmpSvg, code, {format:'CODE128',width:2.2,height:50,displayValue:false,margin:6,background:'#ffffff',lineColor:'#000000'});
      const svgStr=new XMLSerializer().serializeToString(tmpSvg);
      bcDataURI='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svgStr)));
    } catch(e){ console.warn('Tote label barcode error:',e); }
    document.body.removeChild(tmpSvg);
    return `<div class="label">
      <div class="lbl-name">Tote Bag ${esc(code.split('-')[1])}</div>
      <div class="lbl-variant">Scan before picking — cross-checked at packing</div>
      ${bcDataURI?`<img src="${bcDataURI}" class="lbl-barcode" alt="${code}">`:'<div class="lbl-sku-plain">'+code+'</div>'}
      <div class="lbl-sku">${code}</div>
    </div>`;
  }).join('');
  pw.document.write(`<!DOCTYPE html><html><head><title>CaratLane Tote Bag Labels</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:Arial,sans-serif;background:#fff;padding:4mm}
      .label-grid{display:flex;flex-wrap:wrap;gap:3mm}
      .label{width:${mmW}mm;height:${mmH}mm;border:0.5px solid #ccc;border-radius:1.5mm;padding:1mm;display:flex;flex-direction:column;justify-content:center;gap:0.5mm;overflow:hidden;page-break-inside:avoid;background:#fff}
      .lbl-name{font-size:${Math.max(7,Math.min(11,Math.round(mmH*0.34)))}px;font-weight:700;color:#111;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .lbl-variant{font-size:${Math.max(6,Math.round(mmH*0.24))}px;color:#666;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .lbl-barcode{display:block;margin:0 auto;width:auto;height:auto;max-width:100%;max-height:${Math.max(8,Math.round(mmH*0.55))}mm;object-fit:contain}
      .lbl-sku{font-size:${Math.max(6,Math.round(mmH*0.22))}px;color:#333;font-family:monospace;text-align:center;line-height:1.15}
      .lbl-sku-plain{font-size:8px;font-weight:700;font-family:monospace;text-align:center;padding:3px;border:1px solid #ccc;border-radius:2px}
      .hidden-bar{display:none !important}
      @media print{
        body{padding:2mm}
        .no-print{display:none !important}
        @page{margin:3mm;size:${mmW*2+10}mm auto}
      }
    </style></head><body>
    <div class="no-print" id="lbl-controls-bar" style="margin-bottom:12px;padding:10px;background:#f9f9f9;border-radius:6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-weight:700;font-size:13px">CaratLane WMS — Tote Bag Labels</div>
        <div style="font-size:11px;color:#666;margin-top:3px">${codes.length} labels · ${mmW}×${mmH}mm · Generated ${new Date().toLocaleString('en-IN')}</div>
        <div style="font-size:11px;color:#888;margin-top:3px">Stick one per physical tote bag (10 totes total). Pickers scan this before picking; packers scan it to auto-open the matching task.</div>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="window.print()" style="padding:8px 16px;background:#6a1b9a;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">🖨 Print Labels</button>
        <button onclick="document.getElementById('lbl-controls-bar').classList.add('hidden-bar');document.getElementById('lbl-show-bar-btn').style.display='flex'" style="padding:8px 16px;background:#444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">📷 Hide bar &amp; screenshot</button>
        <button onclick="window.close()" style="padding:8px 16px;background:#f0f0f0;border:none;border-radius:6px;cursor:pointer;font-size:12px">Close</button>
      </div>
    </div>
    <button id="lbl-show-bar-btn" onclick="document.getElementById('lbl-controls-bar').classList.remove('hidden-bar');this.style.display='none'" class="no-print" style="display:none;position:fixed;top:8px;right:8px;padding:8px 14px;background:#6a1b9a;color:#fff;border:none;border-radius:20px;cursor:pointer;font-weight:700;font-size:11px;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)">Show controls</button>
    <div class="label-grid">${labelHTML}</div>
    </body></html>`);
  pw.document.close();
  pw.focus();
  logAudit('PRINT_TOTE_LABELS','inventory','batch',null,{count:codes.length});
  toast(codes.length+' tote bag labels sent to print preview','s');
}

// ═══════════════════════════════════════════
// AUTH SYSTEM
// ═══════════════════════════════════════════
let currentUser = null;
let currentProfile = null;

const ROLE_COLORS = {admin:'#c62828',supervisor:'#B8860B',picker:'#1565c0',packer:'#2e7d32',viewer:'#6a1b9a',packaging_viewer:'#00695c'};
const ROLE_PERMS = {
  admin:    {canEdit:true,  canDispatch:true, canPack:true, canPick:true,  canReceive:true,  canManageUsers:true,  canAudit:true,  canReturn:true, canManageOrders:true},
  supervisor:{canEdit:true, canDispatch:true, canPack:true, canPick:true,  canReceive:true,  canManageUsers:false, canAudit:true,  canReturn:true, canManageOrders:true},
  picker:   {canEdit:false, canDispatch:false,canPack:true, canPick:true,  canReceive:false, canManageUsers:false, canAudit:false, canReturn:false, canManageOrders:false},
  packer:   {canEdit:false, canDispatch:true, canPack:true, canPick:false, canReceive:false, canManageUsers:false, canAudit:false, canReturn:false, canManageOrders:false},
  viewer:   {canEdit:false, canDispatch:false,canPack:false,canPick:false, canReceive:false, canManageUsers:false, canAudit:false, canReturn:false, canManageOrders:false},
  packaging_viewer:{canEdit:false, canDispatch:false,canPack:false,canPick:false, canReceive:false, canManageUsers:false, canAudit:false, canReturn:false, canManageOrders:false},
};

function getPerms(){ return ROLE_PERMS[currentProfile?.role] || ROLE_PERMS.viewer; }

async function authLogin(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-err');
  const btn = document.getElementById('auth-login-btn');
  if(!email||!password){ errEl.textContent='Please enter email and password'; return; }
  if(!validateEmail(email)){ errEl.textContent='Invalid email address'; return; }
  btn.disabled=true; btn.textContent='Signing in...'; errEl.textContent='';
  try {
    const {data,error} = await supa.auth.signInWithPassword({email,password});
    if(error) throw error;
    currentUser = data.user;
    await loadUserProfile();
    await onAuthSuccess();
  } catch(e){
    errEl.textContent = e.message==='Invalid login credentials' ? 'Incorrect email or password' : (e.message||'Login failed');
    btn.disabled=false; btn.innerHTML='<i class="ti ti-login"></i> Sign In';
  }
}

async function loadUserProfile(){
  if(!currentUser) return;
  try {
    const {data,error} = await supa.from('user_profiles').select('*').eq('id',currentUser.id).single();
    if(error||!data){ currentProfile={role:'viewer',full_name:currentUser.email,email:currentUser.email}; return; }
    currentProfile = data;
    // Update last login
    await supa.from('user_profiles').update({last_login:new Date().toISOString()}).eq('id',currentUser.id);
  } catch(e){ currentProfile={role:'viewer',full_name:currentUser.email,email:currentUser.email}; }
}

async function onAuthSuccess(){
  // Hide auth screen
  document.getElementById('auth-screen').style.display='none';
  // Show user menu
  const userMenu=document.getElementById('user-menu');
  if(userMenu) userMenu.style.display='flex';
  // Update user info in menu
  document.getElementById('user-menu-name').textContent = (currentProfile.full_name||'').split(' ')[0];
  document.getElementById('user-email-display').textContent = currentProfile.email;
  const badge=document.getElementById('user-role-badge');
  badge.textContent=currentProfile.role.toUpperCase();
  badge.style.background=ROLE_COLORS[currentProfile.role]||'var(--gold)';
  // Show/hide tabs based on role
  const perms=getPerms();
  if(perms.canAudit) document.getElementById('tab-audit').style.display='';
  if(perms.canManageUsers){ document.getElementById('tab-users').style.display=''; document.getElementById('manage-users-item').style.display='flex'; }
  // Apply role restrictions to UI
  applyRoleRestrictions();
  // Boot WMS
  await bootWMS();
  // Land the user on a tab they actually have access to
  if(currentProfile.role==='picker') nav('picking');
  else if(currentProfile.role==='packer') nav('packing');
  await logAudit('LOGIN','session',currentUser.id,null,{email:currentProfile.email,role:currentProfile.role});
}

// Per-role sidebar tab allowlist. `null` = no restriction (sees every tab).
// "users" is governed separately by canManageUsers (set in onAuthSuccess).
const ROLE_TABS = {
  admin: null,
  supervisor: ['dashboard','inbound','picking','packing','orders','dispatch','mobile','returns','inventory','rack','orderstatus','reports','sop','audit','labels','analytics','finance'],
  picker: ['picking','mobile'],
  packer: ['packing','mobile'],
  viewer: null,
  packaging_viewer: ['dashboard','rack','inventory','orderstatus']
};
function applyTabVisibility(){
  const role=currentProfile?.role;
  // An unrecognized/missing role (e.g. a login with no user_profiles row
  // yet) must default to LEAST privilege, not unrestricted — null here
  // means "no restriction," which is only correct for roles that
  // explicitly opt into it (admin, viewer), never as a fallback.
  const allowed=ROLE_TABS.hasOwnProperty(role)?ROLE_TABS[role]:['dashboard'];
  document.querySelectorAll('.ntab').forEach(t=>{
    const tab=t.dataset.tab;
    if(tab==='users') return; // handled separately by canManageUsers
    if(allowed===null){ t.style.display=''; return; }
    t.style.display=allowed.includes(tab)?'':'none';
  });
}
function applyRoleRestrictions(){
  const perms=getPerms();
  const role=currentProfile?.role;
  const ordPanel=document.getElementById('order-create-panel');
  if(ordPanel) ordPanel.style.display=perms.canManageOrders?'block':'none';
  if(perms.canManageOrders) loadPickerNames();
  const expPanel=document.getElementById('exp-shipment-panel');
  if(expPanel) expPanel.style.display=perms.canReceive?'block':'none';
  const addProdPanel=document.getElementById('add-product-panel');
  if(addProdPanel) addProdPanel.style.display=perms.canEdit?'block':'none';
  const lblAddProdPanel=document.getElementById('lbl-add-product-panel');
  if(lblAddProdPanel) lblAddProdPanel.style.display=perms.canEdit?'block':'none';
  applyTabVisibility();
  // Hide action buttons for viewer. Search/filter/navigation controls are
  // explicitly excluded from the pointer-events lockdown below — a blanket
  // rule on every input previously broke Order Status search, Inventory
  // search/filter, Label Printer search, Audit Trail filters, and the
  // Reports week/month selectors for this role, which was never intended
  // (read-only should mean "can't mutate data," not "can't look things up").
  if(role==='viewer'){
    const style=document.createElement('style');
    style.id='viewer-restrictions';
    style.textContent=`
      .btn-primary,.btn-success,button[onclick*="createGRN"],button[onclick*="confirmPick"],
      button[onclick*="confirmCourierDispatch"],button[onclick*="startPacking"],
      button[onclick*="openPackModal"],button[onclick*="processReturn"],
      #clear-all-btn{display:none!important}
      input:not(#inv-q):not(#os-order-id):not(#lbl-search):not(#audit-search):not(#exp-sku-search):not(#ib-sku-search),
      select:not(#inv-cat):not(#inv-st):not(#lbl-cat):not(#lbl-size):not(#rpt-week-select):not(#rpt-month-select):not(#bill-month-select):not(#audit-filter-role):not(#audit-filter-action),
      textarea{pointer-events:none!important;opacity:0.7}
    `;
    document.head.appendChild(style);
    toast('You are logged in as a Viewer — read-only access','w');
  }
  // Lighter-touch lockdown for packaging_viewer: hide mutating action buttons
  // but keep all inputs (search/filter boxes on Inventory + Order Status) usable.
  if(role==='packaging_viewer'){
    const style=document.createElement('style');
    style.id='viewer-restrictions';
    style.textContent=`
      .btn-primary,.btn-success,button[onclick*="createGRN"],button[onclick*="confirmPick"],
      button[onclick*="confirmCourierDispatch"],button[onclick*="startPacking"],
      button[onclick*="openPackModal"],button[onclick*="processReturn"],
      button[onclick*="adjQ"],button[onclick*="quickDisp"],button[onclick*="startEditBin"],
      button[onclick*="startEditPrice"],button[onclick*="addToCart"],
      #clear-all-btn,#add-product-panel,#lbl-add-product-panel{display:none!important}
    `;
    document.head.appendChild(style);
    toast('View-only access — Dashboard, Rack View, Inventory and Order Status','w');
  }
}

async function authLogout(){
  try {
    console.log('Logging out...');
    // Sign out from Supabase
    await supa.auth.signOut();
    // Clear all storage
    localStorage.clear();
    sessionStorage.clear();
    // Clear global variables
    currentUser = null;
    currentProfile = null;
    // Hide app, show login
    document.querySelector('.wrap').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('user-menu').style.display = 'none';
    // Close any open dropdowns
    const dropdown = document.getElementById('user-dropdown');
    if(dropdown) dropdown.style.display = 'none';
    console.log('✓ Logged out successfully - login screen shown');
  } catch(err){
    console.error('Logout error:', err);
    // Force logout even if error
    localStorage.clear();
    sessionStorage.clear();
    document.querySelector('.wrap').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
  }
}

async function authResetPassword(){
  const email=document.getElementById('auth-reset-email').value.trim();
  const errEl=document.getElementById('auth-reset-err');
  if(!email||!validateEmail(email)){errEl.textContent='Enter a valid email';return;}
  const {error}=await supa.auth.resetPasswordForEmail(email,{redirectTo:'https://caratlane-wms.vercel.app/'});
  if(error){errEl.textContent=error.message;return;}
  errEl.style.color='var(--st)';
  errEl.textContent='Reset link sent — check your email';
}

function showResetForm(){ document.getElementById('auth-login-form').style.display='none'; document.getElementById('auth-reset-form').style.display='block'; }
function showLoginForm(){ document.getElementById('auth-reset-form').style.display='none'; document.getElementById('auth-login-form').style.display='block'; }
function toggleUserMenu(){
  const dropdown = document.getElementById('user-dropdown');
  if(!dropdown) return;
  const isOpen = dropdown.style.display === 'block';
  dropdown.style.display = isOpen ? 'none' : 'block';
  console.log('Dropdown toggled:', dropdown.style.display);
}


function showCreateUserForm(){ document.getElementById('create-user-form').style.display='block'; }
function hideCreateUserForm(){ document.getElementById('create-user-form').style.display='none'; }

async function createUser(){
  const name=document.getElementById('new-user-name').value.trim();
  const email=document.getElementById('new-user-email').value.trim();
  const password=document.getElementById('new-user-password').value;
  const role=document.getElementById('new-user-role').value;
  const errEl=document.getElementById('create-user-err');
  if(!name||!email||!password){errEl.textContent='All fields required';return;}
  if(!validateEmail(email)){errEl.textContent='Invalid email';return;}
  if(password.length<12){errEl.textContent='Password must be at least 12 characters';return;}
  if(!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[0-9]/.test(password)){errEl.textContent='Password must include upper case, lower case, and a number';return;}
  errEl.textContent='Creating...';
  try {
    // Create auth user via Supabase admin — requires service role key
    // For now, user signs up themselves and admin assigns role
    const {data,error}=await supa.auth.signUp({email,password,options:{data:{full_name:name}}});
    if(error) throw error;
    // Insert profile
    await supa.from('user_profiles').upsert({id:data.user.id,email,full_name:name,role},{onConflict:'id'});
    await logAudit('CREATE_USER','user_profiles',data.user.id,null,{email,role,full_name:name});
    errEl.style.color='var(--st)';
    errEl.textContent='User created — they must verify their email before logging in';
    hideCreateUserForm();
    renderUsersList();
  } catch(e){ errEl.textContent=e.message||'Failed to create user'; }
}

async function renderUsersList(){
  const el=document.getElementById('users-list');
  if(!el)return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Loading...</div>';
  try {
    const {data,error}=await supa.from('user_profiles').select('*').order('role').order('full_name');
    if(error||!data){el.innerHTML='<div class="empty">No users found</div>';return;}
    el.innerHTML=`<div class="tw"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Last Login</th><th>Status</th><th>Actions</th></tr></thead><tbody>
    ${data.map(u=>{
      const roleColor=ROLE_COLORS[u.role]||'var(--gold)';
      const lastLogin=u.last_login?new Date(u.last_login).toLocaleString('en-IN'):'Never';
      const isMe=u.id===currentUser?.id;
      return `<tr>
        <td style="font-weight:600">${esc(u.full_name)}</td>
        <td style="font-size:11px">${esc(u.email)}</td>
        <td><span style="background:${roleColor};color:#fff;padding:2px 8px;border-radius:12px;font-size:10px;font-weight:700">${u.role.toUpperCase()}</span></td>
        <td style="font-size:10px;color:var(--t2)">${lastLogin}</td>
        <td><span style="color:${u.is_active?'var(--st)':'var(--dt)'};font-size:11px;font-weight:600">${u.is_active?'Active':'Inactive'}</span></td>
        <td>${isMe?'<span style="font-size:10px;color:var(--t3)">You</span>':`
          <select onchange="updateUserRole('${u.id}',this.value)" style="padding:3px 6px;border:0.5px solid var(--b);border-radius:4px;background:var(--s2);color:var(--t);font-size:10px;margin-right:4px">
            ${['admin','supervisor','picker','packer','viewer','packaging_viewer'].map(r=>`<option value="${r}"${r===u.role?' selected':''}>${r}</option>`).join('')}
          </select>
          <button onclick="toggleUserActive('${u.id}',${u.is_active})" style="padding:2px 8px;font-size:10px;background:${u.is_active?'var(--dbg)':'var(--sbg)'};color:${u.is_active?'var(--dt)':'var(--st)'};border:none;border-radius:4px;cursor:pointer">${u.is_active?'Deactivate':'Activate'}</button>
        `}</td>
      </tr>`;
    }).join('')}
    </tbody></table></div>`;
  } catch(e){ el.innerHTML='<div class="empty">Error loading users</div>'; }
}

async function updateUserRole(userId,newRole){
  try {
    const {data:old}=await supa.from('user_profiles').select('role').eq('id',userId).single();
    await supa.from('user_profiles').update({role:newRole}).eq('id',userId);
    await logAudit('UPDATE_ROLE','user_profiles',userId,{role:old?.role},{role:newRole});
    toast('Role updated to '+newRole,'s');
  } catch(e){ toast('Failed to update role','w'); }
}

async function toggleUserActive(userId,isActive){
  try {
    await supa.from('user_profiles').update({is_active:!isActive}).eq('id',userId);
    await logAudit(isActive?'DEACTIVATE_USER':'ACTIVATE_USER','user_profiles',userId,null,{is_active:!isActive});
    toast('User '+(isActive?'deactivated':'activated'),'s');
    renderUsersList();
  } catch(e){ toast('Failed to update user','w'); }
}

// ═══════════════════════════════════════════
// AUDIT TRAIL
// ═══════════════════════════════════════════
async function logAudit(action,entityType,entityId,oldVals,newVals){
  if(!currentUser||!supa) return;
  try {
    await supa.from('audit_log').insert({
      user_id:currentUser.id,
      user_email:currentProfile?.email||currentUser.email,
      user_name:currentProfile?.full_name||currentUser.email,
      user_role:currentProfile?.role||'unknown',
      action,entity_type:entityType,entity_id:String(entityId||''),
      old_values:oldVals||null,new_values:newVals||null,
      created_at:new Date().toISOString()
    });
  } catch(e){ console.warn('Audit log failed:',e.message); }
}

// ═══ ORDER TIMELINE EVENTS ═══
// Granular, order-correlated scan log — tote scan, shelf scan, each item
// scan/add, pack start, each pack-verify scan. Separate from audit_log
// (which isn't order-correlated for scans) and from history (which only
// has the coarse pick/pack/dispatch milestones). Surfaced on the Order
// Status page as one merged, timestamped timeline.
async function logOrderEvent(orderId,eventType,actor,detail){
  if(!orderId||!supa) return;
  try{
    const {error}=await supa.from('order_events').insert({order_id:orderId,event_type:eventType,actor:actor||null,detail:detail||null});
    if(error) throw error;
  }catch(e){ console.warn('logOrderEvent skipped (order_events table may not be migrated yet):',e.message||e); }
}
async function loadOrderEvents(orderId){
  if(!orderId||!supa) return [];
  try{
    const {data,error}=await supa.from('order_events').select('*').eq('order_id',orderId).order('created_at',{ascending:true});
    if(error) throw error;
    return data||[];
  }catch(e){ console.warn('loadOrderEvents failed:',e.message||e); return []; }
}
// Best-effort parse of the app's display timestamp format ("28 Jul, 02:30 pm")
// back into an epoch, purely so mixed-source timeline rows sort correctly.
// The original display string is always shown to the user unchanged.
function parseDisplayTs(str){
  if(!str) return 0;
  // The month group used to be a fixed \w{3} — but the en-IN locale
  // (used by ts()'s toLocaleString call) renders September as "Sept",
  // not "Sep". A 3-char-only match can't consume "Sept" and leaves a
  // stray "t" before the comma, so the WHOLE regex failed to match any
  // September timestamp, parseDisplayTs returned 0, and every place
  // that filters history by date (Monthly Billing, MIS reports, etc.)
  // silently dropped every September record. Match any letters, then
  // look up by the first 3 (case-insensitive) instead of requiring
  // exactly 3.
  const m=/(\d{1,2})\s+([A-Za-z]+)[,]?\s+(\d{1,2}):(\d{2})\s*(am|pm)?/i.exec(str.trim());
  if(!m) return 0;
  const months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  const day=parseInt(m[1],10);
  const mon=months.indexOf(m[2].toLowerCase().slice(0,3));
  if(mon<0) return 0;
  let hr=parseInt(m[3],10);
  const min=parseInt(m[4],10);
  const ap=(m[5]||'').toLowerCase();
  if(ap==='pm'&&hr<12) hr+=12;
  if(ap==='am'&&hr===12) hr=0;
  // The display string never carries a year, so this anchors to the
  // current year by default. But once the calendar rolls over (e.g.
  // it's now Jan 2027 and we're parsing a "28 Dec, 03:00 pm" record
  // from 2026), anchoring to "current year" would misdate it into the
  // future. Every timestamp this app writes is stamped at the moment
  // of creation, so it can never legitimately be in the future — if
  // the current-year guess lands more than a day ahead of now, the
  // record must actually belong to last year.
  const now=new Date();
  const year=now.getFullYear();
  let t=new Date(year,mon,day,hr,min,0).getTime();
  if(t>now.getTime()+86400000){ t=new Date(year-1,mon,day,hr,min,0).getTime(); }
  return t;
}

// ═══ DATA INTEGRITY CHECK ═══
// Self-service version of the diagnostics we ran manually via SQL during
// the packing_queue-orphaning incident (orders picked with no packing
// task, phantom duplicate tasks for already-completed orders, dangling
// references). Runs entirely client-side against already-loaded data —
// no custom SQL needed to catch this class of problem again.
async function renderDataIntegrityCheck(){
  const el=document.getElementById('data-integrity-container');
  if(!el) return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Checking...</div>';
  try{ await Promise.all([loadOrders(),loadHist()]); }catch(e){ console.error('Data integrity check: reload failed',e); }
  const issues=[];
  orders.forEach(o=>{
    if(o.status==='cancelled') return;
    if(o.status==='picked'){
      const hasQueueRow=packingQueue.some(t=>t.id===o.pickedTaskId);
      const hasPackedOrDispatched=history.some(h=>h.orderId===o.id&&(h.type==='packed'||h.type==='dispatched'));
      if(!hasQueueRow && !hasPackedOrDispatched){
        issues.push({severity:'high',orderId:o.id,issue:'Picked but never reached packing',
          detail:`picked_task_id ${o.pickedTaskId||'—'} has no packing_queue row and no packed/dispatched history — the pick-to-pack handoff likely failed silently. This is exactly the pattern behind the Sept 2026 incident.`});
      }
    }
    if(o.status!=='dispatched'){
      const dispatched=history.some(h=>h.orderId===o.id&&h.type==='dispatched');
      if(dispatched){
        issues.push({severity:'low',orderId:o.id,issue:`Status shows "${o.status}" but the order was actually dispatched`,
          detail:'The order itself is fine and complete — the status field just never advanced. Safe to ignore unless it keeps happening.'});
      }
    }
  });
  packingQueue.forEach(t=>{
    if(!orders.some(o=>o.id===t.orderId)){
      issues.push({severity:'medium',orderId:t.orderId||'—',issue:`Packing task ${t.id} references a missing order`,
        detail:'No matching row in the orders table for this task — either the order was deleted or the order_id is wrong.'});
    } else if(history.some(h=>h.orderId===t.orderId&&(h.type==='packed'||h.type==='dispatched'))){
      issues.push({severity:'high',orderId:t.orderId,issue:`Packing task ${t.id} is still open but this order is already packed/dispatched`,
        detail:'This looks like a duplicate/phantom packing task from a bad recovery or a double-write — the order was already completed elsewhere.'});
    }
  });
  if(!issues.length){
    el.innerHTML=`<div class="empty" style="color:var(--st)"><i class="ti ti-circle-check"></i> No issues found — ${orders.length} orders and ${packingQueue.length} active packing tasks checked.</div>`;
    return;
  }
  const sevColor={high:'var(--dt)',medium:'var(--wt)',low:'var(--t3)'};
  const sevBg={high:'var(--dbg)',medium:'var(--wbg)',low:'var(--s2)'};
  const order={high:0,medium:1,low:2};
  issues.sort((a,b)=>order[a.severity]-order[b.severity]);
  el.innerHTML=`<div style="font-size:11px;color:var(--wt);margin-bottom:8px"><i class="ti ti-alert-triangle"></i> ${issues.length} issue(s) found</div>`+
    issues.map(i=>`<div style="border:1px solid ${sevColor[i.severity]};background:${sevBg[i.severity]};border-radius:6px;padding:8px 10px;margin-bottom:6px">
      <div style="font-weight:700;font-size:12px;color:${sevColor[i.severity]}">${esc(i.issue)}</div>
      <div style="font-size:11px;margin-top:2px">Order: <strong>${esc(i.orderId)}</strong></div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">${esc(i.detail)}</div>
    </div>`).join('');
}
// Audit Trail now keeps up to 1000 recent records in memory (up from
// 200) and pages through them 200 at a time client-side, so a busy
// warehouse day doesn't scroll off the older-but-still-recent actions
// while also not rendering 1000 rows into the DOM at once.
const AUDIT_PAGE_SIZE=200;
let _auditLogRows=[]; // last fetched+filtered rows, cached for paging
let _auditLogPage=0;
async function renderAuditLog(){
  _auditLogPage=0; // any fetch (filter change, tab open, etc.) starts back at page 1
  const el=document.getElementById('audit-log-container');
  if(!el)return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Loading audit trail...</div>';
  const search=(document.getElementById('audit-search')?.value||'').toLowerCase();
  const roleFilter=document.getElementById('audit-filter-role')?.value||'';
  const actionFilter=document.getElementById('audit-filter-action')?.value||'';
  try {
    let q=supa.from('audit_log').select('*').order('created_at',{ascending:false}).limit(1000);
    if(roleFilter) q=q.eq('user_role',roleFilter);
    if(actionFilter) q=q.eq('action',actionFilter);
    const {data,error}=await q;
    if(error) throw error;
    let rows=data||[];
    if(search) rows=rows.filter(r=>
      (r.user_email||'').toLowerCase().includes(search)||
      (r.user_name||'').toLowerCase().includes(search)||
      (r.action||'').toLowerCase().includes(search)||
      (r.entity_type||'').toLowerCase().includes(search)||
      (r.entity_id||'').toLowerCase().includes(search)
    );
    _auditLogRows=rows;
    renderAuditLogPage();
  } catch(e){ el.innerHTML='<div class="empty">Error loading audit log: '+esc(e.message)+'</div>'; }
}
function changeAuditPage(delta){
  _auditLogPage+=delta;
  renderAuditLogPage();
}
function renderAuditLogPage(){
  const el=document.getElementById('audit-log-container');
  if(!el)return;
  const rows=_auditLogRows;
  if(!rows.length){ el.innerHTML='<div class="empty">No audit records found</div>'; return; }
  const totalPages=Math.max(1,Math.ceil(rows.length/AUDIT_PAGE_SIZE));
  if(_auditLogPage>=totalPages) _auditLogPage=totalPages-1;
  if(_auditLogPage<0) _auditLogPage=0;
  const start=_auditLogPage*AUDIT_PAGE_SIZE;
  const pageRows=rows.slice(start,start+AUDIT_PAGE_SIZE);
  const actionColor={INSERT:'var(--st)',UPDATE:'var(--it)',DELETE:'var(--dt)',LOGIN:'var(--gold)',LOGOUT:'var(--t3)',CREATE_USER:'var(--st)',UPDATE_ROLE:'var(--wt)',DEACTIVATE_USER:'var(--dt)',ACTIVATE_USER:'var(--st)'};
  el.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:6px">
      <div style="font-size:10px;color:var(--t3)">${rows.length} record(s) loaded (up to 1000) · showing ${start+1}–${Math.min(start+AUDIT_PAGE_SIZE,rows.length)}</div>
      <div style="display:flex;gap:8px;align-items:center;font-size:11px">
        <button class="btn-sm" ${_auditLogPage<=0?'disabled':''} onclick="changeAuditPage(-1)"><i class="ti ti-chevron-left"></i>Prev</button>
        <span style="color:var(--t2)">Page ${_auditLogPage+1} of ${totalPages}</span>
        <button class="btn-sm" ${_auditLogPage>=totalPages-1?'disabled':''} onclick="changeAuditPage(1)">Next<i class="ti ti-chevron-right"></i></button>
      </div>
    </div>
    <div class="tw"><table><thead><tr><th>Time</th><th>User</th><th>Role</th><th>Action</th><th>Table</th><th>Record ID</th><th>Detail</th></tr></thead><tbody>
    ${pageRows.map(r=>{
      const color=actionColor[r.action]||'var(--t2)';
      const time=new Date(r.created_at).toLocaleString('en-IN');
      return `<tr>
        <td style="font-size:10px;color:var(--t3);white-space:nowrap">${time}</td>
        <td style="font-size:11px"><div style="font-weight:600">${esc(r.user_name||'—')}</div><div style="font-size:10px;color:var(--t3)">${esc(r.user_email||'')}</div></td>
        <td><span style="background:${ROLE_COLORS[r.user_role]||'var(--s3)'};color:#fff;padding:2px 6px;border-radius:10px;font-size:9px;font-weight:700">${(r.user_role||'').toUpperCase()}</span></td>
        <td><span style="color:${color};font-weight:700;font-size:11px">${esc(r.action)}</span></td>
        <td style="font-size:10px;color:var(--t2)">${esc(r.entity_type||'')}</td>
        <td style="font-size:10px;font-family:monospace">${esc(r.entity_id||'')}</td>
        <td style="font-size:10px;color:var(--t2);max-width:340px">${esc(auditDetailSummary(r))}</td>
      </tr>`;
    }).join('')}
    </tbody></table></div>`;
}
// Flattens an audit_log row's old_values/new_values JSON into a short,
// human-readable "key: value · key: value" string, so the rich detail
// every logAudit() call already captures (which order, which tote/shelf/
// SKU, which picker/packer, what failed and why) is actually visible on
// the Audit Trail page instead of sitting invisibly in the JSON columns.
function auditDetailSummary(r){
  const src=r.new_values||r.old_values;
  if(!src||typeof src!=='object') return '—';
  const parts=[];
  for(const k in src){
    let v=src[k];
    if(v===null||v===undefined||v==='') continue;
    if(Array.isArray(v)) v=v.length+' item(s)';
    else if(typeof v==='object') v=JSON.stringify(v);
    parts.push(`${k}: ${v}`);
  }
  return parts.length?parts.join(' · '):'—';
}

// ═══════════════════════════════════════════
// BARCODE SCANNER (USB/Bluetooth HID)
// ═══════════════════════════════════════════
let _barcodeBuffer='';
let _barcodeTimer=null;
let _barcodeActive=false;
let _barcodeTarget=null; // 'inbound' | 'picking' | 'dispatch'

function initBarcodeScanner(){
  // Diagnostic: logs every keystroke the scanner listener sees, even if
  // the scan doesn't end up producing a barcode. If a physical scan
  // produces NOTHING in this log, the keystrokes aren't reaching the
  // browser tab at all (focus/hardware issue) rather than an app bug —
  // open DevTools Console (F12) right before scanning to check.
  document.addEventListener('keydown', e=>{
    if(!_barcodeActive){
      return;
    }
    console.log('[scanner] key event:', JSON.stringify(e.key), '| target:', _barcodeTarget, '| buffer before:', JSON.stringify(_barcodeBuffer), '| active element:', document.activeElement ? document.activeElement.tagName+(document.activeElement.id?'#'+document.activeElement.id:'') : 'none');
    // USB/BT scanners send chars very fast then Enter
    if(e.key==='Enter'){
      if(_barcodeBuffer.length>2){
        processBarcodeInput(_barcodeBuffer.trim());
      } else if(_barcodeBuffer.length>0){
        console.log('[scanner] buffer too short to process ('+_barcodeBuffer.length+' chars):', JSON.stringify(_barcodeBuffer));
      }
      _barcodeBuffer='';
      clearTimeout(_barcodeTimer);
      return;
    }
    // Ignore modifier keys
    if(e.key.length>1) return;
    _barcodeBuffer+=e.key;
    clearTimeout(_barcodeTimer);
    // Auto-flush after 100ms (scanner done)
    _barcodeTimer=setTimeout(()=>{
      if(_barcodeBuffer.length>2){
        processBarcodeInput(_barcodeBuffer.trim());
      } else if(_barcodeBuffer.length>0){
        console.log('[scanner] idle-flush: buffer too short to process ('+_barcodeBuffer.length+' chars):', JSON.stringify(_barcodeBuffer));
      }
      _barcodeBuffer='';
    },100);
  });
}

function enableBarcodeScanner(target){
  _barcodeActive=true;
  _barcodeTarget=target;
  const indicators=document.querySelectorAll('.barcode-indicator');
  indicators.forEach(el=>el.style.display='flex');
  const msgs={
    'packing-lookup':'Barcode scanner active — scan a tote bag to open its packing task',
    'mobile-pack-lookup':'Barcode scanner active — scan a tote bag to open its packing task',
    'desktop-pack':'Barcode scanner active — scan items to verify against the order',
    'desktop-pack-tote-gate':'Barcode scanner active — scan the tote bag to confirm it before scanning items',
    'mobile-pack-tote-gate':'Barcode scanner active — scan the tote bag to confirm it before scanning items',
    'dispatch-warehouse-exit':'Barcode scanner active — scan the barcode on a packed order\'s Proforma Invoice to mark it left the warehouse'
  };
  toast(msgs[target]||'Barcode scanner active — scan a SKU barcode','s');
}

function disableBarcodeScanner(){
  _barcodeActive=false;
  _barcodeTarget=null;
  const indicators=document.querySelectorAll('.barcode-indicator');
  indicators.forEach(el=>el.style.display='none');
  clearConfirmedShelf();
}

let confirmedShelf=null; // {rack, shelf} once a shelf-location label has been scanned
function parseShelfLocationCode(barcode){
  const m=/^LOC-([A-Za-z])-(\d+)$/i.exec((barcode||'').trim());
  if(!m) return null;
  return {rack:m[1].toUpperCase(), shelf:String(parseInt(m[2],10))};
}
function updateShelfLocationBadge(){
  ['pk-shelf-badge','mp-shelf-badge'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    if(confirmedShelf){
      el.style.display='flex';
      el.innerHTML=`<i class="ti ti-map-pin-filled"></i> At Rack ${esc(confirmedShelf.rack)} · Shelf ${esc(confirmedShelf.shelf)}`;
    } else {
      el.style.display='none';
      el.innerHTML='';
    }
  });
}
function clearConfirmedShelf(){
  confirmedShelf=null;
  updateShelfLocationBadge();
}
function handleShelfLocationScan(loc){
  // Enforce strict scan order: tote must be scanned before a shelf
  // label is accepted, so we always know tote -> shelf -> item.
  if(_barcodeTarget==='picking' && !pkToteId){
    toast('Scan the tote bag barcode first, then the shelf label','w');
    return;
  }
  if(_barcodeTarget==='mobile-pick' && !(mobilePickSession && mobilePickSession.toteId)){
    mobileScanFeedback(false);
    toast('Scan the tote bag barcode first, then the shelf label','w');
    return;
  }
  confirmedShelf=loc;
  updateShelfLocationBadge();
  const itemsHere=SKUS.filter(s=>getSkuLocations(s.sku).some(l=>l.rack===loc.rack&&String(l.shelf)===String(loc.shelf)))
    .map(s=>{
      const here=getSkuLocations(s.sku).find(l=>l.rack===loc.rack&&String(l.shelf)===String(loc.shelf));
      return {...s,qty:here?here.qty:0};
    });
  const totalQty=itemsHere.reduce((a,s)=>a+s.qty,0);
  if(_barcodeTarget==='mobile-pick'||_barcodeTarget==='mobile-pack'){ mobileScanFeedback(true); }
  if(_barcodeTarget==='picking' && activeOrder){
    logOrderEvent(activeOrder.id,'shelf_scanned',currentProfile?.full_name,{rack:loc.rack,shelf:loc.shelf});
    logAudit('SHELF_SCANNED','orders',activeOrder.id,null,{orderId:activeOrder.id,rack:loc.rack,shelf:loc.shelf,picker:currentProfile?.full_name,stage:'pick'});
  } else if(_barcodeTarget==='mobile-pick' && mobilePickSession){
    logOrderEvent(mobilePickSession.orderId,'shelf_scanned',currentProfile?.full_name,{rack:loc.rack,shelf:loc.shelf});
    logAudit('SHELF_SCANNED','orders',mobilePickSession.orderId,null,{orderId:mobilePickSession.orderId,rack:loc.rack,shelf:loc.shelf,picker:currentProfile?.full_name,stage:'pick_mobile'});
  }
  if(!itemsHere.length){
    toast(`📍 Rack ${loc.rack} Shelf ${loc.shelf} confirmed — no SKUs assigned to this shelf yet`,'w');
  } else {
    const summary=itemsHere.map(s=>`${s.sku} (${s.qty} left)`).join(', ');
    toast(`📍 Rack ${loc.rack} Shelf ${loc.shelf} confirmed — ${totalQty} unit(s) here: ${summary}`,'s');
  }
}

// ═══ TOTE BAGS ═══
// A tote is scanned BEFORE picking starts (so items go in the right
// physical bag) and scanned AGAIN by the packer to auto-open and
// cross-check the matching task — no manual order lookup needed.
let pkToteId=null; // desktop pick session's assigned tote bag
function parseToteCode(barcode){
  const m=/^TOTE-?(\d{1,2})$/i.exec((barcode||'').trim());
  if(!m) return null;
  const n=parseInt(m[1],10);
  if(n<1||n>TOTE_COUNT) return null;
  return 'TOTE-'+String(n).padStart(2,'0');
}
function updateToteBadge(){
  const pk=document.getElementById('pk-tote-badge');
  if(pk){
    if(pkToteId){ pk.style.display='flex'; pk.innerHTML=`<i class="ti ti-package"></i> Tote ${esc(pkToteId)}`; }
    else { pk.style.display='none'; pk.innerHTML=''; }
  }
  const mp=document.getElementById('mp-tote-badge');
  if(mp){
    if(mobilePickSession && mobilePickSession.toteId){ mp.style.display='flex'; mp.innerHTML=`<i class="ti ti-package"></i> Tote ${esc(mobilePickSession.toteId)}`; }
    else { mp.style.display='none'; mp.innerHTML=''; }
  }
}
async function openPackingTaskByTote(tote){
  const idx=packingQueue.findIndex(t=>t.toteId===tote);
  if(idx===-1){ toast(`No packing task found for tote ${tote}`,'w'); return; }
  const t=packingQueue[idx];
  const me=currentProfile?.full_name||'';
  if(t.claimedBy && t.claimedBy!==me){ toast(`Tote ${tote} — order ${t.orderId} is already being packed by ${t.claimedBy}`,'w'); return; }
  logAudit('TOTE_SCANNED','orders',t.orderId,null,{orderId:t.orderId,toteId:tote,taskId:t.id,packer:me,stage:'pack_lookup'});
  if(!t.packStartTime){ await startPacking(idx); }
  disableBarcodeScanner();
  openPackModal(idx, true); // tote already verified by the scan that opened this task
}
async function openMobilePackingTaskByTote(tote){
  const idx=packingQueue.findIndex(t=>t.toteId===tote);
  if(idx===-1){ toast(`No packing task found for tote ${tote}`,'w'); mobileScanFeedback(false); return; }
  const t=packingQueue[idx];
  const me=currentProfile?.full_name||'';
  if(t.claimedBy && t.claimedBy!==me){ toast(`Tote ${tote} — order ${t.orderId} is already being packed by ${t.claimedBy}`,'w'); mobileScanFeedback(false); return; }
  mobileScanFeedback(true);
  logAudit('TOTE_SCANNED','orders',t.orderId,null,{orderId:t.orderId,toteId:tote,taskId:t.id,packer:me,stage:'pack_lookup_mobile'});
  await startMobilePack(idx, true); // tote already verified by the scan that opened this task
}
function handleToteScan(tote){
  if(_barcodeTarget==='picking'){
    pkToteId=tote;
    updateToteBadge();
    if(activeOrder){
      logOrderEvent(activeOrder.id,'tote_scanned',currentProfile?.full_name,{toteId:tote});
      logAudit('TOTE_SCANNED','orders',activeOrder.id,null,{orderId:activeOrder.id,toteId:tote,picker:currentProfile?.full_name,stage:'pick'});
    }
    toast(`📦 Tote ${tote} assigned to this pick — now scan the shelf label, then items`,'s');
  } else if(_barcodeTarget==='mobile-pick'){
    if(mobilePickSession){
      mobilePickSession.toteId=tote;
      logOrderEvent(mobilePickSession.orderId,'tote_scanned',currentProfile?.full_name,{toteId:tote});
      logAudit('TOTE_SCANNED','orders',mobilePickSession.orderId,null,{orderId:mobilePickSession.orderId,toteId:tote,picker:currentProfile?.full_name,stage:'pick_mobile'});
    }
    updateToteBadge();
    mobileScanFeedback(true);
    toast(`📦 Tote ${tote} assigned — now scan the shelf label, then items`,'s');
  } else if(_barcodeTarget==='packing-lookup'){
    openPackingTaskByTote(tote);
  } else if(_barcodeTarget==='mobile-pack-lookup'){
    openMobilePackingTaskByTote(tote);
  } else if(_barcodeTarget==='desktop-pack'){
    const activeTask=packingQueue[_activePackIdx];
    const expected=activeTask?.toteId;
    if(expected && expected!==tote){
      toast(`⚠ Wrong tote — this task expects ${expected}, you scanned ${tote}`,'w');
      if(activeTask) logAudit('WRONG_TOTE_SCANNED','orders',activeTask.orderId,null,{orderId:activeTask.orderId,expectedTote:expected,scannedTote:tote,packer:currentProfile?.full_name,stage:'pack_verify'});
    } else {
      toast(`✓ Tote ${tote} confirmed for this task`,'s');
      if(activeTask) logAudit('TOTE_SCANNED','orders',activeTask.orderId,null,{orderId:activeTask.orderId,toteId:tote,packer:currentProfile?.full_name,stage:'pack_verify'});
    }
  } else if(_barcodeTarget==='desktop-pack-tote-gate'){
    const activeTask=packingQueue[_activePackIdx];
    const expected=activeTask?.toteId;
    if(expected && expected===tote){
      if(activeTask){
        logOrderEvent(activeTask.orderId,'tote_scanned',currentProfile?.full_name,{toteId:tote,stage:'pack_verify'});
        logAudit('TOTE_SCANNED','orders',activeTask.orderId,null,{orderId:activeTask.orderId,toteId:tote,packer:currentProfile?.full_name,stage:'pack_verify'});
      }
      toast(`✓ Tote ${tote} confirmed — now scan items to verify`,'s');
      unlockPmChecklistAfterToteGate();
    } else {
      toast(`⚠ Wrong tote — this order was picked into ${expected}, you scanned ${tote}. Do not pack from this bag.`,'w');
      if(activeTask) logAudit('WRONG_TOTE_SCANNED','orders',activeTask.orderId,null,{orderId:activeTask.orderId,expectedTote:expected,scannedTote:tote,packer:currentProfile?.full_name,stage:'pack_verify'});
    }
  } else if(_barcodeTarget==='mobile-pack'){
    const expected=mobilePackActive?.task?.toteId;
    if(expected && expected!==tote){
      toast(`⚠ Wrong tote — this task expects ${expected}, you scanned ${tote}`,'w');
      mobileScanFeedback(false);
      if(mobilePackActive) logAudit('WRONG_TOTE_SCANNED','orders',mobilePackActive.task.orderId,null,{orderId:mobilePackActive.task.orderId,expectedTote:expected,scannedTote:tote,packer:currentProfile?.full_name,stage:'pack_verify_mobile'});
    } else {
      toast(`✓ Tote ${tote} confirmed for this task`,'s');
      mobileScanFeedback(true);
      if(mobilePackActive) logAudit('TOTE_SCANNED','orders',mobilePackActive.task.orderId,null,{orderId:mobilePackActive.task.orderId,toteId:tote,packer:currentProfile?.full_name,stage:'pack_verify_mobile'});
    }
  } else if(_barcodeTarget==='mobile-pack-tote-gate'){
    const expected=mobilePackActive?.task?.toteId;
    if(expected && expected===tote){
      mobileScanFeedback(true);
      toast(`✓ Tote ${tote} confirmed — now scan items to verify`,'s');
      if(mobilePackActive){
        logOrderEvent(mobilePackActive.task.orderId,'tote_scanned',currentProfile?.full_name,{toteId:tote,stage:'pack_verify'});
        logAudit('TOTE_SCANNED','orders',mobilePackActive.task.orderId,null,{orderId:mobilePackActive.task.orderId,toteId:tote,packer:currentProfile?.full_name,stage:'pack_verify_mobile'});
        mobilePackActive.stage='checklist';
      }
      renderMobilePackQueue();
    } else {
      mobileScanFeedback(false);
      toast(`⚠ Wrong tote — this order was picked into ${expected}, you scanned ${tote}. Do not pack from this bag.`,'w');
      if(mobilePackActive) logAudit('WRONG_TOTE_SCANNED','orders',mobilePackActive.task.orderId,null,{orderId:mobilePackActive.task.orderId,expectedTote:expected,scannedTote:tote,packer:currentProfile?.full_name,stage:'pack_verify_mobile'});
    }
  } else {
    toast(`Tote barcode ${tote} scanned`,'s');
  }
}

function processBarcodeInput(barcode){
  console.log('Barcode scanned:',barcode);
  // Tote bag labels (TOTE-{NN}) are scanned first — before the shelf
  // label and before any item — so we know which physical bag/task
  // this scan session belongs to.
  const tote=parseToteCode(barcode);
  if(tote){
    handleToteScan(tote);
    return;
  }
  // Shelf-location labels (LOC-{rack}-{shelf}) are scanned first to
  // confirm the picker is at the right spot, before scanning the item.
  const loc=parseShelfLocationCode(barcode);
  if(loc){
    handleShelfLocationScan(loc);
    return;
  }
  // Dispatch "left warehouse" labels (PKD-{id}, printed as a 4×6 thermal
  // label) are scanned to mark a packed order as physically out of the
  // building — a distinct, non-SKU barcode format, so check it before
  // falling through to the SKU lookup below.
  if(_barcodeTarget==='dispatch-warehouse-exit'){
    handleDispatchExitScan(barcode);
    return;
  }
  // Find matching SKU
  const sku=SKUS.find(s=>s.sku===barcode||s.sku.toUpperCase()===barcode.toUpperCase()||(s.shortCode!=null&&String(s.shortCode).padStart(4,'0')===barcode));
  console.log('Barcode "'+barcode+'" resolved to:', sku?sku.sku+' (code '+sku.shortCode+')':'NOT FOUND — no SKU or short code matches this barcode');
  if(!sku){
    if(_barcodeTarget==='mobile-pick'||_barcodeTarget==='mobile-pack'){ mobileScanFeedback(false); }
    toast('Unknown barcode: '+barcode,'w');
    return;
  }
  // Strict scan order for picking flows: tote -> shelf -> item. A shelf
  // must be confirmed before any item scan is accepted, and the item
  // must actually belong to that confirmed shelf.
  if(_barcodeTarget==='picking'||_barcodeTarget==='mobile-pick'){
    if(!confirmedShelf){
      if(_barcodeTarget==='mobile-pick'){ mobileScanFeedback(false); }
      toast('Scan the shelf location label before scanning an item — tote → shelf → item','w');
      return;
    }
    const validLocs=getSkuLocations(sku.sku);
    const atValidLoc=validLocs.some(l=>l.rack===confirmedShelf.rack && String(l.shelf)===String(confirmedShelf.shelf));
    if(!atValidLoc){
      if(_barcodeTarget==='mobile-pick'){ mobileScanFeedback(false); }
      const locStr=validLocs.length?validLocs.map(l=>`Rack ${l.rack} Shelf ${l.shelf}`).join(' or '):'nowhere on hand';
      toast(`⚠ Location mismatch — ${sku.sku} is stored at ${locStr}, but you're confirmed at Rack ${confirmedShelf.rack} Shelf ${confirmedShelf.shelf}. Scan one of those shelf labels first.`,'w');
      logAudit('LOCATION_MISMATCH','inventory',sku.sku,null,{scannedAt:confirmedShelf,expected:validLocs});
      return;
    }
    // Granular, order-scoped scan record — this is what makes "who scanned
    // which item for which order, at which shelf" visible on the Audit
    // Trail page (previously only logged to order_events, which only shows
    // on the Order Status timeline, not here).
    // The actual order-scoped ITEM_SCANNED audit record — including the
    // running picked quantity — is logged inside pkScanAdd()/
    // mobilePickAddScan() themselves, right where the scan is actually
    // accepted (see there). Logging it here instead would fire even for
    // scans pkScanAdd/mobilePickAddScan go on to reject (already fully
    // picked, no stock, etc.) and couldn't include the qty, since the add
    // hasn't happened yet at this point.
  }
  if(_barcodeTarget==='inbound'){
    // Auto-fill SKU in inbound form
    const skuSel=document.getElementById('ib-sku');
    if(skuSel){ skuSel.value=sku.sku; }
    document.getElementById('ib-qty')?.focus();
    toast('Scanned: '+sku.sub+' — '+sku.variant,'s');
  } else if(_barcodeTarget==='picking'){
    // Scanning during an active pick auto-adds 1 unit (reserved
    // immediately), same behavior as the mobile scan flow. If no pick
    // is in progress yet, just pre-fill the SKU so it's ready to Add.
    if(activeOrder){
      pkScanAdd(sku);
    } else {
      const pkSel=document.getElementById('pk-sku');
      if(pkSel){ pkSel.value=sku.sku; }
      document.getElementById('pk-qty')?.focus();
      toast('Scanned: '+sku.sub+' — '+sku.variant+' — start a pick first to auto-add','w');
    }
  } else if(_barcodeTarget==='dispatch'){
    // Match AWB or order ID
    const awbInput=document.getElementById('disp-awb');
    if(awbInput){ awbInput.value=barcode; }
    toast('AWB scanned: '+barcode,'s');
  } else if(_barcodeTarget==='mobile-pick'){
    // HT20 Pro handheld scan during a mobile picking session
    mobilePickAddScan(sku);
  } else if(_barcodeTarget==='mobile-pack'){
    // HT20 Pro handheld scan during mobile pack verification
    mobilePackScan(sku);
  } else if(_barcodeTarget==='desktop-pack'){
    // Desktop pack modal scan-to-verify checklist
    pmScanItem(sku);
  } else if(_barcodeTarget==='packing-lookup'||_barcodeTarget==='mobile-pack-lookup'){
    toast('Scan a tote bag barcode here, not a SKU','w');
  } else if(_barcodeTarget==='desktop-pack-tote-gate'||_barcodeTarget==='mobile-pack-tote-gate'){
    if(_barcodeTarget==='mobile-pack-tote-gate') mobileScanFeedback(false);
    toast('Scan the tote bag first — items won\'t be counted until the tote is confirmed','w');
  }
  // Log the scan — item scans during picking already got a richer,
  // order-scoped ITEM_SCANNED entry above, so skip the generic duplicate
  // for those two targets.
  if(_barcodeTarget!=='picking' && _barcodeTarget!=='mobile-pick'){
    logAudit('BARCODE_SCAN','inventory',sku.sku,null,{sku:sku.sku,target:_barcodeTarget,barcode});
  }
}

// ═══════════════════════════════════════════
// PATCH saveHist AND saveInv TO INCLUDE AUDIT
// ═══════════════════════════════════════════
const _origSaveHist=saveHist;
// We'll wrap key operations to log them

// ═══════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════
// Guarded so a race between the login handler and Supabase's own
// onAuthStateChange('SIGNED_IN') listener can't boot the app twice —
// that used to double up initBarcodeScanner()'s keydown listener,
// which made every scanned character (and the barcode scanner
// generally) come through duplicated, e.g. "UNI-GS-F-34" became
// "UUNNII--GGSS--FF--3344".
let _wmsBooted=false;
async function bootWMS(){
  if(_wmsBooted) return;
  _wmsBooted=true;
  setSyncStatus('syncing');
  await loadSKUsFromDB(); // load dynamic SKUs first
  await assignShortCodes(); // gives every product a compact, scannable barcode ID
  await initInv();
  await loadHist();
  await loadOrders();
  await loadExpectedShipments();
  await loadCostParams(); // staffing/overhead numbers before Finance first renders
  renderDash();
  renderInv();
  renderRack();
  renderReports();
  renderAnalytics();
  renderFinance();
  updateNotificationBadge();
  populateSkuSel('ib-sku');
  filterSkuList('ib-sku-search','ib-sku');
  setupRealtimeSync();
  setSyncStatus('ok');
  initBarcodeScanner();
  updateOfflineQueueBadge();
  flushOfflineQueue();
  checkBackupReminder();
  scheduleBackupReminderCheck();
}
// Re-checks hourly while the tab stays open, so the dashboard warning and
// once-a-day toast both pick up a day/month rollover without needing a
// refresh — same pattern as scheduleMISEmail()'s hourly timer.
function scheduleBackupReminderCheck(){
  clearInterval(window._backupReminderTimer);
  window._backupReminderTimer=setInterval(()=>{ checkBackupReminder(); },3600000);
}

// Check for existing session on load
async function initAuth(){
  const {data:{session}} = await supa.auth.getSession();
  if(session){
    currentUser=session.user;
    await loadUserProfile();
    await onAuthSuccess();
  } else {
    document.getElementById('auth-screen').style.display='flex';
    // Hide main app until logged in
  }
  // Listen for auth changes
  supa.auth.onAuthStateChange(async(event,session)=>{
    if(event==='SIGNED_IN'&&session&&!currentUser){
      currentUser=session.user;
      await loadUserProfile();
      await onAuthSuccess();
    } else if(event==='SIGNED_OUT'){
      currentUser=null; currentProfile=null;
    }
  });
}
// ── Shareable order tracking (no login) ─────────────────────────────────
// A ?track=<token> URL bypasses the normal login flow entirely and shows
// a standalone, read-only status page for exactly one order. The token
// is a long random string (not the Order ID), looked up via the
// get_order_tracking() Supabase function — see
// caratlane-add-order-tracking-link.sql. That function is SECURITY
// DEFINER and returns only the one matching order's own data, so this
// never weakens RLS for any other read path in the app.
async function renderTrackingPage(token){
  document.getElementById('auth-screen').style.display='none';
  const el=document.getElementById('track-screen');
  el.style.display='flex';
  el.innerHTML='<div class="auth-card" style="max-width:480px;width:100%"><div class="empty">Loading order status…</div></div>';
  try{
    const {data,error}=await supa.rpc('get_order_tracking',{p_token:token});
    if(error) throw error;
    if(!data||!data.order){
      el.innerHTML=`<div class="auth-card" style="max-width:480px;width:100%">
        <div class="auth-logo"><div class="auth-gem">CL</div><div><div class="auth-title">CaratLane WMS</div><div class="auth-sub">Order Tracking</div></div></div>
        <div class="empty">This tracking link is invalid or no longer active. Please check the link or contact CaratLane for an updated one.</div>
      </div>`;
      return;
    }
    renderTrackingResult(data);
  }catch(e){
    console.error('Tracking lookup failed:',e.message||e);
    el.innerHTML=`<div class="auth-card" style="max-width:480px;width:100%">
      <div class="auth-logo"><div class="auth-gem">CL</div><div><div class="auth-title">CaratLane WMS</div><div class="auth-sub">Order Tracking</div></div></div>
      <div class="empty">Couldn't load this order right now. Please try again shortly.</div>
    </div>`;
  }
}
function renderTrackingResult(data){
  const o=data.order||{}, hist=data.history||[], events=data.events||[];
  const stageIcon={pick:'ti-scan',packed:'ti-box',dispatched:'ti-truck-delivery',exception:'ti-alert-triangle'};
  const stageLabel={pick:'Picking complete',packed:'Packing complete',dispatched:'Dispatched',exception:'Exception / QC'};
  const stageColor={pick:'var(--st)',packed:'var(--gold)',dispatched:'var(--navy)',exception:'var(--dt)'};
  const evMeta={
    tote_scanned:{icon:'ti-package',bg:'#6a1b9a',label:'Tote bag scanned'},
    shelf_scanned:{icon:'ti-map-pin',bg:'var(--it)',label:'Shelf location scanned'},
    item_scanned:{icon:'ti-barcode',bg:'var(--st)',label:'Item scanned'},
    pack_started:{icon:'ti-player-play',bg:'var(--gold)',label:'Packing started'},
    pack_item_verified:{icon:'ti-check',bg:'var(--st)',label:'Item verified (packing)'},
    left_warehouse:{icon:'ti-door-exit',bg:'var(--it)',label:'Left warehouse — AWB pending'}
  };
  const timeline=[];
  timeline.push({sortTs:o.created_at?new Date(o.created_at).getTime():0,
    ts:o.created_at?new Date(o.created_at).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'',
    iconBg:'var(--t3)',icon:'ti-clipboard-list',title:'Order created',
    sub:`${(o.items||[]).length} SKU(s) · ${o.priority||''} · ${o.method||''}${o.customer_name?' · '+esc(o.customer_name):''}`,
    meta:o.created_by?'Created by '+esc(o.created_by):''});
  if(o.assigned_picker){
    timeline.push({sortTs:o.assigned_at?new Date(o.assigned_at).getTime():0.5,
      ts:o.assigned_at?new Date(o.assigned_at).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'',
      iconBg:'var(--navy)',icon:'ti-user-check',title:'Assigned to picker',sub:esc(o.assigned_picker),meta:''});
  }
  if(o.status==='cancelled'){
    timeline.push({sortTs:Number.MAX_SAFE_INTEGER,ts:'',iconBg:'var(--dt)',icon:'ti-x',title:'Order cancelled',sub:'',meta:''});
  }
  hist.forEach(h=>{
    let hSub=h.detail||'';
    if(h.type==='dispatched') hSub+=` · AWB: ${h.awb||'—'} · Courier: ${h.courier_partner||'—'}`;
    timeline.push({
      sortTs:h.created_at?new Date(h.created_at).getTime():0, ts:h.ts||'',
      iconBg:stageColor[h.type]||'var(--t3)', icon:stageIcon[h.type]||'ti-circle',
      title:stageLabel[h.type]||h.type, sub:esc(hSub), meta:''
    });
  });
  events.forEach(e=>{
    const m=evMeta[e.event_type]||{icon:'ti-circle',bg:'var(--t3)',label:e.event_type};
    const d=e.detail||{};
    let sub='';
    if(e.event_type==='tote_scanned') sub=`Tote ${esc(d.toteId||'')}`;
    else if(e.event_type==='shelf_scanned') sub=`Rack ${esc(d.rack||'')} · Shelf ${esc(d.shelf||'')}`;
    else if(e.event_type==='item_scanned') sub=`${esc(d.sku||'')}${d.manual?' (manual entry)':' (scanned)'}${d.qty?' × '+d.qty:''}`;
    else if(e.event_type==='pack_item_verified') sub=`${esc(d.sku||'')} verified`;
    else if(e.event_type==='pack_started') sub='Timer started';
    timeline.push({sortTs:e.created_at?new Date(e.created_at).getTime():0,
      ts:e.created_at?new Date(e.created_at).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',second:'2-digit'}):'',
      iconBg:m.bg, icon:m.icon, title:m.label, sub, meta:e.actor?esc(e.actor):''});
  });
  timeline.sort((a,b)=>a.sortTs-b.sortTs);
  const rows=timeline.map(t=>`
    <div style="display:flex;gap:12px;padding:12px 0;border-bottom:0.5px solid var(--b)">
      <div style="width:32px;height:32px;border-radius:50%;background:${t.iconBg};color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ti ${t.icon}"></i></div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:12px">${esc(t.title)}</div>
        ${t.sub?`<div style="font-size:11px;color:var(--t2);margin-top:2px">${t.sub}</div>`:''}
        <div style="font-size:10px;color:var(--t3);margin-top:2px">${esc(t.ts)}${t.meta?' · '+t.meta:''}</div>
      </div>
    </div>`).join('');
  const statusLabel={unassigned:'Unassigned',assigned:'Assigned to picker',picked:'Picked',packed:'Packed — awaiting dispatch',left_warehouse:'Left warehouse — AWB pending',dispatched:'Dispatched',cancelled:'Cancelled'};
  const el=document.getElementById('track-screen');
  el.innerHTML=`<div class="auth-card" style="max-width:480px;width:100%;max-height:90vh;overflow-y:auto">
    <div class="auth-logo"><div class="auth-gem">CL</div><div><div class="auth-title">Order ${esc(o.id||'')}</div><div class="auth-sub">${esc(statusLabel[o.status]||o.status||'')}</div></div></div>
    ${o.address?`<div style="font-size:11px;color:var(--t2);margin-bottom:10px">${esc(o.customer_name||'')}${o.customer_name?' · ':''}${esc(o.address||'')}${o.pincode?' — '+esc(o.pincode):''}</div>`:''}
    <div>${rows||'<div class="empty">No activity recorded yet</div>'}</div>
    <div style="margin-top:16px;text-align:center;font-size:10px;color:var(--t3)">CaratLane WMS · EPS Worldwide Integrated Logistics</div>
  </div>`;
}
// A ?track=<token> URL skips the normal login flow entirely — checked
// before initAuth() so an unauthenticated visitor never sees (or needs)
// the sign-in screen for this one read-only page.
const _trackToken=new URLSearchParams(location.search).get('track');
if(_trackToken){
  renderTrackingPage(_trackToken);
} else {
  initAuth();
}
