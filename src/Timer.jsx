import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Timer() {
    const [sec, setSec] = useState(0);
    const [min, setmin] = useState(0);
    const [STOP, setStop] = useState(false);
    const start = () => {
        setStop(true);
    }

    const stop=()=>{
        setStop(false);
    }

       const reset=()=>{
        setStop(false);
        setSec(0);
        setmin(0);
       }

    useEffect(() => {
        let timer = null;
        if (STOP) {
            timer = setInterval(() => {
                if (sec < 59) {
                    setSec(sec + 1);
                    clearInterval(timer);
                }
                if (sec === 59) {
                    setmin(min + 1);
                    setSec(0);
                   clearInterval(timer);
                }

            }, 1000);
        }
        else {
            //clearInterval(timer);
        }
        return () => {
          //  clearInterval(timer);
        }
    })
    return (
        <Box>
            <Box>
                <Text fontSize={"9xl"}>{min<59?"0"+min:min}:{sec < 10 ? "0" + sec : sec} </Text>
                <Box w="20%" margin={'auto'} display={'flex'} justifyContent='space-around'> 
                <Button onClick={start}> Start </Button>
                <Button onClick={stop}>Stop </Button>
                <Button onClick={reset}> RESET</Button></Box>
            </Box>
        </Box >
    );
}

export default Timer;