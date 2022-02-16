import java.util.*;
import java.io.*;

public class Main{
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];

        for(int i = 0;i<n;i++){
            arr[i]=scn.nextInt();
        }


        HashMap<Integer,Boolean> hm = new HashMap<>();
        for(int ele:arr){
            hm.put(ele,true);
        }


        for(int ele:arr){
            if(hm.containsKey(ele-1))
            {
                hm.put(ele,false);
            }
        }

        int maxlen = 0;
        int maxStpt = 0;

        for(int ele:arr){
            if(hm.get(ele)==true){
                int templen = 1;
                int tempStpt = ele;

                while(hm.containsKey(tempStpt + templen)){
                    templen++;
                }
                if(templen >maxlen){
                    maxlen = templen;
                    maxStpt = tempStpt;
                }
            }
        }

        for(int i  = maxStpt;i<maxStpt + maxlen ;i++){
            System.out.println(i);
        }
    }
}