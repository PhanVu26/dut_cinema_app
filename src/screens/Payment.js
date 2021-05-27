
import React from 'react'
import { View, Text, Image, ScrollView,StyleSheet } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { RadioButton } from 'react-native-paper';
   
export default Payment = (props) =>{
    const {showtime,selectedTicket,cinema} = props.route.params;
    console.log(selectedTicket)
    let movie = showtime.movie;
    let room = showtime.room;
    let starttime = showtime.startTime.split("T");
    let time = starttime[0]+" - "+ starttime[1].slice(0,5);
    const [checked, setChecked] = React.useState('first');
return(
    <View style={{flex: 1}}>
    <ScrollView style = {{backgroundColor:'#DDDDDD'}}>
    <Card>
        <Card.Title>Thông tin giao dịch</Card.Title>
        <Card.Divider/>
        <Text style={{marginTop: 10}}>
          {"Tên phim: " + movie.name}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Suất chiếu: " + time}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Phòng chiếu: " +cinema+" - phòng "+ room.id}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Ghế: " + selectedTicket.toString()}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Giá vé: 50000 đ"}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Tổng thanh toán: " + selectedTicket.length*50000+" đ"}
        </Text>
    </Card>
    <Text style ={{marginTop:20,marginBottom:10,marginHorizontal:10, fontSize: 13, fontWeight: '700' }}>Phương thức thanh toán</Text>
    <List style={styles.container}>
        <ListItem thumbnail>
            <Left>
                <Thumbnail square style={{width: 56, height: 60}} source={{ uri: 'data:image/png;base64,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' }} />
            </Left>
            <Body>
                <Text>HSBC/Payoo - ATM/VISA/MASTER/</Text>
                <Text>JCB/QRCODE</Text>
            </Body>
            <Right>
                <RadioButton value="first" status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}/>
            </Right>
        </ListItem> 
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEWuIHD///+rCWrTm7asFWz++/3DZ5eqAGewHXOoAGTqy9v25u+wInPz3+quFG/AXpG4S4Tit8358PW9Tovfr8nbp8LQiq7BaZXcscbt0+HGbp2zMHn89/rpydrLe6X47fPSkbO+V46nAGDlwNPw2+a1OH3Zor7Kg6bVl7fOgaq3QIHIc6DjvNDBYpW5QYTKhKa/U48KeVGtAAAPpElEQVR4nO2da2OivBKAMY2meBeBrYJ3tF67/f+/7iSgKDATCLJvg6fzYbu7oSEPuU2SmYnReHUxfroA/1x+Cesvv4T1l/9zwmZtRJ2w2bE/B1/d95qI99VajhYKhIvdkDFCqVEboZQwMrD9YoSW22c1grsLZd4uy5gl/OiSny5qeWHHdi7hif10KZ8SyvZyQuurxhUYCbvICK1tLTtgUthKQjh+AUCOOEcJ5/Xug7EwByHcvAigYfR7IKHvvUQbFUIHIOH+ZaqQt9MNQGh5P12sCoWuAMKPF6pCwzCDLOHlZXqhEOJmCK3+TxeqWtlmCGfmT5epWjGtNOG+9gppUuLRNCb8+2qETpqw9VIDDR9q3p4ipISx964Qwkj2F8WWgiS5QP73HPqsXBbPEFLWH7ijoNdZLBadoL0/bRlJJHcv7ibo8OROJ5jt/3hMrQNQRoan3SzMYbHoBZvln606ZXlCQqbn1K6WP3E9FiefNlYy2ZocusW1CUZadie9O2gF+7HidypLSJkLbtr5oy0L+fYWmGx7xRhNb4dsCjZ6LlHRusoRUnMOAoRi8x7jQtt5kTgF9u+Yd5bt7TZ3pHg9liIk2wB5d1QAV5rst3KqgLzbst+PXlG4P5YhZHPZBy4gtrR4bIo3gLsE44JNtQRhYmugnLS76Eto91wwk4LLWHVCltuECkgP20Yg407hTGb9Ii1VmdCsApAjwisYdinSQuNMimy3qBIyF3mbqrShJQw7qfVw61hgWFQjpN8VAYLdiAzyfy2FmL9zrUhIsGm4hGR2nclKPZNObkNVI6xgGL1LkKpE6qn0wZtM8uZ+JUJ6fHIiTMo8WTgi1RNQsXP2JJQI2UcVYLH0EoSlZ6GpvJ0qEZZqRgXLRpVHmZv475URksPTTEmZPfTEkm1UyEjaTlUI2eRZpJQ87K6T5RP5rKTDvwKhh6+YSsrDu57Juy3TUBUIH44AEtIcuZ87XJv0R38/d0j5451LWRUuRvu/f//u0zsGjzKQVKICIdINe0eTEEawmXLiieTuCEyMPz7DNAnfXvHMhZjvfzbIQ9IDTwVCeDi3rkqFCTN0ruZGbAalBtc6pFOk6Oftw44AZd/ISOAfqyEEP2GsXnrgu2+zOtzEO90o1QT5xWl7sjCU7OAHl7hmo0IIFiPuAmuwK8ZzVRdqhzfCPljs5jBbbmRtE1RDmLEyShCaPSg5JuxDH+BKSOEevoKKbcJjEt5MtSBkYB8+wMMHA3c55rieogOhCbXgCTY+gtPyGR1NtSD0oCULqqgwqJ320I6oAyFtAUloFfKsgAVAU+tWSqDx8YCPjmC33WpNCExysjkc1A9QxU0HQkhZQnYbI+kCWZ20JgRUifQmTkLWQFYu1qp1JcRHfwOeXWpHOHp5wkC2M1G/Vqo60kCKOqq26UAIzhbo/IZoCKg1nhaEkBqGjv51nPHpHyBphg81BNq21VprM74gzRs9OAOVPL01b4NB6yHURpJCay18L0oPQnBRe4KrBT6ExhV1LQjBdtdogkeDSS+RWPDDYC0IjXew1NYW2Ik6gY8G+PSpB6EJ74Nag/QhKmZG8Kb5XptB4abXaOweTf0o22K73kN89tSD0GDYyeRivzUJpcLOlA1B51chsqMZTQixvWwufrD7bLVaSydjinkXme2BJoRG95njZelyWRfCuBxlROoDowuhYZS31NlUdcr9bwkJPNEVkKbcE00bQuTwooBIdlb1IjS6xe0uHyXP4VUjQjosY3HVkfNpRWgQ7KxbIn6ucaJOhAZTNkny893qtSJUts/1v/O9EvQixFZ/iFjjAm4XmhEa5FLcOCoo5FWvG6FBtkWt5+xikYG0IzQovKeRFmtavUfJf0QovJ7ANyXEKeRroSshz2slb6ojBS8/PQkNag422IrRcrYq7uaaEgpG77OdHVcX51NfLeaDCiHYcuLVpwkqzjFCH5oFFjihKBvzWstZ0LGEvupbnWB0WKlHH1OxET4OASmcDKUOsy9JinB07m5Fzluvy1iZyHFq/haAPJVctJQKj2bkSW/1GsgvYf3ll7D+8ktYf3maUBwLccFmrJzk4i8oncVThFzj6B4v8/1utztMhx7JeEeI5MObSG5lkwvkT1nfG07DHPbzS5ksniIkZOi2H5RRK3Au3XsRePJ+snhM3g2UlGbCjvNz73GFYQX21FOFLE1I+p9Bdgd34RyjErCuC6w1OvttQUbKPDeA1k/WTHFxUZKQkiWyY9QU4Vtof4+s7gqGbzHHI/xAcbF7V2AsR2heZGcMOzaVbJg1l+u87JmHeqldv9Nb8fAtZQgpyfF4zjnPDTxp8aiZjgAMvaJwmOMShHQLruYVpNmSIJJjsTOoDR4f5UlC8l2Bsywe5Lb4xr61KlSNyoR0XEnUgTlSi0TlnNQtgqhKSLsVuTtPQcR+/k7po7wVQFSO3vJsH4wFOvhT9oe38xEVCSuKvyOkk930RMzbZJIfSkmNsHxoB0B26cKZRSNEPcpnHqIaIamsjQpJtVPQrzBfpAEVVAlRE8JykvT8wQIa5IklD/yhRvhEdA5ImgkPgpLGJnkmUUqEZb8yKo/hbp8IXyQPUKMU26TKGEpCHlwI6LB8NgupmqtUh5WOM0Lupr1wOIOCsqzI+tI4Ym/w5XaF1gJT9A63d8k7QLMToFmEL5AdYalEb0FMlkZf63X/E1XmHM803/dwAWMvQ7wKm5vDlpmmycZLXB+QhMVQit4CL9tcU/wC2yKI03CkYysQMXZJh8OGcD7+fa7locQcYwvjjsSXT+WEFFQ5bqaBiH3ox3UohxdFNy9DzMw7GCanTBPbPJBYCT8dvSX2ooPN7b9uyVsoOfa3gDvyJhPnlCCrb4lTrRbn+PQLBgSKTQ1QMViggHoQwo00AHesKByPC9dOtSCEV03IFAB3+J3evmt9aKBFZwATKgfuNaMDIR0DSfgsDmoHC61bKf0Ekhx8dDShJQ76QXQgBH25JQtb0L/mC1VUNCCEIg4sJG4iYKvW2h8f8iWROmsxICu9o0YAarc02KMJ6Ee1I3yx2CZAxpKQCoaxBtQavQmBRYu0H5pAVnoTAmOpxLYWVtTxZa0GhODSWuadDc2fqHuQDoSgToOr0rCijs6fWhCuoCR8yw/aEdNbLzXeobUF6hoKHuDovbaAVWksEDm9AA83HL3Xh3CY5RlslQKfb+BbUVoQIvvBNoQIl0KyJ6wFIahoNqBrDyhy0C9xd9aDELsXYZayLWLYPTuS4yc9CO9XaabEWt6tHSnbYodfModuTQhxG4WFM+iajJlsezqj1mQZkwD9CMEwejexFu3ZZCGx4/FlcSM0ITTIMzdLyKpQG8JnTtDll5ToQlg+8AduI6cZoeGVDVAzqcwW4x8TlomKISQnPI1GhAbDo2HJRGaNqxlhOXuMXNM9nQgNom4WlW9+qRWhOqJ0W1VHQtpXM0rKu3NNP0KOqNIXpbqMpoTS+IIpaRZzudCO0GCXYlP/5FjMbUY/QoPmX3iscuWxhoRiKZ+30hjJHYu0JzSouZI5XqgEb9GUMAxtAl+u3gyWKr55FcQ2uRPK7+zqQ+WVxjZhbLWfLB53LvzFxj2axa9VVyWky/MoK3F4ErIDUjcxwrsDJDvS6C3C4PJ9fDrsbf6ovT/8ORJW+Er1MoQGYYA8lVygOqIQwuLZks7cv/749ZdfwvpLtYTkcWgxKIt25ClTmsAqlkoJydtmdr9NjK5mM5dnRt3ZTHLH2L+WSgmFTnC3KRSXq3yw6GApP5DqP5NqCdsJwpZvicPnGhFSQijjEzA1SPjnNQfxj2jqDgnNOI2u16ID3gnp/dFkrlF+4i8km6sRJfB/Z9NI9DObaylCYvdmXzO+9ByKoA5BtE9Ju29cH+3t+zfCC0/rhfvsdNDr7R/rkM0DnpZyw6Jurze2/UbnRByr0bkabxGXP9qxwxCs9NLrDdxOwx/dbjThOn7vUzy4DYKJ+J99r1ORTZQfHnFZoY7dDC8+8a4rikn3ShhpyqKg6X7IrqZPyf0xUYAov8ggIzzNJVeDkoWwjBL+VtFbNoLqZtZgk+jE6kLDdUtVVtDWfCXWCMthEBnTE1FjhwP/vw9yXV+5Q14Ev5shFB6G1lSE7Uy8ISzAcih+0x6OohN5EaPV35/4o8GVsGGvhKmXFxmbLC6DIOzx4iLtERPnVpXdFeSa5oe4kF7EpRZ2WZ64tpqxrR9eIyae2JlUHOjyqkgRii2m09r0msnSiAKcTSbqiRGeXc/kFLxOLowIp1xeQ4JwYlIWhBdzCUPG1Xo9jPL2rIbPhOenZL2gRriiwmzuQMSX5ITi6Fa44Yr9eF4W8cQ3DS3reAWnCEWivdvt/aQnviiAS4Tp9pkZNLo0z4vcS0U+vCMLQv5RxFTkRe7ku93O8UPHN3EmNyAd2UKzFOGJCsf8K6HoVg+EvOcIl+99lvC+gF6nChARfsSEX9EPEjUUQchnnSvhfc9YfATxpUfH6D1VEs7prQ4H0d1a14lQ/OC/LoYUN0vIv8J0PB5/fY3T/TAitGNCI/IoZG9RW5iGH+xWh7yxfofZfIWF4mPsrpjvQilCcedpc2WaA9EdoycmjImhbZzth5z7bW0OZ6NTHqGg4D1enJkOaYpQ5HZYm6vJR1hQkWtTcuva04Ri6PZHo2Y0soZj6URMZT2anS3Ezc27eSfppA4SUuG8NfvgU9OZGClC+s3T3uYc3g0LGlriVOQlK14xSBEa/avbZWgbyJ/ww3MHfwgQkuu9AMmBXQyxEeEoJAyHoZvVcFsMIILwLSIUIQpuFsKjiEr4eTXxO8nUdqJcxz7yvu3YfLw82k70IGltJpPNIFJwPp0dXU4mH9Ebh7YjGiQ9OU4YPYGMPyaTdspulLYcZ0CNbfgstZ2oOqJHr815HL5LvD480Car82Qyu907J+ZOqXOGol4a/Rl2gJtiSvnEdbPMEk8QFidd/xJrjY+PPuZ6z488Pvqo+iLZULZu59zDkiWUXI+pndDTiLddX3YrK0Ao67W6SRSCX25PE9s9xoQFAhNpI/S73R5d5AWOjQJjwp5KSPefFspYXqTI2AU3JpTdxFtDuVs9xoSNzxp1xHy5mx/fCaVOVbWTezz/O2FubKk6ycOFJw+EUt+/mkl3AREiEf/qKOzB7fuRUH7tRI0kXIhAhI12neZEiSSMBxKEDeclENcJy4MkYWP5AogpN74UIVdPaz5n0PeU7UiasDEBbsWukbBV2volQ9jw3eIhpXUT1s26SGUJxQmL+uVDGgg1vT3gQwQRNhqWPe2bwpilJsKLanpz+LovmLAhQvqdHeetJmLbMzT+IEr4MvJLWH/5Jay//BLWX/4HS1RbKpNyhEsAAAAASUVORK5CYII=' }} />
            </Left>
            <Body style ={{justifyContent: 'center'}}>
                <Text>Ví MoMo</Text>
                <Text></Text>
            </Body>
            <Right>
                <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}/>
            </Right>
        </ListItem> 
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: 'https://chanhtuoi.vn1.vdrive.vn/uploads/2020/10/zalo-pay.jpg' }} />
            </Left>
            <Body style ={{justifyContent: 'center'}}>
                <Text>ZaloPay</Text>
                <Text></Text>
            </Body>
            <Right>
                <RadioButton value="third" status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('third')}/>
            </Right>
        </ListItem> 
    </List>
    <View style ={{
        paddingLeft:15,
        paddingRight:10,
        flexDirection: 'row',
        backgroundColor: '#DDDDDD'}}><Text style ={{fontSize: 13, 
            fontWeight: '700'}}>(*) Bằng việc click vào THANH TOÁN, bạn xác nhận đã đọc và đồng ý các điều khoản giao dịch trực tuyến của DUT Cinema</Text>
    </View>
    </ScrollView>
    
    <View style ={{
        flexDirection: 'row',
        position: 'absolute', left: 0, right: 0, bottom: 0,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:30,
        backgroundColor: 'white'}}>
            <Text style ={{flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 20,
                paddingTop: 15,
                fontSize: 15, 
                fontWeight: 'bold'}}>Tổng cộng: {selectedTicket.length*50000+" đ"}</Text>
            <Button style ={{flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                    <Text style={{fontSize: 15, 
                fontWeight: '500'}}>Thanh toán</Text>
            </Button>
    </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop:0,
      backgroundColor:'white'
    },
    text: {
      fontSize: 15, 
      fontWeight: '500' 
    }
  });