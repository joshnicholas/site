export const borderColors = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3', ];

// export const borderColors = ['#6637AE', "#3078A2", "#3F47B1", '#FF4040' ,"#7F32AA", "#CD338A",'#2CAF77'];



export function getRandomBorderColor() {
    return borderColors[Math.floor(Math.random() * borderColors.length)];
}
