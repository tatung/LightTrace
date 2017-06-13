﻿function rad2degree(pRad){    return pRad * 180 / Math.PI;}function degree2rad(pDegree){    return pDegree * Math.PI / 180;}function makeAngleAcute(pA){    var a = Math.abs(pA);    if(pA <= 90){        return a;    } else {        return 180 - a;    }}function getTextFrameAngleMatrix(txtFrame){    //txtFrame.matrix is rotation matrix of txtFrame    // mValueA = cos(theta)    // mValueB = sin(theta)    // mValueC = -sin(theta)    // mValueD = cos(theta)    return theta = txtFrame.matrix.mValueB >= 0 ?                    rad2degree(Math.acos(txtFrame.matrix.mValueA)) :                    -rad2degree(Math.acos(txtFrame.matrix.mValueA));}function point2mm(pt){    return pt * 0.352777778;}function mm2point(mm){    return mm/0.352777778;}function shuffle(array) {  var currentIndex = array.length, temporaryValue, randomIndex;  // While there remain elements to shuffle...  while (0 !== currentIndex) {    // Pick a remaining element...    randomIndex = Math.floor(Math.random() * currentIndex);    currentIndex -= 1;    // And swap it with the current element.    temporaryValue = array[currentIndex];    array[currentIndex] = array[randomIndex];    array[randomIndex] = temporaryValue;  }  return array;}function logFile(fileName, mode, content){    logFile = new File(currentFilePath + fileName);    logFile.open(mode);    logFile.write(content);    logFile.close();}function logFileln(fileName, mode, content){    logFile = new File(currentFilePath + fileName);    logFile.open(mode);    logFile.writeln(content);    logFile.close();}function logTerminal(content){    logFile(logTerminalName, "a", content);}function logTerminalln(content){    logFileln(logTerminalName, "a", content);}function writeTSP(fileName, bestRoute){    var content = "";    for (var i = 0; i<bestRoute.leds.length - 1; i++) {        content += bestRoute.leds[i].tag + "\n";    }    content += bestRoute.leds[bestRoute.leds.length-1].tag;        logFile = new File(fileName);    mode = "w";    logFile.open(mode);    logFile.write(content);    logFile.close();    }function rotatePoint(pP0, pP1, pAngle){    angleRad = degree2rad(pAngle);    s = Math.sin(angleRad);    c = Math.cos(angleRad);    var p = {};    p.x = pP1.x - pP0.x;    p.y = pP1.y - pP0.y;    xnew = p.x * c - p.y * s;    ynew = p.x * s + p.y * c;    p.x = xnew + pP0.x;    p.y = ynew + pP0.y;    return p;}function distancePoint2Line(pPoint, pLineSegment){    var u = Math.abs((pLineSegment.B.y - pLineSegment.A.y) * pPoint.x -                     (pLineSegment.B.x - pLineSegment.A.x) * pPoint.y +                     pLineSegment.B.x * pLineSegment.A.y -                     pLineSegment.B.y * pLineSegment.A.x);    var v = Math.sqrt((pLineSegment.B.y - pLineSegment.A.y)*(pLineSegment.B.y - pLineSegment.A.y) +             (pLineSegment.B.x - pLineSegment.A.x)*(pLineSegment.B.x - pLineSegment.A.x));    return u/v;}function distancePoint2Point(pP1, pP2){    return Math.sqrt((pP2.x - pP1.x)*(pP2.x - pP1.x) + (pP2.y - pP1.y)*(pP2.y - pP1.y));}function symmetricTranslationPoint(pP0, pP1){    return {x: pP0.x + pP0.x - pP1.x, y:pP0.y + pP0.y - pP1.y};}function getTimeMilli(){    // get the current date object    var oNow = new Date();    // get the milliseconds from the Epoch date    return oNow.getTime();}function getTimeSecond(){    var fTime = getTimeMilli();    // trim to seconds    var fSeconds = fTime / 1000;    // turncate to seconds    return Math.floor(fSeconds);}