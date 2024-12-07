import React, { useState, useEffect } from 'react';
import  TodayApp from './Date.js';
export default function Watch() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div style={styles.container}>
            <TodayApp />
            <h1 style={styles.time}>{formattedTime}</h1>
            <p style={styles.caption}>My Own Watch</p>

        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'left',
        padding: '20px',
        background: 'purple',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '200px',
        margin: 'auto',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
        color:'magenta',
        backgroundImage: 'url("easmile.png")',
    },
    time: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'black',
    },
    caption: {
        fontSize: '1rem',
        color: 'green',
    },
};
