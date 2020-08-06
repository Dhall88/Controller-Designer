$(() => {

    let $activeControl;
    let $digitalJoy = $("#digitalJoy"), $analogJoy1=$("#analogJoy1"), $analogJoy2=$("#analogJoy2"),
    $rt=$("#rt"), $rb=$("#rb"), $r3=$("#r3"), $lt=$("#lt"), $lb=$("#lb"), $l3=$("#l3"), $x=$("#x"),
    $y=$("#y"), $a=$("#a"), $b=$("#b"), $menu=$("#menu"),  $psXbox=$("#psXbox"),  $view=$("#view");
    let $document=$(document);
    let buttonData=[];
    let $controllerPos=$(".controller").position();

    let $axis1=$("#axis1")

    $axis1.click(() => {
        $menu.offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $psXbox.offset({top:20+$controllerPos.top,left:70+$controllerPos.left});
        $view.offset({top:20+$controllerPos.top,left:120+$controllerPos.left});
        $digitalJoy.offset({top:20+$controllerPos.top,left:300+$controllerPos.left});
        $analogJoy1.offset({top:280+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy2.offset({top:280+$controllerPos.top,left:580+$controllerPos.left});
        $l3.offset({top:130+$controllerPos.top,left:20+$controllerPos.left});
        $r3.offset({top:130+$controllerPos.top,left:605+$controllerPos.left});
        $rt.offset({top:170+$controllerPos.top,left:470+$controllerPos.left});
        $rb.offset({top:265+$controllerPos.top,left:470+$controllerPos.left});
        $y.offset({top:170+$controllerPos.top,left:370+$controllerPos.left});
        $b.offset({top:265+$controllerPos.top,left:370+$controllerPos.left});
        $x.offset({top:170+$controllerPos.top,left:270+$controllerPos.left});
        $a.offset({top:265+$controllerPos.top,left:270+$controllerPos.left});
        $lt.offset({top:170+$controllerPos.top,left:170+$controllerPos.left});
        $lb.offset({top:265+$controllerPos.top,left:170+$controllerPos.left});
        $l3.offset({top:130+$controllerPos.top,left:20+$controllerPos.left});
    })

    $document.mousedown((event)=>{

        let deltaX, deltaY, lastX=event.pageX, lastY=event.pageY, activePosition, mouseOffsetX, mouseOffsetY;
        if (!$(event.target).hasClass("control")){
            return;
        } else if($(event.target).hasClass("copy")) {
            $activeControl=$(event.target);
            activePosition=$activeControl.position();
        } else {
            $activeControl=$(event.target).clone().addClass("copy").appendTo(".container");
            $activeControl.css({top: lastY, left: lastX, position: 'absolute'})
            activePosition=$activeControl.position();
        }
        mouseOffsetX=event.pageX-activePosition.left;
        mouseOffsetY=event.pageY-activePosition.top;
        $document.mousemove((event)=>{
            deltaX=lastX-event.pageX;
            deltaY=lastY-event.pageY;
            $activeControl.css({top: lastY+deltaY-mouseOffsetY, left: lastX+deltaX-mouseOffsetX})
            lastX=event.pageX;
            lastY=event.pageY;
            let trashPos=$(".trash").position();
            if((event.pageX>trashPos.left && event.pageX<trashPos.left+100) && 
            event.pageY>trashPos.top && event.pageY<trashPos.top+100) {
            $(event.target).addClass("possibleTrash")
            } else {
                $(event.target).removeClass("possibleTrash")
            }
        })
    })

    $document.mouseup((event)=> {
        let trashPos=$(".trash").position();
        if((event.pageX>trashPos.left && event.pageX<trashPos.left+100) && 
            event.pageY>trashPos.top && event.pageY<trashPos.top+100 && 
            !$(event.target).hasClass("trash")) {
            $(event.target).remove();
        } 
        $document.off("mousemove");
    })

    buildArray = () => {
        let $components=$(".copy")
        let result= [];
        let $controllerPos=$(".controller").position();
        $.each($components, (index,element) => {
            let $element=$(element)
            result.push({xPos:$element.position().left-$controllerPos.left+37.5, yPos:$element.position().top-$controllerPos.top+37.5, id:$element.attr('id')})

        })
            if(result.length!==0) {
                $("li").remove();
            }
            result.forEach((element) => {
                $(".result").append(`<li>Button Type: ${element.id}, xCord: ${element.xPos}, yCord: ${element.yPos}</li>`)
            })
        };
});
