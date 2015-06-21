package controllers

import models.{NightClubs, NightClub}
import play.api.data.Form
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import play.api.data.Forms._
import play.api.libs.concurrent.Execution.Implicits.defaultContext


/**
 * Created by henrique on 20/06/15.
 */
object NightClubsController extends Controller{

  implicit val writes = Json.writes[NightClub]
  implicit val reads = Json.reads[NightClub]

  val nightClubForm = Form(
    mapping(
      "email" -> text,
      "cnpj" -> text,
      "password" -> text,
      "clubName" ->  text,
      "telephone" -> optional(text),
      "cep" -> text,
      "city" -> text,
      "state" -> text,
      "address" -> text
    )(NightClub.apply)(NightClub.unapply)
  )


  def list = Action(parse.empty) { implicit request => Ok(Json.toJson(NightClubs.all)) }

  def create = Action(parse.json) { implicit request =>
    nightClubForm.bindFromRequest.fold(
      formWithErrors => BadRequest(formWithErrors.errorsAsJson),
      (model: NightClub) => {
        NightClubs create(model) match {
          case true => Ok
          case _ => BadRequest
        }
      }
    )
  }

  def find(email: String, pass: String) = Action(parse.empty) { implicit request =>
    NightClubs find(email,pass) match {
      case club => Ok(Json.toJson(club))
      case _ => NotFound("There is no driver with the given id")
    }
  }

  def update = Action(parse.json) { implicit request =>
    nightClubForm.bindFromRequest.fold(
      formWithErrors => BadRequest(formWithErrors.errorsAsJson),
      (model: NightClub) => {
        NightClubs update(model) match {
          case 1 => Ok
          case _ => BadRequest
        }
      }
    )
  }

  def delete(email: String) = Action(parse.json) { implicit request =>
    NightClubs delete(email) match {
      case 1 => Ok
      case _ => NotFound("There is no driver with the given id")
    }
  }

}
