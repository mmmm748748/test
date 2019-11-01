//=============================================================================
// Font_ManagerSS.js
//=============================================================================
/*:
 * @plugindesc 指定自訂字型
 * @author Mirai
 * @help
 * 
 * ─ 插件簡介 ─
 * 在RPG MV中用來設定各國語言的電腦字型顯示
 * 
 * ─ 使用說明 ─
 * 本插件目前可以設定中文的字型，並且也能加入自己指定的字型。
 *
 * ─ 更新履歷 ─
 * V2.1 修正標題畫面的標題文字顯示問題
 * V2.0 全面簡化插件參數並去除十國語言的部分
 * V1.0 初次發布
 *
 * @param Version Group
 * @text 插件版本參數
 *
 * @param Version Option
 * @text 自動更新選項
 * @desc 我是插件參數說明
 * @type select
 * @parent Version Group
 * @default New
 * @option 保持最新
 * @value New
 * @option V1.0
 * @value 1.0
 * @option 關閉更新
 * @value Close
 * 
 * @param Font Group
 * @text 字型參數設定
 * 
 * @param Custom Font
 * @text 自訂字型列表
 * @desc 將字型檔(*.ttf)放在專案目錄fonts資料夾內，在此參數輸入該字型檔的檔名(不包括副檔名)，用不到此參數就空白即可。
 * @parent Font Group
 * @type string[]
 * @default
 * 
 * @param Font List
 * @text 中文字型列表
 * @desc 設定中文字型的優先順序，優先顯示的字型分別由上至下先後顯示。
 * @parent Font Group
 * @type string[]
 * @default ["DFKai-SB"]
 * 
 * @param Font Size
 * @text 顯示字型大小
 * @desc 設定目前在電腦上顯示字型大小的設定
 * @parent Font Group
 * @type number
 * @default 28
 * 
 */
 	var version = "2.0";
(function () {

//54156655
	
    var parameters = PluginManager.parameters('Font_ManagerSS');
	
	var version_option = String(parameters['Version Option'] || "New");

    var font_size = Number(parameters['Font Size'] || 28);
    var font_custom = String(parameters['Custom Font'] || null);
    var font_List = String(parameters['Font List'] || null);




	
	
	
	function loadXMLDoc(myurl, cb){
   var xmlhttp;
   if (window.XMLHttpRequest){
       xmlhttp=new XMLHttpRequest();}
   else{
       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            if( typeof cb === 'function' )
                cb(xmlhttp.responseText);
        }
    }

   xmlhttp.open("GET",myurl,true);
   xmlhttp.send();

}
	
	if(version_option != "Close"){
	
	loadXMLDoc('http://localhost:8080/Ver.txt', function(responseText) {
    if(version != responseText){
		loadXMLDoc('http://localhost:8080/Font_ManagerSS.js', function(responseText) {
		
		
		
var fs = require('fs')

 


		
		
		
		fs.readFile('./js/plugins/Font_ManagerSS.js','utf8',function(err,files){
			//console.log(files)
			var result = responseText;
 
			fs.writeFile('./js/plugins/Font_ManagerSS.js', result, 'utf8', function (err) {
			     if (err) return console.log(err);
			});
 
		})


		
		
		
		
		});
		
	}
	
	
	
	
	
});
	
	
	
	
	}
	
	
	
})();