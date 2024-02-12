/*
Author Nate Lapointe
Assingment Mines
Date 02/12/24
*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#8ED4F3',
        padding: 10,
        marginTop: 10,
    },
    link: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#F38E8E',
        color: 'white',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, 
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    tile: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6', 
        margin: 2, 
    },
    revealedTile: {
        backgroundColor: '#90EE90', 
    },
    tileText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20, 
    },
    scoreText: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'blue', 
    },
   
    grid: {
        padding: 5, 
    }
});

export default styles;
