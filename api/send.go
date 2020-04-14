package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
)

type message struct {
	Name      string
	Email     string
	Phone     string
	EventDate string
	Details   string
}

type smtpServer struct {
	host string
	port string
}

func (s *smtpServer) Address() string {
	return s.host + ":" + s.port
}

func Handler(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var m message
	err := decoder.Decode(&m)

	if err != nil {
		log.Printf("message decoding error: %s", err)
		w.Write([]byte("Failed"))
		return
	}

	from := os.Getenv("EMAIL_FROM")
	pass := os.Getenv("EMAIL_PASS")
	to := os.Getenv("EMAIL_TO")

	msg := "From: " + from + "\r\n" +
		"To: " + to + "\r\n" +
		"Reply-To: " + m.Email + "\r\n" +
		"Subject: Website book event submission\r\n" +
		"\r\n" +
		m.Name + " would like to book an event on " + m.EventDate + "\r\n" +
		"Details are listed below\r\n" +
		"Email: " + m.Email + "\r\n" +
		"Phone number: " + m.Phone + "\r\n" +
		"Details: " + m.Details

	err = smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
		from, []string{to}, []byte(msg))

	if err != nil {
		log.Printf("smtp error: %s", err)
		w.Write([]byte("Failed"))
		return
	}

	fmt.Println("Email sent")

	w.Write([]byte("Success"))
}
