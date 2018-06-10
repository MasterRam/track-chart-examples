import { TrackChart, DisplayType, Node, NodeType } from 'track-chart';

export const DeliveryModel = {
    StartNode: true,
    EndNode: true,
    CurrentState: "Shipped",
    ChildState: "Package arrived",
    Nodes: [
        {
            Name: "Ordered",
            Title: "Delivered 27-Feb-2017",
            Type: NodeType.Start,
            Childeren: [
                {
                    Title: "Package arrived at a courier facility, Hosakote Taluk, Bengaluru, Karnataka, IN",
                    Name: "Arrived Courier",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACi0lEQVRYCe2YwUsWQRjG18+MIDT0kJfy0sFbdJHo5sGbIJSXwENHLx69dAsMIsr8F6JLKH7+AVIHIahEoYMHzS6eKyo9GdX2e4Ol5f1mdmZnV/cT5uN5nJ135n2ed2aWZd0kib+4A3EH4g507Q6kaToCV+Fn6IsB24IQuAR9IZ5tJl+z6RXGSbwKv8KyuG0TRmgaloXUcMWmaY3j0oYh2CVpUAtLDH6EIVjRes4+LocwFAckym730w7AO/ATDMV3W8E9tgFxso01Ee/hZ/JtmYJnKRYX0PRpxROo4QTkCfMtVKfpE5DCx5MkGU+S5AusD/IYPWEeoX8rq5jr61BeH2g6kc3zbjslao0cozapiyE2AY3Qc519o0o9wZ/ITOkCiA3BD9AIPd/ZN6pUD/5CYlqbE5NXjne0VugcZ9+qFD7wm9R72pjYRfgGFkLnOfuFamGDc9oUmQtwHTqhc519p+L/CVtcbsMiPNSGTO6Fy9ALOt/Z91JN0w3myS0g/2m959qER9qMSefgKvSG1nD2PZT/FZ8JMV8WsUmbx2I2nrUMtuBzWApZvnfroW4q7jJ5O1Dwkj+92pDYIiwNrePsezqY7u1hcpdgnzYhtgCDoLWc/RIuz5xiTEDvAQwGEuVQ0qnjdsq7oXUfVkJez+s6wO2pSRideVgZJu3CWKDjk7woGrPwD6yMvK7XdQXHx2JA/gyU1wea6hBNE0/qs8oLzO7C87AW8FXFWKsxKI6yZ9J2C20LaHVLgaF1xAWE7lxdeUUncFiXSQ06P2waRQt4bUtqIP7K5ln0FBol6S0chE1Cvh3d5Cm0byrCegIk7JFwA7bhETxtyC28hukYtRiLZywi7kDcgbgDDe/AXxYYrDCXEITxAAAAAElFTkSuQmCC",
                    DisplayText: "(b)",
                } as Node,
                {
                    Title: "Package has left the courier facility, Hosakote Taluk, Bengaluru, Karnataka, IN",
                    Name: "Left Courier",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRYCe2XP2sUURTFd9xNIhZaGBA0pNHCXitBKyvxD0lEEY0iNnbpFUEhYApN8gkEm0BARYloJaggpImKX0BBdNNEUCwEo+vvTPbtvp19M/NmsrsJMuGceXfuPffeuW8ms7ulUvFX7ECxA8UOFDtQ7MAG7kCtVhuDn2Cv8LFWq410a+SA4ssU3wV7iWoQBLu70VAD1bpROK0mAwVpmjzxLXmSNnNOMdBmvju6tuIOaRdSOE98GzwFf8Pegtd2JzFHsbKZAPscdMLSZPkc/EyxaybXuSLoFFqGUTMKV+Av2AbFRQLLMCtuKdfJrJVi9G3DqBnau9AJxUVn0M95VvltTMl9TvwgXIBxiBtmKi5BfnMhsnPyJ3n7TZ3GijMOTwkMSKgVPoFR5BpGRVRXlO2iYjbRlOE4/AsNFjH6bF0JhwurOLfaQs774UNoMIfReAEYLb4pmApL79SaeHRFPA1tzLZo7EjEPtMi5IR4H5yH6xqG/Mb3R9ku0s4JtANwCRrojukjYk1vvI5Vb6cTa6rmEZ3eXLnvDPkhTMXwxHEwcdeKfB/8AQ2+YQyHWowk6NE7HwpjDiTrG/ssayaYcnFJJh63kncV2ngcam1PjK2hxkNx5IA+1zDk5X7k7EugziNo42jcS8EWydZQFyPFcg+jgqaWbBdNPGklbxCuQIMHlaQEK6b/mXtk6XfZfa3EZuAE7AroccCz8DN0F6BwKCCxcfvlSeEq8ZulUmkvvAxzQzuj5Iz9lZLIrAMlFssS7NZAxe+hLHdhI7T/3R3yfcuZzf6OsQKFQQ7bYTdh99tJox0wGXrLePAlmmOw8c0Wux8eh69gZpirikl09dO37SPoX8BYlGIjzcB1zMBcQHRVDN6AmWDqOJJ8+k2Q9we2IW2gSatxhexROFPnCGvFit/m3BtWnp0zafnT+k3YicZOGugtorIasA7BDzCK9zj21DW6AJ3jSodyREuZtV9A7iJsgQZabvE0Ty7VG+rZfdd0t1lLeMzgV7B9UFVtEfEXKOTpN65Ei1UNNIajCqMYqjc8HQ04zkfr2mFHLOr6imNEehFbLxv1z9NPTw4lQrTUVW0nkU7DNNxxJudw0mhd/Xw+WGse1+Wj8SgTSnxqxWp8BnoTtkk++GiSKzSjPrV8NM2KtsUjUIZeLwU7L69Nr+73o4n++RJf23kHcOWtp1/sN4BoI5pU8J2Eh6HwmsMCv2tWWTuOXvfr+ABFwWIHih0odqArO/AP5xu2HfBRccwAAAAASUVORK5CYII=",
                    DisplayText: "(b)",
                } as Node,

            ],
            Display: DisplayType.Image,
            ImageURL: "data:image/png;base64,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",
            DisplayText: "1",
        } as Node,
        {
            Name: "Shipped",
            Title: "Shipped Package",
            Type: NodeType.Intermediate,
            Childeren: [
                {
                    Name: "Package arrived",
                    Title: "Package arrived Chennai",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADd0lEQVRYCe1XS0wTQRj+ZqkFg1YkAQSKUNGQApEYSQhRabmoMRpPRA968YQmJnoxxgsXD0ZuHjAmHEyIJw9eDFEvFKKiGAwBRHlTaDEisSKPUIWOM61td0pLt5TC1uxm/p3/Nf97N7uAdmkV0CqgVUCrQBwVIMLZh/fPgnoeMJ6JQSLWGCTPddTfad0s45JgiNImRicqeGYaB+Ah3AfHNwXEBEALNsXqukZI4briGIUhCcR4WgXqWgLb3YSk74BuOypI21OpQr/LILBh1V1HarEQ7ozaO5AGitOQ9DfCBc9529IB7lgOzc+OYMyZIWd58WKjC1fO97AmkEuMcZfBmqWTc84VHZSTW4aHC547H3XsheObAQX7fpXQNn05qf3dz/lyUPsIoXck2xdvilTnQ8S76hPoZwlQ/sh76AUxdB+l+gTmFlIxxcaIPQgl9LW+zBd28K76BHiofawLfMfq2jFKigQGRrO88QO07h8S2JIiAdd8mj/gUtqhL/UTfFdFAkW5czyWiGDK+xmUUQhdIEEJw5ru8eedIYldtKxh4w4oPhGru9xvQBUd8AejaCcQ3kTJl0BIlloCIQXZcjLpO6BTWrL9jmmYh0eRMed75bkMe/ClpBiT+XlKTayr92EgA6/eZcExk+rVM2a7car6OyrNsleoVyLeFCVQ2dMH89CIcDJndhYcBkoOobsi8FYTdJQST17k42VnlqA+aNdh0J6OM8dmcPHktCCTE1FHyFv5kODlBkoHh1HgjOxArhsO55UPDV6u1/omG92f98hZAh7aASeT5jMILD42fsJYZELV8Rr2l0fR1dEBx+QE+MV1pjY4SnxsuA0OkexznaNm3+gyvSkGgSV2gEj1TCKUM/NHcAarayzYZTBgN5v/KosV/ivTFdTx85TuE9M7A6qR7I9/Deg4mTKPkW2+JXbg6q3njC10QGetWmC8dAYACeYryT5CdvxZmce12wavjoKb7CguW6Wo9pfdKfPE4g5rPxhRZMcf/aLO9jYsLS1iaXERnTYbZFe3DI8Vjcu+2IFwrilpBKEnuMgxMY6nj8c5KgJBo8iIgaLx2U+J5qrX7hiqKDRK7JfOElaXoKGl7X1zWJkCZrz2oybAY+i1O22HTcZ+Nru5jM5hsMJ+tN9KoDdbbF2PGB3XSrT9uILTDmsV0CqgVeD/rsBfS/gGwPtBXo0AAAAASUVORK5CYII=",
                    DisplayText: "(a)"//"Gather Conditions",
                } as Node,
            ],
            Display: DisplayType.Image,
            ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEsUlEQVRYCe1XW2wUVRj+zu7SbbcXocKS2ovUlLWVtAkkFo1pSKGxWAUTFV/UByPGek2qQiIm9t0++GCiMYAGfDIQbR8kwWKilC7dqiRqJd1eNK3dJWzpBYv24naP/znDTmeG2e62Owtqpj3/zH87//n+y+zOAvafXQG7AnYF7AqkUQGm3Vv7Xt3DDs7fJ105keWLAb/GOH818Eb3KauCO7SBCPyHJJcTZWRx4C7G2AdWBtclQIFLiTK97rTyAGMCVsa+KbHsBG5KmZc5JCMdcDmdyxxprcllbThgbU4+DjW+iL5Lg/g00A5O/8Yz2rqauFGXQJ5ngN8ZzXqspb592szH0g7kuT14s2E/7rjNiwcrH8BTtXvNzlyJzk2Z1kedCwcTbbKsA+tyCvBWY7MELw6L8RhGJsKCTUpnDrswfZlqbfDMzgV27f8b1NSnOcfbjN3YzpQ74GCJXfPcuTjQ8JwKXozNMRqfruHvDJDMRTPwwnPuT2D0F3lu6btdj9wrdEaSVqPSKO+t3ol3HnoJ2WvcRhNE5VubXkZZYbG0icof7v4MXwf9Uk73MnZRgehkscfNYilWM8t13Z7qejy5rQkVGzbhYMPzcLuyrlvogfUU4NDuZhQVeKVOgD/qP4GzQ99L2YrLVJjh2pScnX00RjfMWdIENuQWqjh83k14ZcczcDldyKcBFQnFwYuxOd7bjm+HUhsbNWgKTDgoYZa3de3ZanRP+hB/0vM5GM1/vW+73Lu1pAqvURLr8wpRtq5I6gT4Y4EvcKbfL2WrL+Eg4LuPojrkGF0gTl0yNVUyYQS4j8+fxFf93ap1W+kWFbwYmyPdJzIGXhw6MabAZJzvE7KWFItWY8KLJMSXUmf/OZ1VgD/qP0lj06vTWy3Q7MdDbm47u7smLoh7SgkIR5HE8UAHOoNKJ6wEX1hMX1fikAR0e8mSnTuY7tPIlWCPqVom0UOvBxRvZDJsWeV3Phs1Pc9MyTh7gvStRHKtKAGxQyZBD6zgbxHdoz035RHSbvo38XYCt7ob//kOpP4QX84CH8kGZpQtrGARKJsFNi5Y0oRQvwODvQ5cjSivO2u9HBW1iyiu5MvGV9As60LGfg+BzyFmafFJ2jqZD5TPgvn+WjKsgvuxk8AH9D9Dx0cZxkdd8N0fQ80uKlaCuMlHSFZeD14X67cccPLR6VYgyMobwGu3D5x3IKS8zGnVKk9lVHnBhOiivNgTI5YcG8EQrfd6UVFVTRwwePFnTIxHJI9RGq1VjpIYGyUIkCj+EI1W8d2xuNvvcUbcdR2IMfYCGMLCoNIfa1R285Ya5Hg8knzEq4arxjqolqTM9CVl5oVjovhTSz4hzmLNwjdOupN7W7q+JIOuA9sbH71Gulwi0G9ScVNo6Vxgkc30vH6uQDEkv/ZoXFKJH13AzIG6U6bxdR3QxNWyF+LCQN9PWJibw/z8LAQf19P9B6LVrrTi6zpghoBxtHGGOmG7EongSqRTsHpiaNMrUpfSje9MdtTYcHCgpKJSdGpHAt/WwOmOIwlsSdXpxk+agEAQGg5+U1JR1Ud8EdFGoiiRnzrT0nu64yPi01qZjp8WOHuzXQG7AnYF/t8V+AdS2H1KcesXCgAAAABJRU5ErkJggg==",
            DisplayText: "2",
        } as Node,
        {
            Name: "Shipped To Local",
            Title: "Started Shipping to pondy.",
            Type: NodeType.Intermediate,
            Childeren: [
                {
                    Title: "Package Left Chennai",
                    Name: "Package Left",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACGklEQVRYCe2VuUoDQRjHZ70tLBS08mpsLATBB0hhYyMYRfAJxM7nsBIsfAKLaIJY2Vh4IAgiWGkRFVEsghYqiGBM1t9INkzMJupONgd8w//nHDvzXZNdlZImFZAKSAWkAlIBqYBUQCpgVQHXdafhDsrphYdJWIFuK4eVPEwwTZCC/+iezf2VjCOwLQIZhyA65VBHYMe5g0253qaLqGBtgmPrUFtRxR0wtewXERvaYAt+aslvf1XWiKQZnsHUWCnnbOqEMzCVZhJRtWg4ngBTj0yccrHwfBiewFSKSaCX2vYdiKjCdug4jlu4VDjj+a1SagEy4KmPQYIk2unthaFBiIOuKF3VdIKnof9kUHTdGBjAwDn0QC3k4vQENmGLG3ugLym/BBLsjkI9KEsQxxCDOMmk6Avkl8ArO7qg3pQhoAOIwQbJvNErR/8x4Sekr9BcqsfxNglEdWCNmsAnCbTqBGw/o9pGLWjxnDZqAl78qlETyL+nfglc5NMrHlyzNAtzcANh6Tc/lyUd8xUagT3IwE/NeAd5MAthqZyfD5xOeXEU3QBvdxIm2dALi5AFT/mrY8EcM62oTNvmOI2XUeLbpf+byPYIPF0xiIKu/jW9p31l2TAUjh8Mz8Nv+v6nYpMDDsLzg/E1KKVVm8DNszgIzw/GdYX0Nb8z1hzS66+RGYP1GJtV8WMdqBiQCkgFpAJSAamAVEAqUAcV+AIhHYPWcu5twwAAAABJRU5ErkJggg==",
                    DisplayText: "(a)"//"Gather Conditions",
                } as Node,
                {
                    Title: "Package arrived",
                    Name: "Package arrived pondy.",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADc0lEQVRYCe1X3UtUQRQ/c9cly9pIiQhXdAnqofCjoCXyY1/Lldygx156kKCHyCgIif4ASUIoCCIq60nQpH13k0gU1E19CLPW/bAiXQ31rsvqOp1z86736m507910iTvcM3PmzJw5vzlz5swugFlMD5geMD1gesD0gOkB0wO6PcC0ajZ0edyc8XbUcyBp/YLAWYv3YvcrrYqZ5guZBjLJEfwjHNMDHtWgFBh/6e5uvA8cGAmMUp6OBUpknZFuv8ym2ipPpcRvHmOIt7CsEIpPFIPFKjS7ey4kvdBzW5psoNJ8AnptcXR5dCoKk+8+QTKRBAylW+4uzzW968l627YB2WDs5zJ8GQwAX+OA4fQAw8kFBsq2b4CwLs0sQWgkRCyF8It6b/0B6ughQY9SNnTmQvNAIYVrlbAV61NsdX07tgFCG/4QgfhinNjG+i7PFWK0kqBVIZvz6R6E/GG80AAC423uN+5irevv6AYIrDgrQjQ4hzkK9vPVvIck00LSY4KZAFOCFrV/NJezJGamhfXV1zDVfsd+kHE2kLQkfTWOprE75e759XGpoSwgMTlRMW5BHBsZifEi7B/H1/+8sCZA5R4XPB/zB2eXv7XdPH2uHcfwecSa19AJAoyWHISWS2dRkpvf9YrOFLDAwvBEU6XzmOoOlIdnUhNynXHYTh4ljKoNkCCX6av4cQu83LoDW+CpBZ2Td9UC7P1xA9bJOOT7RbBEV3AqwGqRFRJVBZA4ki/1s1nptZVxA7v7FiB/RFRhtE4ngCjvVAHEqm2qMSMdI7ZUd2DcTlkLQPLGJvBKgLuGRLB+jitFunmjtqQTaGhuVAGgsJEF9jIHOKtrMc9yGOzrg0hoCqjQnJUshBKtQ+sRabQVJh3VCZCAyPLjd8wTf6a2DvbabLDPth+cdS6Qi3KOLNPTKtf5a1ucTeMLfZXsSSfg9byWflKQgOiyy7mEbQES/unY2KOgmMUSfBH1DF8Eo7Y20EloU9WwzPW/7YVYTISYKEK/zweKMqTgjbCGbEknsMU6Z614RDUkj0wFoPNZgFg1MWhVC3T2uDFblnRmR4ORiYpSu4C/lOrSjaP8XkfvwJO0YxqFRm2l3QBhGA1O+8od9nEM+8PYP4S0yjm8F4Df6PANPsZ+1r7ttJU10OZCpgdMD5geMD1gesD0wP/ggV84HEt9VYnpuAAAAABJRU5ErkJggg==",
                    DisplayText: "(b)"//"Verfiy Document and credit worthiness",
                } as Node,
                {
                    Title: "Out for delivery",
                    Name: "Delivery",
                    Type: NodeType.Child,
                    Childeren: [],
                    Display: DisplayType.Image,
                    ImageURL: "data:image/png;base64,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",
                    DisplayText: "(b)"//"Verfiy Document and credit worthiness",
                } as Node
            ],
            Display: DisplayType.Image,
            ImageURL: "data:image/png;base64,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",
            DisplayText: "3",
        } as Node,
        {
            Name: "Delivered",
            Title: "Package was handed directly to customer.",
            Type: NodeType.End,
            Childeren: [],
            Display: DisplayType.Image,
            ImageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC70lEQVRYCe1VTWgTQRT+JrtN2rjb1EaiSW0Kgoq2udmCJ2s91JNYKEI9erCCIAgeFQr+XEWh4EG89uRFESyCNhcPVk+ihyIqtrW2amtNbZqk2XFmk7S77abZbQdCYJZ9O++9eT/zvjczC8hHIiARkAhIBCQCEoHqIUC8pm698+Wskc3fQDbXblBaR0B9RFHgq2+Aoukg/jqvIZ3sfzHlD0roC4OQh98u6R+Z7Pi6LqB9eE5b/Pn3dT6dToBSx2AgBIquQ93dzFjXoZ1jrWvzoBhuVrVr7wZJbl1d4Fxl4YtfmFn4SrOZMGGLjEd1tO4LIdhQQPtfOofJmUVMzaZgGBS+hiD8kQhYFYUsYr6jwT3amQ/nSNYaTrUK5fg/s4tv+OLrAyo6O6Jo1AI20yY9gCY9gngshPH3M8ikl7E6Pw81HLbZ7VDoXf69dJfFuMxo7fWtcWWY/bcm+4yV9BGfj6CrI7Zp8Va3ECusKxEFt11dSoFmN3Xcau6dpxiMP0gdtTpWLIDmMkNgTxtDV9f8jNv65d2JRxvBzwkvYmtrz7OKSnHR6uWigNxh7tAS0fngimJFW7qSttn3TD9H8kkHxp4m0P191DbnVmD3xymrbcUzQPN5P3fQgoUDy/lKpO8yXUBX7Vvo5turwOwUO9zAo2R/pTC2+QMDqZLcVmL4WLEDoIZ5UylKZVMekJNatKXsRuJyiQgMdiOau6uk2s5o2wqq1wivHicxNz3n6La3NYLuvhOOc1x5/dg93B6/Asqu4gud9zEW6+VqR/o8Ylunow1Xei6AUoP7ORL/BzhOFJUvW07jeMtEURIzeC6gp/+kmMyCorjf2IISig7juQOiF1AunuXWKWdi6mu+A7IAs49V/MgOVBF8M7XsgAlDFT813wHXP7JnyU9VxLl86prvAClfm7gZOnKIboxGBiaE5K75Drg+AxsR9CQfPO9gPgQRT813QBYgYhvsJIbswE7QE+ErOyACRRlDIiAR2D4C/wGRN7ASzHBCnAAAAABJRU5ErkJggg==",
            DisplayText: "5",
        } as Node
    ] as Node[],
    Title: "#30012313 - Loan Process",
    ShowTitle: true
} as TrackChart;
