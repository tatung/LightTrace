﻿//debug flags:isShowTspRaw = false;isShowUncontrolResistanceLayer = false;isMeanderLineEnable = true;isShowDraftRoute = false;isGetTSPRouteFromFile = true;//GA generation number_GA_GENERATION = 10000;_GA_CONVERGE_THRESHHOLD = 100;DEFAULT_SHEET_RESISTANCE = 0.13; // ohm/sqDEFAULT_VOLTAGE = 3; // VDEFAULT_FORWARD_VOLTAGE = 1.8; // VDEFAULT_FORWARD_CURRENT = 0.01; // ADEFAULT_RESISTANCE = 10; // ohmFV_R = 1.72;FV_Y = 1.9;FV_G = 1.95;FV_B = 3.25;IS_CONTROL_RESISTANCE = true;IS_ROUTE_LAYER_AT_TOP = true;IS_SELECTION_BASE_ROUTING = true;// if allow route a bunch of LEDs and power by selectiontrimNum = 3;REFINE_THRESHHOLD_ANGLE = 70;INDEX_ANODE = 1;INDEX_CATHODE = 0;INDEX_IN = 1;INDEX_OUT = 0;NODE_TYPE_LED = "LED";NODE_TYPE_POWER = "POW";pathChar = new Array("*", "・");highlightColor = new RGBColor();highlightColor.red = 0;highlightColor.green = 0;highlightColor.blue = 0;blackColor = highlightColor;highlightColor = new RGBColor();highlightColor.red = 255;highlightColor.green = 0;highlightColor.blue = 0;routeColor1 = new RGBColor();routeColor1.red = 225;routeColor1.green = 0;routeColor1.blue = 0;routeColor2 = new RGBColor();routeColor2.red = 0;routeColor2.green = 225;routeColor2.blue = 0;routeColor3 = new RGBColor();routeColor3.red = 0;routeColor3.green = 0;routeColor3.blue = 225;routeColors = [blackColor, routeColor1];// routeColors = [blackColor, blackColor];blueColor = new RGBColor();blueColor.red = 0;blueColor.green = 0;blueColor.blue = 225;doc = app.activeDocument;var currentFilePath = doc.path + "/";var currentFileName = doc.name;currentFileName = currentFileName.substring(0, currentFileName.length - 3);logFolder = "/Volumes/Data/";logTerminalName = currentFileName + "_TSP.log";firstArtboard = doc.artboards[0];firstArtboardRect = firstArtboard.artboardRect;var ROUTE_LAYER_NAME = "routes";SIMPLE_ROUTE_LAYER_NAME = "simple routes";TSP_RAW_ROUTE_LAYER_NAME = "tsp-raw";TSP_UCR_ROUTE_LAYER_NAME = "tsp-uncross";DRAFT_LAYER_NAME = "draft";ledLayerName = "LED";powerLayerName = "POWERS"ledOuterObjectName = "frame";ledObjectName = "led";ledColorTextName = "color";ledAnodePadName = "anodePad";ledCathodePadName = "cathodePad";POWER_ANODE_NAME = "anode";POWER_CATHODE_NAME = "cathode";//dimension of an LEDledW = 1.6;ledH = 3.2;ledFrameW = 3.6;ledFrameH = 5.2;ledLegH = 0.6;//bound of all LEDsgroupLeft = 0;groupRight = 0;groupTop = 0;groupBottom = 0;DEFAULT_LINE_SPACING = 3; //mmDEFAULT_LINE_WIDTH = 1; //mm//meander line requirementsDEFAULT_LINE_MINIMUM_GAP = 0.4; //mmDEFAULT_LINE_WIDTH_THRESHHOLD = 0.05 //mm