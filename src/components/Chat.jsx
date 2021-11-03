import React, { useState, useCallback, useEffect, useRef } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import fileService  from '../../services/files'

export function Chat() {
  const [messages, setMessages] = useState([]);
  let count = useRef(1)
  let flag = useRef(1)
  useEffect(() => 
  { 
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const takeNotes = () => {
    console.log("heere1")
    fileService.writehello()
}
    if (count.current===messages.length) {
        takeNotes()
        const ma2 =  {
            _id:count.current+1,
            text: "hi",
            createdAt: new Date(),
            user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
            },
        }
        let txt = "Sorry I didn't get you"
        console.log(messages)
 //       if(flag.current===2) {
  //        txt="notes saved in device"
   //       flag.current = 1
    //      fileService.writehello(messages[0].text).then(setMessages([{...ma2,text:txt},...messages]))

     //   }
     /*
        else if (messages[0].text==="take notes") {
          txt = "taking notes"
          flag.current = 2
        }
        else if (message[0].text==="view notes") {
          txt = "notes are logged"
          flag.current = 1
        }*/
        switch(messages[0].text) {
            case "hi": txt = "Hi this is a covid app created";setMessages([{...ma2,text:txt},...messages]);break;
            case "take notes": txt = "functionality to be implemented";setMessages([{...ma2,text:txt},...messages]);break;
            case "helpline no":txt="Central Helpline Number for corona-virus: - +91-11-23978046";setMessages([{...ma2,text:txt},...messages]);break;
            case "am i vunerable":txt="your age";setMessages([{...ma2,text:txt},...messages]);break;
            case "80":txt="yes";setMessages([{...ma2,text:txt},...messages]);break;
            case "21":txt="no";setMessages([{...ma2,text:txt},...messages]);break;
        }
         count.current = count.current+1


    }

  const onSend = useCallback((messages = []) => {
    
    setMessages((previousMessages => GiftedChat.append(previousMessages, messages)))
    
  }
   
    , [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}