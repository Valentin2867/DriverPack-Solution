var version = "13";
var revis = "R388";
var buildDate = "2013/10/01"; // YYYY/MM/DD
var verType = "";
if ((typeof brandTitle!="undefined") && (brandTitle)) { verType = brandTitle; }

var dpinst = "dpinst.exe";
var devcon = "devcon.exe";
var fso = new ActiveXObject("Scripting.FileSystemObject");
var WshShell = new ActiveXObject("WScript.Shell");
var WshEnv=WshShell.Environment("PROCESS");
var today = new Date();
var is64 = false;
if (WshShell.ExpandEnvironmentStrings("%PROCESSOR_ARCHITECTURE%")=="AMD64"
        ||WshShell.ExpandEnvironmentStrings("%PROCESSOR_ARCHITEW6432%")!="%PROCESSOR_ARCHITEW6432%"){
        is64 = true;
}

var env_windir = WshEnv("WINDIR");
var env_SystemRoot = WshEnv("SystemRoot");
var env_SystemDrive = WshEnv("SystemDrive");
var temp = WshEnv("TEMP");

var instType_all = "1";
var Reg = "HKCU\\SOFTWARE\\drpsu\\";

var instRunCount = 0; // Number of simultaneous processes
var startInst = false; // Batch mode
var logging = true;
var progressBar;
var infobar_urls="";
