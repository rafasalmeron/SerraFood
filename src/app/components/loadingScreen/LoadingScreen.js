import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>

                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={0}
                    style={styles.loadingText}
                >
                    S
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={100}
                    style={styles.loadingText}
                >
                    e
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={200}
                    style={styles.loadingText}
                >
                    r
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={300}
                    style={styles.loadingText}
                >
                    r
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={400}
                    style={styles.loadingText}
                >
                    a
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={500}
                    style={styles.loadingText}
                >
                    {' '}
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={600}
                    style={styles.loadingText}
                >
                    F
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={700}
                    style={styles.loadingText}
                >
                    o
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={800}
                    style={styles.loadingText}
                >
                    o
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={1500}
                    delay={900}
                    style={styles.loadingText}
                >
                    d
                </Animatable.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d50132',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
    },
    loadingText: {
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#fff',
    },
});

export default LoadingScreen;
