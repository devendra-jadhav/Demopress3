/**
* @version: 1.3.5
* @author: Dan Grossman http://www.dangrossman.info/
* @date: 2014-03-19
* @copyright: Copyright (c) 2012-2014 Dan Grossman. All rights reserved.
* @license: Licensed under Apache License v2.0. See http://www.apache.org/licenses/LICENSE-2.0
* @website: http://www.improvely.com/
*/
!function(n,t){var i=function(t,i,r){var u,f;this.parentEl="body";this.element=n(t);u='<div class="daterangepicker dropdown-menu"><div class="calendar left"><\/div><div class="calendar right"><\/div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input"><label for="daterangepicker_start"><\/label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /><\/div><div class="daterangepicker_end_input"><label for="daterangepicker_end"><\/label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /><\/div><button class="applyBtn" disabled="disabled"><\/button>&nbsp;<button class="cancelBtn"><\/button><\/div><\/div><\/div>';(typeof i!="object"||i===null)&&(i={});this.parentEl=typeof i=="object"&&i.parentEl&&n(i.parentEl).length||n(this.parentEl);this.container=n(u).appendTo(this.parentEl);this.setOptions(i,r);f=this.container;n.each(this.buttonClasses,function(n,t){f.find("button").addClass(t)});this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel);this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel);this.applyClass.length&&this.container.find(".applyBtn").addClass(this.applyClass);this.cancelClass.length&&this.container.find(".cancelBtn").addClass(this.cancelClass);this.container.find(".applyBtn").html(this.locale.applyLabel);this.container.find(".cancelBtn").html(this.locale.cancelLabel);this.container.find(".calendar").on("click.daterangepicker",".prev",n.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",n.proxy(this.clickNext,this)).on("click.daterangepicker","td.available",n.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",n.proxy(this.enterDate,this)).on("mouseleave.daterangepicker","td.available",n.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",n.proxy(this.updateMonthYear,this)).on("change.daterangepicker","select.monthselect",n.proxy(this.updateMonthYear,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.ampmselect",n.proxy(this.updateTime,this));this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",n.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",n.proxy(this.clickCancel,this)).on("click.daterangepicker",".daterangepicker_start_input,.daterangepicker_end_input",n.proxy(this.showCalendars,this)).on("click.daterangepicker","li",n.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",n.proxy(this.enterRange,this)).on("mouseleave.daterangepicker","li",n.proxy(this.updateFormInputs,this));if(this.element.is("input"))this.element.on({"click.daterangepicker":n.proxy(this.show,this),"focus.daterangepicker":n.proxy(this.show,this),"keyup.daterangepicker":n.proxy(this.updateFromControl,this)});else this.element.on("click.daterangepicker",n.proxy(this.toggle,this))};i.prototype={constructor:i,setOptions:function(i,r){var c,u,f,e,s,h,o,l,a;if(this.startDate=t().startOf("day"),this.endDate=t().endOf("day"),this.minDate=!1,this.maxDate=!1,this.dateLimit=!1,this.showDropdowns=!1,this.showWeekNumbers=!1,this.timePicker=!1,this.timePickerIncrement=30,this.timePicker12Hour=!0,this.singleDatePicker=!1,this.ranges={},this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.buttonClasses=["btn","btn-small"],this.applyClass="btn-success",this.cancelClass="btn-default",this.format="MM/DD/YYYY",this.separator=" - ",this.locale={applyLabel:"Apply",cancelLabel:"Cancel",fromLabel:"From",toLabel:"To",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:t()._lang._weekdaysMin.slice(),monthNames:t()._lang._monthsShort.slice(),firstDay:0},this.cb=function(){},typeof i.format=="string"&&(this.format=i.format),typeof i.separator=="string"&&(this.separator=i.separator),typeof i.startDate=="string"&&(this.startDate=t(i.startDate,this.format)),typeof i.endDate=="string"&&(this.endDate=t(i.endDate,this.format)),typeof i.minDate=="string"&&(this.minDate=t(i.minDate,this.format)),typeof i.maxDate=="string"&&(this.maxDate=t(i.maxDate,this.format)),typeof i.startDate=="object"&&(this.startDate=t(i.startDate)),typeof i.endDate=="object"&&(this.endDate=t(i.endDate)),typeof i.minDate=="object"&&(this.minDate=t(i.minDate)),typeof i.maxDate=="object"&&(this.maxDate=t(i.maxDate)),typeof i.applyClass=="string"&&(this.applyClass=i.applyClass),typeof i.cancelClass=="string"&&(this.cancelClass=i.cancelClass),typeof i.dateLimit=="object"&&(this.dateLimit=i.dateLimit),typeof i.locale=="object"){if(typeof i.locale.daysOfWeek=="object"&&(this.locale.daysOfWeek=i.locale.daysOfWeek.slice()),typeof i.locale.monthNames=="object"&&(this.locale.monthNames=i.locale.monthNames.slice()),typeof i.locale.firstDay=="number")for(this.locale.firstDay=i.locale.firstDay,c=i.locale.firstDay;c>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),c--;typeof i.locale.applyLabel=="string"&&(this.locale.applyLabel=i.locale.applyLabel);typeof i.locale.cancelLabel=="string"&&(this.locale.cancelLabel=i.locale.cancelLabel);typeof i.locale.fromLabel=="string"&&(this.locale.fromLabel=i.locale.fromLabel);typeof i.locale.toLabel=="string"&&(this.locale.toLabel=i.locale.toLabel);typeof i.locale.weekLabel=="string"&&(this.locale.weekLabel=i.locale.weekLabel);typeof i.locale.customRangeLabel=="string"&&(this.locale.customRangeLabel=i.locale.customRangeLabel)}if(typeof i.opens=="string"&&(this.opens=i.opens),typeof i.showWeekNumbers=="boolean"&&(this.showWeekNumbers=i.showWeekNumbers),typeof i.buttonClasses=="string"&&(this.buttonClasses=[i.buttonClasses]),typeof i.buttonClasses=="object"&&(this.buttonClasses=i.buttonClasses),typeof i.showDropdowns=="boolean"&&(this.showDropdowns=i.showDropdowns),typeof i.singleDatePicker=="boolean"&&(this.singleDatePicker=i.singleDatePicker),typeof i.timePicker=="boolean"&&(this.timePicker=i.timePicker),typeof i.timePickerIncrement=="number"&&(this.timePickerIncrement=i.timePickerIncrement),typeof i.timePicker12Hour=="boolean"&&(this.timePicker12Hour=i.timePicker12Hour),typeof i.startDate=="undefined"&&typeof i.endDate=="undefined"&&n(this.element).is("input[type=text]")&&(s=n(this.element).val(),h=s.split(this.separator),u=f=null,h.length==2?(u=t(h[0],this.format),f=t(h[1],this.format)):this.singleDatePicker&&(u=t(s,this.format),f=t(s,this.format)),u!==null&&f!==null&&(this.startDate=u,this.endDate=f)),typeof i.ranges=="object"){for(e in i.ranges)(u=t(i.ranges[e][0]),f=t(i.ranges[e][1]),this.minDate&&u.isBefore(this.minDate)&&(u=t(this.minDate)),this.maxDate&&f.isAfter(this.maxDate)&&(f=t(this.maxDate)),this.minDate&&f.isBefore(this.minDate)||this.maxDate&&u.isAfter(this.maxDate))||(this.ranges[e]=[u,f]);o="<ul>";for(e in this.ranges)o+="<li>"+e+"<\/li>";o+="<li>"+this.locale.customRangeLabel+"<\/li>";o+="<\/ul>";this.container.find(".ranges ul").remove();this.container.find(".ranges").prepend(o)}typeof r=="function"&&(this.cb=r);this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"));this.singleDatePicker?(this.opens="right",this.container.find(".calendar.right").show(),this.container.find(".calendar.left").hide(),this.container.find(".ranges").hide(),this.container.find(".calendar.right").hasClass("single")||this.container.find(".calendar.right").addClass("single")):(this.container.find(".calendar.right").removeClass("single"),this.container.find(".ranges").show());this.oldStartDate=this.startDate.clone();this.oldEndDate=this.endDate.clone();this.oldChosenLabel=this.chosenLabel;this.leftCalendar={month:t([this.startDate.year(),this.startDate.month(),1,this.startDate.hour(),this.startDate.minute()]),calendar:[]};this.rightCalendar={month:t([this.endDate.year(),this.endDate.month(),1,this.endDate.hour(),this.endDate.minute()]),calendar:[]};this.opens=="right"&&(l=this.container.find(".calendar.left"),a=this.container.find(".calendar.right"),l.removeClass("left").addClass("right"),a.removeClass("right").addClass("left"));typeof i.ranges!="undefined"||this.singleDatePicker||this.container.addClass("show-calendar");this.container.addClass("opens"+this.opens);this.updateView();this.updateCalendars()},setStartDate:function(n){typeof n=="string"&&(this.startDate=t(n,this.format));typeof n=="object"&&(this.startDate=t(n));this.timePicker||(this.startDate=this.startDate.startOf("day"));this.oldStartDate=this.startDate.clone();this.updateView();this.updateCalendars()},setEndDate:function(n){typeof n=="string"&&(this.endDate=t(n,this.format));typeof n=="object"&&(this.endDate=t(n));this.timePicker||(this.endDate=this.endDate.endOf("day"));this.oldEndDate=this.endDate.clone();this.updateView();this.updateCalendars()},updateView:function(){this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());this.updateFormInputs()},updateFormInputs:function(){this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format));this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format));this.startDate.isSame(this.endDate)||this.startDate.isBefore(this.endDate)?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled")},updateFromControl:function(){if(this.element.is("input")&&this.element.val().length){var r=this.element.val().split(this.separator),n=t(r[0],this.format),i=t(r[1],this.format);(this.singleDatePicker&&(n=t(this.element.val(),this.format),i=n),i.isBefore(n))||(this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.startDate=n,this.endDate=i,this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify(),this.updateCalendars())}},notify:function(){this.updateView();this.cb(this.startDate,this.endDate,this.chosenLabel)},move:function(){var t={top:0,left:0};this.parentEl.is("body")||(t={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()});this.opens=="left"?(this.container.css({top:this.element.offset().top+this.element.outerHeight()-t.top,right:n(window).width()-this.element.offset().left-this.element.outerWidth()-t.left,left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:this.element.offset().top+this.element.outerHeight()-t.top,left:this.element.offset().left-t.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>n(window).width()&&this.container.css({left:"auto",right:0}))},toggle:function(){this.element.hasClass("active")?this.hide():this.show()},show:function(){this.element.addClass("active");this.container.show();this.move();n(document).on("click.daterangepicker",n.proxy(this.outsideClick,this));n(document).on("click.daterangepicker","[data-toggle=dropdown]",n.proxy(this.outsideClick,this));this.element.trigger("show.daterangepicker",this)},outsideClick:function(t){var i=n(t.target);i.closest(this.element).length||i.closest(this.container).length||i.closest(".calendar-date").length||this.hide()},hide:function(){this.element.removeClass("active");this.container.hide();this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify();this.oldStartDate=this.startDate.clone();this.oldEndDate=this.endDate.clone();n(document).off("click.daterangepicker",this.outsideClick);this.element.trigger("hide.daterangepicker",this)},enterRange:function(n){var i=n.target.innerHTML,t;i==this.locale.customRangeLabel?this.updateView():(t=this.ranges[i],this.container.find("input[name=daterangepicker_start]").val(t[0].format(this.format)),this.container.find("input[name=daterangepicker_end]").val(t[1].format(this.format)))},showCalendars:function(){this.container.addClass("show-calendar");this.move()},hideCalendars:function(){this.container.removeClass("show-calendar")},updateInputText:function(){this.element.is("input")&&!this.singleDatePicker?this.element.val(this.startDate.format(this.format)+this.separator+this.endDate.format(this.format)):this.element.is("input")&&this.element.val(this.startDate.format(this.format))},clickRange:function(n){var t=n.target.innerHTML,i;this.chosenLabel=t;t==this.locale.customRangeLabel?this.showCalendars():(i=this.ranges[t],this.startDate=i[0],this.endDate=i[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()),this.updateCalendars(),this.updateInputText(),this.hideCalendars(),this.hide(),this.element.trigger("apply.daterangepicker",this))},clickPrev:function(t){var i=n(t.target).parents(".calendar");i.hasClass("left")?this.leftCalendar.month.subtract("month",1):this.rightCalendar.month.subtract("month",1);this.updateCalendars()},clickNext:function(t){var i=n(t.target).parents(".calendar");i.hasClass("left")?this.leftCalendar.month.add("month",1):this.rightCalendar.month.add("month",1);this.updateCalendars()},enterDate:function(t){var i=n(t.target).attr("data-title"),r=i.substr(1,1),u=i.substr(3,1),f=n(t.target).parents(".calendar");f.hasClass("left")?this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[r][u].format(this.format)):this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[r][u].format(this.format))},clickDate:function(i){var s=n(i.target).attr("data-title"),h=s.substr(1,1),c=s.substr(3,1),f=n(i.target).parents(".calendar"),r,u,e,o,l;f.hasClass("left")?(r=this.leftCalendar.calendar[h][c],u=this.endDate,typeof this.dateLimit=="object"&&(e=t(r).add(this.dateLimit).startOf("day"),u.isAfter(e)&&(u=e))):(r=this.startDate,u=this.rightCalendar.calendar[h][c],typeof this.dateLimit=="object"&&(o=t(u).subtract(this.dateLimit).startOf("day"),r.isBefore(o)&&(r=o)));this.singleDatePicker&&f.hasClass("left")?u=r.clone():this.singleDatePicker&&f.hasClass("right")&&(r=u.clone());f.find("td").removeClass("active");r.isSame(u)||r.isBefore(u)?(n(i.target).addClass("active"),this.startDate=r,this.endDate=u,this.chosenLabel=this.locale.customRangeLabel):r.isAfter(u)&&(n(i.target).addClass("active"),l=this.endDate.diff(this.startDate),this.startDate=r,this.endDate=t(r).add("ms",l),this.chosenLabel=this.locale.customRangeLabel);this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());this.updateCalendars();u.endOf("day");this.singleDatePicker&&this.clickApply()},clickApply:function(){this.updateInputText();this.hide();this.element.trigger("apply.daterangepicker",this)},clickCancel:function(){this.startDate=this.oldStartDate;this.endDate=this.oldEndDate;this.chosenLabel=this.oldChosenLabel;this.updateView();this.updateCalendars();this.hide();this.element.trigger("cancel.daterangepicker",this)},updateMonthYear:function(t){var u=n(t.target).closest(".calendar").hasClass("left"),i=u?"left":"right",r=this.container.find(".calendar."+i),f=parseInt(r.find(".monthselect").val(),10),e=r.find(".yearselect").val();this[i+"Calendar"].month.month(f).year(e);this.updateCalendars()},updateTime:function(t){var s=n(t.target).closest(".calendar").hasClass("left"),h=s?"left":"right",e=this.container.find(".calendar."+h),i=parseInt(e.find(".hourselect").val(),10),r=parseInt(e.find(".minuteselect").val(),10),o,u,f;this.timePicker12Hour&&(o=e.find(".ampmselect").val(),o==="PM"&&i<12&&(i+=12),o==="AM"&&i===12&&(i=0));s?(u=this.startDate.clone(),u.hour(i),u.minute(r),this.startDate=u,this.leftCalendar.month.hour(i).minute(r)):(f=this.endDate.clone(),f.hour(i),f.minute(r),this.endDate=f,this.rightCalendar.month.hour(i).minute(r));this.updateCalendars()},updateCalendars:function(){var t,i,n;this.leftCalendar.calendar=this.buildCalendar(this.leftCalendar.month.month(),this.leftCalendar.month.year(),this.leftCalendar.month.hour(),this.leftCalendar.month.minute(),"left");this.rightCalendar.calendar=this.buildCalendar(this.rightCalendar.month.month(),this.rightCalendar.month.year(),this.rightCalendar.month.hour(),this.rightCalendar.month.minute(),"right");this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar,this.startDate,this.minDate,this.maxDate));this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar,this.endDate,this.startDate,this.maxDate));this.container.find(".ranges li").removeClass("active");t=!0;i=0;for(n in this.ranges)this.timePicker?this.startDate.isSame(this.ranges[n][0])&&this.endDate.isSame(this.ranges[n][1])&&(t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+i+")").addClass("active").html()):this.startDate.format("YYYY-MM-DD")==this.ranges[n][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[n][1].format("YYYY-MM-DD")&&(t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+i+")").addClass("active").html()),i++;t&&(this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html())},buildCalendar:function(n,i,r,u){for(var h=t([i,n,1]),v=t(h).subtract("month",1).month(),y=t(h).subtract("month",1).year(),c=t([y,v]).daysInMonth(),p=h.day(),l=[],e,o,s,a,f=0;f<6;f++)l[f]=[];for(e=c-p+this.locale.firstDay+1,e>c&&(e-=7),p==this.locale.firstDay&&(e=c-6),o=t([y,v,e,12,u]),f=0,s=0,a=0;f<42;f++,s++,o=t(o).add("hour",24))f>0&&s%7==0&&(s=0,a++),l[a][s]=o.clone().hour(r),o.hour(12);return l},renderDropdowns:function(n,t,i){for(var u,s=n.month(),f='<select class="monthselect">',r=0;r<12;r++)(!0||r>=t.month())&&(!0||r<=i.month())&&(f+="<option value='"+r+"'"+(r===s?" selected='selected'":"")+">"+this.locale.monthNames[r]+"<\/option>");f+="<\/select>";var e=n.year(),h=i&&i.year()||e+5,c=t&&t.year()||e-50,o='<select class="yearselect">';for(u=c;u<=h;u++)o+='<option value="'+u+'"'+(u===e?' selected="selected"':"")+">"+u+"<\/option>";return o+="<\/select>",f+o},renderCalendar:function(t,i,r,u){var f='<div class="calendar-date">',a,e,o,h,v,s,c;for(f+='<table class="table-condensed">',f+="<thead>",f+="<tr>",this.showWeekNumbers&&(f+="<th><\/th>"),f+=!r||r.isBefore(t[1][1])?'<th class="prev available"><span>&lt;</span><\/th>':"<th><\/th>",a=this.locale.monthNames[t[1][1].month()]+t[1][1].format(" YYYY"),this.showDropdowns&&(a=this.renderDropdowns(t[1][1],r,u)),f+='<th colspan="5" class="month">'+a+"<\/th>",f+=!u||u.isAfter(t[1][1])?'<th class="next available"><span>&gt;</span><\/th>':"<th><\/th>",f+="<\/tr>",f+="<tr>",this.showWeekNumbers&&(f+='<th class="week">'+this.locale.weekLabel+"<\/th>"),n.each(this.locale.daysOfWeek,function(n,t){f+="<th>"+t+"<\/th>"}),f+="<\/tr>",f+="<\/thead>",f+="<tbody>",e=0;e<6;e++){for(f+="<tr>",this.showWeekNumbers&&(f+='<td class="week">'+t[e][0].week()+"<\/td>"),o=0;o<7;o++)h="available ",h+=t[e][o].month()==t[1][1].month()?"":"off",r&&t[e][o].isBefore(r)||u&&t[e][o].isAfter(u)?h=" off disabled ":t[e][o].format("YYYY-MM-DD")==i.format("YYYY-MM-DD")?(h+=" active ",t[e][o].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&(h+=" start-date "),t[e][o].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&(h+=" end-date ")):t[e][o]>=this.startDate&&t[e][o]<=this.endDate&&(h+=" in-range ",t[e][o].isSame(this.startDate)&&(h+=" start-date "),t[e][o].isSame(this.endDate)&&(h+=" end-date ")),v="r"+e+"c"+o,f+='<td class="'+h.replace(/\s+/g," ").replace(/^\s?(.*?)\s?$/,"$1")+'" data-title="'+v+'">'+t[e][o].date()+"<\/td>";f+="<\/tr>"}if(f+="<\/tbody>",f+="<\/table>",f+="<\/div>",this.timePicker){f+='<div class="calendar-time">';f+='<select class="hourselect">';var y=0,p=23,l=i.hour();for(this.timePicker12Hour&&(y=1,p=12,l>=12&&(l-=12),l===0&&(l=12)),s=y;s<=p;s++)f+=s==l?'<option value="'+s+'" selected="selected">'+s+"<\/option>":'<option value="'+s+'">'+s+"<\/option>";for(f+="<\/select> : ",f+='<select class="minuteselect">',s=0;s<60;s+=this.timePickerIncrement)c=s,c<10&&(c="0"+c),f+=s==i.minute()?'<option value="'+s+'" selected="selected">'+c+"<\/option>":'<option value="'+s+'">'+c+"<\/option>";f+="<\/select> ";this.timePicker12Hour&&(f+='<select class="ampmselect">',f+=i.hour()>=12?'<option value="AM">AM<\/option><option value="PM" selected="selected">PM<\/option>':'<option value="AM" selected="selected">AM<\/option><option value="PM">PM<\/option>',f+="<\/select>");f+="<\/div>"}return f},remove:function(){this.container.remove();this.element.off(".daterangepicker");this.element.removeData("daterangepicker")}};n.fn.daterangepicker=function(t,r){return this.each(function(){var u=n(this);u.data("daterangepicker")&&u.data("daterangepicker").remove();u.data("daterangepicker",new i(u,t,r))}),this}}(window.jQuery,window.moment)