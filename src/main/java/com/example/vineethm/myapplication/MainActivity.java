package com.example.vineethm.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {
    private EditText Name;
    private EditText Password;
    private TextView Info;
    private Button Login;
    private int counter=5;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Name =(EditText)findViewById(R.id.etName);
        Password=(EditText)findViewById(R.id.etPassword);
        Info=(TextView)findViewById(R.id.tvInfo);
        Login=(Button)findViewById(R.id.btnLogin);
        Info.setText("No of Attempts remaining :5");

       Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Toast.makeText(MainActivity.this,"welcome "+Name.getText(),Toast.LENGTH_SHORT).show();
                Intent intent=new Intent(MainActivity.this,SecondActivity.class);
                startActivity(intent);
                Validate((Name.getText().toString()),(Password.getText().toString()));

            }
        });

    }
    public void Validate(String username,String password)
    {
        if((username.equals("akshit")) && (password.equals("1234")))
        {
            Intent intent=new Intent(MainActivity.this,SecondActivity.class);
            startActivity(intent);
        }
        else
        {
            counter--;
            Info.setText("No of Attempts remaining :"+String.valueOf(counter));
            if(counter==0)
                Login.setEnabled(false);
        }
    }
}
