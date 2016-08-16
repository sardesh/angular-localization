package com.springrest.controllers;


import io.swagger.annotations.Api;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.support.ServletContextAttributeExporter;

import java.util.HashMap;

/**
 * Created by sardesh on 8/7/2016.
 */

@Api(value = "locale", description = "locale api") // Swagger annotation
@RestController
@RequestMapping("/get-locale")
public class LoadBundleController {

    /**
     *
     * @return
     */
    @RequestMapping(value = "/{language}/{bundle}", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String, String>> loadLocale(

            @PathVariable("language") String language, @PathVariable("bundle") String bundle
    ) {
        HashMap<String, String> bundleResouce = new HashMap();
        if (language.equals("en-US")) {
            bundleResouce.put("username", "Username");
            bundleResouce.put("password", "Password");
        } else if (language.equals("de-DE")) {
            bundleResouce.put("username", "Username J");
            bundleResouce.put("password", "Password J");
        }
        return new ResponseEntity<HashMap<String, String>>(bundleResouce, HttpStatus.OK);
    }
}
