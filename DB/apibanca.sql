-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2022 at 01:11 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apibanca`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `idcustomer` int(11) DEFAULT NULL,
  `idproduct` int(11) NOT NULL,
  `currency` varchar(5) DEFAULT NULL,
  `openingdate` datetime DEFAULT NULL,
  `numberaccount` varchar(18) DEFAULT NULL,
  `cci` varchar(18) DEFAULT NULL,
  `balance` decimal(8,2) DEFAULT NULL,
  `accounttype` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `idcustomer`, `idproduct`, `currency`, `openingdate`, `numberaccount`, `cci`, `balance`, `accounttype`) VALUES
(32, 1, 1, 'PEN', '2022-05-01 13:46:21', '313515855023947963', '975317473372595261', '1300.00', 'savings'),
(33, 12, 2, 'PEN', '2022-05-01 18:01:25', '185034963203623693', '387934777202374948', '960.00', 'current'),
(34, 12, 2, 'USD', '2022-05-01 18:01:40', '634021831548657950', '252857051769244365', '400.00', 'current');

-- --------------------------------------------------------

--
-- Table structure for table `cardcredit`
--

CREATE TABLE `cardcredit` (
  `id` int(11) NOT NULL,
  `idcustomer` int(11) DEFAULT NULL,
  `idproduct` int(11) DEFAULT NULL,
  `currency` varchar(5) DEFAULT NULL,
  `openingdate` datetime DEFAULT NULL,
  `numbercard` varchar(16) DEFAULT NULL,
  `cvc` varchar(3) DEFAULT NULL,
  `creditline` decimal(8,2) DEFAULT NULL,
  `availableline` decimal(8,2) DEFAULT NULL,
  `expirationday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cardcredit`
--

INSERT INTO `cardcredit` (`id`, `idcustomer`, `idproduct`, `currency`, `openingdate`, `numbercard`, `cvc`, `creditline`, `availableline`, `expirationday`) VALUES
(10, 1, 6, 'PEN', '2022-05-01 12:56:05', '1483995148313594', '795', '4000.00', '2000.00', '2027-05-01');

-- --------------------------------------------------------

--
-- Table structure for table `credit`
--

CREATE TABLE `credit` (
  `id` int(11) NOT NULL,
  `idcustomer` int(11) DEFAULT NULL,
  `idproduct` int(11) DEFAULT NULL,
  `currency` varchar(5) DEFAULT NULL,
  `openingdate` datetime DEFAULT NULL,
  `amountborrowed` decimal(8,2) DEFAULT NULL,
  `quotas` int(3) DEFAULT NULL,
  `interest` int(3) DEFAULT NULL,
  `monthlyamount` decimal(8,2) DEFAULT NULL,
  `amountpaid` decimal(8,2) DEFAULT 0.00,
  `quotaspaid` int(3) NOT NULL,
  `numbercredit` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `credit`
--

INSERT INTO `credit` (`id`, `idcustomer`, `idproduct`, `currency`, `openingdate`, `amountborrowed`, `quotas`, `interest`, `monthlyamount`, `amountpaid`, `quotaspaid`, `numbercredit`) VALUES
(7, 1, 4, 'PEN', '2022-05-01 17:34:08', '15000.00', 12, 10, '1375.00', '0.00', 0, '6163509308'),
(8, 7, 4, 'USD', '2022-05-01 18:03:35', '12000.00', 36, 10, '366.67', '0.00', 0, '6532885274');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `first_name` varchar(35) DEFAULT NULL,
  `last_name` varchar(35) DEFAULT ' ',
  `type_doc` varchar(10) DEFAULT NULL,
  `doc` varchar(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `type_user` varchar(20) NOT NULL,
  `password` varchar(10) NOT NULL,
  `type_customer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `first_name`, `last_name`, `type_doc`, `doc`, `address`, `phone`, `type`, `type_user`, `password`, `type_customer`) VALUES
