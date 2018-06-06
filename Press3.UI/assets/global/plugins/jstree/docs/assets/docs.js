(function(n){"use strict";n(function(){var u=function(t){var i=t&&t.length?n.vakata.search(t,!0,{threshold:.2,fuzzy:!0,caseSensitive:!1}):null,r=n("#api_inner").find(".item").hide().filter(function(){return i?i.search(n(this).find(">h4>code").text()).isMatch:!0}).show().length;n("#api_inner").find("#no_res")[!i||r?"hide":"show"]();n("#api_inner").find("#cl_src")[i&&r?"show":"hide"]();n("#srch").is(":focus")||n("#srch").val(t);n(window).resize()},f=function(t){if(n(".item-inner").hide(),t){var i=n('.item[rel="'+t+'"]');i.length||(i=n('.item[rel^="'+t+'"]'));i&&i.length&&(i=i.eq(0),i.children(".item-inner").show().end(),(i.offset().top<n(document).scrollTop()||i.offset().top+i.height()>n(document).scrollTop()+n(window).height())&&i[0].scrollIntoView())}},i=!1,t,r;n(window).resize(function(){i&&clearTimeout(i);i=setTimeout(function(){n(".page").css("minHeight","0px").css("minHeight",n(document).height()-n("#head").outerHeight()+"px")},50)});n(".tab-content").children().hide().eq(0).show();n(".nav a").on("click",function(){n(this).blur()});n.address.init(function(){n("a:not([href^=http])").not(n(".demo a")).address().on("click",function(){n.address.pathNames().length<2&&!n.address.parameter("f")&&n(document).scrollTop(0)})}).change(function(t){var r,i,e;if(!t.pathNames.length||!n("#content").children("#"+t.pathNames[0]).length){n("#menu a").eq(0).click();return}r=t.pathNames[0];n("#menu").find('a[href$="'+r+'"]').blur().parent().addClass("active").siblings().removeClass("active");e=n("#content").children("#"+r).show().siblings().hide().end();r==="api"?(u(n.address.parameter("q")?decodeURIComponent(n.address.parameter("q")):""),f(n.address.parameter("f")?decodeURIComponent(n.address.parameter("f")):"")):(n("#srch").val(""),e.find(".item").show(),i=t.pathNames[1]?e.find("#"+t.pathNames[1]):[],i.length&&(i.hasClass("tab-content-item")?i.siblings().hide().end().show().parent().prev().children().removeClass("active").eq(i.index()).addClass("active"):i[0].scrollIntoView()));n(window).resize()});t=!1;n("#srch").on("keyup",function(){t&&clearTimeout(t);t=setTimeout(function(){var i=n.address.parameter("f"),r=n("#srch").val(),t=[];r&&r.length&&t.push("q="+r);i&&i.length&&!1&&t.push("f="+i);n.address.value("/api/"+(t.length?"?"+t.join("&"):""))},250)});r=n("#api_inner");n.getJSON("./jstree.json",function(t){n.each(t,function(n,t){var o,y;if(t.description.full.indexOf("<p>lobals")===0||t.ignore)return!0;for(var i="",u,s,e=[],h,c=!1,l=!1,a,f=0,v=t.tags.length;f<v;f++)switch(t.tags[f].type){case"name":u=t.tags[f].string;break;case"private":c=!0;break;case"event":l=!0;break;case"trigger":a=t.tags[f].string;break;case"plugin":s=t.tags[f].string;break;case"return":h='<ul class="params list-unstyled"><li><code class="param return">Returns<\/code><p><code class="type">'+t.tags[f].types.join('<\/code> <code class="type">')+"<\/code> "+t.tags[f].description+"<\/p><\/li><\/ul>";break;case"param":e.push('<code class="param">'+t.tags[f].name+'<\/code><p><code class="type">'+t.tags[f].types.join('<\/code> <code class="type">')+"<\/code> "+t.tags[f].description+"<\/p>")}if(i+='<div class="item '+(c?"private":"")+'" rel="'+(u?u.replace('"',""):"")+'">',u&&(u.indexOf("(")!==-1&&u.indexOf("$(")===-1&&(u=u.split("("),u="<strong>"+u[0]+"<\/strong> ("+u[1]),i+='<h4><code class="'+(u.indexOf("(")===-1?l?"evnt":"prop":"func")+'">'+u+(l?' Event <i class="glyphicon glyphicon-flash"><\/i>':"")+"<\/code>",s&&(i+='<code class="meta plugin"><i class="glyphicon glyphicon-leaf"><\/i> '+s+" plugin<\/code> "),c&&(i+='<code class="meta">private<\/code> '),i+="<\/h4>"),i+='<div class="'+(u?"item-inner":"")+'">',i+="<div>"+t.description.full+"<\/div>",e.length){for(i+='<ul class="params list-unstyled">',o=0,y=e.length;o<y;o++)i+="<li>"+e[o]+"<\/li>";i+="<\/ul>"}h&&(i+=h);a&&(i+='<ul class="params list-unstyled"><li><code class="param trigger">Triggers<\/code><p><code class="evnt">'+a.split(",").join('<\/code> <code class="evnt">')+"<\/code><\/p><\/li><\/ul>");i+="<\/div>";i+="<\/div>";r.append(i)});n("#api h3").prepend('<i class="glyphicon glyphicon-leaf"><\/i>&nbsp;').closest(".item").css({background:"white",border:"0",borderRadius:"0",marginTop:"0",paddingTop:"0"}).prev().css("marginBottom","3em");n(".item > h4").on("click",function(){var i=n(this).parent().attr("rel"),t;i&&i.length&&(t=n.address.parameter("q"),n.address.parameter("f")===i?n.address.value(n.address.pathNames()[0]+"/"+(t?"?q="+t:"")):n.address.value(n.address.pathNames()[0]+"/?"+(t?"q="+t+"&":"")+"f="+i))});r.find("pre").each(function(){var t=n("<div>"),i=n(this).closest(".item").find(".item-inner");n(this).prev().appendTo(t);n(this).appendTo(t);i.append(t)});n("#srch").val().length&&u(decodeURIComponent(n.address.parameter("q")));f(decodeURIComponent(n.address.parameter("f")))})})})(jQuery)