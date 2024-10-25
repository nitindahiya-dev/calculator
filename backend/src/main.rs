use actix_cors::Cors;
use actix_web::{http::header, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use meval::eval_str; // Import meval

#[derive(Deserialize)]
struct Calculator {
    expression: String,
}

async fn evaluate(calculation: web::Json<Calculator>) -> impl Responder {
    // Evaluate the expression and handle any errors
    match eval(&calculation.expression) {
        Ok(result) => HttpResponse::Ok().json(result),
        Err(_) => HttpResponse::BadRequest().body("Invalid expression"),
    }
}

fn eval(expression: &str) -> Result<f64, meval::Error> {
    eval_str(expression) // Use meval's eval_str to evaluate the expression
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allowed_origin("http://localhost:3000") 
                    .allowed_methods(vec!["GET", "POST", "OPTIONS"])
                    .allowed_headers(vec![header::CONTENT_TYPE, header::ACCEPT])
                    .allow_any_header()
                    .supports_credentials()
                    .max_age(3600),
            )
            .route("/evaluate", web::post().to(evaluate))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
