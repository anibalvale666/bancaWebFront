package com.nttdata.productcustomer.utils;

import java.nio.charset.Charset;
import java.util.Random;

public class GeneratedCode {
    public String getRandomString(int i)
    {
        String theAlphaNumericS;
        StringBuilder builder;

        theAlphaNumericS = "0123456789";

        //Cree StringBuffer
        builder = new StringBuilder(i);

        for (int m = 0; m < i; m++) {

            // generar numérico
            int myindex
                    = (int)(theAlphaNumericS.length()
                    * Math.random());

            // agregar los caracteres
            builder.append(theAlphaNumericS
                    .charAt(myindex));
        }

        return builder.toString();
    }

    public String Generated(int i)
    {
        return   getRandomString(i);
    }
}