(1, 'Pedro Romel', ' Velasquez Flores', 'dni', '12345678', 'calle los lirios numero 54', '954872123', 'personal', 'customer', '1234', NULL),
(2, 'Pescados Lopez', ' ', 'ruc', '12345678901', 'Av progreso cuadra 5 numero 564', '988442321', 'business', 'customer', '123456', NULL),
(7, 'Pablo', 'Mendezq', 'dni', '88776655', 'asociacion los naranjos', '954872123', 'personal', 'customer', '1234', NULL),
(8, 'Maria', 'Gutierrez', 'dni', '77508030', 'Av progreso 144 mz 5 lt 3', '954872123', 'personal', 'customer', '1234', NULL),
(9, 'Jesus Aquise', ' Perez', 'dni', '87654321', 'calle las flores numero 50', '999888666', 'personal', 'customer', '1234', NULL),
(10, 'Julio Cesar', 'Sanchez', 'dni', '22334455', 'Calle union Miraflores', '952349873', 'personal', 'customer', '1234', NULL),
(11, 'Banca Web del Perú SAC', '', 'ruc', '22334455667', 'Av Lima cantro', '874635232', 'business', 'admin', '1234', NULL),
(12, 'Aditivos y Frenos SRL', '', 'ruc', '12345678909', 'AV Pimentel numero 560', '945623487', 'business', 'customer', '1234', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--

CREATE TABLE `product_detail` (
  `id` int(11) NOT NULL,
  `nameproduct` varchar(50) NOT NULL,
  `description_product` text NOT NULL,
  `category` varchar(50) NOT NULL,
  `logo` varchar(40) NOT NULL,
  `description_detail` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_detail`
--

INSERT INTO `product_detail` (`id`, `nameproduct`, `description_product`, `category`, `logo`, `description_detail`, `img`) VALUES
(1, 'Cuenta de Ahorros', 'Abre tu cuenta de ahorros rápido y fácil solo con tu DNI sin monto mínimo de apertura.', 'account', 'fa-solid fa-piggy-bank', 'Abrela aquí solo con tu DNI sin monto mínimo de apertura.#Te damos hasta 5 movimientos mensuales gratis por ventanilla#Sin costo de mantenimiento al tener un saldo promedio mensual mayor o igual a S/ 1,500 o US$ 500.#Acceso a nuestra aplicación para que puedas hacer depositos pagos y más, sin costo alguno y sin hacer colas.', 'http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2021/11/cuenta-de-ahorr-la-vista.jpg'),
(2, 'Cuenta Corriente', 'Abre tu cuenta corriente rápido y fácil, solo con tu DNI y acceda a esta herramienta financiera que te permite administrar, realizar pagos y recibir tus cobranzas de manera eficiente y segura.', 'account', 'fa-solid fa-money-bill-transfer', 'Poseemos una de las tasas de mantenimiento mas comodas del mercado.#Sin limite de movimientos mensuales#Comprar tanto online como offline.#Recibe tu sueldo y otros ingresos.#Transferir fondos a otras cuentas de Administrar tus entradas y salidas de dinero.#Pagar facturas a tus proveedores o realizar transferencias locales o de otros bancos con abono inmediato, las 24 horas del día, los 365 días del año.#Realizar pagos de servicios de agua, luz, internet, y otras 4,000 instituciones afiliadas a BWP.#Girar cheques, sin necesidad de retirar efectivo.\r\n\r\n', 'https://www.asba-supervision.org/PEF/images/ahorro/cuenta-corriente-vs-caja-de-ahorro.jpg'),
(3, 'Cuenta a Plazo fijo', 'Abre tu cuenta a plazo fijo y disfruta de todas las facilidades y beneficios de nuestra Banca.', 'account', 'fa-solid fa-building-columns', 'Una operacion de depósito o retiro de acuerdo al dia qeu elijas.#Libre de comisión por mantenimiento.#Compra tanto online como offline.#Recibe tu sueldo y otros ingresos.#Transferir fondos a otras cuentas y administra tus entradas y salidas de dinero.', 'https://s3-eu-west-1.amazonaws.com/rankia/images/valoraciones/0017/0890/deposito-plazo-fijo.jpg?1413'),
(4, 'Préstamo Personal', 'Solicita tu nuevo préstamo personal a muy buena tasa de interés.', 'loan', 'fa-solid fa-coins', 'Tasa de 15% de interés sujeto a historial crediticio.#Dinero al instante, solo con DNI y último recibo de luz o agua.#Posibilidad de ampliación de capital o plazo.', 'https://jcmagazine.com/wp-content/uploads/2019/10/prestamo-empresa-780x400.jpg'),
(5, 'Préstamo Empresarial', 'Solicita tu nuevo préstamo empresarial a muy buenas tasa de interés y disfruta de beneficios en nuevos préstamos y tasas más bajas', 'loan', 'fa-solid fa-money-bill', 'Tasa de 18% de interés sujeto a historial crediticio.#Dinero al instante, solo con número RUC.#Posibilidad de ampliación de capital o plazo.', 'https://jcmagazine.com/wp-content/uploads/2019/10/prestamo-empresa-780x400.jpg'),
(6, 'Tarjeta de Crédito', 'Solicita nuestra tarjeta de crédito y haz tus comprar sin preocupaciones.', 'loan', 'fa-solid fa-credit-card', 'Tarjeta de Crédito al instante solo con tu DNI, sujeto a previa evaluación.#Linea de crédito ampliable.#Pagas un día fijo cada mes.#Compras con la tarjeta en muchísimos asociados a la banca', 'https://pbs.twimg.com/profile_images/1417870168626274305/SQh0W_dC_400x400.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `idcustomer` int(11) DEFAULT NULL,
  `idheadline` int(11) DEFAULT 0,
  `idaccount` int(11) DEFAULT 0,
  `idcredit` int(11) DEFAULT 0,
  `idcardcredit` int(11) DEFAULT 0,
  `date` datetime DEFAULT NULL,
  `quota` int(3) DEFAULT 0,
  `operation` varchar(10) DEFAULT NULL,
  `amount` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `idcustomer`, `idheadline`, `idaccount`, `idcredit`, `idcardcredit`, `date`, `quota`, `operation`, `amount`) VALUES
(37, 1, NULL, NULL, 7, NULL, '2022-04-01 17:57:26', NULL, 'deposit', '1375.00'),
(38, 1, NULL, NULL, 7, NULL, '2022-05-01 17:58:46', NULL, 'deposit', '1375.00'),
(39, 1, NULL, NULL, NULL, 10, '2022-05-01 17:59:39', NULL, 'withdrawal', '500.00'),
(40, 1, NULL, 32, NULL, NULL, '2022-05-01 18:00:13', NULL, 'deposit', '1500.00'),
(41, 1, NULL, 32, NULL, NULL, '2022-05-01 18:00:21', NULL, 'withdrawal', '200.00'),
(42, 12, NULL, 33, NULL, NULL, '2022-05-01 18:01:55', NULL, 'deposit', '960.00'),
(43, 12, NULL, 34, NULL, NULL, '2022-05-01 18:02:09', NULL, 'deposit', '400.00'),
(44, 7, NULL, NULL, 8, NULL, '2022-05-01 18:03:56', NULL, 'deposit', '366.67');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accounts_ibfk_1` (`idproduct`);

--
-- Indexes for table `cardcredit`
--
ALTER TABLE `cardcredit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credit`
--
ALTER TABLE `credit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `cardcredit`
--
ALTER TABLE `cardcredit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `credit`
--
ALTER TABLE `credit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`idproduct`) REFERENCES `product_detail` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
