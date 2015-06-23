package controllers

import models.{Event, Events}
import play.api.data.Form
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import play.api.data.Forms._
import play.api.libs.concurrent.Execution.Implicits.defaultContext

/**
 * Created by henrique on 23/06/15.
 */
object EventController extends Controller {

  implicit val writes = Json.writes[Event]
  implicit val reads = Json.reads[Event]



  val eventForm = Form(
    mapping(
      "name" -> text,
      "date" -> sqlDate,
      "clientMax" -> number,
      "maleTicket" ->  number,
      "femaleTicket" -> number,
      "description" -> optional(text),
      "style" -> optional(text)
    )(Event.apply)(Event.unapply)
  )

  def list = Action(parse.empty) { implicit request => Ok(Json.toJson(Events.all)) }

  def create = Action(parse.json) { implicit request =>
    eventForm.bindFromRequest.fold(
      formWithErrors => BadRequest(formWithErrors.errorsAsJson),
      (model: Event) => {
        Events create(model) match {
          case true => Ok
          case _ => BadRequest
        }
      }
    )
  }

  def find(name: String) = Action(parse.empty) { implicit request =>
    Events find(name) match {
      case club => Ok(Json.toJson(club))
      case _ => NotFound("There is no event with the given id")
    }
  }

  def update = Action(parse.json) { implicit request =>
    eventForm.bindFromRequest.fold(
      formWithErrors => BadRequest(formWithErrors.errorsAsJson),
      (model: Event) => {
        Events update(model) match {
          case 1 => Ok
          case _ => BadRequest
        }
      }
    )
  }

  def delete(name: String) = Action(parse.json) { implicit request =>
    Events delete(name) match {
      case 1 => Ok
      case _ => NotFound("There is no event with the given id")
    }
  }
}
