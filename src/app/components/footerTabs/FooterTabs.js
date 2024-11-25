// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Home from "../../pages/home/home";
// import DetalhesLoja from "../../pages/detalhes/detalhes";
// import Pedidos from "../../pages/pedidos/pedidos";
// import DetalhesPedido from "../../pages/pedidos/detalhesPedido";
// import Search from "../../pages/search/search";
// import CartPage from "../../pages/carrinho/CartPage";
// import Perfil from "../../pages/perfil/perfil";
// import Login from "../../pages/login/login";
// import Cadastro from "../../pages/cadastro/cadastro";
//
// const CustomNavigator = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(null);
//     const [currentScreen, setCurrentScreen] = useState("Login");
//     const [screenHistory, setScreenHistory] = useState([]);
//
//     useEffect(() => {
//         const checkAuth = async () => {
//             const token = await AsyncStorage.getItem("@authToken");
//             console.log("Token:", token);
//             setIsAuthenticated(!!token);
//         };
//         checkAuth();
//     }, []);
//
//     // Função para navegação personalizada
//     const navigateTo = (screen) => {
//         setScreenHistory((prev) => [...prev, currentScreen]);
//         setCurrentScreen(screen);
//     };
//
//     // Função para voltar à tela anterior
//     const goBack = () => {
//         setScreenHistory((prev) => {
//             const newHistory = [...prev];
//             const previousScreen = newHistory.pop();
//             setCurrentScreen(previousScreen || "Perfil");
//             return newHistory;
//         });
//     };
//
//     // Função para renderizar as telas com base no estado de navegação
//     const renderScreen = () => {
//         if (!isAuthenticated) {
//             switch (currentScreen) {
//                 case "Cadastro":
//                     return <Cadastro setCurrentScreen={navigateTo} />;
//                 default:
//                     return <Login setCurrentScreen={navigateTo} />;
//             }
//         } else {
//             switch (currentScreen) {
//                 case "Home":
//                     return <Home />;
//                 case "DetalhesLoja":
//                     return <DetalhesLoja />;
//                 case "Search":
//                     return <Search />;
//                 case "Cart":
//                     return <CartPage />;
//                 case "Pedidos":
//                     return <Pedidos />;
//                 case "DetalhesPedido":
//                     return <DetalhesPedido />;
//                 case "Perfil":
//                     return <Perfil />;
//                 default:
//                     return <Home />;
//             }
//         }
//     };
//
//     const renderHeader = () => {
//         return (
//             <View style={styles.header}>
//                 {screenHistory.length > 0 && (
//                     <TouchableOpacity onPress={goBack} style={styles.backButton}>
//                         <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
//                     </TouchableOpacity>
//                 )}
//                 <Text style={styles.headerTitle}>
//                     {currentScreen === "Perfil" && "Meu Perfil"}
//                     {currentScreen === "Home" && "Início"}
//                     {currentScreen === "Search" && "Pesquisar"}
//                     {currentScreen === "Cart" && "Carrinho"}
//                     {currentScreen === "Pedidos" && "Pedidos"}
//                     {currentScreen === "DetalhesLoja" && "Detalhes da Loja"}
//                     {currentScreen === "DetalhesPedido" && "Detalhes do Pedido"}
//                 </Text>
//             </View>
//         );
//     };
//
//     const renderFooter = () => {
//         if (!isAuthenticated) {
//             return null;
//         }
//         return (
//             <View style={styles.footer}>
//                 <TouchableOpacity onPress={() => navigateTo("Home")}>
//                     <MaterialCommunityIcons
//                         name="home"
//                         size={26}
//                         color={currentScreen === "Home" ? "#e91e63" : "#666"}
//                     />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigateTo("Search")}>
//                     <MaterialCommunityIcons
//                         name="magnify"
//                         size={26}
//                         color={currentScreen === "Search" ? "#e91e63" : "#666"}
//                     />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigateTo("Cart")}>
//                     <MaterialCommunityIcons
//                         name="cart"
//                         size={26}
//                         color={currentScreen === "Cart" ? "#e91e63" : "#666"}
//                     />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigateTo("Pedidos")}>
//                     <MaterialCommunityIcons
//                         name="package-variant"
//                         size={26}
//                         color={currentScreen === "Pedidos" ? "#e91e63" : "#666"}
//                     />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigateTo("Perfil")}>
//                     <MaterialCommunityIcons
//                         name="account"
//                         size={26}
//                         color={currentScreen === "Perfil" ? "#e91e63" : "#666"}
//                     />
//                 </TouchableOpacity>
//             </View>
//         );
//     };
//
//     if (isAuthenticated === null) {
//         return <Text style={styles.loadingText}>Carregando...</Text>;
//     }
//
//     return (
//         <View style={{ flex: 1 }}>
//             {renderHeader()}
//             <View style={{ flex: 1 }}>{renderScreen()}</View>
//             {renderFooter()}
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     header: {
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 10,
//         backgroundColor: "#f5f5f5",
//         borderBottomWidth: 1,
//         borderColor: "#ddd",
//     },
//     backButton: {
//         marginRight: 10,
//     },
//     headerTitle: {
//         fontSize: 18,
//         fontWeight: "bold",
//         flex: 1,
//         textAlign: "center",
//     },
//     footer: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         padding: 10,
//         backgroundColor: "#fff",
//         borderTopWidth: 1,
//         borderColor: "#ddd",
//     },
//     loadingText: {
//         flex: 1,
//         textAlign: "center",
//         textAlignVertical: "center",
//         fontSize: 18,
//     },
// });
//
// export default CustomNavigator;