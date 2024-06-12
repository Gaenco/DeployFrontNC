package org.dog.homeguardapi.handler;

import lombok.extern.slf4j.Slf4j;
import org.dog.homeguardapi.domain.dtos.GeneralResponse;
import org.dog.homeguardapi.utils.ErrorsTool;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@ControllerAdvice
@Slf4j
public class GlobalErrorHandler {
    private final ErrorsTool errorsTool;

    public GlobalErrorHandler(ErrorsTool errorsTool) {
        this.errorsTool = errorsTool;
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<GeneralResponse> GeneralHandler(Exception e){
        //log.error("Error: ", e);
        return GeneralResponse.getResponse(
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<GeneralResponse> ResourceNotFoundHandler(NoResourceFoundException e){
        //log.error("Error: ", e);
        return GeneralResponse.getResponse(
                HttpStatus.NOT_FOUND
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<GeneralResponse> BadRequestHandler(MethodArgumentNotValidException ex){
        log.error("Error: ", ex);
        return GeneralResponse.getResponse(
                HttpStatus.BAD_REQUEST,
                errorsTool.mapErrors(ex.getBindingResult().getFieldErrors())
        );
    }
}
