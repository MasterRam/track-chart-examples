import { TrackChart, DisplayType, Node, NodeType } from 'track-chart';

export const GraphModel = {
    StartNode: true,
    EndNode: true,
    CurrentState:"Delivery",
    ChildState:"",
    Nodes: [
        {
            Name: "Registration",
            Title: "Registration",
            Type: NodeType.Start,
            Childeren: [
                {
                    Title: "Collect Borrower Information",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,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",
                    DisplayText: "(a)",
                } as Node,
                {
                    Title: "Validate Information",
                    Name: "Validate Information",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFe0lEQVRYCe2YzWtdVRTFkzTRhDQFbQSVtmqRGmnEvyIpFT8gwVBtasZFcOqg6KDgQNqAQlpExZlWoWodKkGHxalCq9ZBrTUpqIg2baBNjb8dcm73Pu/ed8+5974PX19YK+fsfdZe5+Od995Nenq6P90T6J5A9wS6J3DnnkBv7NbX+YmtKai/Sd1Mb2/vGdqGoa9hzuWNB7A4zXnP0jYM7XwD3KblJhzgJnzmElW27XwD3D7lJnzMTZhyiZa2LMSg6sUYcxusER6qer5oPxZhEG2QU2DMa4PWH4K/ppz9RA/7/sQ3oIYcwkvRxlUV6JVIvypf5yOeHqeJ2+cQWIyBW3hVrTEnEF+a9jkEFmMgC6ySxpzAedPNOoQ5p2lKy0IMqp7UmBNof8K0Q7hFvnmHwGQGeoFV9I05ge9JqrWHwAIM/AWWjY15XFDoJpR+FOYRNdqj3iHJnuuN54ytsR55csyR3R7+PzwK315tfq8/X2IVnXYAdncBUfSJBXiWknCFo95SJd8yPXf8DegeQKn72gHF3RvQAS9iqS10b0Cp4+uA4u4N6IAXsdQW2u5JMGs3PPENMTYBn4V74Ci8Dxqge4bEIk+Uq7TVgwkMqp/BOjLZLvgBvAZDsYLwPbjDulUQYWpQgWWqBZMMw2NwFRbFdQrfhHJ7UueJTmJmEG0QUMAED8PvYVX4DqOHAqbOl2BkkF8Rp8D8CfgrTMMSyQU4Acfg6CYfp52EJ+ESTMMlknvjVpOixsQgRVI4hfFOuAx9XCDxPMz92hYNFK3U0DWQw9lZeIFSaOwIJFcFsRqC30Ifp0kMx85BzVb4OfRxlsRgrF+ip9ggGSjZwfQN6GOeRNQ/SPQyqO2Db0EfR7Uuqu87RRVniPHcBf1P+1PkCm/eTSUe8BOocZ2g2FuBQgM3UZkWw3egxmWCkTKeuhavbVDe/zQJTmhNcD8p3+wEF2YIsRmEK1BjNkMenMbsSS0mnlu3P1cJ4z8LKDLQkxTpY7Yfalwk2FLEy9VQfxj+C+dVbgvxJagx6caDW10t/eDCDCEeJ6HG2xnSHkTmVU3ToZmFa9DhNacjsQA1FtxYcKurpR9cmCHE45t1+7MvTYrkKJSNHUwblxzjs3ANakg8vjn+lB6g/7Xko0iRQVRxihizn6DGo76MwePQQa724RSNu/ZOJ+0Nfk07Lf3HoMYPbiy41dXSDy7MEOIhH0Y0CbZqKdlxKK8iTQKJk5tAdhauQQ2JX/S8RrSA/j96PKhPkUFQUR0RZitQwxyAlDI4DeXVpEmwcROIsl75KanVRNuWB/AjC9PYoxft+ggOQnlVaRJILEwSdCQ2r7zyGGNc43yfG2xhe8Wbe7cXb4T8h+dDOnPwFnSQr0uhi2XsENqPXMJrfe+lPk/QivCcN+nTXpyEbEwOYYbETehDcjNoTvkDKva9z6mxsK6+P9IPq8pW4bEfashjcH92RY88D0xRoD8TpF/zntce6Aeg/zg8oTVBfUwMgorqiDCThf1Fq/FynZKNIcTuEHI3LwXoX4EafxLUPWipqyFFzcBvTDJSM7mXQPMCPOCla0I02+Ay1Ih/ChRn7dDg/pf46w84mT6aePTDr6DG3wSj0WZSQGEzMc9khf8nQG0fbOw/RJig0fiUCYbl8GNIzQg8A32cJTEY49U0LQvbDn+GPn4n8SrMXTiaISjaP2h9XCCxvWkbKjIRCxyHv8A0yNfYCQYm4SPw7k3upt0H5U/rZdo0XCS5t8iaml7DQu+Fi7AqyIfgPU3fSJkJ2fld8HXo/7FEKhhXUR6BA2XW0tJaFv8gfB9eg6GQQ3sX8QN5iy/8FZNnXPU4mxnCcwI+B8fgDng/FFzh12V4Hn4BF/mbYJU2F/8BB6k2CQSaVsMAAAAASUVORK5CYII=",
                    DisplayText: "(b)",
                } as Node
            ],
            Display: DisplayType.Image,
            ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABrklEQVRYCe2XPS8FQRSGZy+r06BWEZ1CoRTRqemEkvKW10/QKvkLRPwCCVH5iEZHRaNBoiAhsZ4j2ZtrMbujmXNkNu+Zmd2Z3X3eM3d29zqXtpSBlIGUgX+dgaIoctMGMXBJTJo1AbzohaJNZOaMAN2rfXZGTJkAuKo7DsybMQHsT3rn4CYxoN4IkD6d0Tmh2gSAdXpmQFutCeCaao+Bw+qMABWiWwbPOk0bQKHStcBD6XvGn9Ier50MBp0TWvUE2KrPRMvXqaBvEIYtTOwSQ7S/SbuBEniBxgUmZqi/yIoBgR6lOMDEBpHT/pQlAwLcR9EhjjExRu2sGRBmiWkKefisWDUAv5PZyPulZTCOYF7OsuymRcOS3oBdJ+YEntpZmoFrgJcAP6HuysoMbEM8VYXnmPoZeARyDfAd6jjief1XHXKivLzigJd3BSJUr5zQIeQxWV4mXg1IiK4YLC+peMDVOwPUVPLVKV+f1UvE3W9A/8CYxbiUnrsD55OOherhd7/Q61qogQb0LdQAAzoXagMD9/yU9C7UGgP6F2qNge7/V9+41JcykDKQMmAzAx+TMM8z4tTkpwAAAABJRU5ErkJggg==",
            DisplayText: "1",
        } as Node,
        {
            Name: "Processing",
            Title: "Processing",
            Type: NodeType.Intermediate,
            Childeren: [
                {
                    Title: "Reviews & create conditions",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Text,
                    ImageURL: "",
                    DisplayText: "(a)"//"Gather Conditions",
                } as Node,
                {
                    Title: "Document Verification",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Text,
                    ImageURL: "",
                    DisplayText: "(b)"//"Verfiy Document and credit worthiness",
                } as Node,
                {
                    Title: "Submit Loan",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACDUlEQVRYCe1YO04DMRDdROQIEPGJEBTcDBAXIVeALjeggRJFihAHoKNDSEGQAiFBAZV5k7CW9+OJJ5B4FtmaF3s9ns+bye4GsiwNpRUwxnSAPvAAaJBbJLEuLheMiAQmVXKHbGRkYDAGOLmEck9cIYEB/O8DV4ArMjKupWfdE+S08FHE3jXVEU6malvcWTizGkN4HpriuHaPFVX2KoyMPe5ZuIF+u64L4fqs0//s3WPecs/m63a+aMh8gDyHxpgKmaYRAY+slkwTidSSaSqRnMwFLQgt+iDge2do9qGF4dNJ9+tiwX1wLm683K7JHXH5ZIlIoRwKLmJ15KbEfVS6Fl9KbrAd3FhjcQShAR4EPZg8AkGCnKYc2kGnZ4fOEaTyRp2p/uYT/rfh6QwQy5QNWcEJ+/ilMxqxSEc08rA5Sb5a1kjjIhHR1pXUEW0dsfnQ43cO3qE/Ajas0ZIWiNEFjoEPgJVKCuzpmfKwYrTkDYQ9AVjJU5C8ELt4+Uxyw1XMYLCJOE+AV5DTlIPkZn/zelue4jXUtYRIqM8o5xKRKGVngqaOMMWJokodiVJ2JmjqCFOcKKrUkShlZ4J6O0I/xgiM7UpVlAvBF9RLxGegdX/Nlxh+Qqv6P9e8fP5NR1wiz77uKN63f3S5RAYZP76ovasE0vkEOBlk5YEEO0AfmADa5QUJngKdMo90raUC3/J0Ult9KAxtAAAAAElFTkSuQmCC",
                    DisplayText: "(c)"//"Verfiy Document and credit worthiness",
                } as Node
            ],
            Display: DisplayType.Text,
            ImageURL: "",
            DisplayText: "2",
        } as Node,
        {
            Name: "Underwriting",
            Title: "Underwriting",
            Type: NodeType.Intermediate,
            Childeren: [
                {
                    Title: "Reviews compilence & fraud",
                    Name:"Reviews compilence",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAACqElEQVRYCe2ZPUscURSGV01QsyHaiKiQYJOIdhYBLbYQQdHCqAm2W6TJDwhpBUurgKVilzQJxEJrC7FZ7AQ/Cj+iRcSgYKFiEifPXTC6G905c3fmOAN3eJ9dd+ece9737peuqZQ73A64HXA74HbgnnbA87w2GIL0PVkIbywhsnAJRgdcjIa3uvJKmO+AcyjWPHe0KNspbxyGq2AJ7tIPTnSVN0WxG7PvwU+7FFQq2rIbhcl2OAM//aGgxm6KUhcGH0AOJPqqZMt+DCkmQCLzGmqwn6TQSYqX8AskGlKwZD+CBLWwBhJ9sp+k1EmKSZBoj6J6JVt2YzCYAfOOxZWvBu2mKHVh/zFsgUQzSrbsx5BiCiQyH6JP7CcpdJKiDy7BT6amR8GS/QgS1MM+SDRlP0mpkxTTINEmRY+UbNmNweAgSPSbom67KcIuBpgPwKdcVwlbCsroq4PvINHHguawb+DAvIh/cm2U46Ip6Ax6Zj3ZsUFZdE81Fn8FF3BTO9xolYai9g1IZOZ0StcNXIeD28Jwd16iUFQ2wiFINBHYpLSB6Rk4g1Ja52RzqTU5/xkkWqWoutRaZZ1j8WWQ6M5QNMfjqWZ2AjM5kOq/UDQ2wiFINJ6K+sBFP0j/6KLUM+9O/55+3PENJFqh6GHUefLrM2gAzkEq84tkK8VvQaJTil7kh2ldMHAMgjxSm9Qfg0QftHIUzMHZMFxAmFpkscqCQZo3GD4CYYU6YS3xB3NkOTExAmGEeheZyaALE6jcUAusURF0bqT1GBoFm0fqiL54/vcAYzahsqk4H4R6DdK39Ph/H202m0CSUAfUxfv7aBPmCsz6hRq7qk3MNaGycNu3oF8SE6LYKIF6Ydu7Pub4MV1cl6jbBKiA5/AsUcadWbcDbgfcDiRiB/4Cv2yYFzGEzsEAAAAASUVORK5CYII=",
                    DisplayText: "(a)"//"Gather Conditions",
                } as Node,
                {
                    Title: "Review documentation & conditions",
                    Name:"documentation-conditions",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAACqUlEQVRYCe2WPWgUQRTHs+tJ1OCZDy0SRBREKxHbNGquslGQQLSwSWOVKqBBsBe1EUEQbCQQ4epowMLCEPArlSlExCKVhYVJ/IjG3Pl7y408hr24e7fZnciE/4+ZeTsz+39vL7vT0eH/fAV8BXwFfAV8BXwFfAV8BbKoQL1eD6DaYGcWexa6B4mEYLQ7DzNhHjfJ8x6lrG/G4zjAnsNwEg6D0SuuvWcwDdUgCJZo3RVm98JDWIN/aYkJ12Cbkxlh7CAsQlrNsKDTqaQwtB3eQqu651pCYzGZ/CB2GypgdJ7OY7C1TuCYM0lhZh5sXRSDBEMwKtOR8VNaWzdlfuHgqgRSYZq/WqYXfQ6kBaOyGGZwCmw9l2tZUGpzkz7Wh6C1xiu5pgNW/w3jCdD6ogeF9SnzDojTBTHFBfmJ0USKnpDEnQar78CW/Azlm3ROXdgyCY0r0xt1b3HxLHS5/oTkOzSH0aT6ysQpGHQ2Mcx1wzSkUY3JVeh2ObEzGHwGvyGpFpi4z9mkxJgYhFF4BEn0RNY5D5mEYHSfzkdopspWS6hMJgFcgm9g604WCbV1UsDRCCZOgNYDTgofdMD0idfpT7JugPYGaB3Sg1b7bSXETY/DVdCaZxCbEHGjWdNR7R7Vb7lrn8PSbrQQs2AoJmaH5Axoxz7ZgdzH/HR64RdorTI4LWZo9UshOvoQ2wUvwdYVWVM4uIp7NUuS17nWD0Z9dCrwGmz9JLC/8GTEAEaOwneIk/7Aium4ORKz/w9l6+LA0Qho8wwT6y4zw+LcN7kzpoZgEZLqMxNHm2znRhiDnXAZZmAZbMkH9QXBMehxw3UKF5geAKMjKZa6OZVMQjCKXtub7TTc7BvkvX+7R58N/XJ2q/F4ehuTVhqtb3wFfAV8BXwFfAX+2wr8Adc9BLE/WwU2AAAAAElFTkSuQmCC",
                    DisplayText: "(b)"//"Verfiy Document and credit worthiness",
                } as Node,
            ],
            Display: DisplayType.Text,
            ImageURL: "",
            DisplayText: "3",
        } as Node,
        {
            Name: "Delivery",
            Title: "Shipping and Delivery",
            Type: NodeType.Intermediate,
            Childeren: [
                {
                    Title: "Prepare loan Package",
                    Name: "Prepare loan Package",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Text,
                    ImageURL: "",
                    DisplayText: "(a)",
                } as Node,
                {
                    Title: "Send The Package to Recepients.",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAC/UlEQVRYCe2ZvWvUcBjHL/UFBxHqVpcODkpFF1dHV8euHV0d+y90sEPa4mF9KVwFjwrCIbpI1UE3b2ihYkGHA0UsOlgLp6d38fNQE0JM0rz9XpCU7zfPk/xenu83SZMfuUaj/qvPQH0GSp0Bz/NewGl4uNREtgzGiI/PJHNw0hZthXRgIIohBx7By9ApNKnJQYhOw1sar8HjJjXmqo3YLPhGp5twKtfkJjojMg/kdnzKAHmIHDKh98CaiCuKdwychScPLKKzA4LKos8ELXhBp+7EWgipEq+ZbAYeSSyouMGhuKegxifmbMFFx3E+EvVBDCnkT+Zeg5d0OVJ1heL0dzm4DFe5an2iEug05BvYIVmBTYz1iJXChCHfwIjkCXThOuY8YmmYNBQWv81OE97B2B6xMGwx5BvYJWlDF2NviLlhmyHfgNyOz9iRh8hDzA3JM0EMTdLzLDwPw/EE+zZgCxFL8B7G9oipcJJaeXeM03YOTsFwnGDfBH5Q9AG8jrFNYiwSDcX25qAlRrtIWYD3MfeLGCC3oWBkJDFk9J8lVmWGIv6CXU1GBxTswIUxNqohTygpGI1V1vV9jFV2hbgSp1AYfYDI/jjHVaHHxPJCXuF/aYe84cgmDw0JD0v02FmH8lB4jJEReYBEQxYID0T+TeQddJf8Bia2ibGQF6uJWyVWTMJBWQK5tLUxsktMhRiSS5jayVDjc+ouwQ5GhsRMsO179ldU34a3MPGemBu2GNpE+Txcw4gscUiLwaQhWbK0ke1iokusBCYMyVegRdS3MCJLF9LqoNPQK2TL06qDkQG5Eqg21Ef1KlzGRGW3FfMlQpWhHhWbMFiSkOsBK4KqMGIi+WXiCtFfLOoxEa5C8bL4zgQuPBOe11iOkKLYYuBVaMu3h/1ziKA8+E1n+VYtv7+au632pcdvEZgFX+g0B0/Hz2LRUUSmYYPGGXjMIsnpUhAbxYAD8ovcxfSRlrYi3scHklk4YanUbLIw8BJOw6PZRtS96jNQn4H/+Qz8AUmaThJ1aGFoAAAAAElFTkSuQmCC",
                    DisplayText: "(b)",
                } as Node,
            ],
            Display: DisplayType.Text,
            ImageURL: "",
            DisplayText: "4",
        } as Node,
        {
            Name: "Delivered",
            Title: "Delivered",
            Type: NodeType.End,
            Childeren: [],
            Display: DisplayType.Image,
            ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRYCe1Yyw3CMAxtK+5IiCNlC1ZgAGZAjIDEEtzbIZiAE0dWQJzgiIRggeIeaqmfpLGo2yAeCsWJHX/eS92KIMAHCPw3AmFb+bfNJmuz6Vj/IH8nCrqdp+mVZOuIrNphlFMKuyJkz/f1ekaydfhYQJHwJIuifTEx/fpcQJ7zMr/YviObUqKL05RYr+8w3UOO9uO6x/KK7wyUs22YoYAGUHpdAgO9wt0QTNyFHLsHh5La80ZHAUfIESg1MzCgBq2j459nQNyFvny3YVy76k4/zwAK4DMxkAAGBgKew4q7EO+sCKbuVDHjqaP9izcYBN+P0NGQNy/7XMAzCMMdZ2oQfCzgTbke6I+tRZwkF5KtQ3wPmJ6g1iiKSh8ZEJWLAkRwKRiDAQVQRS7BgAguBWMwoACqyCUYEMGlYAwGFECFSyAABAQIfADzMTa8a9Kn0wAAAABJRU5ErkJggg==",
            DisplayText: "5",
        } as Node
    ] as Node[],
    Title: "#30012313 - Loan Process",
    ShowTitle: true
} as TrackChart;
