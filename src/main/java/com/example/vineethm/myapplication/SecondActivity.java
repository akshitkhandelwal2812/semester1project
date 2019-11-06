package com.example.vineethm.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class SecondActivity extends AppCompatActivity {
    private EditText destination;
    private Button CHECK;
    private TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second2);
        destination =(EditText)findViewById(R.id.checktext);
        CHECK=(Button)findViewById(R.id.checkbutton);

        CHECK.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(SecondActivity.this,"Welcome to Car Pooling App",Toast.LENGTH_LONG).show();
                Intent intent=new Intent(SecondActivity.this,ThirdActivity.class);
                startActivity(intent);
            }
        });
    }
    private void check(String t)
    {
        if(t.equals("grand venice"))
        {
            Toast.makeText(SecondActivity.this,"We will now match with other users ",Toast.LENGTH_LONG).show();
        }
    }

}