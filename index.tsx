import React from 'react'
import ReactPDF, { Page, Image, View, Document, StyleSheet, Text } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100
    }
})


const MyDocument = () => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Image style={styles.image} source={"./img.jpeg"} />
                    <Text>JPEG inside folder</Text>
                    <Image style={styles.image} source={"./img.png"} />
                    <Text>PNG</Text>
                </View>
            </Page>
        </Document>
    )
}

ReactPDF.render(<MyDocument />, "./example.pdf");