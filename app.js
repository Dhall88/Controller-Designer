$(() => {

    let $activeControl;
    let controlId;
    let $joyStick1 = $("#joystick1");
    let $document=$(document);
    let buttonData=[];

    let controllerPos=$(".controller").position()

    $document.mousedown((event)=>{
        let deltaX, deltaY, lastX=event.pageX, lastY=event.pageY;
        if($(event.target).hasClass("copy")) {
            $activeControl=$(event.target);
            console.log(`x ${activePosition.left}   y${activePosition.top}`)
        }
        else {
            $activeControl=$(event.target).clone().addClass("copy").appendTo(".container");
            $activeControl.css({top: lastY, left: lastX, position: 'absolute'})
            
        }
        let activePosition=$activeControl.position();
        $document.mousemove((event)=>{
            deltaX=lastX-event.pageX;
            deltaY=lastY-event.pageY;
            $activeControl.css({top: lastY+deltaY, left: lastX+deltaX})
            lastX=event.pageX;
            lastY=event.pageY;
        })
    })

    $document.mouseup(()=> {
        $document.off("mousemove");
        let activePosition = $activeControl.position();
        console.log(`top ${activePosition.top-controllerPos.top}   left ${activePosition.left-controllerPos.left}`)
    })
    
    // $joyStick1.mousedown(()=>{
    //     $activeControl=$joyStick1.clone()
    // });

    // $joyStick1.mouseup(()=>{
    //     $activeControl=null;
    // })



});
